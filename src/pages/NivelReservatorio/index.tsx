import React from 'react';
import styles from './NivelReservatorio.module.css';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Registrar as dependências do gráfico
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const NivelReservatorio: React.FC = () => {
    // Mock de 10 valores, coletados a cada 1h
    const mockData = {
        labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00'],
        datasets: [
            {
                label: 'Umidade (%)', // Altere para o dado que deseja exibir
                data: [30, 35, 28, 40, 38, 35, 30, 32, 34, 37], // Valores mockados
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
            }
        ],
    };

    const options = {
        maintainAspectRatio: false, // Isso permite customizar a altura e a largura
    };

    return (
        <div className={styles.divPai}>
            <h2>Nível do Reservatório</h2>
            <div style={{ height: '250px', width: '100%' }}>  {/* Aumenta a altura */}
                <Line data={mockData} options={options} />
            </div>
        </div>
    );
};

export default NivelReservatorio;
