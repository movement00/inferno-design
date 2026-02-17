import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import useRevealOnScroll from '../hooks/useRevealOnScroll';
import ScrollFillText from '../components/ScrollFillText';

const serviceDetails = [
    {
        id: 'web-tasarim',
        icon: '🎨',
        title: 'UI/UX TASARIM',
        tagline: 'Kullanıcı odaklı, dönüşüm getiren tasarımlar.',
        description: 'Kullanıcı araştırmasından wireframe\'lere, yüksek çözünürlüklü mockup\'lardan interaktif prototiplere kadar tam kapsamlı tasarım süreci yönetiyoruz. Her piksel bir amaca hizmet eder.',
        features: [
            'Kullanıcı araştırması & persona oluşturma',
            'Wireframing & bilgi mimarisi',
            'Yüksek çözünürlüklü UI tasarımı',
            'İnteraktif prototip (Figma)',
            'Design system oluşturma',
            'Erişilebilirlik (a11y) uyumluluk',
            'Usability test & iterasyon',
        ],
        stats: { projects: '85+', satisfaction: '%99', avgTime: '7 gün' },
        accent: '#00f2ff',
    },
    {
        id: 'web-gelistirme',
        icon: '⚡',
        title: 'FRONT-END GELİŞTİRME',
        tagline: 'Piksel mükemmelliğinde, hızlı ve SEO-dostu kod.',
        description: 'React, Next.js ve modern web teknolojileri ile tasarımlarınızı hayata geçiriyoruz. Performans, erişilebilirlik ve SEO en yüksek önceliğimizdir.',
        features: [
            'React / Next.js geliştirme',
            'Responsive / Mobile-First yapı',
            'Sayfa hızı optimizasyonu (90+ Lighthouse)',
            'SEO-dostu semantik HTML',
            'Progressive Web App (PWA)',
            'Cross-browser uyumluluk',
            'CI/CD & otomatik deploy',
        ],
        stats: { projects: '95+', satisfaction: '%98', avgTime: '10 gün' },
        accent: '#ffe600',
    },
    {
        id: 'e-ticaret',
        icon: '🛒',
        title: 'E-TİCARET ALTYAPISI',
        tagline: 'Dönüşüm odaklı, ölçeklenebilir e-ticaret çözümleri.',
        description: 'Shopify, WooCommerce veya özel altyapı ile e-ticaret sitenizi kuruyoruz. Ödeme sistemleri, stok yönetimi ve kargo entegrasyonları dahil.',
        features: [
            'Shopify / WooCommerce kurulumu',
            'Özel e-ticaret platformu geliştirme',
            'Ödeme sistemi entegrasyonları (iyzico, PayTR)',
            'Kargo & stok yönetimi',
            'Ürün sayfası optimizasyonu',
            'Sepet & checkout UX iyileştirmesi',
            'E-ticaret SEO stratejisi',
        ],
        stats: { projects: '40+', satisfaction: '%97', avgTime: '15 gün' },
        accent: '#25D366',
    },
    {
        id: 'marka-kimligi',
        icon: '🏷️',
        title: 'MARKA KİMLİĞİ',
        tagline: 'Akılda kalıcı, tutarlı, güçlü markalar.',
        description: 'Logo tasarımından renk paletine, tipografiden marka kılavuzuna kadar eksiksiz marka kimliği tasarımı. Dijital ve baskı her alanda tutarlılık.',
        features: [
            'Logo tasarım (3 konsept)',
            'Renk paleti & tipografi sistemi',
            'Marka kılavuzu (brand book)',
            'Sosyal medya şablonları',
            'Kartvizit & kurumsal kimlik',
            'Brand tone of voice tanımlama',
            'Dijital varlık paketi',
        ],
        stats: { projects: '55+', satisfaction: '%99', avgTime: '12 gün' },
        accent: '#ff3d3d',
    },
    {
        id: 'seo-dijital-pazarlama',
        icon: '📈',
        title: 'SEO & DİJİTAL PAZARLAMA',
        tagline: 'Google\'da görünün, büyüyün, dönüştürün.',
        description: 'Teknik SEO, içerik stratejisi, Google Ads ve sosyal medya yönetimi ile dijital varlığınızı güçlendiriyoruz.',
        features: [
            'Teknik SEO audit & optimizasyon',
            'Anahtar kelime araştırması',
            'İçerik stratejisi & blog yönetimi',
            'Google Ads yönetimi',
            'Sosyal medya stratejisi',
            'Rakip analizi & raporlama',
            'Google Analytics & Search Console kurulumu',
        ],
        stats: { projects: '70+', satisfaction: '%96', avgTime: 'Aylık' },
        accent: '#9b59b6',
    },
    {
        id: 'bakim-destek',
        icon: '🛡️',
        title: 'BAKIM & DESTEK',
        tagline: 'Siteniz her zaman güvenli, hızlı ve güncel.',
        description: 'Web sitenizin bakımını, güvenlik güncellemelerini, yedeklemelerini ve içerik değişikliklerini üstleniyoruz. Siz işinize odaklanın.',
        features: [
            'Güvenlik güncellemeleri & patch',
            'Günlük otomatik yedekleme',
            'Uptime izleme (%99.9 garanti)',
            'İçerik güncelleme hizmeti',
            'Hız & performans izleme',
            'Aylık raporlama',
            'Öncelikli destek hattı',
        ],
        stats: { projects: '60+', satisfaction: '%98', avgTime: 'Sürekli' },
        accent: '#e67e22',
    },
];

export default function ServicesPage() {
    useRevealOnScroll();
    return (
        <>
            <SEO
                title="Hizmetler - Web Tasarım, E-Ticaret & Dijital Pazarlama"
                description="İşletmenizi büyütmek için tam kapsamlı dijital çözümler: UI/UX tasarım, özel yazılım geliştirme, SEO, e-ticaret altyapısı ve marka kimliği."
                keywords="web tasarım hizmetleri, kurumsal seo danışmanlığı, e-ticaret sitesi kurma, marka tasarımı, google ads yönetimi"
                canonical="/services"
                structuredData={{
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": "Digital Agency Services",
                    "provider": { "@type": "Organization", "name": "Inferno Design" },
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Dijital Hizmetler",
                        "itemListElement": serviceDetails.map(service => ({
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": service.title,
                                "description": service.description
                            }
                        }))
                    }
                }}
            />

            <div className="container">
                <div className="page-header">
                    <span className="page-label reveal">Hizmetler</span>
                    <h1 className="reveal" style={{ transitionDelay: '0.1s' }}>
                        DİJİTAL <br /><span className="text-yellow">CEPHANELİK.</span>
                    </h1>
                    <p className="page-desc reveal" style={{ transitionDelay: '0.2s' }}>
                        Markanızın dijital dünyada parlaması için ihtiyaç duyduğunuz her şey.
                        Strateji, tasarım, geliştirme ve büyüme — hepsi bir çatı altında.
                    </p>
                </div>
            </div>

            {/* Services Detail */}
            <section>
                <div className="container">
                    <div className="services-detail-list">
                        {serviceDetails.map((service, i) => (
                            <div className={`service-detail-card reveal ${i % 2 !== 0 ? 'reverse' : ''}`} key={service.id} style={{ transitionDelay: '0.1s' }}>
                                <div className="service-detail-info">
                                    <div className="service-detail-icon" style={{ color: service.accent }}>{service.icon}</div>
                                    <h2 style={{ color: service.accent }}>{service.title}</h2>
                                    <p className="service-detail-tagline">{service.tagline}</p>
                                    <p className="service-detail-desc">{service.description}</p>
                                    <div className="service-detail-stats">
                                        <div className="sds-item">
                                            <span className="sds-val" style={{ color: service.accent }}>{service.stats.projects}</span>
                                            <span className="sds-label">Proje</span>
                                        </div>
                                        <div className="sds-item">
                                            <span className="sds-val" style={{ color: service.accent }}>{service.stats.satisfaction}</span>
                                            <span className="sds-label">Memnuniyet</span>
                                        </div>
                                        <div className="sds-item">
                                            <span className="sds-val" style={{ color: service.accent }}>{service.stats.avgTime}</span>
                                            <span className="sds-label">Ort. Süre</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="service-detail-features">
                                    <h3>NELER DAHİL?</h3>
                                    <ul>
                                        {service.features.map(f => (
                                            <li key={f}><span className="check" style={{ color: service.accent }}>✓</span> {f}</li>
                                        ))}
                                    </ul>
                                    <Link to="/contact" className="cta-button" style={{ marginTop: '24px', display: 'inline-block', background: service.accent, color: '#0a0a0f' }}>
                                        Teklif Al →
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Scroll Fill */}
            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <ScrollFillText>
                        Doğru partner, doğru strateji, doğru zaman. Dijital dönüşümünüz burada başlıyor.
                    </ScrollFillText>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section">
                <div className="container">
                    <h2 className="reveal">
                        HANGİ HİZMET <span className="text-cyan">SİZE UYGUN?</span>
                    </h2>
                    <p className="reveal" style={{ transitionDelay: '0.15s' }}>
                        İhtiyaçlarınızı anlatalım, size özel bir çözüm paketi oluşturalım. İlk görüşme tamamen ücretsizdir.
                    </p>
                    <div className="reveal" style={{ transitionDelay: '0.3s' }}>
                        <Link to="/contact" className="cta-button large pulse">Ücretsiz Danışmanlık Al</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
