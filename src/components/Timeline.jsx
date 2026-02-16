const milestones = [
    {
        year: '2019',
        title: 'INFERNO KURULDU',
        description: 'İstanbul\'da iki kurucu ortak ile dijital tasarım ajansı olarak yola çıktık.',
    },
    {
        year: '2020',
        title: 'İLK 25 PROJEMİZ',
        description: 'Pandemi döneminde dijital dönüşüme yoğunlaşarak 25 projeyi başarıyla teslim ettik.',
    },
    {
        year: '2021',
        title: 'EKİP GENİŞLEMESİ',
        description: 'Ekibimizi 8 kişiye çıkardık. E-ticaret ve kurumsal çözümler portföyümüze eklendi.',
    },
    {
        year: '2022',
        title: 'ÖDÜLLER VE TANINIRLIK',
        description: 'Awwwards Honorable Mention ve CSS Design Awards ile uluslararası arenada tanındık.',
    },
    {
        year: '2023',
        title: '100+ PROJE MİLENTAŞI',
        description: 'Tamamlanan proje sayımız 100\'ü aştı. Müşteri memnuniyet oranımız %98\'e ulaştı.',
    },
    {
        year: '2024',
        title: 'YENİ DÖNEM',
        description: 'AI destekli tasarım süreçleri ve performans optimizasyonu ile yeni nesil çözümler sunmaya başladık.',
    },
];

export default function Timeline() {
    return (
        <section>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <span className="text-cyan" style={{ fontFamily: "'Archivo Black'", fontSize: '12px', letterSpacing: '0.15em', display: 'block', marginBottom: '16px' }}>
                        YOLCULUĞUMUZ
                    </span>
                    <h2 className="reveal" style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}>
                        BİZİ BİZ YAPAN <span className="text-yellow">SÜREÇ</span>
                    </h2>
                </div>

                <div className="timeline">
                    {milestones.map((item, i) => (
                        <div className="timeline-item reveal" style={{ transitionDelay: `${i * 0.12}s` }} key={item.year}>
                            <span className="timeline-year">{item.year}</span>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
