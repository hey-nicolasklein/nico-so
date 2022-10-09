import { useGesture } from "@use-gesture/react";
import { animated, useSpring } from "react-spring";
import Image from "next/image";
import Wobbly from "../Wobbly";
import Zoomed from "../Zoomed";
import MediaType from "../../interfaces/IMediaType";

const BoopedItem = (props: {
    href: string;
    title: string;
    subtitle: string;
    source: string;
    type: MediaType;
    createdWith: string;
}) => {
    const [styles, api] = useSpring(() => ({
        x: 0,
        y: 0,
        transform: "rotate(0deg)",
        config: { mass: 1, tension: 180, friction: 16 },
    }));

    const [vinylStyles, vinyl] = useSpring(() => ({
        x: 0,
        y: 0,
        transform: "rotate(0deg)",
        config: { mass: 1, tension: 350, friction: 20 },
    }));

    const bind: any = useGesture({
        onHover: () => {
            api.start({
                x: 0,
                y: -160,
                transform: "scale(0.95)",
            });
            vinyl.start({
                x: 0,
                y: -100,
                transform: "rotate(0deg)",
            });
        },
        onMouseLeave: () => {
            api.start({
                x: 0,
                y: 0,
                transform: "scale(1)",
            });
            vinyl.start({
                x: 0,
                y: 100,
                transform: "rotate(0deg)",
            });
            vinyl.start({
                x: 0,
                y: 0,
                transform: "rotate(0deg)",
            });
        },
    });

    const handleClick = (event: { detail: number }) => {
        if (event.detail === 1) window.open(props.source, "_blank");
    };

    const renderAnimatedVinyl = () => {
        if (props.type === MediaType.Music) {
            return (
                <animated.div
                    style={vinylStyles}
                    className="absolute top-5 right-0 left-0 bottom-0 z-0 m-auto"
                >
                    <Image
                        className="box-shadow-4xl rounded-lg dark:invert"
                        alt="test"
                        src="/assets/vinyl.png"
                        width={100}
                        height={100}
                    />
                </animated.div>
            );
        }
        return <></>;
    };

    return (
        <div
            {...bind()}
            onClick={handleClick}
            className="dark:opacity-2 group relative flex h-[250px] w-[250px] 
            cursor-pointer flex-col justify-center overflow-hidden rounded-lg 
            bg-slate-100 text-center shadow-inner first-line:h-[250px] dark:bg-[#08070C] "
        >
            {renderAnimatedVinyl()}
            <animated.div
                style={styles}
                className="flex flex-col items-center justify-center drop-shadow-xl"
            >
                <div
                    className={
                        props.type == MediaType.Music
                            ? "relative h-[200px] w-[150px]"
                            : "relative h-[200px] w-[200px]"
                    }
                >
                    <Image
                        className="group-hover:opacity-1 absolute top-0 bottom-0 z-10 ml-auto mr-auto rounded-lg transition duration-500"
                        alt="test"
                        src={props.href}
                        layout="fill"
                        objectFit="contain"
                        object-position="50% 50%"
                    />
                </div>

                <div className="flex justify-evenly">
                    <div className="absolute top-[225px] w-[210px] pt-0">
                        <p className="truncate text-lg font-bold">
                            {props.title}
                        </p>
                        <div className=" text-base font-thin">
                            {props.subtitle}
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className="pt-7">
                                <Zoomed>
                                    <Wobbly>
                                        <a
                                            href="https://blender.org"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="mt-2 w-min truncate rounded-full 
                                                bg-gradient-to-br from-orange-500 to-pink-500 px-[8px] py-[2px] text-center
                                 font-mono text-sm font-thin text-white"
                                        >
                                            {props.createdWith}
                                        </a>
                                    </Wobbly>
                                </Zoomed>
                            </div>
                        </div>
                    </div>
                </div>
            </animated.div>
        </div>
    );
};

export default BoopedItem;
