import { useEffect, useState } from 'react';
import { api } from '../api/api';
import { type FlightData } from '../types/flight.ts';

export default function FlightDashboard() {
    const [flight, setFlight] = useState<FlightData | null>(null);

    const fetchLastFlight = async () => {
        try {
            const res = await api.get('/flight-data');
            const data = Array.isArray(res.data) ? res.data[res.data.length - 1] : res.data;
            setFlight(data);
        } catch (error) {
            console.error("שגיאה במשיכת נתונים:", error);
        }
    };

    useEffect(() => {
        fetchLastFlight();
        const interval = setInterval(fetchLastFlight, 3000); // רענון כל 3 שניות
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="dashboard-container">
            <h2>Flight Telemetry</h2>
            {flight ? (
                <div className="telemetry-data">
                    <p>Altitude: {flight.altitude} ft</p>
                    <p>HSI: {flight.hsi}°</p>
                    <p>ADI: {flight.adi}°</p>
                </div>
            ) : (
                <p>Waiting for data...</p>
            )}
        </div>
    );
}