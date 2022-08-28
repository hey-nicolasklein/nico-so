import React, { ReactComponentElement } from "react";
import styles from "../../styles/components/CustomButton.module.css";

const CustomButton = (props: {
    secondary: boolean;
    icon?: JSX.Element;
    title: string;
}) => {
    if (props.secondary) {
        return (
            <a href="" className={styles.Secondary}>
                <div className={styles.SecondaryContainer}>
                    {props.title}
                    {props.icon}
                </div>
            </a>
        );
    }

    return <button className={styles.Button}>{props.title}</button>;
};

export default CustomButton;
