import React, { useState } from "react";
import { DateTime, Interval } from "luxon";
import { getRecentTracks, getTopTracks } from "../lib/spotify";
import { GetStaticProps } from "next";
import ITrack from "../interfaces/ITrack";
import Head from "next/head";
import Layout from "../components/Layout";
import CustomButton from "../components/SayHello/CustomButton";
import Zoomed from "../components/Zoomed";
import Wobbly from "../components/Wobbly";
import Image from "next/image";
import memoji from "../public/assets/memoji.png";
import profilePhoto from "../public/assets/spotify_profile_photo.jpeg";
import spotifyQrCode from "../public/assets/spotify_qr_colored.png";
import TrackSmall from "../components/TrackSmall";
import SecondaryIconTextButton from "../components/SecondaryTextIconButton";
import { FiGithub, FiMusic, FiPlay, FiSave } from "react-icons/fi";
import IconButton from "../components/IconButton";
import { BiPlay } from "react-icons/bi";
import SpotifyProfileCard from "../components/SpotifyProfileCard";
import RowMusic from "../components/RowMusic";

export const getStaticProps: GetStaticProps = async () => {
    const recentTracks = await getRecentTracks();
    const topTracks = await getTopTracks();

    console.log(recentTracks);

    return {
        props: {
            recent_tracks: recentTracks,
            top_tracks: topTracks,
            refreshed: DateTime.now().valueOf(),
            year: DateTime.now().year,
        },
        revalidate: 600,
    };
};

interface Props {
    top_tracks: ITrack[];
    recent_tracks: ITrack[];
    refreshed: number;
    year: number;
}

const Music = (props: Props) => {
    const [codeVisible, setCodeVisible] = useState(false);

    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title id="title">music is 💚</title>
                <meta
                    name="Description"
                    content="👋 Hey this is what I listen to."
                />
            </Head>
            <Layout>
                <div className="relative flex min-h-screen animate-fade-in-up items-center">
                    <div className="w-full">
                        <div className="animate-pulse-slow-3">
                            <div
                                style={{ filter: "saturate(2)" }}
                                className=" dark:opacity-1000 top-90 absolute -left-[800px] right-0 z-0 ml-auto mr-auto h-80 w-72 origin-center animate-spin-slow opacity-30 dark:opacity-90"
                            >
                                <div
                                    className="absolute -left-36 -top-36 h-96 w-96 animate-pulse-slow-3 rounded-full bg-primary-500 opacity-90"
                                    style={{ filter: "blur(180px)" }}
                                />
                                <div
                                    className="absolute -left-12 top-36 h-64 w-64 animate-pulse-slow-5 rounded-full bg-emerald-300 opacity-80"
                                    style={{ filter: "blur(120px)" }}
                                />
                                <div
                                    className="absolute left-44 top-12 h-72 w-72 animate-pulse-slow-7 rounded-full bg-sky-500 opacity-60"
                                    style={{ filter: "blur(120px)" }}
                                />
                            </div>
                        </div>

                        <div className="animate-pulse-slow-3">
                            <div
                                style={{ filter: "saturate(2)" }}
                                className=" dark:opacity-1000 top-90 absolute left-0 right-0 z-0 ml-auto mr-auto h-80 w-72 origin-center animate-spin-slow opacity-30 dark:opacity-50"
                            >
                                <div
                                    className="absolute -left-36 -top-36 h-96 w-96 animate-pulse-slow-3 rounded-full bg-primary-500 opacity-90"
                                    style={{ filter: "blur(180px)" }}
                                />
                                <div
                                    className="absolute -left-12 top-36 h-64 w-64 animate-pulse-slow-5 rounded-full bg-emerald-300 opacity-80"
                                    style={{ filter: "blur(120px)" }}
                                />
                                <div
                                    className="absolute left-44 top-12 h-72 w-72 animate-pulse-slow-7 rounded-full bg-sky-500 opacity-60"
                                    style={{ filter: "blur(120px)" }}
                                />
                            </div>
                        </div>

                        <div
                            style={{ filter: "saturate(2)" }}
                            className="top-90 dark:opacity:50 absolute right-10 z-0 h-72 w-72 origin-center animate-spin-slow opacity-30 dark:opacity-80"
                        >
                            <div
                                className="absolute -right-36 -top-36 h-96 w-96 animate-pulse-slow-7 rounded-full bg-sky-500 opacity-90"
                                style={{ filter: "blur(180px)" }}
                            />
                            <div
                                className="absolute -right-12 top-36 h-64 w-64 animate-pulse-slow-5 rounded-full bg-primary-500 opacity-80"
                                style={{ filter: "blur(120px)" }}
                            />
                            <div
                                className="absolute right-20 top-0 h-72 w-72 animate-pulse-slow-3 rounded-full bg-emerald-500 opacity-60"
                                style={{ filter: "blur(120px)" }}
                            />
                        </div>
                        <div className="group relative z-20 flex h-full flex-col-reverse items-center justify-center sm:flex-col md:flex-row">
                            <div className="group mt-8 pt-4 sm:mr-24 sm:p-0">
                                <Zoomed scale={1.05} rotate={0.5}>
                                    <h1
                                        className="mb-2 text-5xl font-bold text-white transition-opacity duration-200 sm:opacity-70
                                        sm:group-hover:opacity-100"
                                    >
                                        Recents
                                    </h1>
                                    <div className="z-0 flex w-80 flex-col gap-4 rounded-xl bg-emerald-200 bg-opacity-20 bg-clip-padding p-2 backdrop-blur-2xl backdrop-filter">
                                        {props.recent_tracks
                                            .slice(0, 6)
                                            .map((track: ITrack, index) => (
                                                <TrackSmall
                                                    key={index}
                                                    track={track}
                                                />
                                            ))}
                                    </div>
                                </Zoomed>
                            </div>
                            <div className="group pt-4 sm:mr-24 sm:hidden sm:p-0">
                                <Zoomed scale={1.05} rotate={0.5}>
                                    <h1
                                        className="mb-2 text-5xl font-bold text-white transition-opacity duration-200 sm:opacity-70
                                        sm:group-hover:opacity-100"
                                    >
                                        Top
                                    </h1>
                                    <div className="z-0 flex w-80 flex-col gap-4 rounded-xl bg-emerald-200 bg-opacity-20 bg-clip-padding p-2 backdrop-blur-2xl backdrop-filter">
                                        {props.top_tracks
                                            .slice(0, 6)
                                            .map((track: ITrack, index) => (
                                                <TrackSmall
                                                    key={index}
                                                    track={track}
                                                />
                                            ))}
                                    </div>
                                </Zoomed>
                            </div>
                            <div className="mt-10 flex flex-col justify-around gap-2 sm:mt-20 sm:pb-48 md:pb-0">
                                <h2 className="m-0 mb-2 mt-6 text-4xl font-normal sm:mb-2 sm:mt-0 sm:text-6xl">
                                    Hey this is my
                                </h2>
                                <h1
                                    className="m-0 bg-gradient-to-br from-emerald-500 to-green-300 bg-clip-text 
                                        text-6xl font-bold text-transparent sm:text-[130px]"
                                >
                                    Spotify
                                </h1>
                                <div className="hidden lg:block">
                                    <SpotifyProfileCard expanded={false} />
                                </div>
                                <div className="lg:hidden">
                                    <SpotifyProfileCard expanded={true} />
                                </div>
                            </div>
                        </div>
                        <RowMusic
                            title={"Music I love"}
                            subtitle={
                                "My most listened to songs in the last week on Spotify."
                            }
                            tracks={props.recent_tracks}
                            refreshed={props.refreshed}
                        />
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Music;
