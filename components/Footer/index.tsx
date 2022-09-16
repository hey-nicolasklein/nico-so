import { DateTime } from "luxon";
import React from "react";
import Link from "../Link";

const Footer = (props: { year: number }) => {
    return (
        <div className="w-full py-16">
            <div className="gap4 xl:px0 mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-1">
                <div>
                    <h1 className="tex-tblack text-3xl leading-tight dark:text-white">
                        Let&apos;s build a better future together!
                    </h1>
                    <p>
                        Feel free to reach out to me over at {""}
                        <Link href="mailto:hey@nico.so">hey@nico.so</Link>
                    </p>
                    <p className="mt-6 text-base text-black opacity-30 dark:text-white">
                        © {2022} Nicolas Klein
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
