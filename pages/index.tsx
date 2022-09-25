import { GetStaticProps } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import SayHello from "../components/SayHello";
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
import { getRecentTracks, getTopTracks } from "../lib/spotify";
import Track from "../components/Track";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useInViewport } from "react-in-viewport";
import { classNames } from "../lib/tailwind";
import { useAnimation, useMotionValue, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useIsMobile from "../hooks/useIsMobile";
import ITrack from "../interfaces/ITrack";
import Link from "../components/Link";
import Footer from "../components/Footer";
import Wobbly from "../components/Wobbly";
import Pophead from "../components/Wiggle";
import Wiggle from "../components/Wiggle";
import Zoomed from "../components/Zoomed";
import { animated, useSpring } from "react-spring";
import { useGesture } from "@use-gesture/react";
import BoopedItem from "../components/BoopedItem";
import profilePic from "../public/assets/me.jpg";
import memoji from "../public/assets/memoji.png";
import memojiDark from "../public/assets/memoji_dark.png";

import MediaType from "../interfaces/IMediaType";
import Perspective from "../components/Perspecitive";
import Heading from "../components/Heading";

export const getStaticProps: GetStaticProps = async () => {
    const tracks = await getTopTracks();

    let birthday = new Date("10/05/1998");
    birthday.setHours(0, 0, 0, 0);
    let i = Interval.fromDateTimes(birthday, DateTime.now());

    return {
        props: {
            age: Math.floor(i.length("years")),
            tracks,
            refreshed: DateTime.now().valueOf(),
            year: DateTime.now().year,
        },
        revalidate: 600,
    };
};

const Home = (props: {
    age: number;
    tracks: ITrack[];
    refreshed: number;
    year: number;
}) => {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title id="title">nico.so</title>
                <meta
                    name="Description"
                    content="👋 Hey I%apos;m Nicolas a UX-Engineer from south-west Germany."
                />
            </Head>

            <Navbar />

            <Layout>
                <div className="relative flex min-h-screen animate-fade-in-up items-center">
                    <div className="w-full">
                        <div className="animate-pulse-slow-3">
                            <div
                                style={{ filter: "saturate(2)" }}
                                className=" dark:opacity-1000 top-90 absolute right-0 left-0 z-0 ml-auto mr-auto h-80 w-72 origin-center animate-spin-slow opacity-30 dark:opacity-50"
                            >
                                <div
                                    className="absolute -top-36 -left-36 h-96 w-96 animate-pulse-slow-3 rounded-full bg-primary-500 opacity-90"
                                    style={{ filter: "blur(180px)" }}
                                />
                                <div
                                    className="absolute top-36 -left-12 h-64 w-64 animate-pulse-slow-5 rounded-full bg-emerald-300 opacity-80"
                                    style={{ filter: "blur(120px)" }}
                                />
                                <div
                                    className="absolute top-12 left-44 h-72 w-72 animate-pulse-slow-7 rounded-full bg-sky-500 opacity-60"
                                    style={{ filter: "blur(120px)" }}
                                />
                            </div>
                        </div>

                        <div
                            style={{ filter: "saturate(2)" }}
                            className="top-90 dark:opacity:50 absolute right-10 z-0 h-72 w-72 origin-center animate-spin-slow opacity-30 dark:opacity-80"
                        >
                            <div
                                className="absolute -top-36 -right-36 h-96 w-96 animate-pulse-slow-7 rounded-full bg-sky-500 opacity-90"
                                style={{ filter: "blur(180px)" }}
                            />
                            <div
                                className="absolute top-36 -right-12 h-64 w-64 animate-pulse-slow-5 rounded-full bg-primary-500 opacity-80"
                                style={{ filter: "blur(120px)" }}
                            />
                            <div
                                className="absolute top-0 right-20 h-72 w-72 animate-pulse-slow-3 rounded-full bg-emerald-500 opacity-60"
                                style={{ filter: "blur(120px)" }}
                            />
                        </div>

                        <div className="relative z-20 flex h-full flex-col items-center justify-center md:flex-row">
                            <div className="">
                                <Zoomed>
                                    <Wobbly factor={1}>
                                        <a
                                            href="https://www.instagram.com/hey.nicolasklein/"
                                            className=""
                                        >
                                            <Image
                                                src={memoji}
                                                alt="SVG mit img laden"
                                                width="250"
                                                height="250"
                                                placeholder="blur"
                                                quality={50}
                                                priority
                                                className="mr-20 mb-5 rounded-full p-24 transition duration-500 ease-in-out sm:mb-0"
                                            />
                                        </a>
                                    </Wobbly>
                                </Zoomed>
                            </div>
                            <div className="pb-48 md:pb-0">
                                <h2 className="m-0 mb-2 mt-6 text-4xl font-normal sm:mt-0 sm:mb-2 sm:text-6xl">
                                    Hey I'm
                                </h2>
                                <h1
                                    className="m-0 bg-gradient-to-br from-emerald-500 to-green-300 bg-clip-text 
                                        text-6xl font-bold text-transparent sm:text-[130px]"
                                >
                                    Nicolas
                                </h1>

                                <h3 className="ml-2 hidden text-4xl font-normal opacity-80 sm:block sm:text-4xl">
                                    Frontend developer by{" "}
                                    <span className="dark:hidden">🖤</span>
                                    <span className="hidden dark:inline-block">
                                        🤍
                                    </span>
                                </h3>
                                <h3 className="m-0 text-3xl font-normal sm:hidden sm:text-4xl">
                                    Developer by{" "}
                                    <span className="dark:hidden">🖤</span>
                                    <span className="hidden dark:inline-block">
                                        🤍
                                    </span>
                                </h3>
                            </div>
                        </div>

                        <div className="absolute bottom-32 flex w-full justify-center sm:bottom-20">
                            <IconContext.Provider
                                value={{
                                    className:
                                        "black dark:white hover:drop-shadow-4xl transtion duration-300 hover:scale-110 hover:-rotate-6 ease-in-out",
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
                <div className="flex items-center justify-start">
                    <Heading>About me</Heading>
                </div>
                <div className="align-center mt-8 flex flex-col items-center sm:flex-row">
                    <Zoomed factor={2}>
                        <Wobbly factor={4}>
                            <a
                                href="https://www.instagram.com/hey.nicolasklein/"
                                className=""
                            >
                                <Image
                                    src={profilePic}
                                    alt="SVG mit img laden"
                                    width="150"
                                    height="150"
                                    placeholder="blur"
                                    quality={50}
                                    priority
                                    className="mr-20 mb-5 rounded-full p-24 transition duration-500 ease-in-out sm:visible sm:mb-0"
                                />
                            </a>
                        </Wobbly>
                    </Zoomed>

                    <div className="mt-5 text-lg text-black dark:text-white sm:ml-10 sm:mt-0">
                        <p>
                            I am Nicolas, a 23 years old Software Engineer from
                            Germany.<br></br> Currently I am building
                            cross-platform Mobile-Experiences at{" "}
                            <Link href="https://ergosign.de">
                                Ergosign GmbH
                            </Link>
                            .
                        </p>
                        <p className="mt-2">
                            Beyond programming, I have a passion for{" "}
                            <Link href="https://www.instagram.com/hey.nicolasklein/">
                                photography
                            </Link>{" "}
                            and{" "}
                            <Link href="https://www.instagram.com/3d.nicolasklein/">
                                digital art
                            </Link>
                            .
                        </p>
                    </div>
                </div>

                <Music tracks={props.tracks} refreshed={props.refreshed} />
                <Art />
                <Footer year={2022} />
            </Layout>
        </>
    );
};

const fadeInVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0.8 },
};

export const Art = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <motion.div
            animate={controls}
            initial="hidden"
            variants={fadeInVariants}
        >
            <div className="flex items-center justify-between">
                <Heading>Things I love</Heading>
            </div>
            <div
                ref={ref}
                className=" mt-8 grid grid-rows-3 content-between items-center justify-center gap-4 sm:grid-cols-3 sm:grid-rows-1"
            >
                <BoopedItem
                    href="/assets/Day91.png"
                    title="Day 91"
                    subtitle="Made during my 100days of art challenge."
                    createdWith="Blender3D"
                    source="https://www.instagram.com/p/CPyES_kBhVQ/"
                    type={MediaType.Artwork}
                />
                <BoopedItem
                    href="/assets/Day88.png"
                    title="Day 88"
                    subtitle="Made during my 100days of art challenge."
                    createdWith="Blender3D"
                    source="https://www.instagram.com/p/CPK9v2VhphV/"
                    type={MediaType.Artwork}
                />
                <BoopedItem
                    href="/assets/drake.jpg"
                    title="Nothing was the same"
                    subtitle="One of my favorite records of all time. Drake at his peak."
                    createdWith="Music"
                    source="https://www.instagram.com/p/CR_G-qwsMhL/"
                    type={MediaType.Music}
                />
            </div>
            <div className=" h-10 w-full bg-transparent"></div>
        </motion.div>
    );
};

const Music = (props: { tracks: ITrack[]; refreshed: number }) => {
    const refreshed = DateTime.fromMillis(props.refreshed);

    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <motion.div
            animate={controls}
            initial="hidden"
            variants={fadeInVariants}
        >
            <div className={classNames("z-50 mt-24 mb-10")}>
                <div className="flex items-center justify-between">
                    <Heading>Music I love</Heading>

                    <div className="flex items-center opacity-50">
                        <a
                            href="https://open.spotify.com/user/funforstarax"
                            className="mr-2 pb-1"
                        >
                            <BsSpotify size={20} />
                        </a>
                        <p className="m-0 hidden p-0 pr-4 font-thin leading-none md:block">
                            last refreshed{" "}
                            {refreshed.toLocaleString({
                                hour: "numeric",
                                minute: "2-digit",
                            })}
                            Uhr
                        </p>
                    </div>
                </div>
                <div
                    ref={ref}
                    className="mt-8 grid grid-cols-2 grid-rows-2 gap-4 sm:grid-cols-4 sm:grid-rows-1"
                >
                    {props.tracks.slice(0, 4).map((track: ITrack, index) => (
                        <Track key={index} track={track} />
                    ))}
                </div>
                <div className=" h-10 w-full bg-transparent"></div>
            </div>
        </motion.div>
    );
};

export default Home;
