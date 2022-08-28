import React from "react";
import styles from "../../styles/components/NavItem.module.css";

const NavItem = (props: { name: string }) => {
    return (
        <a href="#" className={styles.NavItem}>
            {props.name}
        </a>
    );
};

export default NavItem;
