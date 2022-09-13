import IArtist from "./IArtist";

interface ITrack {
    artists: IArtist[];
    url: string;
    cover: string;
    title: string;
    explicit: string;
    duration: string;
}

export default ITrack;
