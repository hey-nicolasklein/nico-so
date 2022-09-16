import { useEffect, useState } from "react";

const Link = (props: { href: string; children?: any }) => {
    return (
        <a className="group" href={props.href} target="_blank" rel="noreferrer">
            <span
                className="relative inline-block cursor-pointer 
            select-none bg-gradient-to-br from-orange-500 to-pink-500 
            bg-clip-text font-mono font-semibold leading-tight text-transparent 
            drop-shadow-xl transition group-hover:-translate-y-0.5 
            group-hover:-rotate-6 group-hover:scale-90"
            >
                {props.children}
            </span>
        </a>
    );
};

export default Link;
