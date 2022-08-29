import React from "react";
import styles from "../styles/SectionHeader.module.css";

const SectionHeader = (props: { title: string }) => {
    return (
        <h3 className={styles.SectionHeader} id={props.title}>
            {props.title}
        </h3>
    );
};

export default SectionHeader;
