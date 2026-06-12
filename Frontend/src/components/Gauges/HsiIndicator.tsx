export default function HsiIndicator({ value }: { value: number }) {
    return (
        <article className="instrument-card">
            <div className="instrument-title"><span>HSI</span><strong>{value} deg</strong></div>
            <div className="hsi-dial">
                <div className="compass-rose" style={{ transform: `rotate(${-value}deg)` }}>
                    <b className="north">N</b><b className="east">E</b><b className="south">S</b><b className="west">W</b>
                    {Array.from({ length: 12 }, (_, index) => <i key={index} style={{ transform: `rotate(${index * 30}deg)` }} />)}
                </div>
                <div className="fixed-pointer" /><div className="hub" />
            </div>
        </article>
    );
}