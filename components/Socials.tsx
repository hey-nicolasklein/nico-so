import styles from "../styles/Socials.module.css";
import { FaBeer } from "react-icons/fa";
import { BsBehance, BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
import { IconContext } from "react-icons";

/// LinkedIn, Behance, Github, Twitter

const Socials = () => {
    return (
        <IconContext.Provider value={{ className: "black dark:white" }}>
            <div className="flex justify-around	 w-72">
                <a href="https://www.linkedin.com/in/heynicolas/">
                    <BsLinkedin size={40} />
                </a>
                <a href="https://www.behance.net/hey_nicolasklein">
                    <BsBehance size={40} />
                </a>
                <a href="https://github.com/hey-nicolasklein">
                    <BsGithub size={40} />
                </a>
                <a href="https://twitter.com/heynicolasklein">
                    <BsTwitter size={40} />
                </a>
            </div>
        </IconContext.Provider>
    );
};

export default Socials;
