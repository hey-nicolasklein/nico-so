import styles from "../styles/Hero.module.css";
import Socials from "./Socials";

const Hero = () => {
    return (
        <div className="relative h-screen">
            <div className="z-10">
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
            </div>
            <div className="z-10">
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
            </div>
            <div className="flex justify-center items-center h-full flex-col sm:flex-row">
                <a
                    href="https://www.instagram.com/hey.nicolasklein/"
                    style={{ zIndex: 50 }}
                >
                    <img
                        src="/assets/me.jpg"
                        alt="SVG mit img laden"
                        width="200"
                        height="200"
                        className="rounded-full mr-3 transition ease-in-out duration-500 sm:visible hover:drop-shadow-3xl mb-5 sm:mb-0"
                    />
                </a>
                <div className=" z-50 flex flex-col align-center ">
                    <h2 className="m-0 font-normal text-3xl sm:text-6xl mb-2 sm:mb-2">
                        Hey, I&apos;m
                    </h2>
                    <h1 className="m-0 font-bold text-6xl sm:text-8xl">
                        Nicolas
                    </h1>
                    <h3 className="m-0 hidden font-normal text-2xl sm:text-3xl sm:block">
                        Frontend developer by{" "}
                        <span className="dark:hidden">🖤</span>
                        <span className="hidden dark:inline-block">🤍</span>
                    </h3>
                    <h3 className="m-0 font-normal text-2xl sm:text-3xl sm:hidden">
                        Developer by <span className="dark:hidden">🖤</span>
                        <span className="hidden dark:inline-block">🤍</span>
                    </h3>
                </div>
            </div>

            <div className="absolute bottom-10 flex justify-around w-full">
                <Socials />
            </div>
        </div>
    );
};

export default Hero;
