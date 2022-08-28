import React from "react";
import styles from "../../styles/components/Skill.module.css";

const Skill = (props: { icon: JSX.Element; title: string }) => {
    return (
        <div className={styles.Skill}>
            {props.icon}
            <p className={styles.Title}>{props.title}</p>
        </div>
    );
};

export default Skill;
