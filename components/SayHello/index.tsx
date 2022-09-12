import React from "react";
import styles from "../../styles/components/SayHello.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import CustomButton from "./CustomButton";

const SayHello = () => {
    return (
        <div className={styles.Container}>
            <h2 className={styles.Title}>Say hello 👋🏼</h2>
            <p className={styles.SubTitle}>Let’s change the world together</p>
            <div className={styles.ButtonRow}>
                <CustomButton secondary={false} title="Contact" />
                <CustomButton
                    secondary={true}
                    title="Go to my Github"
                    icon={<AiOutlineArrowRight size={20} />}
                />
            </div>
            <img
                src="/assets/flutter.svg"
                alt="SVG mit img laden"
                className={styles.Image}
            />
        </div>
    );
};

export default SayHello;
