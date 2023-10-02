import { useGesture } from "@use-gesture/react";
import React, { ReactComponentElement, useState } from "react";
import { animated, useChain, useSpring, useSpringRef } from "react-spring";
import styles from "../../styles/components/CustomButton.module.css";
import Perspective from "../Perspecitive";
import Wobbly from "../Wobbly";
import Zoomed from "../Zoomed";
import { FiGithub } from "react-icons/fi";
import { AiFillMessage, AiOutlineArrowRight } from "react-icons/ai";

const SecondaryIconTextButton = (props: {
    icon?: JSX.Element;
    title: string;
    link: string;
}) => {
    const [isShown, setShown] = useState(false);

    const iconSpringRef = useSpringRef();
    const stylesIcon = useSpring({
        ref: iconSpringRef,
        config: { mass: 1, tension: 200, friction: 10 },
        opacity: isShown ? 1 : 0,
        x: isShown ? 10 : 0,
    });

    const buttonSpringRef = useSpringRef();
    const [stylesButton, apiButton] = useSpring(() => ({
        ref: buttonSpringRef,
        from: {
            scale: 1,
            x: 0,
        },
        config: { mass: 1, tension: 100, friction: 10 },
    }));

    const widthStyle = useSpring({
        config: { mass: 1, tension: 200, friction: 10 },
        display: isShown ? "none" : "block",
    });

    useChain([iconSpringRef, buttonSpringRef]);

    const stylesGithubIcon = useSpring({
        config: { mass: 1, tension: 100, friction: 10 },
        opacity: isShown ? 1 : 0,
        scale: isShown ? 1.2 : 1,
    });

    let hovered = false;

    // Use Gesture Hook to keep track of mouse movement velocity
    const bind: any = useGesture({
        onHover: () => {
            if (hovered) return;
            hovered = true;
            setShown(true);
            apiButton.start({
                to: {
                    scale: 1.05,
                    x: 0,
                },
            });
        },
        onMouseLeave: () => {
            setShown(false);
            apiButton.start({
                to: {
                    scale: 1,
                    x: 0,
                },
            });
            hovered = false;
        },
    });

    return (
        <div className="transtion dark:hover:text--300 group relative duration-200 hover:text-emerald-500 dark:hover:text-green-300">
            <div className="flex items-center justify-center">
                <animated.a
                    href={props.link}
                    target="_blank"
                    className="p-2"
                    {...bind()}
                    style={stylesButton}
                >
                    <div className="flex">
                        {props.title}

                        <animated.div
                            className="pl-2 pt-[2px]"
                            style={stylesGithubIcon}
                        >
                            {props.icon}
                        </animated.div>
                    </div>
                </animated.a>
            </div>
            <div
                className="absolute left-[50%] top-[50.0%] -z-10 block h-[5px] w-44 -translate-x-2/4 -translate-y-2/4 rounded-full bg-white opacity-10 transition-all duration-200 group-hover:opacity-60"
                style={{ filter: "blur(20px)" }}
            />
        </div>
    );
};

export default SecondaryIconTextButton;
