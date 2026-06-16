import './Styles/HsiIndicator.css';
import '../Styles/Gauges.css';

export default function HsiIndicator({ value }: { value: number }) {
    const normalizedValue = ((value % 360) + 360) % 360;

    return (
        <article className="instrument-card">
            <div className="instrument-title"><span>HSI</span><strong>{normalizedValue} deg</strong></div>
            <div className="hsi-wrap">
                <div className="hsi-dial" style={{ transform: `rotate(${-normalizedValue}deg)` }}>
                    <span className="hsi-heading north">0</span>
                    <span className="hsi-heading east">90</span>
                    <span className="hsi-heading south">180</span>
                    <span className="hsi-heading west">270</span>
                    {Array.from({ length: 12 }).map((_, i) => (
                        <span key={i} className="tick" style={{ transform: `rotate(${i * 30}deg)` }} />
                    ))}
                </div>
                <div className="hsi-pointer" aria-hidden="true" />
            </div>
        </article>
    );
}
