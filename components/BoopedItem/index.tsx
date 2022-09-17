import { useGesture } from "@use-gesture/react";
import { animated, useSpring } from "react-spring";
import Image from "next/image";
import Wobbly from "../Wobbly";
import Zoomed from "../Zoomed";
import IMediaType from "../../interfaces/IMediaType";

const BoopedItem = (props: {
    href: string;
    title: string;
    subtitle: string;
    type: string;
    source: string;
}) => {
    const [styles, api] = useSpring(() => ({
        x: 0,
        y: 0,
        transform: "rotate(0deg)",
        config: { mass: 1, tension: 180, friction: 16 },
    }));

    const bind: any = useGesture({
        onHover: () => {
            api.start({
                x: 0,
                y: -160,
                transform: "scale(0.95)",
            });
        },
        onMouseLeave: () => {
            api.start({
                x: 0,
                y: 0,
                transform: "scale(1)",
            });
        },
    });

    return (
        <a href={props.source}>
            <div
                {...bind()}
                className="dark:opacity-2 group relative flex h-[250px] w-[250px] flex-col justify-center overflow-hidden rounded-lg bg-slate-100 text-center shadow-inner first-line:h-[250px] dark:bg-slate-900 "
            >
                <animated.div style={styles} className="">
                    <Image
                        className="absolute top-0 bottom-0 ml-auto mr-auto rounded-lg transition duration-500 group-hover:opacity-60"
                        alt="test"
                        src={props.href}
                        width={160}
                        height={210}
                    />
                    <div className="flex justify-evenly">
                        <div className="absolute top-[250px] w-[210px] pt-0">
                            <p className="truncate text-lg font-bold">
                                {props.title}
                            </p>
                            <p className="truncate text-base font-thin">
                                {props.subtitle}
                            </p>
                            <div className="flex flex-col items-center justify-center">
                                <Zoomed>
                                    <Wobbly>
                                        <a href="https://blender.org">
                                            <p
                                                className="mt-2 w-min truncate rounded-full bg-gradient-to-br from-orange-500 to-pink-500 px-[8px] py-[2px] text-center
                                 font-mono text-sm font-thin text-white"
                                            >
                                                {props.type}
                                            </p>
                                        </a>
                                    </Wobbly>
                                </Zoomed>
                            </div>
                        </div>
                    </div>
                </animated.div>
            </div>
        </a>
    );
};

export default BoopedItem;
