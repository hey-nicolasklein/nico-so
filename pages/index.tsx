import { GetStaticProps } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
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
import Image from "next/image";
import ITrack from "../interfaces/ITrack";
import Link from "../components/Link";
import Footer from "../components/Footer";
import Wobbly from "../components/Wobbly";
import Zoomed from "../components/Zoomed";
import profilePic from "../public/assets/me.jpg";
import memoji from "../public/assets/memoji.png";
import Heading from "../components/Heading";
import BackgroundGrid from "../components/BackgroundGrid";
import RowArt from "../components/RowArt";
import RowMusic from "../components/RowMusic";
import CV from "../components/CV";
import Skills from "../components/Skills";
import Perspective from "../components/Perspecitive";
import Wiggle from "../components/Wiggle";
import SayHello from "../components/SayHello";
import CustomButton from "../components/SayHello/CustomButton";

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

interface Props {
    age: number;
    tracks: ITrack[];
    refreshed: number;
    year: number;
}

const Home: React.FC<Props> = (props: Props) => {
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
                                    Hey I&apos;m
                                </h2>
                                <h1
                                    className="m-0 bg-gradient-to-br from-emerald-500 to-green-300 bg-clip-text 
                                        text-6xl font-bold text-transparent sm:text-[130px]"
                                >
                                    Nicolas
                                </h1>

                                <h3 className="ml-2 hidden text-4xl font-normal opacity-90 sm:block sm:text-4xl">
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
                                <div className="flex flex-col items-start justify-start gap-2 pt-4 pb-10 sm:flex-row sm:pl-2">
                                    <CustomButton
                                        title="Contact"
                                        secondary={false}
                                    />
                                    <div className="hidden sm:block">
                                        <CustomButton
                                            title={"Go to my Github"}
                                            secondary={true}
                                        />
                                    </div>
                                </div>
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
                <div className="align-center relative mt-8 flex flex-col items-center sm:flex-row">
                    <BackgroundGrid
                        className="absolute top-20 right-0 left-0 -z-20 flex items-center justify-center opacity-80"
                        size="60%"
                    />

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
                <CV />
                <Skills />
                <RowMusic tracks={props.tracks} refreshed={props.refreshed} />
                <RowArt />
                <SayHello />
                <Footer year={2022} />
            </Layout>
        </>
    );
};

export default Home;
