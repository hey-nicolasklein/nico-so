import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";

const MotionNavbar = () => {
    const router = useRouter();
    const pages = ["About", "Art", "Curiosities"];

    const [hovered, setHovered] = useState("");

    useEffect(() => {
        console.log(hovered);
    }, [hovered]);

    return (
        <div className="fixed top-0 right-0 z-30 h-20 pr-6">
            <List>
                {pages.map((page) => {
                    const path = `${page.toLowerCase()}`;
                    const isHovered = hovered === page;

                    return (
                        <li key={page} className="">
                            <Link href={path} passHref>
                                <a className=" relative border-0">
                                    <NavContainer
                                        onHoverStart={() => setHovered(page)}
                                        onHoverEnd={() => setHovered("")}
                                        styles={
                                            router.pathname === path
                                                ? "text-green"
                                                : ""
                                        }
                                    >
                                        <AnimatePresence>
                                            {isHovered && <NavHovered />}
                                        </AnimatePresence>
                                        {page}
                                    </NavContainer>
                                </a>
                            </Link>
                        </li>
                    );
                })}
            </List>
        </div>
    );
};

const List = (props: { children?: ReactNode }) => {
    return (
        <ul className="relative top-[5px] m-0 inline-flex p-0">
            {props.children}
        </ul>
    );
};

const NavContainer = (props: {
    children?: ReactNode;
    onHoverStart: () => void;
    onHoverEnd: () => void;
    styles?: string;
}) => {
    return (
        <motion.span
            onHoverStart={props.onHoverStart}
            onHoverEnd={props.onHoverEnd}
            className={
                "decoration-none inline-block cursor-pointer p-[20px] text-[12px] text-xl leading-none text-gray-700 dark:text-white" +
                props.styles
            }
        >
            {props.children}
        </motion.span>
    );
};

const NavHovered = () => {
    return (
        <motion.span
            layoutId="nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-[-13px] left-0 right-0 -z-10 rounded-lg border-2 border-teal-300 pb-[15px] pt-[20px]"
        ></motion.span>
    );
};

export default MotionNavbar;
