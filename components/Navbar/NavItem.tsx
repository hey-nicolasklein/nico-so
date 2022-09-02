import React from "react";
import styles from "../../styles/components/NavItem.module.css";

const NavItem = (props: { name: string }) => {
    return (
        <a
            href={`#${props.name != "Home" ? props.name : ""}`}
            className={"text-gray-700 px-10 py-6 text-2xl hidden sm:block"}
        >
            {props.name}
        </a>
    );
};

export default NavItem;
