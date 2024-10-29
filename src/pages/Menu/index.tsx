import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import styles from './Menu.module.css';
import { db } from '../../firebaseConfig'; // Importa sua configuração do Firebase
import { collection, getDocs } from 'firebase/firestore';

// Importar as imagens
import umidadeSolo from '../../assets/solo.png';
import umidadeAr from '../../assets/humidity.png';
import temperatura from '../../assets/Temperature.png';
import nivelReservatorio from '../../assets/Rain.png';

export default function Menu() {
    // Estados para armazenar os dados do Firestore
    const [sensorData, setSensorData] = useState<any>(null);

    useEffect(() => {
        // Função para buscar os dados da coleção sensorData
        const fetchData = async () => {
            const querySnapshot = await getDocs(collection(db, "sensorData"));
            querySnapshot.forEach((doc) => {
                setSensorData(doc.data());
            });
        };

        fetchData();
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>MUSHROOM</h1>
            <div className={styles.cards}>
                {sensorData && (
                    <>
                        <Card 
                            title="Umidade do solo" 
                            value={`${sensorData.umidadeSolo}%`} 
                            image={umidadeSolo} 
                            backgroundColor="#90EE90"
                            linkTo="/umidade-solo"
                        />
                        <Card 
                            title="Umidade do ar" 
                            value={`${sensorData.umidadeAr}%`} 
                            image={umidadeAr} 
                            backgroundColor="#FFD700"
                            linkTo="/umidade-ar"
                        />
                        <Card 
                            title="Nível de água no reservatório" 
                            value={`${sensorData.nivelReservatorio}%`} 
                            image={nivelReservatorio} 
                            backgroundColor="#A3D5F7"
                            linkTo="/nivel-reservatorio"
                        />
                        <Card 
                            title="Temperatura da estufa" 
                            value={`${sensorData.temperatura}°C`} 
                            image={temperatura} 
                            backgroundColor="#FF6347"
                            linkTo="/temperatura-estufa"
                        />
                    </>
                )}
            </div>
        </div>
    );
}
