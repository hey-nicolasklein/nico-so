import styles from "../../styles/Navbar.module.css";
import ContactButton from "./ContactButton";
import NavItem from "./NavItem";

const Navbar = () => {
    return (
        <div className="relative">
            <div className="bg-white dark:bg-gray-800 fixed top-0 inset-x-0 sm:inset-x-auto sm:right-0 flex duration-700 justify-around align-center drop-shadow-3xl hover:drop-shadow-4xl z-10 rounded-lg bg-opacity-70 mx-5 my-5 backdrop-blur-sm py-4 sm:py-0">
                <div className="flex justify-between align-center w-full px-6 sm:px-6 max max-w-screen-2xl">
                    <img
                        src="/logo.svg"
                        alt="SVG mit img laden"
                        width="50"
                        height="50"
                        className="dark:invert"
                    />
                    <div className={styles.NavItems}>
                        <NavItem name="Home" />
                        <NavItem name="Skills" />
                        <ContactButton />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
