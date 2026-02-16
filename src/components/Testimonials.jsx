const testimonials = [
    {
        initials: 'AK',
        name: 'Ahmet Kaya',
        role: 'CEO, TechVista',
        text: "INFERNO ile çalışmak, dijital dönüşümümüzün en iyi kararıydı. Web sitemiz yayına girdikten sonra organik trafiğimiz %300 arttı. Satış ekibimiz artık lead'lere yetişemiyor.",
    },
    {
        initials: 'SB',
        name: 'Selin Başaran',
        role: 'Kurucu, Modavista',
        text: "E-ticaret sitemizi sıfırdan tasarladılar. İlk ayda dönüşüm oranımız %4.2'ye çıktı — sektör ortalamasının 2 katı. Yatırımımızı 6 haftada geri çıkardık.",
    },
    {
        initials: 'MH',
        name: 'Mert Haktan',
        role: 'Pazarlama Direktörü, NovaPay',
        text: 'Deadline\'lere sadık, iletişimleri hızlı ve sonuç odaklı bir ekip. Rakiplerimizden sıyrılmamızı sağladılar. Kesinlikle tavsiye ediyorum.',
    },
];

export default function Testimonials() {
    return (
        <section className="testimonials-section">
            <div className="container">
                <span className="text-cyan" style={{ fontFamily: "'Archivo Black'", fontSize: '12px', letterSpacing: '0.15em', display: 'block', marginBottom: '16px' }}>
                    MÜŞTERİLERİMİZ NE DİYOR?
                </span>
                <h2 className="reveal" style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}>
                    SONUÇLAR <span className="text-yellow">KONUŞSUN.</span>
                </h2>

                <div className="testimonials-grid">
                    {testimonials.map((t, i) => (
                        <div className="testimonial-card reveal" style={{ transitionDelay: `${i * 0.15}s` }} key={t.name}>
                            <div className="quote-mark">"</div>
                            <p className="quote-text">{t.text}</p>
                            <div className="author">
                                <div className="author-avatar">{t.initials}</div>
                                <div className="author-info">
                                    <div className="author-name">{t.name}</div>
                                    <div className="author-role">{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
