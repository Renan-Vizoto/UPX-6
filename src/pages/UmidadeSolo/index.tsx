import React from 'react';
import styles from './UmidadeSolo.module.css';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import Card from '../../components/Card'; // Importar o componente Card
import { Link } from 'react-router-dom'; // Para a setinha de voltar

// Registrar as dependências do gráfico
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const UmidadeSolo: React.FC = () => {
    // Mock de 10 valores, coletados a cada 1h
    const mockData = {
        labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00'],
        datasets: [
            {
                label: 'Umidade (%)',
                data: [30, 35, 28, 40, 38, 35, 30, 32, 34, 25], // Valores mockados
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
            }
        ],
    };

    const options = {
        maintainAspectRatio: false, // Isso permite customizar a altura e a largura
    };

    // Cálculo do valor atual e média
    const currentValue = mockData.datasets[0].data[mockData.datasets[0].data.length - 1];
    const averageValue = (
        mockData.datasets[0].data.reduce((sum, value) => sum + value, 0) / mockData.datasets[0].data.length
    ).toFixed(2);

    return (
        <div className={styles.divPai}>
            {/* Setinha para voltar */}
            <Link to="/" className={styles.backArrow}>&larr;</Link>

            <h2>Umidade do Solo</h2>

            <div style={{ height: '250px', width: '100%' }}>
                <Line data={mockData} options={options} />
            </div>

            {/* Exibição do valor atual e da média geral */}
            <div className={styles.cardsContainer}>
                <Card
                    title="Valor Atual"
                    value={`${currentValue}%`}
                    backgroundColor="#90EE90"
                    linkTo="/umidade-solo"  // Pode deixar assim ou ajustar para a página atual
                />
                <Card
                    title="Média Geral"
                    value={`${averageValue}%`}
                    backgroundColor="#FFD700"
                    linkTo="/umidade-solo"  // Pode deixar assim ou ajustar para a página atual
                />
            </div>
        </div>
    );
};

export default UmidadeSolo;
