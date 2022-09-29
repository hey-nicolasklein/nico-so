interface ITrack {
    artists: {
        name: string;
        url: string;
    };
    url: string;
    cover: string;
    title: string;
    explicit: string;
    duration: string;
}

export default ITrack;
