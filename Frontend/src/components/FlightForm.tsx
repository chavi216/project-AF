import { useState } from 'react';
import { api } from '../api/api';
import './Styles/FlightForm.css';

interface FlightFormProps {
    onSaved: () => void;
}

export default function FlightForm({ onSaved }: FlightFormProps) {
    const initialState = { altitude: '0', hsi: '0', adi: '0' };
    const [formData, setFormData] = useState(initialState);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        const payload = {
            altitude: Number(formData.altitude),
            hsi: Number(formData.hsi),
            adi: Number(formData.adi),
        };

        if (Object.values(payload).some((value) => Number.isNaN(value))) {
            setError('Enter numeric values before sending.');
            return;
        }

        try {
            await api.post('/flight-data', payload);
            setFormData(initialState);
            onSaved();
        } catch (error) {
            console.error('Failed to save flight data:', error);
            setError('Check that all values are in the allowed range.');
        }
    };

    return (
        <form className="flight-form" onSubmit={handleSubmit}>
            <label>
                Altitude
                <input
                    type="number"
                    min="0"
                    max="3000"
                    step="1"
                    value={formData.altitude}
                    onChange={(e) => setFormData({...formData, altitude: e.target.value})}
                />
            </label>
            <label>
                HSI
                <input
                    type="number"
                    min="0"
                    max="360"
                    step="1"
                    value={formData.hsi}
                    onChange={(e) => setFormData({...formData, hsi: e.target.value})}
                />
            </label>
            <label>
                ADI
                <input
                    type="number"
                    min="-100"
                    max="100"
                    step="1"
                    value={formData.adi}
                    onChange={(e) => setFormData({...formData, adi: e.target.value})}
                />
            </label>
            {error && <p className="form-error">{error}</p>}
            <button type="submit">SEND</button>
        </form>
    );
}
