import { Link } from 'react-router-dom';
import CircularProgress from '../components/CircularProgress';
import ScrollFillText from '../components/ScrollFillText';
import Testimonials from '../components/Testimonials';

const projects = [
    {
        id: 1,
        title: 'Nova E-Ticaret',
        category: 'E-TİCARET WEB SİTESİ',
        tags: ['Shopify', 'UI/UX', 'SEO', 'E-Ticaret'],
        description: 'Moda sektöründe faaliyet gösteren Nova markası için tamamen özelleştirilmiş bir e-ticaret platformu. Kullanıcı deneyimini ön planda tutarak, dönüşüm oranını %340 artıran bir tasarım süreci yürüttük.',
        challenge: 'Markanın mevcut web sitesi mobil uyumsuz, yavaş ve dönüşüm oranı %0.8 idi. Ürün keşfi zordu ve sepet terk oranı %78 seviyesindeydi.',
        solution: 'AI destekli ürün öneri motoru, tek sayfalık checkout süreci, hız odaklı altyapı ve mobil-first tasarım yaklaşımıyla platformu sıfırdan inşa ettik.',
        metrics: { traffic: '+285%', conversion: '%3.5', speed: '0.9s', time: '18 gün' },
        testimonial: '"Nova\'nın yeni sitesi müşterilerimizden inanılmaz tepkiler aldı. İlk ayda satışlar ikiye katlandı." — Elif K., Nova CEO',
        result: '🔥 SATIŞ GELİRİ +420%',
        resultColor: '#ff3d3d',
        bgColor: 'linear-gradient(135deg, #1a0a2e 0%, #2d1b4e 50%, #1a0a2e 100%)',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    },
    {
        id: 2,
        title: 'Meridyen Finans',
        category: 'KURUMSAL WEB SİTESİ',
        tags: ['React', 'Fintech', 'Dashboard', 'Responsive'],
        description: 'Türkiye\'nin hızla büyüyen fintech şirketlerinden Meridyen için güven odaklı kurumsal web sitesi ve yatırımcı dashboard\'u tasarladık.',
        challenge: 'Finans sektöründe güven inşa etmek bir numaralı öncelikti. Mevcut site eski teknolojilerle yapılmış, güvenlik açıkları barındırıyordu.',
        solution: 'Modern tech stack (React + Node.js), SSL/TLS güvenlik katmanları, gerçek zamanlı veri gösterimi ve profesyonel kurumsal tasarım uyguladık.',
        metrics: { traffic: '+190%', conversion: '%4.2', speed: '1.1s', time: '25 gün' },
        testimonial: '"Inferno ekibi fintech sektörünün ihtiyaçlarını çok iyi anlıyor. Sonuç beklentilerimizi aştı." — Burak T., CTO',
        result: '📈 LEAD GENERASYOn +310%',
        resultColor: '#00f2ff',
        bgColor: 'linear-gradient(135deg, #0a1628 0%, #1a2d4e 50%, #0a1628 100%)',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    },
    {
        id: 3,
        title: 'Bloom Wellness',
        category: 'LANDING PAGE & BRANDING',
        tags: ['Branding', 'Landing Page', 'Animasyon', 'Dönüşüm'],
        description: 'Sağlık ve wellness sektöründe faaliyet gösteren Bloom için marka kimliği tasarımı ve yüksek dönüşümlü landing page geliştirdik.',
        challenge: 'Yeni kurulmuş bir marka olarak dijital dünyada hiçbir varlığı yoktu. Rakiplerden sıyrılarak güçlü bir ilk izlenim yaratması gerekiyordu.',
        solution: 'Yeşil ve toprak tonlarında organik bir marka kimliği, scroll-triggered animasyonlar, video arka plan ve A/B test edilmiş CTA\'lar ile dönüşüm odaklı bir landing page oluşturduk.',
        metrics: { traffic: '+450%', conversion: '%6.8', speed: '0.7s', time: '12 gün' },
        testimonial: '"İlk haftada 200+ kayıt aldık. Tasarım tam istediğimiz gibi, hatta daha iyisi oldu." — Deniz A., Kurucu',
        result: '🌿 KAYIT ORANI +680%',
        resultColor: '#25D366',
        bgColor: 'linear-gradient(135deg, #0a1e0a 0%, #1a3e2a 50%, #0a1e0a 100%)',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    },
    {
        id: 4,
        title: 'Artisan Gastro',
        category: 'RESTORAN WEB SİTESİ',
        tags: ['Gastronomi', 'Rezervasyon', 'SEO Lokal', 'Responsive'],
        description: 'İstanbul\'un en prestijli restoranlarından Artisan Gastro için online rezervasyon sistemi entegreli, lüks hissiyat veren bir web sitesi tasarladık.',
        challenge: 'Restoran telefonla doluluk yönetimi yapıyordu. Online varlığı zayıf, Google haritalar sıralaması çok düşüktü.',
        solution: 'Tam entegreli online rezervasyon sistemi, Instagram feed entegrasyonu, Google Business optimizasyonu ve fotoğraf odaklı premium tasarım uyguladık.',
        metrics: { traffic: '+320%', conversion: '%5.1', speed: '1.2s', time: '15 gün' },
        testimonial: '"Artık telefonla uğraşmıyoruz, online rezervasyonlar tam kapasite çalışıyor." — Chef Mehmet B.',
        result: '🍽️ ONLİNE REZV. +500%',
        resultColor: '#ffe600',
        bgColor: 'linear-gradient(135deg, #1e1408 0%, #3e2a10 50%, #1e1408 100%)',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    },
    {
        id: 5,
        title: 'TechPulse SaaS',
        category: 'WEB UYGULAMASI (SaaS)',
        tags: ['SaaS', 'React', 'Node.js', 'Dashboard', 'API'],
        description: 'Proje yönetim aracı TechPulse için modern SaaS dashboard\'u, kullanıcı onboarding süreci ve pazarlama sitesi geliştirdik.',
        challenge: 'Ürün güçlüydü ama kullanıcı arayüzü karmaşıktı. Onboarding süreci uzundu ve ilk 7 günde kullanıcıların %60\'ı ayrılıyordu.',
        solution: 'Kullanıcı araştırması sonuçlarına göre UX\'i yeniden tasarladık. Guided onboarding, basitleştirilmiş dashboard ve dark/light mode desteği ekledik.',
        metrics: { traffic: '+175%', conversion: '%12.4', speed: '0.8s', time: '30 gün' },
        testimonial: '"Kullanıcı tutundurma oranımız %40\'tan %78\'e çıktı. Inferno ekibi UX konusunda uzman." — Can D., Product Manager',
        result: '🚀 KULLANICI TUTUNDURMA +95%',
        resultColor: '#9b59b6',
        bgColor: 'linear-gradient(135deg, #0a0a1e 0%, #1a1a3e 50%, #0a0a1e 100%)',
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
    },
    {
        id: 6,
        title: 'Atlas Lojistik',
        category: 'KURUMSAL PLATFORM',
        tags: ['Lojistik', 'Portal', 'Takip Sistemi', 'B2B'],
        description: 'Atlas Lojistik için müşteri portalı, kargo takip sistemi ve kurumsal web sitesini kapsayan entegre bir dijital çözüm geliştirdik.',
        challenge: 'Müşteriler kargo takibi için sürekli telefon açıyordu. B2B süreçler manuel yönetiliyordu, müşteri memnuniyeti düşüktü.',
        solution: 'Gerçek zamanlı kargo takip modülü, müşteri self-servis portalı, otomatik bildirim sistemi ve API entegrasyonları geliştirdik.',
        metrics: { traffic: '+210%', conversion: '%8.5', speed: '1.0s', time: '35 gün' },
        testimonial: '"Müşteri destek taleplerini %70 azalttık. Kullanıcılar artık her şeyi portaldan takip edebiliyor." — Serkan Y., Genel Müdür',
        result: '📦 DESTEK TALEBİ -%70',
        resultColor: '#e67e22',
        bgColor: 'linear-gradient(135deg, #1e0a08 0%, #3e1a10 50%, #1e0a08 100%)',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    },
];

const overallStats = [
    { label: 'Ortalama Trafik Artışı', value: 272, suffix: '%' },
    { label: 'Ortalama Dönüşüm Oranı', value: 6.75, suffix: '%' },
    { label: 'Ortalama Sayfa Hızı', value: 0.95, suffix: 'sn' },
    { label: 'Müşteri Memnuniyeti', value: 98, suffix: '%' },
];

import SEO from '../components/SEO';
import useRevealOnScroll from '../hooks/useRevealOnScroll';

export default function PortfolioPage() {
    useRevealOnScroll();
    return (
        <>
            <SEO
                title="Portföy - 127+ Başarı Hikayesi"
                description="İnandığımızı yapıyoruz. Shopify mağazaları, kurumsal siteler ve SaaS platformları projelerimizi inceleyin. Ortalama %272 trafik artışı."
                keywords="web tasarım referansları, portfolio, e-ticaret siteleri, kurumsal site örnekleri, mobil uygulama tasarımı"
                canonical="/portfolio"
                structuredData={{
                    "@context": "https://schema.org",
                    "@type": "CollectionPage",
                    "name": "Inferno Design Portföyü",
                    "description": "Tamamlanan web tasarım ve dijital pazarlama projeleri.",
                    "mainEntity": {
                        "@type": "ItemList",
                        "itemListElement": [
                            { "@type": "CreativeWork", "name": "NOVA E-Ticaret" },
                            { "@type": "CreativeWork", "name": "Vortex SaaS" },
                            { "@type": "CreativeWork", "name": "Lumina App" },
                            { "@type": "CreativeWork", "name": "Aura Cosmetics" },
                            { "@type": "CreativeWork", "name": "Flux Capital" },
                            { "@type": "CreativeWork", "name": "Zenith Architecture" },
                            { "@type": "CreativeWork", "name": "Pulse Energy" },
                            { "@type": "CreativeWork", "name": "Echo Bistro" }
                        ]
                    }
                }}
            />
            <div className="container">
                <div className="page-header">
                    <span className="page-label reveal">Portföy</span>
                    <h1 className="reveal" style={{ transitionDelay: '0.1s' }}>
                        SONUÇLARIMIZ <br /><span className="text-yellow">KENDİ KONUŞUR.</span>
                    </h1>
                    <p className="page-desc reveal" style={{ transitionDelay: '0.2s' }}>
                        127+ tamamlanmış projeden seçtiğimiz vaka çalışmaları. Her biri gerçek sonuçlar, gerçek veriler.
                    </p>
                </div>
            </div>

            {/* Overall Stats */}
            <section style={{ background: 'rgba(0,0,0,0.2)', paddingTop: '40px', paddingBottom: '40px' }}>
                <div className="container">
                    <div className="portfolio-stats-row">
                        {overallStats.map((stat) => (
                            <div className="portfolio-stat-item reveal" key={stat.label}>
                                <span className="portfolio-stat-value">{stat.value}{stat.suffix}</span>
                                <span className="portfolio-stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section>
                <div className="container">
                    {projects.map((project, i) => (
                        <div className={`project-detail reveal ${i % 2 !== 0 ? 'reverse' : ''}`} key={project.id} style={{ transitionDelay: '0.1s' }}>
                            {/* Visual */}
                            <div className="project-visual" style={{ background: project.bgColor }}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-image"
                                    loading="lazy"
                                />
                                <div className="project-image-overlay"></div>
                                <div className="project-tags-float">
                                    {project.tags.map((tag) => (
                                        <span className="sc-tag" key={tag}>{tag}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Info */}
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <span className="project-category">{project.category}</span>

                                <p className="project-desc">{project.description}</p>

                                <div className="project-cs">
                                    <div className="project-cs-item">
                                        <h4 style={{ color: '#ff3d3d' }}>⚡ Zorluk</h4>
                                        <p>{project.challenge}</p>
                                    </div>
                                    <div className="project-cs-item">
                                        <h4 style={{ color: '#00f2ff' }}>✦ Çözüm</h4>
                                        <p>{project.solution}</p>
                                    </div>
                                </div>

                                <div className="project-metrics">
                                    <div className="metric-box">
                                        <span className="metric-value" style={{ color: '#00f2ff' }}>{project.metrics.traffic}</span>
                                        <span className="metric-label">Trafik</span>
                                    </div>
                                    <div className="metric-box">
                                        <span className="metric-value" style={{ color: '#ffe600' }}>{project.metrics.conversion}</span>
                                        <span className="metric-label">Dönüşüm</span>
                                    </div>
                                    <div className="metric-box">
                                        <span className="metric-value" style={{ color: '#25D366' }}>{project.metrics.speed}</span>
                                        <span className="metric-label">Hız</span>
                                    </div>
                                    <div className="metric-box">
                                        <span className="metric-value" style={{ color: '#9b59b6' }}>{project.metrics.time}</span>
                                        <span className="metric-label">Süre</span>
                                    </div>
                                </div>

                                <div className="project-testimonial">
                                    <p>{project.testimonial}</p>
                                </div>

                                <div className="project-result-badge" style={{ borderColor: project.resultColor, color: project.resultColor }}>
                                    {project.result}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Scroll Fill */}
            <section style={{ padding: '60px 0' }}>
                <div className="container">
                    <ScrollFillText>
                        Her proje bir dönüşüm hikayesidir. Bir sonraki hikaye sizin olabilir.
                    </ScrollFillText>
                </div>
            </section>

            {/* Circular Progress Stats */}
            <section style={{ background: 'rgba(0,0,0,0.2)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 className="reveal">
                        GENEL <span className="text-cyan">PERFORMANS</span>
                    </h2>
                    <CircularProgress />
                </div>
            </section>

            <Testimonials />

            {/* CTA */}
            <section className="cta-section">
                <div className="container">
                    <h2 className="reveal">
                        SIRADAKİ BAŞARI <span className="text-yellow">HİKAYESİ</span><br />SİZİNKİ OLABİLİR.
                    </h2>
                    <p className="reveal" style={{ transitionDelay: '0.15s' }}>
                        Projenizi anlatın, size özel strateji ve teklif sunalım.
                    </p>
                    <div className="reveal" style={{ transitionDelay: '0.3s' }}>
                        <Link to="/contact" className="cta-button large pulse">Ücretsiz Danışmanlık Al</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
