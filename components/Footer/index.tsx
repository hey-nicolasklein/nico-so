import { DateTime } from "luxon";
import React from "react";
import Link from "../Link";

const Footer = (props: { year: number }) => {
    return (
        <div className="relative flex w-full flex-col justify-between py-8">
            <div className="flex flex-col items-center">
                <p className="text-base text-black opacity-30 dark:text-white">
                    created with
                </p>
                <p>
                    <Link href="https://nextjs.org">NextJS</Link>,{" "}
                    <Link href="https://tailwindcss.com">Tailwind CSS</Link>,{" "}
                    <Link href="https://react-spring.dev">ReactSpring</Link>,{" "}
                    <Link href="https://strapi.io">Strapi</Link>
                </p>
            </div>
            <div className="flex flex-col items-center pt-5">
                <p className="text-base text-black opacity-30 dark:text-white">
                    © {props.year} Nicolas Klein
                </p>
            </div>
            <div
                className="absolute top-[140.0%] left-[35%] -z-10 h-72 w-72 -translate-x-2/4 -translate-y-2/4 animate-pulse-slow-5 rounded-full bg-sky-500 opacity-60"
                style={{ filter: "blur(120px)" }}
            />
            <div
                className="absolute top-[190.0%] left-[60%] -z-10 h-64 w-64 -translate-x-2/4 -translate-y-2/4 animate-pulse-slow-3 rounded-full bg-emerald-300 opacity-80"
                style={{ filter: "blur(120px)" }}
            />
        </div>
    );
};

export default Footer;
