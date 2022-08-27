import styles from '../styles/Hero.module.css'

const Hero = () => {
    return <div className={styles.heroContainer}>
        <div className={styles.hero}>
            <div>
                <h2 className={styles.top}>Hey, I'm</h2>
                <h1 className={styles.name}>Nicolas</h1>
                <h3 className={styles.bottom}>Frontend developer by 🖤</h3>
            </div>
        </div>
    </div>
}

export default Hero;
