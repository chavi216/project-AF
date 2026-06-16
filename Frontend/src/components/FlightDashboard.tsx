import { useFlightData } from '../hooks/useFlightData';
import { type DisplayMode } from '../types/flight';
import AltitudeIndicator from './Gauges/AltitudeIndicator';
import HsiIndicator from './Gauges/HsiIndicator';
import AdiIndicator from './Gauges/AdiIndicator';
import "./Styles/FlightDashboard.css";

interface FlightDashboardProps {
    mode: DisplayMode;
    refreshKey: number;
}

export default function FlightDashboard({ mode, refreshKey }: FlightDashboardProps) {
    const { flight } = useFlightData(refreshKey);

    if (!flight) return <div className="loading">Waiting for data...</div>;

    return (
        <div className="dashboard-wrapper">
            {mode === 'text' ? (
                <section className="text-dashboard">
                    <article>
                        <span>Altitude</span>
                        <strong>{flight.altitude} ft</strong>
                    </article>
                    <article>
                        <span>HSI</span>
                        <strong>{flight.hsi} deg</strong>
                    </article>
                    <article>
                        <span>ADI</span>
                        <strong>{flight.adi}</strong>
                    </article>
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
