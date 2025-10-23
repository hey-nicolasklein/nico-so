import React, { PropsWithChildren, useEffect, useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

import * as SimpleIcons from "react-icons/si";
import * as FontAwesome from "react-icons/fa";
import { Skill as SkillType } from "../../lib/strapi";
import Heading from "../Heading";
import memoji from "../../public/assets/memoji_dark.png";
import Image from "next/image";
import { IconContext, IconType } from "react-icons";
import Zoomed from "../Zoomed";
import Skill from "./Skill";
import BackgroundGrid from "../BackgroundGrid";
import AnimateInView from "../AnimateInView";

interface ISkillElement {
    title: string;
    icon: IconType;
}

interface SkillsProps {
    skills: SkillType[];
}

/**
 * Helper function to dynamically load icon from react-icons based on icon name
 */
const getIconComponent = (iconName: string): IconType => {
    // Try SimpleIcons (Si prefix)
    if (SimpleIcons[iconName]) {
        return SimpleIcons[iconName] as IconType;
    }
    // Try FontAwesome (Fa prefix)
    if (FontAwesome[iconName]) {
        return FontAwesome[iconName] as IconType;
    }
    // Default fallback icon
    return SimpleIcons.SiReact as IconType;
};

const Skills = ({ skills }: SkillsProps) => {
    const [selected, setSelected] = useState("");

    // Convert Strapi skills to component format
    const elements: ISkillElement[] = skills.map((skill) => ({
        title: skill.title,
        icon: getIconComponent(skill.iconName),
    }));

    return (
        <AnimateInView>
            <Heading>Skills</Heading>
            <div className="relative flex justify-center">
                <div className="relative">
                    <div className=" absolute left-[50%] top-[50%] -z-50 h-[270px] w-[270px] -translate-x-2/4 -translate-y-2/4  rounded-full bg-gradient-radial from-emerald-300 via-transparent blur-xl drop-shadow-4xl"></div>
                    <div className="absolute left-[50%] top-[50%] z-40 -translate-x-2/4 -translate-y-2/4">
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
                                            className="absolute left-[50%] top-[50%] z-40 h-[150px] w-[150px] -translate-x-2/4 -translate-y-2/4 rounded-full backdrop-blur-lg"
                                        ></motion.div>
                                    </div>
                                )}
                            </AnimatePresence>

                            <div
                                style={{
                                    boxShadow:
                                        "inset -25px -15px 40px rgba(0,0,0,.3)",
                                }}
                                className={`absolute left-[50%] top-[50.0%] h-[150px] w-[150px] -translate-x-2/4 -translate-y-2/4 rounded-full bg-gradient-to-t from-transparent to-emerald-300`}
                            >
                                <Image
                                    src={memoji}
                                    alt="SVG mit img laden"
                                    placeholder="blur"
                                    quality={50}
                                    priority
                                    fill
                                    className={`mb-5 mr-20 rounded-full object-cover p-0 transition duration-500 ease-in-out sm:mb-0 ${
                                        selected != "" ? "opacity-80" : ""
                                    }`}
                                />
                            </div>
                        </Zoomed>
                    </div>

                    <div className="absolute left-[50%] top-[50%] -translate-x-2/4 -translate-y-2/4 ">
                        <div className="relative h-[140px] w-[140px] animate-rotations">
                            {elements[0] && (
                                <Skill
                                    className="absolute -left-[90px] -top-[55px]"
                                    IconData={elements[0].icon}
                                    title={elements[0].title}
                                    setSelected={(title: string) => {
                                        setSelected(title);
                                    }}
                                ></Skill>
                            )}

                            {elements[1] && (
                                <Skill
                                    className="absolute -right-[22px] bottom-[160px]"
                                    IconData={elements[1].icon}
                                    title={elements[1].title}
                                    setSelected={(title: string) => {
                                        setSelected(title);
                                    }}
                                ></Skill>
                            )}

                            {elements[2] && (
                                <Skill
                                    className="absolute -bottom-[110px] left-[20px]"
                                    IconData={elements[2].icon}
                                    title={elements[2].title}
                                    small
                                    setSelected={(title: string) => {
                                        setSelected(title);
                                    }}
                                ></Skill>
                            )}
                            <div className="absolute left-[50%] top-[50%] -z-10 -translate-x-2/4 -translate-y-2/4 rounded-full border-4 border-emerald-400 p-[150px] opacity-10 "></div>
                        </div>
                    </div>
                    <div className="pointer-events-none relative h-[420px] w-[420px] animate-rotationsRev rounded-full  p-[300px]">
                        <div className="absolute left-[50%] top-[50%] -translate-x-2/4 -translate-y-2/4 rounded-full border-4 border-emerald-400 p-[240px] opacity-10"></div>
                        {elements[3] && (
                            <Skill
                                className="pointer-events-auto absolute left-[90px] top-[70px]"
                                IconData={elements[3].icon}
                                title={elements[3].title}
                                setSelected={(title: string) => {
                                    setSelected(title);
                                }}
                            ></Skill>
                        )}
                        {elements[4] && (
                            <Skill
                                className="pointer-events-auto absolute right-[220px] top-[30px]"
                                IconData={elements[4].icon}
                                small
                                title={elements[4].title}
                                setSelected={(title: string) => {
                                    setSelected(title);
                                }}
                            ></Skill>
                        )}
                        {elements[5] && (
                            <Skill
                                className="pointer-events-auto absolute bottom-[300px] right-[25px]"
                                IconData={elements[5].icon}
                                small
                                title={elements[5].title}
                                setSelected={(title: string) => {
                                    setSelected(title);
                                }}
                            ></Skill>
                        )}
                        {elements[6] && (
                            <Skill
                                className="pointer-events-auto absolute bottom-[30px] left-[200px]"
                                IconData={elements[6].icon}
                                title={elements[6].title}
                                small
                                setSelected={(title: string) => {
                                    setSelected(title);
                                }}
                            ></Skill>
                        )}
                    </div>
                </div>
            </div>
        </AnimateInView>
    );
};

const SelectedInformation = (props: { element: ISkillElement }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute left-[50%] top-[50%] z-50 -translate-x-2/4 -translate-y-2/4 text-xl"
        >
            <div className="flex flex-col items-center justify-center">
                <IconContext.Provider value={{}}>
                    <motion.div
                        initial={{
                            opacity: 0,
                            rotate: 20,
                        }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <props.element.icon
                            size={50}
                            className="white"
                        ></props.element.icon>
                    </motion.div>
                </IconContext.Provider>

                <p className="max-w-[100px] pt-1 text-center font-light text-black dark:text-white">
                    {props.element.title}
                </p>
            </div>
        </motion.div>
    );
};

export default Skills;
