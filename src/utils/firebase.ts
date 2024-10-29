import { SensorData } from "../types/firebase";
import { FormattedSensorReading } from "../types/sensors";

export function formatFirebaseSnapshot(data: SensorData): FormattedSensorReading[] {
    return Object.entries(data).map(([timestamp, reading]) => ({
        ...reading,
        timestamp: new Date(timestamp)
    }));
}