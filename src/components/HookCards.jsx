const cards = [
    {
        number: '01',
        title: 'İLK 5 SANİYE',
        description: 'Ziyaretçiniz sitenize girdi. 5 saniye içinde etkilenmediyse, rakibe gitti. Biz o 5 saniyeyi kazanıyoruz.',
        delay: '0.1s',
    },
    {
        number: '02',
        title: 'MOBİL SAVAŞ ALANI',
        description: 'Tasarım sadece masaüstü değildir. Mobil deneyiminiz aksıyorsa, trafiğinizin yarısını çöpe atıyorsunuz demektir.',
        delay: '0.2s',
    },
    {
        number: '03',
        title: 'HIZ VE ÖFKE',
        description: 'Yavaş siteler affedilmez. Estetik ve performansı birleştirip, bekleme süresini sıfıra indiriyoruz.',
        delay: '0.3s',
    },
];

export default function HookCards() {
    return (
        <section id="about">
            <div className="container">
                <h2 className="reveal" style={{ fontSize: 'clamp(24px, 4vw, 36px)', maxWidth: '800px', marginBottom: '60px' }}>
                    <span className="text-cyan">// GERÇEKLER</span><br />
                    Kullanıcıların %75&apos;i bir şirketin güvenilirliğini web tasarımına bakarak yargılar.
                </h2>

                <div className="hook-grid">
                    {cards.map((card) => (
                        <div className="hook-card reveal" style={{ transitionDelay: card.delay }} key={card.number}>
                            <h3>{card.number}. {card.title}</h3>
                            <p>{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
