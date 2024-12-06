import React, { FunctionComponent, useState } from "react";
import { DateTime, Interval } from "luxon";
import { GetStaticProps } from "next";
import Image from "next/image";
import memoji from "../public/assets/memoji.png";
import profilePhoto from "../../public/assets/spotify_profile_photo.jpeg";
import spotifyQrCode from "../../public/assets/spotify_qr_colored.png";
import { FiGithub, FiMusic, FiPlay, FiSave } from "react-icons/fi";
import IconButton from "../IconButton";
import { BiPlay } from "react-icons/bi";

interface Props {
    expanded: boolean;
    className?: string;
}

const SpotifyProfileCard: FunctionComponent<Props> = (props: Props) => {
    if (props.expanded) {
        return (
            <div
                className={
                    "mb-8 mt-4 w-max flex-col items-center gap-4 rounded-xl bg-emerald-200 bg-opacity-20 bg-clip-padding pb-2 pl-2 pr-2 pt-2 backdrop-blur-2xl backdrop-filter" +
                    props.className
                }
            >
                <div className=" relative h-[200px] w-[200px]">
                    <Image
                        src={spotifyQrCode}
                        alt="spotify qr image"
                        fill={true}
                        className="rounded-xl p-1"
                    />
                </div>
                <div className="mt-2 flex justify-between gap-2">
                    <h2 className="text-6xl font-bold ">nico</h2>
                    <div className="ml-2 mr-2">
                        <IconButton icon={<BiPlay size={45} />} />
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="mb-8 mt-4 flex w-max items-center gap-4 rounded-xl bg-emerald-200 bg-opacity-20 bg-clip-padding pb-2 pl-2 pr-2 pt-2 backdrop-blur-2xl backdrop-filter">
            <div className="group/qrCode flex items-center gap-4">
                <div className=" relative h-[90px] w-[90px]">
                    <Image
                        src={profilePhoto}
                        alt="spotify profile image"
                        fill={true}
                        className="rounded-xl p-1"
                    />
                    <Image
                        src={spotifyQrCode}
                        alt="spotify qr image"
                        fill={true}
                        className="rounded-xl p-1 opacity-0 transition-all duration-300 sm:group-hover/qrCode:opacity-100"
                    />
                </div>
                <h2 className="text-6xl font-bold ">nico</h2>
            </div>
            <div className="ml-2 mr-2">
                <IconButton icon={<BiPlay size={45} />} />
            </div>
        </div>
    );
};

SpotifyProfileCard.defaultProps = {
    className: "",
};

export default SpotifyProfileCard;
