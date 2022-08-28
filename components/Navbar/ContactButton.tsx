import React from "react";
import styles from "../../styles/components/ContactButton.module.css";

const ContactButton = () => {
    return (
        <button
            className={styles.ContactButton}
            onClick={() => console.log("hey")}
        >
            Get In Touch
        </button>
    );
};

export default ContactButton;
