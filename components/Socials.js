import styles from '../styles/Socials.module.css'
import { FaBeer } from 'react-icons/fa';
import { BsBehance, BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
import { IconContext } from "react-icons";


/// LinkedIn, Behance, Github, Twitter

const Socials = () => {
    return <IconContext.Provider value={{ color: 'black', className: 'react-icons' }}>
    <div className={styles.SocialsBar}>
        <BsLinkedin size={40}  />
        <BsBehance size={40}  />
        <BsGithub size={40}  />
        <BsTwitter size={40}  />
    </div>
    </IconContext.Provider>
    
}

export default Socials;