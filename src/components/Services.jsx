const services = [
    { title: 'UI/UX TASARIM', meta: 'KULLANICI ODAKLI' },
    { title: 'FRONT-END GELİŞTİRME', meta: 'PİKSEL MÜKEMMEL' },
    { title: 'E-TİCARET ALTYAPISI', meta: 'DÖNÜŞÜM ODAKLI' },
    { title: 'MARKA KİMLİĞİ', meta: 'AKILDA KALICI' },
];

export default function Services() {
    return (
        <section id="services">
            <div className="container">
                <div style={{ marginBottom: '60px' }}>
                    <span style={{ color: 'var(--accent-cyan)', fontFamily: "'Archivo Black'", letterSpacing: '0.1em' }}>
                        HİZMETLERİMİZ
                    </span>
                    <h2 style={{ fontSize: '48px', marginTop: '10px' }}>DİJİTAL CEPHANELİK</h2>
                </div>

                <div className="service-list">
                    {services.map((service) => (
                        <div className="service-item reveal" key={service.title}>
                            <h3>{service.title}</h3>
                            <span className="service-meta">{service.meta}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
