import Image from "next/image";
import { BsPlay, BsTwitter } from "react-icons/bs";
import ITrack from "../../interfaces/ITrack";
import Zoomed from "../Zoomed";

const TrackSmall = (props: { track: ITrack }) => {
    return (
        <div className="group flex gap-2 rounded-xl transition ease-in-out hover:scale-110 hover:bg-white">
            <Image
                className="rounded-xl object-cover transition ease-in-out group-hover:rounded-none group-hover:rounded-l-lg group-hover:brightness-100"
                alt={props.track.title}
                src={props.track.cover}
                width={64}
                height={64}
                quality={80}
            />
            <div className="flex flex-col justify-center">
                <a
                    href={props.track.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mr-2 max-w-[250px] truncate text-lg font-bold group-hover:text-black"
                >
                    {props.track.title}
                </a>
                <a
                    href={props.track.url}
                    target="_blank"
                    rel="noreferrer"
                    className="max-w-[250px] truncate text-lg font-thin group-hover:text-black"
                >
                    {props.track.artists[0].name}
                </a>
            </div>
        </div>
    );
};

export default TrackSmall;
