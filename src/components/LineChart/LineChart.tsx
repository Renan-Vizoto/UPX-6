import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js'; // Importando os componentes necessários
import { collection, query, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

// Registro dos componentes
Chart.register(CategoryScale, LinearScale, PointElement, LineElement);

// Definindo a interface dos dados do sensor
interface SensorData {
  timestamp: number;
  umidade: number;
}

export default function LineChart() {
  const [data, setData] = useState<SensorData[]>([]);

  useEffect(() => {
    const q = query(collection(db, 'sensorData'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const chartData: SensorData[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        if (data.timestamp && data.umidadeAr) {
          const timestampInSeconds = Math.floor(data.timestamp.toMillis() / 1000);
          chartData.push({
            timestamp: timestampInSeconds,
            umidade: data.umidadeAr,
          });
        }
      });

      setData(chartData);
    });

    return () => unsubscribe();
  }, []);

  const chartConfig = {
    labels: data.map(item => new Date(item.timestamp * 1000).toLocaleTimeString()),
    datasets: [{
      label: 'Umidade ao longo do tempo',
      data: data.map(item => item.umidade),
      borderColor: 'blue',
      fill: false,
    }]
  };

  return <Line data={chartConfig} />;
}
