import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import useRevealOnScroll from '../hooks/useRevealOnScroll';

const projectTypes = [
    { id: 'landing', label: 'Tek Sayfa (Landing Page)', base: 4900 },
    { id: 'corporate', label: 'Kurumsal Web Sitesi (5-10 sayfa)', base: 8900 },
    { id: 'ecommerce', label: 'E-Ticaret Sitesi', base: 15900 },
    { id: 'webapp', label: 'Web Uygulaması (SaaS/Portal)', base: 24900 },
];

const features = [
    { id: 'seo', label: 'SEO Optimizasyonu', desc: 'Teknik SEO, meta etiketler, sitemap', price: 2500, icon: '🔍' },
    { id: 'blog', label: 'Blog / İçerik Yönetimi', desc: 'CMS entegrasyonu, blog altyapısı', price: 2000, icon: '📝' },
    { id: 'multilang', label: 'Çoklu Dil Desteği', desc: 'Türkçe + 1 dil, tam çeviri', price: 3000, icon: '🌍' },
    { id: 'analytics', label: 'Google Analytics 4 Kurulum', desc: 'GA4, etkinlik takibi, raporlama', price: 1500, icon: '📊' },
    { id: 'animation', label: 'Özel Animasyonlar', desc: 'Scroll animasyonları, micro-interactions', price: 3500, icon: '✨' },
    { id: 'branding', label: 'Logo & Marka Kimliği', desc: 'Logo tasarımı, renk paleti, tipografi', price: 7500, icon: '🎨' },
    { id: 'maintenance', label: 'Aylık Bakım (12 ay)', desc: 'Güvenlik, güncelleme, destek', price: 2900, icon: '🛡️' },
    { id: 'social', label: 'Sosyal Medya Entegrasyonu', desc: 'Feed, paylaşım, pixel kurulumu', price: 1800, icon: '📱' },
    { id: 'payment', label: 'Ödeme Sistemi Entegrasyonu', desc: 'iyzico, PayTR, Stripe', price: 3000, icon: '💳' },
    { id: 'crm', label: 'CRM Entegrasyonu', desc: 'HubSpot, Salesforce, özel CRM', price: 4000, icon: '🤝' },
];

const timelines = [
    { id: 'relaxed', label: 'Esnek (4-6 hafta)', multiplier: 1.0 },
    { id: 'standard', label: 'Standart (2-4 hafta)', multiplier: 1.15 },
    { id: 'urgent', label: 'Acil (1-2 hafta)', multiplier: 1.35 },
];

export default function CalculatorPage() {
    useRevealOnScroll();
    const [selectedType, setSelectedType] = useState(null);
    const [selectedFeatures, setSelectedFeatures] = useState([]);
    const [selectedTimeline, setSelectedTimeline] = useState('relaxed');
    const [pageCount, setPageCount] = useState(5);

    const toggleFeature = (id) => {
        setSelectedFeatures(prev =>
            prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
        );
    };

    const typeObj = projectTypes.find(t => t.id === selectedType);
    const timelineObj = timelines.find(t => t.id === selectedTimeline);

    const basePrice = typeObj ? typeObj.base : 0;
    const featuresPrice = selectedFeatures.reduce((sum, fId) => {
        const f = features.find(ft => ft.id === fId);
        return sum + (f ? f.price : 0);
    }, 0);
    const pageMultiplier = selectedType === 'corporate' ? Math.max(1, (pageCount - 5) * 0.08 + 1) : 1;
    const subtotal = (basePrice * pageMultiplier) + featuresPrice;
    const total = Math.round(subtotal * (timelineObj?.multiplier || 1));
    const discount = Math.round(total * 0.20);
    const finalPrice = total - discount;

    return (
        <>
            <SEO
                title="Proje Fiyat Hesaplayıcı - Anında Teklif Alın"
                description="Web tasarım projenizin maliyetini anında hesaplayın. Proje tipi, özellikler ve zaman çizelgesine göre tahmini fiyat."
                canonical="/calculator"
            />

            <div className="container">
                <header className="page-header">
                    <span className="page-label reveal">Hesaplayıcı</span>
                    <h1 className="reveal" style={{ transitionDelay: '0.1s' }}>
                        PROJE <span className="text-cyan">FİYAT</span> HESAPLAYICI
                    </h1>
                    <p className="page-desc reveal" style={{ transitionDelay: '0.2s' }}>
                        Projenizin tahmini maliyetini anında öğrenin. Detaylı teklif için bizimle iletişime geçin.
                    </p>
                </header>
            </div>

            <section>
                <div className="container">
                    <div className="calc-layout">
                        {/* Left: Options */}
                        <div className="calc-options">
                            {/* Step 1: Project Type */}
                            <div className="calc-step reveal">
                                <div className="calc-step-header">
                                    <span className="calc-step-num">01</span>
                                    <h3>Proje Tipi</h3>
                                </div>
                                <div className="calc-type-grid">
                                    {projectTypes.map(type => (
                                        <button
                                            key={type.id}
                                            className={`calc-type-card${selectedType === type.id ? ' active' : ''}`}
                                            onClick={() => setSelectedType(type.id)}
                                        >
                                            <span className="calc-type-label">{type.label}</span>
                                            <span className="calc-type-price">₺{type.base.toLocaleString('tr-TR')}'den</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Step 1b: Page count for corporate */}
                            {selectedType === 'corporate' && (
                                <div className="calc-step reveal">
                                    <div className="calc-step-header">
                                        <span className="calc-step-num">01b</span>
                                        <h3>Sayfa Sayısı</h3>
                                    </div>
                                    <div className="calc-slider-wrap">
                                        <input
                                            type="range"
                                            min="5"
                                            max="20"
                                            value={pageCount}
                                            onChange={e => setPageCount(Number(e.target.value))}
                                            className="calc-slider"
                                        />
                                        <div className="calc-slider-labels">
                                            <span>5 sayfa</span>
                                            <span className="calc-slider-value">{pageCount} sayfa</span>
                                            <span>20 sayfa</span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Step 2: Features */}
                            <div className="calc-step reveal" style={{ transitionDelay: '0.1s' }}>
                                <div className="calc-step-header">
                                    <span className="calc-step-num">02</span>
                                    <h3>Ek Özellikler</h3>
                                </div>
                                <div className="calc-features-grid">
                                    {features.map(f => (
                                        <button
                                            key={f.id}
                                            className={`calc-feature-card${selectedFeatures.includes(f.id) ? ' active' : ''}`}
                                            onClick={() => toggleFeature(f.id)}
                                        >
                                            <span className="calc-feature-icon">{f.icon}</span>
                                            <div className="calc-feature-info">
                                                <span className="calc-feature-label">{f.label}</span>
                                                <span className="calc-feature-desc">{f.desc}</span>
                                            </div>
                                            <span className="calc-feature-price">+₺{f.price.toLocaleString('tr-TR')}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Step 3: Timeline */}
                            <div className="calc-step reveal" style={{ transitionDelay: '0.15s' }}>
                                <div className="calc-step-header">
                                    <span className="calc-step-num">03</span>
                                    <h3>Zaman Çizelgesi</h3>
                                </div>
                                <div className="calc-timeline-grid">
                                    {timelines.map(t => (
                                        <button
                                            key={t.id}
                                            className={`calc-timeline-card${selectedTimeline === t.id ? ' active' : ''}`}
                                            onClick={() => setSelectedTimeline(t.id)}
                                        >
                                            <span className="calc-timeline-label">{t.label}</span>
                                            {t.multiplier > 1 && (
                                                <span className="calc-timeline-extra">+{Math.round((t.multiplier - 1) * 100)}% acil ek ücreti</span>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right: Summary */}
                        <div className="calc-summary-wrap">
                            <div className="calc-summary">
                                <h3>Tahmini Maliyet</h3>

                                {selectedType ? (
                                    <>
                                        <div className="calc-summary-line">
                                            <span>{typeObj.label}</span>
                                            <span>₺{Math.round(basePrice * pageMultiplier).toLocaleString('tr-TR')}</span>
                                        </div>

                                        {selectedFeatures.map(fId => {
                                            const f = features.find(ft => ft.id === fId);
                                            return (
                                                <div className="calc-summary-line" key={fId}>
                                                    <span>{f.label}</span>
                                                    <span>₺{f.price.toLocaleString('tr-TR')}</span>
                                                </div>
                                            );
                                        })}

                                        {timelineObj.multiplier > 1 && (
                                            <div className="calc-summary-line accent">
                                                <span>Acil teslimat ek ücreti</span>
                                                <span>+{Math.round((timelineObj.multiplier - 1) * 100)}%</span>
                                            </div>
                                        )}

                                        <div className="calc-summary-divider" />

                                        <div className="calc-summary-line total">
                                            <span>Toplam</span>
                                            <span>₺{total.toLocaleString('tr-TR')}</span>
                                        </div>

                                        <div className="calc-summary-line discount">
                                            <span>Kampanya İndirimi (%20)</span>
                                            <span>-₺{discount.toLocaleString('tr-TR')}</span>
                                        </div>

                                        <div className="calc-summary-divider" />

                                        <div className="calc-summary-final">
                                            <span>Ödenecek</span>
                                            <span className="calc-final-price">₺{finalPrice.toLocaleString('tr-TR')}</span>
                                        </div>

                                        <p className="calc-summary-note">
                                            * Fiyatlar tahminidir, KDV hariçtir. Kesin fiyat proje detaylarına göre belirlenir.
                                        </p>

                                        <Link
                                            to={`/contact?project=${selectedType}&budget=${finalPrice}&features=${selectedFeatures.join(',')}`}
                                            className="cta-button large"
                                            style={{ width: '100%', textAlign: 'center', display: 'block', marginTop: '24px' }}
                                        >
                                            Bu Teklifi Görüşmek İstiyorum
                                        </Link>
                                    </>
                                ) : (
                                    <div className="calc-summary-empty">
                                        <p>Proje tipinizi seçerek başlayın</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section">
                <div className="container">
                    <h2 className="reveal">
                        DAHA DETAYLI <span className="text-yellow">TEKLİF</span> İSTER MİSİNİZ?
                    </h2>
                    <p className="reveal" style={{ transitionDelay: '0.15s' }}>
                        30 dakikalık ücretsiz strateji görüşmesinde projenizi birlikte planlayalım.
                    </p>
                    <div className="reveal" style={{ transitionDelay: '0.3s' }}>
                        <Link to="/contact" className="cta-button large pulse">Ücretsiz Danışmanlık Al</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
