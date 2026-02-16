const items = [
    'WEB TASARIM', 'UI/UX', 'E-TİCARET', 'FRONT-END',
    'MARKA KİMLİĞİ', 'SEO STRATEJİ', 'MOBİL TASARIM', 'DÖNÜŞÜM OPTİMİZASYONU',
];

export default function MarqueeTicker() {
    const doubled = [...items, ...items];

    return (
        <div className="marquee-section">
            <div className="marquee-track">
                {doubled.map((item, i) => (
                    <span className="marquee-item" key={i}>
                        {item}<span className="dot" />
                    </span>
                ))}
            </div>
        </div>
    );
}
