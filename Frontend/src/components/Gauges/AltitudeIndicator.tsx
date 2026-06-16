import './Styles/AltitudeIndicator.css';
import '../Styles/Gauges.css';

export default function AltitudeIndicator({ value }: { value: number }) {
    const markerPosition = 100 - (Math.min(Math.max(value, 0), 3000) / 3000) * 100;

    return (
        <article className="instrument-card">
            <div className="instrument-title"><span>ALT</span><strong>{value} ft</strong></div>
            <div className="altitude-body">
                <div className="altitude-labels">
                    <span>3000</span>
                    <span>2000</span>
                    <span>1000</span>
                    <span>0</span>
                </div>
                <div className="altitude-track">
                    <div className="altitude-marker" style={{ top: `${markerPosition}%` }} />
                </div>
            </div>
        </article>
    );
}
