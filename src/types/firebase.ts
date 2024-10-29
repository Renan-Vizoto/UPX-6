export interface SensorReading {
    nivelReservatorio: number; 
    temperatura: number;        
    umidadeAr: number;          
    umidadeSolo: number;        
}

export interface SensorData {
    [timestamp: string]: SensorReading;
}