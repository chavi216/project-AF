import './Styles/AdiIndicator.css';
import '../Styles/Gauges.css';

export default function AdiIndicator({ value }: { value: number }) {
    const clampedValue = Math.min(Math.max(value, -100), 100);
    const bluePercent = Math.max(clampedValue, 0);
    const groundPercent = Math.max(-clampedValue, 0);
    const greenEnd = 100 - groundPercent;
    const linePosition = clampedValue > 0 ? bluePercent : greenEnd;
    const shouldShowLine = clampedValue !== 0 && Math.abs(clampedValue) < 100;
    const dialBackground = clampedValue >= 0
        ? `linear-gradient(to bottom, #4ea9e2 0%, #2f91d0 ${bluePercent}%, #45b766 ${bluePercent}%, #2f8748 100%)`
        : `linear-gradient(to bottom, #45b766 0%, #2f8748 ${greenEnd}%, #8b5a2b ${greenEnd}%, #5f3b1d 100%)`;

    return (
        <article className="instrument-card">
            <div className="instrument-title"><span>ADI</span><strong>{value}</strong></div>
            <div className="adi-dial" style={{ background: dialBackground }}>
                {shouldShowLine && (
                    <div className="adi-line" style={{ top: `${linePosition}%` }} />
                )}
            </div>
        </article>
    );
}
