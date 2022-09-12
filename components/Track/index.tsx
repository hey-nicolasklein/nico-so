import Image from "next/image";

const Track = (props: { track: any }) => {
    const handleClick = (event: { detail: number }) => {
        console.log("blick");
        if (event.detail === 2) window.open(props.track.url, "_blank");
    };

    return (
        <div className="" onClick={handleClick}>
            <a
                href={props.track.url}
                target="_blank"
                className="block rounded-lg transition hover:-translate-y-0.5 hover:shadow-lg"
            >
                <Image
                    className="rounded-xl"
                    src={props.track.cover}
                    width={200}
                    height={200}
                />
            </a>
        </div>
    );
};

export default Track;
