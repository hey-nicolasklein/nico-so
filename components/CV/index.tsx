import React, { ReactElement, useEffect, useState } from "react";
import { BsTwitter } from "react-icons/bs";
import Heading from "../Heading";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { BiBuildings } from "react-icons/bi";
import { BsFillSignpostSplitFill } from "react-icons/bs";
import { CvEntry } from "../../lib/strapi";

import { IconType } from "react-icons";

interface CVProps {
    cvEntries: CvEntry[];
}

const CV = ({ cvEntries }: CVProps) => {
    const [hovered, setHovered] = useState("");

    // Separate entries by category
    const experienceEntries = cvEntries.filter(entry => entry.category === 'experience');
    const educationEntries = cvEntries.filter(entry => entry.category === 'education');

    return (
        <div className="mt-24 mb-10">
            <div className="flex flex-col justify-between gap-x-10 gap-y-10 md:flex-row md:gap-y-0">
                <CVElement
                    heading="Experience"
                    entries={experienceEntries}
                    onHoverStart={(page: string) => setHovered(page)}
                    onHoverEnd={() => setHovered("")}
                    hovered={hovered}
                    icon={BiBuildings}
                />
                <CVElement
                    heading="Education"
                    entries={educationEntries}
                    onHoverStart={(page: string) => setHovered(page)}
                    onHoverEnd={() => setHovered("")}
                    hovered={hovered}
                    icon={BsFillSignpostSplitFill}
                />
            </div>
        </div>
    );
};

const CVElement = (props: {
    heading: string;
    entries: CvEntry[];
    onHoverStart: (element: string) => void;
    onHoverEnd: () => void;
    hovered: string;
    icon: IconType;
}) => {
    return (
        <div className="">
            <div className="flex">
                <Heading className="mb-8 flex">{props.heading}</Heading>
            </div>
            <div className="flex flex-col gap-y-8">
                {props.entries.map((entry) => {
                    const hoveredTitle = `${props.hovered.toLowerCase()}`;
                    const currentEntryTitle = `${entry.title.toLowerCase()}`;

                    const isHovered = hoveredTitle === currentEntryTitle;

                    if (isHovered) {
                        console.log(hoveredTitle + " -- " + currentEntryTitle);
                    }

                    return (
                        <CVElementEntryComponent
                            key={entry.id}
                            entry={entry}
                            onHoverStart={() => props.onHoverStart(entry.title)}
                            onHoverEnd={() => props.onHoverEnd()}
                            hovered={isHovered}
                            icon={props.icon}
                        />
                    );
                })}
            </div>
        </div>
    );
};

const CVElementEntryComponent = (props: {
    entry: CvEntry;
    onHoverStart: () => void;
    onHoverEnd: () => void;
    hovered: boolean;
    icon: IconType;
}) => {
    const timeRange = `${props.entry.timeFrom} - ${props.entry.timeTo}`;

    return (
        <motion.div
            onHoverStart={props.onHoverStart}
            onHoverEnd={props.onHoverEnd}
            className="md:pb-8"
        >
            <a href={props.entry.link} target="_blank" rel="noreferrer">
                <div className="relative md:h-48">
                    <div className="w-full pl-5">
                        <div className="mb-2 flex items-start">
                            <props.icon size={20} className="mt-1 mr-2" />
                            <h2 className="text-2xl">{props.entry.title}</h2>
                        </div>
                        <p className="mb-2 text-lg">{timeRange}</p>
                        <p className="opacity-90">{props.entry.description}</p>
                    </div>
                    <div className="absolute -left-0 top-0 bottom-5 w-[5px] rounded-full bg-gray-200 opacity-50 dark:opacity-10"></div>
                    <AnimatePresence>
                        {props.hovered && <CVElementEntryHovered />}
                    </AnimatePresence>
                </div>
            </a>
        </motion.div>
    );
};

const CVElementEntryHovered = () => {
    return (
        <motion.div
            layoutId="educationAndExperiences"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute -left-0 top-0 bottom-5 w-[5px] rounded-full bg-emerald-200"
        ></motion.div>
    );
};

export default CV;
