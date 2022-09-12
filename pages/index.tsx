import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SayHello from "../components/SayHello";
import SectionHeader from "../components/SectionHeader";
import Skills from "../components/Skills";
import Socials from "../components/Socials";
import WhatIDo from "../components/WhatIDo/WhatIDo";
import styles from "../styles/Home.module.css";
import { DateTime, Interval } from "luxon";

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

export default function Home(props: { age: number }) {
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

            <div className="flex justify-center">
                <main className="max-w-7xl w-full px-16">
                    <Hero />
                </main>
            </div>
        </>
    );
}
