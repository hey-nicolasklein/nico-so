import { useGesture } from "@use-gesture/react";
import React, { ReactComponentElement, useState } from "react";
import { animated, useChain, useSpring, useSpringRef } from "react-spring";
import styles from "../../styles/components/CustomButton.module.css";
import Perspective from "../Perspecitive";
import Wobbly from "../Wobbly";
import Zoomed from "../Zoomed";
import { FiGithub } from "react-icons/fi";
import { AiOutlineArrowRight } from "react-icons/ai";

const CustomButton = (props: {
    secondary: boolean;
    icon?: JSX.Element;
    title: string;
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
            x: -10,
        },
        config: { mass: 1, tension: 100, friction: 10 },
    }));

    useChain([iconSpringRef, buttonSpringRef]);

    const stylesGithubIcon = useSpring({
        config: { mass: 1, tension: 200, friction: 10 },
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
                    scale: 1.0,
                    x: 2,
                },
            });
        },
        onMouseLeave: () => {
            setShown(false);
            apiButton.start({
                to: {
                    scale: 1,
                    x: -15,
                },
            });
            hovered = false;
        },
    });

    if (props.secondary) {
        return (
            <div className="flex items-center">
                <animated.div style={stylesGithubIcon}>
                    <FiGithub scale={20} />
                </animated.div>
                <animated.a
                    href="https://github.com/hey-nicolasklein"
                    target="_blank"
                    className="p-2"
                    {...bind()}
                    style={stylesButton}
                >
                    <div className="flex">{props.title}</div>
                </animated.a>
            </div>
        );
    }

    return (
        <Zoomed>
            <button
                className="rounded-[30px] bg-white px-6 py-2 text-base text-black"
                onClick={() =>
                    (window.location.href =
                        "mailto:hey@nico.so?subject=Hey&body=Let%20us%20talk%20:)")
                }
            >
                {props.title}
            </button>
        </Zoomed>
    );
};

export default CustomButton;
