import styles from "../styles/Hero.module.css";
import Socials from "./Socials";

const Hero = () => {
    return (
        <div className="relative h-screen">
            <div className="flex justify-center	items-center h-full flex-col sm:flex-row">
                <img
                    src="/assets/me.jpg"
                    alt="SVG mit img laden"
                    width="200"
                    height="200"
                    className="rounded-full mr-3 transition ease-in-out duration-500 sm:visible hover:drop-shadow-3xl mb-5 sm:mb-0"
                />
                <div className="flex flex-col align-center">
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

            <div className={styles.socials}>
                <Socials />
            </div>
        </div>
    );
};

export default Hero;
