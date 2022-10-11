import React, { PropsWithChildren, useEffect, useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

import {
    SiAdobeillustrator,
    SiDotnet,
    SiFigma,
    SiFlutter,
    SiNextdotjs,
    SiPostgresql,
    SiReact,
} from "react-icons/si";
import Heading from "../Heading";
import memoji from "../../public/assets/memoji_dark.png";
import Image from "next/image";
import { IconContext, IconType } from "react-icons";
import Zoomed from "../Zoomed";
import Skill from "./Skill";
import BackgroundGrid from "../BackgroundGrid";

interface ISkillElement {
    title: string;
    icon: IconType;
}

const Skills = () => {
    const [selected, setSelected] = useState("");

    const elements: ISkillElement[] = [
        {
            title: "Flutter",
            icon: SiFlutter,
        },
        {
            title: "React",
            icon: SiReact,
        },
        {
            title: "NextJS",
            icon: SiNextdotjs,
        },
        {
            title: "Illustrator",
            icon: SiAdobeillustrator,
        },
        {
            title: "Figma",
            icon: SiFigma,
        },
        {
            title: "Microsoft",
            icon: SiDotnet,
        },
        {
            title: "Postgress",
            icon: SiPostgresql,
        },
    ];

    return (
        <div>
            <Heading>Skills</Heading>
            <div className="relative flex justify-center p-20">
                <div className="relative">
                    <div className=" absolute top-[50%] left-[50%] -z-50 h-[270px] w-[270px] -translate-x-2/4 -translate-y-2/4  rounded-full bg-gradient-radial from-emerald-300 via-transparent blur-xl drop-shadow-4xl"></div>
                    <div className="absolute top-[50%] left-[50%] z-40 -translate-x-2/4 -translate-y-2/4">
                        <Zoomed>
                            <AnimatePresence>
                                {selected != "" && (
                                    <div>
                                        <SelectedInformation
                                            element={elements.find(
                                                (e) => e.title == selected
                                            )}
                                        ></SelectedInformation>
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="absolute top-[50%] left-[50%] z-40 h-[150px] w-[150px] -translate-x-2/4 -translate-y-2/4 rounded-full backdrop-blur-lg"
                                        ></motion.div>
                                    </div>
                                )}
                            </AnimatePresence>

                            <div
                                style={{
                                    boxShadow:
                                        "inset -25px -15px 40px rgba(0,0,0,.3)",
                                }}
                                className={`absolute top-[50.0%] left-[50%] h-[150px] w-[150px] -translate-x-2/4 -translate-y-2/4 rounded-full bg-gradient-to-t from-transparent to-emerald-300`}
                            >
                                <Image
                                    src={memoji}
                                    alt="SVG mit img laden"
                                    layout="fill"
                                    width="150"
                                    height="150"
                                    placeholder="blur"
                                    quality={50}
                                    priority
                                    className={`mr-20 mb-5 rounded-full p-0 transition duration-500 ease-in-out sm:mb-0 ${
                                        selected != "" ? "opacity-80" : ""
                                    }`}
                                />
                            </div>
                        </Zoomed>
                    </div>

                    <div className="absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4">
                        <div className="relative h-[140px] w-[140px] animate-rotations">
                            <Skill
                                className="absolute -top-[55px] -left-[15px]"
                                IconData={SiFlutter}
                                title="Flutter"
                                setSelected={(title: string) => {
                                    setSelected(title);
                                }}
                            ></Skill>

                            <Skill
                                className="absolute bottom-[100px] -right-[75px]"
                                IconData={SiReact}
                                title="React"
                                setSelected={(title: string) => {
                                    setSelected(title);
                                }}
                            ></Skill>
                            <Skill
                                className="absolute -bottom-[70px] left-[20px]"
                                IconData={SiNextdotjs}
                                title="NextJS"
                                small
                                setSelected={(title: string) => {
                                    setSelected(title);
                                }}
                            ></Skill>
                            <div className="absolute top-[50%] left-[50%] -z-10 -translate-x-2/4 -translate-y-2/4 rounded-full border-4 border-emerald-400 p-[145px] opacity-10 "></div>
                        </div>
                    </div>
                    <div className="pointer-events-none relative h-[380px] w-[380px] animate-rotationsRev">
                        <div className="absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 rounded-full border-4 border-emerald-400 p-[240px] opacity-10"></div>
                        <Skill
                            className="pointer-events-auto absolute top-[5px] left-[35px]"
                            IconData={SiFigma}
                            title="Figma"
                            setSelected={(title: string) => {
                                setSelected(title);
                            }}
                        ></Skill>
                        <Skill
                            className="pointer-events-auto absolute top-[15px] right-[15px]"
                            IconData={SiDotnet}
                            small
                            title="Microsoft"
                            setSelected={(title: string) => {
                                setSelected(title);
                            }}
                        ></Skill>
                        <Skill
                            className="pointer-events-auto absolute bottom-[30px] right-[5px]"
                            IconData={SiPostgresql}
                            small
                            title="Postgress"
                            setSelected={(title: string) => {
                                setSelected(title);
                            }}
                        ></Skill>
                        <Skill
                            className="pointer-events-auto absolute bottom-[30px] left-[5px]"
                            IconData={SiAdobeillustrator}
                            title="Illustrator"
                            small
                            setSelected={(title: string) => {
                                setSelected(title);
                            }}
                        ></Skill>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SelectedInformation = (props: { element: ISkillElement }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-[50%] left-[50%] z-50 -translate-x-2/4 -translate-y-2/4 text-xl"
        >
            <div className="flex flex-col items-center justify-center">
                <IconContext.Provider value={{}}>
                    <props.element.icon
                        size={50}
                        className="white"
                    ></props.element.icon>
                </IconContext.Provider>

                <p className="max-w-[100px] pt-1 text-center font-light text-black dark:text-white">
                    {props.element.title}
                </p>
            </div>
        </motion.div>
    );
};

export default Skills;
