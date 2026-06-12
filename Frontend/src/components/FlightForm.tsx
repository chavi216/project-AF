import { useState } from 'react';
import { api } from '../api/api';
import { type FlightData } from '../types/flight.ts';

export default function FlightForm() {
    const [formData, setFormData] = useState<FlightData>({
        altitude: 0,
        hsi: 0,
        adi: 0
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await api.post('/flight-data', formData);
            alert('נתוני הטיסה נשמרו בהצלחה!');
        } catch (error) {
            console.error('שגיאה בשמירת הנתונים:', error);
            alert('אירעה שגיאה בשמירה');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '200px' }}>
            <input type="number" placeholder="Altitude" onChange={(e) => setFormData({...formData, altitude: Number(e.target.value)})} />
            <input type="number" placeholder="HSI" onChange={(e) => setFormData({...formData, hsi: Number(e.target.value)})} />
            <input type="number" placeholder="ADI" onChange={(e) => setFormData({...formData, adi: Number(e.target.value)})} />
            <button type="submit">Save Data</button>
        </form>
    );
}