import { useEffect, useState } from 'react';
import { api } from '../api/api';
import { type FlightData } from '../types/flight';

export function useFlightData(refreshKey: number) {
    const [flight, setFlight] = useState<FlightData | null>(null);

    useEffect(() => {
        let isActive = true;

        const fetchLastFlight = async () => {
            try {
                const res = await api.get('/flight-data');
                const data = Array.isArray(res.data) ? res.data[res.data.length - 1] : res.data;

                if (isActive) {
                    setFlight(data && Object.keys(data).length ? data : null);
                }
            } catch (error) {
                console.error("Failed to fetch flight data:", error);
            }
        };

        const timeout = window.setTimeout(fetchLastFlight, 0);
        const interval = window.setInterval(fetchLastFlight, 3000);

        return () => {
            isActive = false;
            window.clearTimeout(timeout);
            window.clearInterval(interval);
        };
    }, [refreshKey]);

    return { flight };
}
