import styles from "../../styles/Navbar.module.css";
import ContactButton from "./ContactButton";
import NavItem from "./NavItem";

const Navbar = () => {
    return (
        <div className="">
            <div className={styles.Wrapper}>
                <div className={styles.Navbar}>
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
