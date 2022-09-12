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
import { BsBehance, BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
import { IconContext } from "react-icons";

export const getStaticProps: GetStaticProps = async () => {
    let birthday = new Date("10/05/1998");
    birthday.setHours(0, 0, 0, 0);
    let i = Interval.fromDateTimes(birthday, DateTime.now());

    return {
        props: {
            age: Math.floor(i.length("years")),
        },
    };
};

const Home = (props: { age: number }) => {
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
                <div className="relative flex min-h-screen items-center">
                    <div className="w-full">
                        <div
                            style={{ filter: "saturate(2)" }}
                            className="dark:opacity-1000 absolute top-80 ml-auto mr-auto right-0 left-0 z-0 h-80 w-72 origin-center animate-spin-slow opacity-50"
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

                        <div className="relative z-20 flex flex-col sm:flex-row w-full items-center justify-center">
                            <a href="https://www.instagram.com/hey.nicolasklein/">
                                <img
                                    src="/assets/me.jpg"
                                    alt="SVG mit img laden"
                                    width="200"
                                    height="200"
                                    className="rounded-full mr-3 transition ease-in-out duration-500 sm:visible hover:drop-shadow-3xl mb-5 sm:mb-0 border-white border-4"
                                />
                            </a>
                            <div className="ml-5">
                                <h2 className="m-0 font-normal text-3xl sm:text-6xl mb-2 sm:mb-2">
                                    Hey, I&apos;m
                                </h2>
                                <h1 className="m-0 font-bold text-6xl sm:text-8xl">
                                    Nicolas
                                </h1>
                                <h3 className="m-0 hidden font-normal text-2xl sm:text-3xl sm:block">
                                    Frontend developer by{" "}
                                    <span className="dark:hidden">🖤</span>
                                    <span className="hidden dark:inline-block">
                                        🤍
                                    </span>
                                </h3>
                                <h3 className="m-0 font-normal text-2xl sm:text-3xl sm:hidden">
                                    Developer by{" "}
                                    <span className="dark:hidden">🖤</span>
                                    <span className="hidden dark:inline-block">
                                        🤍
                                    </span>
                                </h3>
                            </div>
                        </div>

                        <div className="absolute bottom-20 flex justify-center w-full">
                            <IconContext.Provider
                                value={{ className: "black dark:white" }}
                            >
                                <div className="flex justify-around	 w-72">
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
            </Layout>
        </>
    );
};

export default Home;
