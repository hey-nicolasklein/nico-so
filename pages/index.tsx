import { GetStaticProps } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import SayHello from "../components/SayHello";
import SectionHeader from "../components/SectionHeader";
import Skills from "../components/Skills";
import WhatIDo from "../components/WhatIDo/WhatIDo";
import styles from "../styles/Home.module.css";
import { DateTime, Interval } from "luxon";
import Layout from "../components/Layout";
import {
    BsBehance,
    BsLinkedin,
    BsTwitter,
    BsGithub,
    BsSpotify,
} from "react-icons/bs";
import { IconContext } from "react-icons";
import { getRecentTracks } from "../lib/spotify";
import Track from "../components/Track";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useInViewport } from "react-in-viewport";
import { classNames } from "../lib/tailwind";

export const getStaticProps: GetStaticProps = async () => {
    const tracks = await getRecentTracks();

    let birthday = new Date("10/05/1998");
    birthday.setHours(0, 0, 0, 0);
    let i = Interval.fromDateTimes(birthday, DateTime.now());

    return {
        props: {
            age: Math.floor(i.length("years")),
            tracks,
        },
        revalidate: 600,
    };
};

const Home = (props: { age: number; tracks: any[] }) => {
    console.log(props.age);
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title id="title">nicolas klein - nico.so</title>
                <meta
                    name="Description"
                    content="👋 Hey I'm Nicolas a UX-Engineer from south-west Germany."
                />
            </Head>

            <Navbar />

            <Layout>
                <div className="relative flex min-h-screen animate-fade-in-up items-center">
                    <div className="w-full">
                        <div className="animate-pulse-slow-3">
                            <div
                                style={{ filter: "saturate(2)" }}
                                className=" dark:opacity-1000 absolute top-80 right-0 left-0 z-0 ml-auto mr-auto h-80 w-72 origin-center animate-spin-slow opacity-50"
                            >
                                <div
                                    className="absolute -top-36 -left-36 h-96 w-96 animate-pulse-slow-3 rounded-full bg-primary-500 opacity-80"
                                    style={{ filter: "blur(180px)" }}
                                />
                                <div
                                    className="absolute top-36 -left-12 h-64 w-64 animate-pulse-slow-5 rounded-full bg-emerald-300 opacity-70"
                                    style={{ filter: "blur(120px)" }}
                                />
                                <div
                                    className="absolute top-12 left-44 h-72 w-72 animate-pulse-slow-7 rounded-full bg-sky-500 opacity-50"
                                    style={{ filter: "blur(120px)" }}
                                />
                            </div>
                        </div>

                        <div
                            style={{ filter: "saturate(2)" }}
                            className="dark:opacity-1000 absolute top-0 right-0 z-0 h-72 w-72 origin-center animate-spin-slow opacity-50"
                        >
                            <div
                                className="absolute -top-36 -right-36 h-96 w-96 animate-pulse-slow-7 rounded-full bg-orange-500 opacity-80"
                                style={{ filter: "blur(180px)" }}
                            />
                            <div
                                className="absolute top-36 -right-12 h-64 w-64 animate-pulse-slow-5 rounded-full bg-primary-500 opacity-70"
                                style={{ filter: "blur(120px)" }}
                            />
                            <div
                                className="absolute top-0 right-64 h-72 w-72 animate-pulse-slow-3 rounded-full bg-pink-500 opacity-50"
                                style={{ filter: "blur(120px)" }}
                            />
                        </div>

                        <div className="relative z-20 flex w-full flex-col items-center justify-center sm:flex-row">
                            <a href="https://www.instagram.com/hey.nicolasklein/">
                                <Image
                                    src="/assets/me.jpg"
                                    alt="SVG mit img laden"
                                    width="200"
                                    height="200"
                                    className="mr-3 mb-5 rounded-full transition duration-500 ease-in-out sm:visible sm:mb-0"
                                />
                            </a>
                            <div className="ml-5">
                                <h2 className="m-0 mb-2 text-3xl font-normal sm:mb-2 sm:text-6xl">
                                    Hey, I&apos;m
                                </h2>
                                <h1 className="m-0 text-6xl font-bold sm:text-8xl">
                                    Nicolas
                                </h1>
                                <h3 className="m-0 hidden text-2xl font-normal sm:block sm:text-3xl">
                                    Frontend developer by{" "}
                                    <span className="dark:hidden">🖤</span>
                                    <span className="hidden dark:inline-block">
                                        🤍
                                    </span>
                                </h3>
                                <h3 className="m-0 text-2xl font-normal sm:hidden sm:text-3xl">
                                    Developer by{" "}
                                    <span className="dark:hidden">🖤</span>
                                    <span className="hidden dark:inline-block">
                                        🤍
                                    </span>
                                </h3>
                            </div>
                        </div>

                        <div className="absolute bottom-20 flex w-full justify-center">
                            <IconContext.Provider
                                value={{
                                    className:
                                        "black dark:white hover:drop-shadow-4xl transtion duration-300 hover:scale-110 ease-in-out",
                                }}
                            >
                                <div className="flex w-72	justify-around">
                                    <a href="https://www.linkedin.com/in/heynicolas/">
                                        <BsLinkedin size={40} />
                                    </a>
                                    <a href="https://www.behance.net/hey_nicolasklein">
                                        <BsBehance size={40} />
                                    </a>
                                    <a href="https://github.com/hey-nicolasklein">
                                        <BsGithub size={40} />
                                    </a>
                                    <a href="https://twitter.com/heynicolasklein">
                                        <BsTwitter size={40} />
                                    </a>
                                </div>
                            </IconContext.Provider>
                        </div>
                    </div>
                </div>
                <Music tracks={props.tracks} />
            </Layout>
        </>
    );
};

const Music = (props: { tracks: any[] }) => {
    return (
        <div
            key={+new Date()}
            className={classNames(
                "z-50 mt-24 mb-10 animate-fade-in-up transition duration-200"
            )}
        >
            <div className="align-start mb-4 flex justify-start">
                <a href="https://open.spotify.com/user/funforstarax">
                    <BsSpotify size={30} />
                </a>
                <h1 className="normal pl-3 text-2xl sm:text-3xl">
                    What I have been coding to ...
                </h1>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:grid-cols-4 sm:grid-rows-1">
                {props.tracks.slice(0, 4).map((track: any, index) => (
                    <Track key={index} track={track} />
                ))}
            </div>
            <div className="h-10 w-full bg-transparent"></div>
        </div>
    );
};

export default Home;
