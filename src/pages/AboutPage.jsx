import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import useRevealOnScroll from '../hooks/useRevealOnScroll';
import ScrollFillText from '../components/ScrollFillText';
import Testimonials from '../components/Testimonials';

const team = [
    {
        initials: 'EY',
        name: 'Emre Yıldız',
        role: 'Kurucu & Creative Director',
        bio: '12 yıllık dijital deneyim. Daha önce Google, Ogilvy ve Publicis\'te çalıştı.',
        skills: ['Strateji', 'Branding', 'UX'],
    },
    {
        initials: 'DA',
        name: 'Defne Arslan',
        role: 'Lead UI/UX Designer',
        bio: 'Kullanıcı odaklı tasarım felsefesiyle 80+ projede iz bırakan yaratıcı güç.',
        skills: ['Figma', 'Motion', 'Research'],
    },
    {
        initials: 'BK',
        name: 'Burak Koç',
        role: 'Senior Full-Stack Developer',
        bio: 'React, Next.js ve Node.js uzmanı. Performans tutkunu, clean code savunucusu.',
        skills: ['React', 'Node.js', 'DevOps'],
    },
    {
        initials: 'SA',
        name: 'Sude Aydın',
        role: 'SEO & Growth Strategist',
        bio: 'Veri odaklı büyüme stratejileri ile müşterilerin organik trafiğini ortalama %300 artırdı.',
        skills: ['SEO', 'Analytics', 'Content'],
    },
];

const values = [
    {
        icon: '🎯',
        title: 'SONUÇ ODAKLI',
        description: 'Güzel tasarım yetmez — ölçülebilir iş sonuçları üretiriz. Her piksel bir amaca hizmet eder.',
    },
    {
        icon: '🔥',
        title: 'TUTKULU',
        description: 'İşimizi tutku ile yapıyoruz. "Yeterince iyi" bizim sözlüğümüzde yoktur.',
    },
    {
        icon: '🤝',
        title: 'ŞEFFAF',
        description: 'Gizli maliyet, sürpriz fatura yok. Her aşamada sizi bilgilendiririz.',
    },
    {
        icon: '⚡',
        title: 'HIZLI',
        description: 'Hız bizim DNA\'mızdadır. Zamanında teslimat, hızlı geri dönüş, çevik süreçler.',
    },
    {
        icon: '🛡️',
        title: 'GÜVENİLİR',
        description: 'NDA koruması, KVKK uyumluluğu ve %100 memnuniyet garantisi sunarız.',
    },
    {
        icon: '🚀',
        title: 'YENİLİKÇİ',
        description: 'En son teknolojileri ve trendleri takip eder, projelerinize entegre ederiz.',
    },
];

const milestones = [
    { year: '2019', title: 'Kuruluş', desc: 'Inferno Design, İstanbul\'da 2 kişilik bir ekiple kuruldu.' },
    { year: '2020', title: 'İlk 25 Proje', desc: 'Pandemi döneminde dijitale geçiş yapan markalara hizmet verdik.' },
    { year: '2021', title: 'Ekip Büyümesi', desc: 'Ekibimiz 8 kişiye ulaştı, ofisimizi Levent\'e taşıdık.' },
    { year: '2022', title: '75+ Proje', desc: 'E-ticaret ve SaaS projelerinde uzmanlaştık. İlk uluslararası müşterimizi kazandık.' },
    { year: '2023', title: 'Ödüller', desc: 'Awwwards ve CSS Design Awards\'ta 3 projemiz ödül aldı.' },
    { year: '2024', title: '100+ Proje', desc: '100. projemizi tamamladık. Müşteri memnuniyeti %98\'e ulaştı.' },
    { year: '2025', title: 'AI Entegrasyonu', desc: 'AI destekli tasarım ve geliştirme süreçlerini devreye aldık.' },
    { year: '2026', title: '127+ Proje', desc: 'Büyümeye devam ediyoruz. Yeni hedef: Avrupa pazarı.' },
];

const stats = [
    { value: '127+', label: 'Tamamlanan Proje' },
    { value: '98%', label: 'Müşteri Memnuniyeti' },
    { value: '7+', label: 'Yıllık Deneyim' },
    { value: '12', label: 'Uzman Ekip Üyesi' },
    { value: '4', label: 'Ödül' },
    { value: '8', label: 'Ülkede Müşteri' },
];

export default function AboutPage() {
    useRevealOnScroll();
    return (
        <>
            <SEO
                title="Hakkımızda - Yaratıcı Dijital Ajans Hikayesi"
                description="Inferno Design, tutku ile çalışan 12 kişilik uzman ekibiyle markaların dijital dünyada parlamasını sağlar. 127+ mutlu müşteri, %98 memnuniyet."
                keywords="inferno design hakkında, web tasarım ajansı ekibi, creative director istanbul, dijital ajans künyesi"
                canonical="/about"
                structuredData={{
                    "@context": "https://schema.org",
                    "@type": "AboutPage",
                    "mainEntity": {
                        "@type": "Organization",
                        "name": "Inferno Design",
                        "foundingDate": "2019",
                        "url": "https://inferno-design.com/about",
                        "employee": [
                            { "@type": "Person", "name": "Emre Yıldız", "jobTitle": "Creative Director" },
                            { "@type": "Person", "name": "Defne Arslan", "jobTitle": "Lead UI/UX Designer" },
                            { "@type": "Person", "name": "Burak Koç", "jobTitle": "Senior Full-Stack Developer" },
                            { "@type": "Person", "name": "Sude Aydın", "jobTitle": "SEO & Growth Strategist" }
                        ]
                    }
                }}
            />

            {/* Page Header */}
            <div className="container">
                <div className="page-header">
                    <span className="page-label reveal">Hakkımızda</span>
                    <h1 className="reveal" style={{ transitionDelay: '0.1s' }}>
                        BİZ <br /><span className="text-cyan">KİMİZ?</span>
                    </h1>
                    <p className="page-desc reveal" style={{ transitionDelay: '0.2s' }}>
                        Vasat tasarımlarla dünyaya hoşça kal diyen, sonuç odaklı bir dijital ajansız.
                        Markaları dijital dünyada parlatmak için buradayız.
                    </p>
                </div>
            </div>

            {/* Stats */}
            <section style={{ background: 'rgba(0,0,0,0.2)', paddingTop: '40px', paddingBottom: '40px' }}>
                <div className="container">
                    <div className="about-stats-grid">
                        {stats.map((stat, i) => (
                            <div className="about-stat-item reveal" style={{ transitionDelay: `${i * 0.1}s` }} key={stat.label}>
                                <span className="about-stat-value">{stat.value}</span>
                                <span className="about-stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section>
                <div className="container">
                    <div className="about-story-grid">
                        <div className="about-story-left reveal">
                            <span className="text-cyan" style={{ fontFamily: "'Archivo Black'", fontSize: '12px', letterSpacing: '0.15em', display: 'block', marginBottom: '16px' }}>
                                BİZİM HİKAYEMİZ
                            </span>
                            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', marginBottom: '24px' }}>
                                TUTKU İLE <span className="text-yellow">BAŞLADI,</span><br />
                                SONUÇLARLA BÜYÜDÜ.
                            </h2>
                        </div>
                        <div className="about-story-right reveal" style={{ transitionDelay: '0.15s' }}>
                            <p>
                                Inferno Design, 2019 yılında İstanbul'da "dijital dünyada fark yaratan işler üretelim" vizyonuyla kuruldu.
                                İlk projemizden itibaren bir ilkeye bağlı kaldık: <strong>Güzel görünen değil, sonuç üreten tasarımlar yapmak.</strong>
                            </p>
                            <p>
                                Bugün 12 kişilik uzman ekibimizle, startup'lardan kurumsal şirketlere kadar geniş bir yelpazede hizmet veriyoruz.
                                Her projemizde veri odaklı stratejiler, piksel mükemmelliğinde tasarımlar ve yüksek performanslı kodlama ile
                                markaların dijital dünyada parlamasını sağlıyoruz.
                            </p>
                            <p>
                                127'den fazla başarılı proje, %98 müşteri memnuniyeti ve uluslararası ödüller — bunlar sadece rakamlar değil,
                                her biri bir marka hikayesi. Ve bir sonraki hikaye <strong className="text-cyan">sizin olabilir.</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scroll Fill Text */}
            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <ScrollFillText>
                        Vasat tasarımlar unutulur. Biz unutulmaz markalar yaratırız.
                    </ScrollFillText>
                </div>
            </section>

            {/* Values */}
            <section style={{ background: 'rgba(0,0,0,0.2)' }}>
                <div className="container">
                    <span className="text-cyan" style={{ fontFamily: "'Archivo Black'", fontSize: '12px', letterSpacing: '0.15em', display: 'block', marginBottom: '16px' }}>
                        DEĞERLERİMİZ
                    </span>
                    <h2 className="reveal" style={{ fontSize: 'clamp(28px, 4vw, 42px)', marginBottom: '48px' }}>
                        BİZİ BİZ <span className="text-yellow">YAPAN</span> İLKELER
                    </h2>
                    <div className="values-grid">
                        {values.map((val, i) => (
                            <div className="value-card reveal" style={{ transitionDelay: `${(i % 3) * 0.1}s` }} key={val.title}>
                                <div className="value-icon">{val.icon}</div>
                                <h3>{val.title}</h3>
                                <p>{val.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section>
                <div className="container">
                    <span className="text-cyan" style={{ fontFamily: "'Archivo Black'", fontSize: '12px', letterSpacing: '0.15em', display: 'block', marginBottom: '16px' }}>
                        EKİBİMİZ
                    </span>
                    <h2 className="reveal" style={{ fontSize: 'clamp(28px, 4vw, 42px)', marginBottom: '48px' }}>
                        ARKASINDA <span className="text-yellow">İNSANLAR</span> VAR.
                    </h2>
                    <div className="team-grid">
                        {team.map((member, i) => (
                            <div className="team-card reveal" style={{ transitionDelay: `${(i % 4) * 0.1}s` }} key={member.name}>
                                <div className="team-avatar">{member.initials}</div>
                                <h3>{member.name}</h3>
                                <span className="team-role">{member.role}</span>
                                <p className="team-bio">{member.bio}</p>
                                <div className="team-skills">
                                    {member.skills.map(s => (
                                        <span className="team-skill-tag" key={s}>{s}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Milestones Timeline */}
            <section style={{ background: 'rgba(0,0,0,0.2)' }}>
                <div className="container">
                    <span className="text-cyan" style={{ fontFamily: "'Archivo Black'", fontSize: '12px', letterSpacing: '0.15em', display: 'block', marginBottom: '16px' }}>
                        YOLCULUĞUMUZ
                    </span>
                    <h2 className="reveal" style={{ fontSize: 'clamp(28px, 4vw, 42px)', marginBottom: '48px' }}>
                        ADIM ADIM <span className="text-yellow">BÜYÜME</span>
                    </h2>
                    <div className="milestones-timeline">
                        {milestones.map((m, i) => (
                            <div className={`milestone-item reveal ${i % 2 !== 0 ? 'right' : 'left'}`} style={{ transitionDelay: `${i * 0.08}s` }} key={m.year}>
                                <div className="milestone-dot"></div>
                                <div className="milestone-content">
                                    <span className="milestone-year">{m.year}</span>
                                    <h4>{m.title}</h4>
                                    <p>{m.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section>
                <div className="container">
                    <span className="text-cyan" style={{ fontFamily: "'Archivo Black'", fontSize: '12px', letterSpacing: '0.15em', display: 'block', marginBottom: '16px' }}>
                        FARKIMIZ
                    </span>
                    <h2 className="reveal" style={{ fontSize: 'clamp(28px, 4vw, 42px)', marginBottom: '48px' }}>
                        NEDEN <span className="text-yellow">INFERNO?</span>
                    </h2>
                    <div className="why-us-grid">
                        <div className="why-us-card reveal">
                            <div className="why-us-compare">
                                <div className="compare-col bad">
                                    <h4>❌ Diğer Ajanslar</h4>
                                    <ul>
                                        <li>Şablon tasarımlar</li>
                                        <li>Gizli maliyetler</li>
                                        <li>Yavaş iletişim</li>
                                        <li>Sonuç takibi yok</li>
                                        <li>Teslimattan sonra yok olma</li>
                                    </ul>
                                </div>
                                <div className="compare-col good">
                                    <h4>🔥 Inferno Design</h4>
                                    <ul>
                                        <li>%100 özel tasarım</li>
                                        <li>Şeffaf fiyatlandırma</li>
                                        <li>24 saat geri dönüş</li>
                                        <li>GA4, Pixel, SEO dahil</li>
                                        <li>Sürekli bakım & destek</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Testimonials />

            {/* CTA */}
            <section className="cta-section">
                <div className="container">
                    <h2 className="reveal">
                        EKİBİMİZLE <span className="text-cyan">TANIŞIN.</span>
                    </h2>
                    <p className="reveal" style={{ transitionDelay: '0.15s' }}>
                        Projenizi anlatın, size özel bir strateji sunalım. İlk görüşme tamamen ücretsizdir.
                    </p>
                    <div className="reveal" style={{ transitionDelay: '0.3s' }}>
                        <Link to="/contact" className="cta-button large pulse">Ücretsiz Görüşme Başlat</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
