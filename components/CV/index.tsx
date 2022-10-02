import React, { ReactElement } from "react";
import cvItems from "../../data/cv_items";
import Heading from "../Heading";

const CV = () => {
    return (
        <div className="mt-24 mb-10">
            <div className="flex justify-between gap-x-0.5">
                <CVElement heading="Education" entries={cvItems.education} />
                <CVElement heading="Experience" entries={cvItems.education} />
            </div>
        </div>
    );
};

const CVElement = (props: { heading: string; entries: any[] }) => {
    return (
        <div className="grow bg-indigo-100">
            <Heading className="mb-5">{props.heading}</Heading>
            <div className="flex flex-col gap-y-4">
                {props.entries.map((entry) => {
                    return <CVElementEntryComponent entry={entry} />;
                })}
            </div>
        </div>
    );
};

const CVElementEntryComponent = (props: { entry: CVElementEntry }) => {
    return (
        <div className="mb-3">
            <h2 className="text-2xl">{props.entry.title}</h2>
            <p className="text-lg ">{props.entry.time}</p>
            <p className="opacity-90">{props.entry.description}</p>
        </div>
    );
};

interface CVElementEntry {
    title: string;
    time: string;
    description: string;
}

export default CV;
