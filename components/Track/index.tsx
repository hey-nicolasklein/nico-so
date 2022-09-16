import Image from "next/image";
import { BsPlay, BsTwitter } from "react-icons/bs";
import ITrack from "../../interfaces/ITrack";

const Track = (props: { track: ITrack }) => {
    const handleClick = (event: { detail: number }) => {
        console.log("blick");
        if (event.detail === 2) window.open(props.track.url, "_blank");
    };

    return (
        <div className="group relative flex-col" onClick={handleClick}>
            <div className="relative">
                <div className="transtion absolute top-1/2 left-1/2 z-30 translate-y-[-50%] translate-x-[-50%] opacity-0 duration-300	ease-in-out hover:scale-110 group-hover:opacity-100">
                    <a
                        href={props.track.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition"
                    >
                        <BsPlay size={50} className="text-white opacity-90" />
                    </a>
                </div>
                <div
                    className="absolute top-1/2 left-1/2 z-20 
                h-[70px] w-[70px] translate-y-[-50%] translate-x-[-50%] rounded-full opacity-0 backdrop-blur transition 
                duration-300 group-hover:opacity-100"
                ></div>
                <a
                    href={props.track.url}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-lg transition duration-500 group-hover:drop-shadow-3xl"
                >
                    <Image
                        className="rounded-lg transition ease-in-out group-hover:brightness-100"
                        alt={props.track.title}
                        src={props.track.cover}
                        width={200}
                        height={200}
                    />
                </a>
            </div>
            <div className="">
                <a
                    href={props.track.url}
                    target="_blank"
                    rel="noreferrer"
                    className="block max-w-[190px] truncate pt-2 text-lg font-bold"
                >
                    {props.track.title}
                </a>
                <a
                    href={props.track.artists[0].url}
                    target="_blank"
                    rel="noreferrer"
                    className="block max-w-[190px] truncate text-base font-thin"
                >
                    {props.track.artists[0].name}
                </a>
            </div>
        </div>
    );
};

export default Track;
