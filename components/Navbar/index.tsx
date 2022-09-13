import { animated, useSpring } from "@react-spring/web";

import Image from "next/image";
import { useEffect, useState } from "react";
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

    // Use Spring Hook to make Card "wiggly"
    const [styles, api] = useSpring(() => ({
        y: "0px",
        config: { mass: 1, tension: 280, friction: 70 },
    }));

    useEffect(() => {
        api.start({ y: isScrolled || isShown ? "0px" : "-100px" });
    }, [isScrolled, isShown]);

    return (
        <div>
            <div
                className="fixed top-0 right-0 z-50 h-36 w-full"
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
            />
            <animated.div
                className={classNames(
                    isScrolled ? "" : "bg-transparent hover:opacity-100",
                    "fixed top-0 right-0 z-50 py-6 px-6 transition-colors"
                )}
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
                style={styles}
            >
                <div className="flex align-center max-w-5xl px-6 sm:px-12 xl:px-0">
                    <Image
                        src="/logo.svg"
                        alt="SVG mit img laden"
                        width="50"
                        height="50"
                        className="dark:invert inline-block"
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
                "leading-none text-gray-700 dark:text-white px-10 py-6 text-2xl hidden sm:block"
            }
        >
            {props.name}
        </a>
    );
};

const ContactButton = () => {
    return (
        <button
            className="leading-none	background bg-transparent px-2.5 py-2.5 rounded border-solid border-2 
            text-xl	font-normal	text-black border-black	ml-5 dark:text-white dark:border-white"
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
