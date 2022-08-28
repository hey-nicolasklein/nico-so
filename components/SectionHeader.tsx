import React from "react";
import styles from "../styles/SectionHeader.module.css";

const SectionHeader = (props) => {
    return <h3 className={styles.SectionHeader}>{props.title}</h3>;
};

export default SectionHeader;
