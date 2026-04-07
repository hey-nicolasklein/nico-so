interface ITrack {
    artists: {
        name: string;
        url: string;
    }[];
    url: string;
    cover: string;
    title: string;
    explicit: boolean;
    duration: string;
}

export default ITrack;
