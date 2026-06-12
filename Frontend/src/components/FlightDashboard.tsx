import { useEffect, useState } from 'react';
import { api } from '../api/api';
import { type FlightData } from '../types/flight';
import AltitudeIndicator from './Gauges/AltitudeIndicator';
import HsiIndicator from './Gauges/HsiIndicator';
import AdiIndicator from './Gauges/AdiIndicator';
import './Styles/Gauges.css';
interface FlightDashboardProps {
    mode: 'text' | 'visual';
}

export default function FlightDashboard({ mode }: FlightDashboardProps) {
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
        const interval = setInterval(fetchLastFlight, 3000); // רענון אוטומטי כל 3 שניות
        return () => clearInterval(interval);
    }, []);

    if (!flight) return <div className="loading">Waiting for data...</div>;

    return (
        <div className="dashboard-wrapper">
            {mode === 'text' ? (
                <section className="text-dashboard">
                    <p>Altitude: {flight.altitude} ft</p>
                    <p>HSI: {flight.hsi}°</p>
                    <p>ADI: {flight.adi}°</p>
                </section>
            ) : (
                <section className="visual-dashboard">
                    <AltitudeIndicator value={flight.altitude} />
                    <HsiIndicator value={flight.hsi} />
                    <AdiIndicator value={flight.adi} />
                </section>
            )}
        </div>
    );
}