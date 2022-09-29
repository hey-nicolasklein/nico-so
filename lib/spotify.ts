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
    expires_in: string;
    scope: string;
}

/**
 * Converts the current millies to the format hh:mm
 */
const getDuration = (ms: number): string => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds.length === 1 ? "0" : ""}${seconds}`;
};

/**
 * Transacts the {@constant REFRESH_TOKEN} for an access-token
 * as defined in the spotify developer docs.
 */
const getAccessToken = async (): Promise<RefreshResponse> => {
    const response: Response = await fetch(REFRESH_ENDPOINT, {
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

    let body: RefreshResponse = await response.json();

    return body;
};

/**
 * Fetches the most recently listened songs by the user, which is
 * identified through {@constant REFRESH_TOKEN}.
 *
 * Limits the results to 10 by default.
 */
export const getRecentTracks = async (): Promise<ITrack[]> => {
    const { access_token } = await getAccessToken();

    const { items } = await fetch(
        `${RECENT_TRACKS_ENTPOINT}?${new URLSearchParams({ limit: "10" })}`,
        { headers: { Authorization: `Bearer ${access_token}` } }
    ).then((res) => res.json());

    const tracks: ITrack[] = items.map((track: any) => {
        let song = track.track;

        return {
            artists: song.artists.map(
                (artist: {
                    name: string;
                    external_urls: { spotify: string };
                }) => ({
                    name: artist.name,
                    url: artist.external_urls.spotify,
                })
            ),
            url: song.external_urls.spotify,
            cover: song.album.images[0].url,
            title: song.name,
            explicit: song.explicit,
            duration: getDuration(song.duration_ms),
        };
    });

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
    const { access_token } = await getAccessToken();

    const { items } = await fetch(
        `${TOP_TRACKS_ENDPOINT}?${new URLSearchParams({
            time_range: "medium_term",
            limit: "10",
        })}`,
        {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        }
    ).then((res) => res.json());

    const tracks = items.slice(0, 10).map((track: any) => ({
        artists: track.artists.map(
            (artist: { name: string; external_urls: { spotify: string } }) => ({
                name: artist.name,
                url: artist.external_urls.spotify,
            })
        ),
        url: track.external_urls.spotify,
        cover: track.album.images[0].url,
        title: track.name,
        explicit: track.explicit,
        duration: getDuration(track.duration_ms),
    }));

    return tracks;
};
