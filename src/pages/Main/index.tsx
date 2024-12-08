import Card from '../../components/Card';
import styles from './Menu.module.css';

import umidadeSolo from '../../assets/soil-moisture.svg';
import umidadeAr from '../../assets/humidity.svg';
import temperatura from '../../assets/temp.svg';
import nivelReservatorio from '../../assets/water.svg';
import cogumelo from '../../assets/mushroom.svg';

import { useSensorData } from '../../contexts/SensorDataContext';

export default function Main() {
    const { lastRead, loading } = useSensorData();

    return (
        <div className={styles.container}>
            <center>
                <h1 className={styles.title}>MyMush</h1> 
                <img className={styles.mushIcon} src={cogumelo} alt={"cogumelo"} />
            </center>
            {!loading ? (
                <div className={styles.cards}>
                    <Card
                        title="Umidade do solo"
                        value={`${lastRead?.umidadeSolo}%`}
                        image={umidadeSolo}
                        backgroundColor="#90EE90"
                        linkTo="/umidade-solo"
                    />
                    <Card
                        title="Umidade do ar"
                        value={`${lastRead?.umidadeAr}%`}
                        image={umidadeAr}
                        backgroundColor="#FFD700"
                        linkTo="/umidade-ar"
                    />
                    <Card
                        title="Nível de água no reservatório"
                        value={`${lastRead?.nivelReservatorio}%`}
                        image={nivelReservatorio}
                        backgroundColor="#A3D5F7"
                        linkTo="/nivel-agua"
                    />
                    <Card
                        title="Temperatura da estufa"
                        value={`${lastRead?.temperatura}°C`}
                        image={temperatura}
                        backgroundColor="#FF6347"
                        linkTo="/temperatura"
                    />

                </div>)
                :
                <div className={styles.spinnerContainer}>
                    <div className={styles.spinner}></div>
                </div>
            }
        </div>
    );
}
