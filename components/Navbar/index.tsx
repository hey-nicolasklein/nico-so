import { animated, useSpring } from "@react-spring/web";

import Image from "next/image";
import { useEffect, useState } from "react";
import useCheckMobileScreen from "../../hooks/useIsMobile";
import useIsMobile from "../../hooks/useIsMobile";
import { classNames } from "../../lib/tailwind";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
        window.onscroll = () => setIsScrolled(window.pageYOffset > 400);

        return () => {
            window.onscroll = null;
            return;
        };
    });

    const [styles, api] = useSpring(() => ({
        y: "0px",
        config: { mass: 1, tension: 280, friction: 70 },
    }));

    useEffect(() => {
        api.start({ y: isScrolled || isShown ? "0px" : "-100px" });
    }, [isScrolled, isShown, api]);

    return (
        <div>
            <div
                className="fixed top-0 right-0 z-30 h-20 w-96"
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
            />
            <animated.div
                className={classNames(
                    isScrolled
                        ? " bg-white/80 shadow-2xl shadow-black/5 backdrop-blur-md backdrop-saturate-150 backdrop-filter dark:bg-gray-900/80 sm:bg-transparent sm:shadow-none sm:backdrop-filter-none"
                        : "bg-transparent hover:opacity-100 ",
                    "fixed top-0 right-0 z-50 w-full py-4 px-6 transition-colors sm:w-fit"
                )}
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
                style={styles}
            >
                <div className="align-center flex justify-center px-6 sm:px-12 xl:px-0">
                    <Image
                        src="/logo.svg"
                        alt="SVG mit img laden"
                        width="50"
                        height="50"
                        className="inline-block dark:invert"
                    />
                    <ContactButton />
                </div>
            </animated.div>
        </div>
    );
};

const NavItem = (props: { name: string }) => {
    return (
        <a
            href={`#${props.name != "Home" ? props.name : ""}`}
            className={
                "hidden px-10 py-6 text-2xl leading-none text-gray-700 dark:text-white sm:block"
            }
        >
            {props.name}
        </a>
    );
};

const ContactButton = () => {
    return (
        <button
            className="ml-5 rounded-lg border-2 border-solid border-black bg-transparent py-1 pb-1 pt-2 pl-2 pr-2 
            text-lg	font-normal	leading-none text-black	opacity-90 dark:border-white dark:text-white"
            onClick={() =>
                (window.location.href =
                    "mailto:hey@nico.so?subject=Hey&body=Let%20us%20talk%20:)")
            }
        >
            Get In Touch
        </button>
    );
};

export default Navbar;
