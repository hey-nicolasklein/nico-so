import React, { ReactNode } from "react";

const Heading = (props: { children: ReactNode; className?: string }) => {
    return (
        <div className={props.className ?? ""}>
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
            <h2 className="normal hidden text-lg font-normal leading-none text-white sm:block">
                {props.children}
            </h2>
        </div>
    );
};

export default Heading;
