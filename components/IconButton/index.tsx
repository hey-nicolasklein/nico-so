import { useGesture } from "@use-gesture/react";
import React, { ReactComponentElement, useState } from "react";
import { animated, useChain, useSpring, useSpringRef } from "@react-spring/web";
import styles from "../../styles/components/CustomButton.module.css";
import Perspective from "../Perspecitive";
import Wobbly from "../Wobbly";
import Zoomed from "../Zoomed";
import { FiGithub } from "react-icons/fi";
import { AiFillMessage, AiOutlineArrowRight } from "react-icons/ai";

const IconButton = (props: { icon: JSX.Element }) => {
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
        <Zoomed factor={2} scale={1.05} rotate={-1}>
            <div className="group/button relative rounded-full bg-white p-[2px] hover:cursor-pointer">
                <div
                    className="transtion relative h-[45px] w-[45px] rounded-full bg-gradient-radial from-[#1c1c1c] to-[#08070C] p-0 text-base text-white duration-200 group-hover/button:text-emerald-200"
                    onClick={() =>
                        (window.location.href =
                            "https://open.spotify.com/playlist/0OUDJBUwyJ9YQ8J0tFmA9p?si=fce55f7a7c63499a")
                    }
                >
                    <div className="absolute left-[2px]">{props.icon}</div>
                </div>
                <div
                    className="group-hover:opacity-60/group absolute left-[50%] top-[50.0%] -z-10 block h-[10px] w-[130px] -translate-x-2/4 -translate-y-2/4 rounded-full bg-white opacity-10 transition-all duration-200"
                    style={{ filter: "blur(25px)" }}
                ></div>
            </div>
        </Zoomed>
    );
};

export default IconButton;
