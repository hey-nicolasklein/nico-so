import ITrack from "../interfaces/ITrack";

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

const REFRESH_ENDPOINT = "https://accounts.spotify.com/api/token";
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;
const RECENT_TRACKS_ENTPOINT =
    "https://api.spotify.com/v1/me/player/recently-played";

const idAndSecretBase64 = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString(
    "base64"
);

/**
 * The return type of the {@constant REFRESH_ENDPOINT} route.
 */
interface RefreshResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
}

interface SpotifyArtist {
    name: string;
    external_urls: { spotify: string };
}

interface SpotifyTrack {
    artists: SpotifyArtist[];
    external_urls: { spotify: string };
    album: { images: { url: string }[] };
    name: string;
    explicit: boolean;
    duration_ms: number;
}

interface SpotifyTopTracksResponse {
    items: SpotifyTrack[];
}

interface SpotifyRecentTrackItem {
    track: SpotifyTrack;
}

interface SpotifyRecentTracksResponse {
    items: SpotifyRecentTrackItem[];
}

let accessTokenCache: { token: string; expiresAt: number } | null = null;
let topTracksCache: { tracks: ITrack[]; expiresAt: number } | null = null;
let recentTracksCache: { tracks: ITrack[]; expiresAt: number } | null = null;

const TOKEN_REFRESH_BUFFER_MS = 60_000;
const TRACKS_CACHE_MS = 5 * 60_000;
const MAX_RETRIES = 2;

/**
 * Converts the current millies to the format hh:mm
 */
const getDuration = (ms: number): string => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds.length === 1 ? "0" : ""}${seconds}`;
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const getRetryDelay = (attempt: number, retryAfterHeader: string | null) => {
    const retryAfterSeconds = Number(retryAfterHeader);
    if (!Number.isNaN(retryAfterSeconds) && retryAfterSeconds > 0) {
        return retryAfterSeconds * 1000;
    }
    return Math.min(1000 * 2 ** attempt, 10_000);
};

const fetchWithRetry = async (
    input: string,
    init?: RequestInit
): Promise<Response> => {
    for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
        const response = await fetch(input, init);
        const isRetryable = response.status === 429 || response.status >= 500;

        if (!isRetryable || attempt === MAX_RETRIES) {
            return response;
        }

        await sleep(getRetryDelay(attempt, response.headers.get("retry-after")));
    }

    throw new Error("Unexpected retry flow while calling Spotify API");
};

const assertEnvVars = () => {
    if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
        throw new Error(
            "Missing Spotify env vars. Expected SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, and SPOTIFY_REFRESH_TOKEN."
        );
    }
};

const mapSpotifyTrack = (track: SpotifyTrack): ITrack => ({
    artists: track.artists.map((artist) => ({
        name: artist.name,
        url: artist.external_urls.spotify,
    })),
    url: track.external_urls.spotify,
    cover: track.album.images[0]?.url ?? "",
    title: track.name,
    explicit: track.explicit,
    duration: getDuration(track.duration_ms),
});

/**
 * Transacts the {@constant REFRESH_TOKEN} for an access-token
 * as defined in the spotify developer docs.
 */
const getAccessToken = async (): Promise<RefreshResponse> => {
    assertEnvVars();

    if (accessTokenCache && Date.now() < accessTokenCache.expiresAt) {
        return {
            access_token: accessTokenCache.token,
            token_type: "Bearer",
            expires_in: Math.max(
                1,
                Math.floor((accessTokenCache.expiresAt - Date.now()) / 1000)
            ),
            scope: "",
        };
    }

    const response: Response = await fetchWithRetry(REFRESH_ENDPOINT, {
        method: "POST",
        headers: {
            Authorization: `Basic ${idAndSecretBase64}`,
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            grant_type: "refresh_token",
            refresh_token: REFRESH_TOKEN,
        }).toString(),
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
            `Spotify token refresh failed (${response.status}): ${errorText}`
        );
    }

    const body: RefreshResponse = await response.json();
    accessTokenCache = {
        token: body.access_token,
        expiresAt:
            Date.now() +
            Math.max(0, body.expires_in * 1000 - TOKEN_REFRESH_BUFFER_MS),
    };

    return body;
};

/**
 * Fetches the most recently listened songs by the user, which is
 * identified through {@constant REFRESH_TOKEN}.
 *
 * Limits the results to 10 by default.
 */
export const getRecentTracks = async (): Promise<ITrack[]> => {
    if (recentTracksCache && Date.now() < recentTracksCache.expiresAt) {
        return recentTracksCache.tracks;
    }

    const { access_token } = await getAccessToken();

    const response = await fetchWithRetry(
        `${RECENT_TRACKS_ENTPOINT}?${new URLSearchParams({ limit: "10" })}`,
        { headers: { Authorization: `Bearer ${access_token}` } }
    );

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
            `Spotify recent tracks request failed (${response.status}): ${errorText}`
        );
    }

    const { items }: SpotifyRecentTracksResponse = await response.json();

    const tracks: ITrack[] = items.map((item) => mapSpotifyTrack(item.track));
    recentTracksCache = { tracks, expiresAt: Date.now() + TRACKS_CACHE_MS };

    return tracks;
};

/**
 * Fetches the current top-tracks of the user, which is
 * identified through {@constant REFRESH_TOKEN}.
 *
 * Uses the {medium_term} timerange by default.
 * Limits the results to 10 by default.
 */
export const getTopTracks = async (): Promise<ITrack[]> => {
    if (topTracksCache && Date.now() < topTracksCache.expiresAt) {
        return topTracksCache.tracks;
    }

    const { access_token } = await getAccessToken();

    const response = await fetchWithRetry(
        `${TOP_TRACKS_ENDPOINT}?${new URLSearchParams({
            time_range: "medium_term",
            limit: "10",
        })}`,
        {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        }
    );

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
            `Spotify top tracks request failed (${response.status}): ${errorText}`
        );
    }

    const { items }: SpotifyTopTracksResponse = await response.json();
    const tracks = items.slice(0, 10).map(mapSpotifyTrack);
    topTracksCache = { tracks, expiresAt: Date.now() + TRACKS_CACHE_MS };

    return tracks;
};
