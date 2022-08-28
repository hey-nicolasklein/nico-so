import React from "react";
import styles from "../../styles/components/Skills.module.css";
import Skill from "./Skill";
import { AiFillDatabase, AiOutlineMobile } from "react-icons/ai";
import {
    SiAdobeillustrator,
    SiDotnet,
    SiFigma,
    SiFlutter,
    SiNextdotjs,
    SiReact,
} from "react-icons/si";

const Skills = () => {
    return (
        <div className={styles.Skills}>
            <Skill title="Flutter" icon={<SiFlutter size={40} />} />
            <Skill title="React" icon={<SiReact size={40} />} />
            <Skill title="Next.js" icon={<SiNextdotjs size={40} />} />
            <Skill title="ASP.NET" icon={<SiDotnet size={40} />} />
            <Skill
                title="Illustrator"
                icon={<SiAdobeillustrator size={40} />}
            />
            <Skill title="Figma" icon={<SiFigma size={40} />} />
        </div>
    );
};

export default Skills;
