import styles from "../../styles/components/Card.module.css";

const Card = (props: {
    title: string;
    color?: string;
    icon?: JSX.Element;
    children?: React.ReactElement;
    highlight?: JSX.Element;
    secondary?: boolean;
}) => {
    return (
        <div
            className={`${styles.Card} ${
                props.secondary ? styles.Secondary : ""
            }`}
        >
            {props.icon}

            {props.highlight && (
                <div className={styles.Highlight}>{props.highlight}</div>
            )}

            <div className={styles.Body}>
                <h3 className={`${styles.Title}`}>{props.title}</h3>

                <div className={styles.Content}>{props.children}</div>
            </div>
        </div>
    );
};

export default Card;
