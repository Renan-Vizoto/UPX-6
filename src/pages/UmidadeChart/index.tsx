import React from 'react';
import LineChart from '../../components/LineChart/LineChart'; // Certifique-se de ajustar o caminho corretamente
import styles from './Umidade.module.css';

export default function UmidadeChart() {
  return (
    <div className={styles.chartContainer}>
      <h1>Gráfico de Umidade</h1>
      <LineChart />
    </div>
  );
}
