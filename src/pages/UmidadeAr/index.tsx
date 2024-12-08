import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    TimeScale
} from 'chart.js';
import 'chartjs-adapter-date-fns';
import { useSensorData } from '../../contexts/SensorDataContext';

Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    TimeScale
);

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

    const options: any = {
        maintainAspectRatio: false,
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'day',
                    tooltipFormat: 'yyyy-MM-dd',
                },
                ticks: {
                    maxTicksLimit: 7,
                }
            },
            y: {
                type: 'linear',
                beginAtZero: true
            }
        },
    };

    return (
        <div
            style={{
                margin: 30,
            }}
        >
            <h2>Umidade do Ar</h2>
            <div style={{ height: '300px', width: '100%' }}>
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

export default UmidadeAr;
