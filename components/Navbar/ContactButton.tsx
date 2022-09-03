import React from "react";
import styles from "../../styles/components/ContactButton.module.css";

const ContactButton = () => {
    return (
        <button
            className="leading-none	 background bg-transparent px-2.5 py-2.5 rounded border-solid border-2 
            text-xl	font-normal	text-slate-600 border-slate-500	ml-5 dark:text-white dark:border-white"
            onClick={() =>
                (window.location.href =
                    "mailto:hey@nico.so?subject=Hey&body=Let%20us%20talk%20:)")
            }
        >
            Get In Touch
        </button>
    );
};

export default ContactButton;
