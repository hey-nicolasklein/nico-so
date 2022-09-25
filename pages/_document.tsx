// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "../components/Navbar";

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Overpass:wght@100;200;300;400;500;700;900&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&display=swap"
                    rel="stylesheet"
                ></link>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body
                className="bg-grid-slate-400/[0.05] bg-grid-slate-900/[0.04] dark:bg-grid-slate-400/[0.05] bg-slate-50 
             bg-bottom  bg-no-repeat dark:border-b dark:border-slate-100/5 dark:bg-[#08070C] dark:bg-bottom"
            >
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
