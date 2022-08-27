import styles from '../styles/Navbar.module.css'


const Navbar = () => {
    return <div className={styles.Navbar}>
        <img src="/logo.svg" alt="SVG mit img laden" width="50" height="50" />
        <div className={styles.NavItems}>
            <NavItem name='Home'/>
            <NavItem name='Experience'/>
            <NavItem name='Skills'/>
            <NavItem name='Links'/>
            <ContactButton/>
        </div>
    </div>
}

const NavItem = (props) => {
    return <a href="#" className={styles.NavItem}>
        {props.name}
    </a>
}

const ContactButton = () => {
    return <button className={styles.ContactButton} onClick={() => console.log('hey')}>
        Get In Touch
    </button>
}

export default Navbar;

