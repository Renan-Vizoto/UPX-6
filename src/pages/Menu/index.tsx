import React from 'react';
import Card from '../../components/Card';
import styles from './Menu.module.css';

import umidadeSolo from '../../assets/solo.png';
import umidadeAr from '../../assets/humidity.png';
import temperatura from '../../assets/Temperature.png';
import nivelReservatorio from '../../assets/Rain.png';

export default function Menu() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Mushroom Greenhouse</h1>
            <div className={styles.cards}>
                <Card 
                    title="Umidade do solo"
                    value="25%" 
                    image={umidadeSolo} 
                    backgroundColor="#90EE90"
                    linkTo="/umidade-solo"  // Caminho para a página do gráfico
                />
                <Card 
                    title="Umidade do ar" 
                    value="60%" 
                    image={umidadeAr} 
                    backgroundColor="#FFD700"
                    linkTo="/umidade-ar"  // Caminho para a página do gráfico
                />
                <Card 
                    title="Nível de água no reservatório" 
                    value="75%" 
                    image={nivelReservatorio} 
                    backgroundColor="#A3D5F7"
                    linkTo="/nivel-reservatorio"  // Caminho para a página do gráfico
                />
                <Card 
                    title="Temperatura da estufa" 
                    value="22°C" 
                    image={temperatura} 
                    backgroundColor="#FF6347"
                    linkTo="/temperatura-estufa"  // Caminho para a página do gráfico
                />
            </div>
        </div>
    );
}
