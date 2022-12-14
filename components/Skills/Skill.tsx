import { motion } from "framer-motion";
import React from "react";
import { IconType } from "react-icons";
import styles from "../../styles/components/Skill.module.css";
import Zoomed from "../Zoomed";

interface SkillProps {
    className?: string;
    IconData: IconType;
    title: string;
    small?: boolean;
    setSelected: (arg0: string) => void;
}

const Skill = ({
    className = "",
    IconData,
    small = false,
    title,
    setSelected,
}: SkillProps) => {
    function selectCallback() {
        setSelected(title);
    }

    function clearCallback() {
        console.log("leave");
        setSelected("");
    }

    return (
        <div
            onMouseOver={selectCallback}
            onMouseLeave={clearCallback}
            style={{
                boxShadow: "inset -25px -15px 40px rgba(0,0,0,.3)",
                animation: "inherit",
                animationDirection: "reverse",
                borderRadius: "999px",
            }}
            className={`z-20 ${className}`}
        >
            <Zoomed>
                <motion.div
                    initial={{
                        scale: 1,
                    }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="
 top-[50%] left-[50%] -z-10 -translate-x-2/4 -translate-y-2/4 rounded-full bg-gradient-to-br from-emerald-500 to-green-300 p-[20px] duration-300 ease-in-out"
                >
                    <IconData size={small ? 30 : 50}></IconData>
                </motion.div>
            </Zoomed>
        </div>
    );
};

export default Skill;
