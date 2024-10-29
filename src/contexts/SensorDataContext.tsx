import React, { createContext, useContext, useEffect, useState } from 'react';
import { database } from '../config/firebaseConfig';
import { ref, onValue, off } from 'firebase/database';
import { FormattedSensorReading } from '../types/sensors';
import { SensorData } from '../types/firebase';
import { formatFirebaseSnapshot } from '../utils/firebase';

interface SensorDataContextType {
    sensorData: FormattedSensorReading[];
    lastRead?: FormattedSensorReading;
    loading: boolean;
}

const SensorDataContext = createContext<SensorDataContextType | undefined>(undefined);

export const SensorDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [sensorData, setSensorData] = useState<FormattedSensorReading[]>([]);
    const [lastRead, setLastRead] = useState<FormattedSensorReading>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const sensorDataRef = ref(database, '/');
        onValue(sensorDataRef, (snapshot) => {
            const data: SensorData = snapshot.val();
            const formattedSensorData = formatFirebaseSnapshot(data);
            setSensorData(formattedSensorData);
            setLastRead(formattedSensorData.at(-1));
            setLoading(false);
        });

        return () => {
            off(sensorDataRef);
        };
    }, []);

    return (
        <SensorDataContext.Provider value={{ sensorData, lastRead, loading }}>
            {children}
        </SensorDataContext.Provider>
    );
};

export const useSensorData = () => {
    const context = useContext(SensorDataContext);
    if (!context) {
        throw new Error("useSensorData must be used within a SensorDataProvider");
    }
    return context;
};
