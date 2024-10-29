import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'; 
import { useSensorData } from '../../contexts/SensorDataContext';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const UmidadeAr: React.FC = () => {
    const { sensorData } = useSensorData();

    const data = {
        labels: sensorData.map(i => i.timestamp), 
        datasets: [
            {
                label: 'Umidade do Ar (%)',
                data: sensorData.map(i => i.umidadeAr),
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
            <h2>Umidade do Ar</h2>
            <div style={{ height: '300px', width: '100%' }}>
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

export default UmidadeAr;
