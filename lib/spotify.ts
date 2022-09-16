import ITrack from "../interfaces/ITrack";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const REFRESH_ENDPOINT = "https://accounts.spotify.com/api/token";
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;
const RECENT_TRACKS_ENTPOINT =
    "https://api.spotify.com/v1/me/player/recently-played";

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

const getDuration = (ms: number): string => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds.length === 1 ? "0" : ""}${seconds}`;
};

const getAccessToken = async () => {
    const response = await fetch(REFRESH_ENDPOINT, {
        method: "POST",
        headers: {
            Authorization: `Basic ${basic}`,
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            grant_type: "refresh_token",
            refresh_token,
        }).toString(),
    });

    return response.json();
};

export const getRecentTracks = async () => {
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

export const getTopTracks = async () => {
    const { access_token } = await getAccessToken();

    const { items } = await fetch(
        `${TOP_TRACKS_ENDPOINT}?${new URLSearchParams({
            time_range: "short_term",
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
