import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';  // Importe os componentes necessários
import { db } from '../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { Timestamp } from 'firebase/firestore';

// Registrar componentes no Chart.js
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const UmidadeSolo: React.FC = () => {
    const [sensorValues, setSensorValues] = useState<number[]>([]);  // Armazena os valores dos sensores
    const [timestamps, setTimestamps] = useState<string[]>([]);  // Armazena os timestamps formatados

    useEffect(() => {
        const fetchData = async () => {
            const querySnapshot = await getDocs(collection(db, "sensorData"));

            const values: number[] = [];
            const timeLabels: string[] = [];

            querySnapshot.forEach((doc) => {
                const data = doc.data();
                
                // Adiciona os valores de umidade ao array
                values.push(data.umidadeSolo);

                // Converte o timestamp do Firestore para uma string legível
                const timestamp = data.timestamp as Timestamp;
                const date = timestamp.toDate();
                const formattedDate = date.toLocaleTimeString();  // Formata a hora para ser exibida no gráfico
                timeLabels.push(formattedDate);
            });

            setSensorValues(values);
            setTimestamps(timeLabels);
        };

        fetchData();
    }, []);

    // Dados do gráfico
    const data = {
        labels: timestamps,  // Usa os timestamps formatados como labels
        datasets: [
            {
                label: 'Umidade do Solo (%)',
                data: sensorValues,  // Usa os valores de umidade
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
            },
        ],
    };

    const options = {
        maintainAspectRatio: false,
    };

    return (
        <div>
            <h2>Umidade do Solo</h2>
            <div style={{ height: '300px', width: '100%' }}>
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

export default UmidadeSolo;
