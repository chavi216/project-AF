import './Styles/AdiIndicator.css';
import '../Styles/Gauges.css';

export default function AdiIndicator({ value }: { value: number }) {
    const clampedValue = Math.min(Math.max(value, -100), 100);
    const horizonOffset = (clampedValue / 100) * 64;

    return (
        <article className="instrument-card">
            <div className="instrument-title"><span>ADI</span><strong>{value}</strong></div>
            <div className="adi-dial">
                <div className="adi-horizon" style={{ transform: `translateY(${horizonOffset}px)` }}>
                    <div className="adi-sky" />
                    <div className="adi-ground" />
                    <div className="adi-line" />
                </div>
            </div>
        </article>
    );
}
