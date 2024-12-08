import { SensorData } from "../types/firebase";
import { FormattedSensorReading } from "../types/sensors";

export function formatFirebaseSnapshot(data: SensorData): FormattedSensorReading[] {
    return Object.entries(data).map(([timestamp, reading]) => ({
        nivelReservatorio: Number((reading.nivelReservatorio * 100).toFixed(2)),
        umidadeAr: Number((reading.umidadeAr * 100).toFixed(2)),
        umidadeSolo: Number((reading.umidadeSolo * 100).toFixed(2)),
        temperatura: reading.temperatura,
        timestamp: new Date(timestamp)
    }));
}