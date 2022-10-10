import React, { PropsWithChildren, useEffect, useState } from "react";
import styles from "../../styles/components/Skills.module.css";
import { AiFillDatabase, AiOutlineMobile } from "react-icons/ai";
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
import { IconType } from "react-icons";
import Perspective from "../Perspecitive";
import Zoomed from "../Zoomed";
import Wiggle from "../Wiggle";

const Skills = () => {
    const [selected, setSelected] = useState("");

    useEffect(() => {
        console.log(selected);
    }, [selected, setSelected]);

    return (
        <div>
            <Heading>Skills</Heading>
            <div className="flex justify-center p-20">
                <div className="relative">
                    <div
                        style={{
                            boxShadow: "inset -25px -15px 40px rgba(0,0,0,.3)",
                        }}
                        className="absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 rounded-full bg-gradient-to-t from-black to-emerald-300"
                    >
                        <Image
                            src={memoji}
                            alt="SVG mit img laden"
                            width="150"
                            height="150"
                            placeholder="blur"
                            quality={50}
                            priority
                            className="mr-20 mb-5 rounded-full p-24 transition duration-500 ease-in-out sm:mb-0 "
                        />
                    </div>
                    <div className="absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4">
                        <div className="relative h-[140px] w-[140px] animate-rotations">
                            <Skill
                                className="absolute -top-[55px] -left-[15px]"
                                IconData={SiFlutter}
                                title="Flutter"
                                setSelected={() => {
                                    setSelected("Flutter");
                                }}
                                clear={() => setSelected("")}
                                selected={selected}
                            ></Skill>

                            <Skill
                                className="absolute bottom-[100px] -right-[80px]"
                                IconData={SiReact}
                                title="React"
                                setSelected={() => {
                                    setSelected("React");
                                }}
                                clear={() => setSelected("")}
                                selected={selected}
                            ></Skill>
                            <Skill
                                className="absolute -bottom-[70px] left-[20px]"
                                IconData={SiNextdotjs}
                                title="NextJS"
                                small
                                selected={selected}
                            ></Skill>
                            <div className="absolute top-[50%] left-[50%] -z-10 -translate-x-2/4 -translate-y-2/4 rounded-full border-4 border-emerald-400 p-[145px] opacity-20"></div>
                        </div>
                    </div>
                    <div className="pointer-events-none relative h-[380px] w-[380px] animate-rotationsRev">
                        <div className="absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 rounded-full border-4 border-emerald-400 p-[240px] opacity-20"></div>
                        <Skill
                            className="pointer-events-auto absolute top-[5px] left-[15px]"
                            IconData={SiFigma}
                            title="Figma"
                            selected={selected}
                        ></Skill>
                        <Skill
                            className="pointer-events-auto absolute top-[15px] right-[15px]"
                            IconData={SiDotnet}
                            small
                            title="Microsoft .NET"
                            selected={selected}
                        ></Skill>
                        <Skill
                            className="pointer-events-auto absolute bottom-[30px] right-[5px]"
                            IconData={SiPostgresql}
                            small
                            title="PostgressSQL"
                            selected={selected}
                            setSelected={() => {
                                console.log("Hey");
                                setSelected("PostgressSQL");
                            }}
                            clear={() => setSelected("")}
                        ></Skill>
                        <Skill
                            className="pointer-events-auto absolute bottom-[30px] left-[5px]"
                            IconData={SiAdobeillustrator}
                            title="Adobe Illustrator"
                            selected={selected}
                            small
                        ></Skill>
                    </div>
                </div>
            </div>
        </div>
    );
};

interface SkillProps {
    className?: string;
    IconData: IconType;
    title: string;
    small?: boolean;
    setSelected?: () => void;
    selected: string;
    clear?: () => void;
}

const Skill = ({
    className = "",
    IconData,
    small = false,
    title,
    setSelected,
    selected,
    clear,
}: SkillProps) => {
    return (
        <motion.div
            onHoverStart={setSelected}
            onHoverEnd={clear}
            style={{
                boxShadow: "inset -25px -15px 40px rgba(0,0,0,.3)",
                animation: "inherit",
                animationDirection: "reverse",
            }}
            className={`z-20 ${className}`}
        >
            <div className="absolute top-[50%] left-[50%] -z-10 -translate-x-2/4 -translate-y-2/4 rounded-full bg-gradient-to-br from-emerald-500 to-green-300 p-[20px] duration-300 ease-out hover:border-6">
                <IconData size={small ? 35 : 45}></IconData>
            </div>
        </motion.div>
    );
};

export default Skills;
