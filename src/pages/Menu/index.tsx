import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import { Link } from 'react-router-dom'; // Importar o Link
import styles from './Menu.module.css';

// Importar as imagens
import umidadeSolo from '../../assets/solo.png';
import umidadeAr from '../../assets/humidity.png';
import temperatura from '../../assets/Temperature.png';
import nivelReservatorio from '../../assets/Rain.png';

// Importando a configuração do Firebase
import { db } from '../../firebaseConfig';
import { collection, query, onSnapshot } from 'firebase/firestore';

export default function Menu() {
  // Estado para armazenar os valores dinâmicos
  const [sensorData, setSensorData] = useState({
    umidadeSolo: '',
    umidadeAr: '',
    nivelReservatorio: '',
    temperatura: ''
  });

  // Função para buscar os dados do Firebase em tempo real
  useEffect(() => {
    const q = query(collection(db, 'sensorData'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      snapshot.forEach((doc) => {
        const data = doc.data();
        setSensorData({
          umidadeSolo: `${data.umidadeSolo}%`,
          umidadeAr: `${data.umidadeAr}%`,
          nivelReservatorio: `${data.nivelReservatorio}%`,
          temperatura: `${data.temperatura}°C`
        });
      });
    });

    return () => unsubscribe(); // Cleanup na desmontagem
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mushroom Greenhouse</h1>
      <div className={styles.cards}>
        {/* Adicionando Link para redirecionar */}
        <Link to="/umidade-chart">
          <Card
            title="Umidade do solo"
            value={sensorData.umidadeSolo}
            image={umidadeSolo}
            backgroundColor="#90EE90"
          />
        </Link>
        <Card
          title="Umidade do ar"
          value={sensorData.umidadeAr}
          image={umidadeAr}
          backgroundColor="#FFD700"
        />
        <Card
          title="Nível de água no reservatório"
          value={sensorData.nivelReservatorio}
          image={nivelReservatorio}
          backgroundColor="#A3D5F7"
        />
        <Card
          title="Temperatura da estufa"
          value={sensorData.temperatura}
          image={temperatura}
          backgroundColor="#FF6347"
        />
      </div>
    </div>
  );
}
