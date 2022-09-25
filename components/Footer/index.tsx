import { DateTime } from "luxon";
import React from "react";
import Link from "../Link";

const Footer = (props: { year: number }) => {
    return (
        <div className="flex w-full flex-col justify-between py-8">
            <div className="flex flex-col items-center">
                <p className="text-base text-black opacity-30 dark:text-white">
                    created with
                </p>
                <p>
                    <Link href="https://nextjs.org">NextJS</Link>,{" "}
                    <Link href="https://tailwindcss.com">Tailwind CSS</Link>,{" "}
                    <Link href="https://react-spring.dev">ReactSpring</Link>
                </p>
            </div>
            <div className="flex flex-col items-center pt-5">
                <p className="text-base text-black opacity-30 dark:text-white">
                    © {props.year} Nicolas Klein
                </p>
            </div>
        </div>
    );
};

export default Footer;
