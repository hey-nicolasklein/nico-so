import React, { ReactNode } from "react";

const Heading = (props: { children: ReactNode; className?: string }) => {
    return (
        <div
            className={props.className ?? "" + "align-center flex items-start"}
        >
            <div className="mt-[2px] mr-2 h-[30px] w-[10px] rounded-full bg-gradient-to-br from-emerald-500 to-green-300"></div>

            <h1 className="normal sm: text-3xl font-bold leading-none sm:text-4xl sm:font-normal">
                {props.children}
            </h1>
        </div>
    );
};

export const HeadingDescription = (props: {
    children: ReactNode;
    className?: string;
}) => {
    return (
        <div className={props.className ?? ""}>
            <h2 className="normal hidden text-lg font-normal leading-none text-black dark:text-white sm:block">
                {props.children}
            </h2>
        </div>
    );
};

export default Heading;
