import styles from "../../styles/Navbar.module.css";
import ContactButton from "./ContactButton";
import NavItem from "./NavItem";

const Navbar = () => {
    return (
        <div className={styles.Wrapper}>
            <div className={styles.Navbar}>
                <img
                    src="/logo.svg"
                    alt="SVG mit img laden"
                    width="50"
                    height="50"
                />
                <div className={styles.NavItems}>
                    <NavItem name="Home" />
                    <NavItem name="Experience" />
                    <NavItem name="Skills" />
                    <NavItem name="Links" />
                    <ContactButton />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
