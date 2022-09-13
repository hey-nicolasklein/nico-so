import Image from "next/image";
import { BsPlay, BsTwitter } from "react-icons/bs";

const Track = (props: { track: any }) => {
    const handleClick = (event: { detail: number }) => {
        console.log("blick");
        if (event.detail === 2) window.open(props.track.url, "_blank");
    };

    return (
        <div className="group relative flex-col" onClick={handleClick}>
            <div className="relative">
                <div className="z-30 hover:scale-110 absolute translate-y-[-50%] translate-x-[-50%] top-1/2 left-1/2 transtion duration-300	ease-in-out opacity-0 group-hover:opacity-100">
                    <a
                        href={props.track.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition"
                    >
                        <BsPlay size={50} className="opacity-90 text-white" />
                    </a>
                </div>
                <div
                    className="z-20 absolute translate-y-[-50%] translate-x-[-50%] 
                top-1/2 left-1/2 w-[70px] h-[70px] transition duration-300 backdrop-blur opacity-0 
                group-hover:opacity-100 rounded-full"
                ></div>
                <a
                    href={props.track.url}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-lg transition group-hover:drop-shadow-3xl duration-500"
                >
                    <Image
                        className="transition group-hover:brightness-100 ease-in-out rounded-lg"
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
                    className="text-lg font-bold pt-2 max-w-[190px] truncate block"
                >
                    {props.track.title}
                </a>
                <a
                    href={props.track.artists[0].url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-base font-thin max-w-[190px] truncate block"
                >
                    {props.track.artists[0].name}
                </a>
            </div>
        </div>
    );
};

export default Track;
