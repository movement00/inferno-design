const steps = [
    {
        number: '01',
        title: 'KEŞİF & STRATEJİ',
        description: 'Markanızı, hedef kitlenizi ve rakiplerinizi derinlemesine analiz ediyoruz.',
    },
    {
        number: '02',
        title: 'TASARIM & PROTOTİP',
        description: 'Yüksek çözünürlüklü mockup\'lar ve interaktif prototipler ile vizyonunuzu görselleştiriyoruz.',
    },
    {
        number: '03',
        title: 'GELİŞTİRME',
        description: 'Piksel mükemmelliğinde, hızlı ve SEO-dostu kod ile tasarımı hayata geçiriyoruz.',
    },
    {
        number: '04',
        title: 'LANSMAN & BÜYÜME',
        description: 'Sitenizi dünyaya açıyor, performansı izliyor ve sürekli optimize ediyoruz.',
    },
];

export default function ProcessSteps() {
    return (
        <section>
            <div className="container">
                <span className="text-cyan" style={{ fontFamily: "'Archivo Black'", fontSize: '12px', letterSpacing: '0.15em', display: 'block', marginBottom: '16px' }}>
                    NASIL ÇALIŞIYORUZ?
                </span>
                <h2 className="reveal" style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}>
                    4 ADIMDA <span className="text-yellow">MÜKEMMEL</span> SONUÇ
                </h2>

                <div className="process-grid">
                    {steps.map((step, i) => (
                        <div className="process-step reveal" style={{ transitionDelay: `${i * 0.15}s` }} key={step.number}>
                            <div className="step-number">{step.number}</div>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
