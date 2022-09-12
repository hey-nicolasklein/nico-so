// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

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
            </Head>
            <body className="bg-white dark:bg-gray-900">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
