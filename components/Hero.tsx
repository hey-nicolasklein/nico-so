import styles from "../styles/Hero.module.css";
import Socials from "./Socials";

const Hero = () => {
    return (
        <div className={styles.heroContainer}>
            <div className={styles.hero}>
                <img
                    src="/assets/me.jpg"
                    alt="SVG mit img laden"
                    width="200"
                    height="200"
                    className={styles.ProfilPicture}
                />
                <div>
                    <h2 className={styles.top}>Hey, I&apos;m</h2>
                    <h1 className={styles.name}>Nicolas</h1>
                    <h3 className={styles.bottom}>Frontend developer by 🖤</h3>
                </div>
            </div>

            <div className={styles.socials}>
                <Socials />
            </div>
        </div>
    );
};

export default Hero;
