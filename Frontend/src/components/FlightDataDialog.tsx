import FlightForm from './FlightForm';
import './Styles/FlightDataDialog.css';

interface FlightDataDialogProps {
    isOpen: boolean;
    onClose: () => void;
    onSaved: () => void;
}

export default function FlightDataDialog({ isOpen, onClose, onSaved }: FlightDataDialogProps) {
    if (!isOpen) return null;

    return (
        <div className="dialog-backdrop" role="presentation">
            <section className="flight-dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title">
                <div className="dialog-heading">
                    <h2 id="dialog-title">Input flight data</h2>
                    <button type="button" className="close-button" onClick={onClose} aria-label="Close">
                        x
                    </button>
                </div>
                <FlightForm onSaved={onSaved} />
            </section>
        </div>
    );
}
