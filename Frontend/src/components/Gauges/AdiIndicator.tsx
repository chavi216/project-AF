export default function AdiIndicator({ value }: { value: number }) {
    const groundHeight = Math.max(0, Math.min(100, 100 - value));
    return (
        <article className="instrument-card">
            <div className="instrument-title"><span>ADI</span><strong>{value}</strong></div>
            <div className="adi-dial">
                <div className="sky" /><div className="ground" style={{ height: `${groundHeight}%` }} />
                <div className="horizon" style={{ top: `${100 - groundHeight}%` }} />
                <div className="aircraft-symbol"><i /></div>
            </div>
        </article>
    );
}