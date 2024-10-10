import React from 'react';
import styles from './Card.module.css';

interface CardProps {
    title: string;
    value: string;
    image: string;
    backgroundColor: string;
}

const Card: React.FC<CardProps> = ({ title, value, image, backgroundColor }) => {
    return (
        <div className={styles.card}>
            <div className={styles.content}>
                <h3>{title}</h3>
                <br />
                <p>{value}</p>
            </div>
            <div className={styles.imageWrapper}>
                <div className={styles.background} style={{ backgroundColor }}></div>
                <img src={image} alt={title} className={styles.image} />
            </div>
        </div>
    );
};

export default Card;
