import React from 'react';
import { Link } from 'react-router-dom';  // Usar o Link do react-router-dom
import styles from './Card.module.css';

interface CardProps {
    title: string;
    value: string;
    image?: string;  // Torne a imagem opcional
    backgroundColor: string;
    linkTo: string;
}

const Card: React.FC<CardProps> = ({ title, value, image, backgroundColor, linkTo }) => {
    return (
        <Link to={linkTo} className={styles.cardLink}>
            <div className={styles.card}>
                <div className={styles.content}>
                    <h3>{title}</h3>
                    <br />
                    <p>{value}</p>
                </div>
                {image && ( // Exiba a imagem somente se existir
                    <div className={styles.imageWrapper}>
                        <div className={styles.background} style={{ backgroundColor }}></div>
                        <img src={image} alt={title} className={styles.image} />
                    </div>
                )}
            </div>
        </Link>
    );
};

export default Card;
