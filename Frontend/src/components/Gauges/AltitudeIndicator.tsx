export default function AltitudeIndicator({ value }: { value: number }) {
    const position = 100 - (value / 3000) * 100;
    return (
        <article className="instrument-card altitude-card">
            <div className="instrument-title"><span>ALT</span><strong>{value} ft</strong></div>
            <div className="altitude-scale">
                {[3000, 2000, 1000, 0].map((tick) => <span key={tick}>{tick}</span>)}
                <div className="altitude-track" />
                <div className="altitude-marker" style={{ top: `${position}%` }}><i /></div>
            </div>
        </article>
    );
}