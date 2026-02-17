import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import UrgencyBanner from '../components/UrgencyBanner';
import ScrollFillText from '../components/ScrollFillText';
import Testimonials from '../components/Testimonials';

const packages = [
    {
        id: 'kivilcim',
        tier: 'BAŞLANGIÇ',
        name: 'KIVILCIM',
        description: 'Yeni başlayan markalar ve küçük işletmeler için ideal başlangıç paketi.',
        price: 4900,
        displayPrice: '4.900',
        note: 'Tek seferlik ödeme · KDV dahil',
        features: [
            'Tek sayfalık (One-Page) tasarım',
            'Mobil uyumlu responsive yapı',
            'SEO temel optimizasyonu',
            'İletişim formu entegrasyonu',
            'SSL sertifikası',
            'Sosyal medya ikonları',
            '1 ay ücretsiz destek',
            '5 iş günü teslimat',
        ],
        backFeatures: [
            { icon: '📊', title: 'Google Analytics 4', desc: 'Ziyaretçi davranışlarını izleyin, gerçek zamanlı veri akışı' },
            { icon: '🔍', title: 'Google Search Console', desc: 'Arama performansı, indeksleme ve hata raporları' },
            { icon: '🎯', title: 'Temel SEO Paketi', desc: 'Meta etiketler, sitemap.xml, robots.txt, schema markup' },
            { icon: '⚡', title: 'Core Web Vitals', desc: 'Sayfa hızı optimizasyonu, LCP, FID, CLS metrikleri' },
        ],
        featured: false,
        buttonText: 'SEPETE EKLE',
        buttonVariant: 'secondary',
        accentColor: '#00f2ff',
    },
    {
        id: 'alev',
        tier: 'EN POPÜLER',
        name: 'ALEV',
        description: 'Büyüyen markalar için güçlü, dönüşüm odaklı çözüm. En çok tercih edilen paketimiz.',
        price: 8900,
        displayPrice: '8.900',
        note: 'Tek seferlik ödeme · KDV dahil',
        features: [
            'Çok sayfalı web sitesi (5-8 sayfa)',
            'Özel UI/UX tasarım süreci',
            'Gelişmiş SEO stratejisi',
            'Blog / Haber modülü',
            'WhatsApp & canlı destek',
            'Hız optimizasyonu (90+ Lighthouse)',
            'Animasyonlar & mikro-etkileşimler',
            '3 ay ücretsiz destek',
            '10 iş günü teslimat',
        ],
        backFeatures: [
            { icon: '📊', title: 'Google Analytics 4 + Events', desc: 'Özel etkinlik takibi, hedef dönüşüm kurulumu, e-ticaret izleme' },
            { icon: '🔍', title: 'Search Console + Sitemap', desc: 'Otomatik sitemap, zengin sonuçlar, arama analitikleri' },
            { icon: '📘', title: 'Facebook Pixel', desc: 'Retargeting, özel hedef kitle oluşturma, dönüşüm takibi' },
            { icon: '🎯', title: 'Gelişmiş SEO', desc: 'Anahtar kelime araştırması, rakip analizi, içerik stratejisi' },
            { icon: '🗺️', title: 'Google Business Profile', desc: 'Yerel SEO, harita entegrasyonu, müşteri yorumları' },
            { icon: '📈', title: 'Hotjar / Clarity', desc: 'Isı haritaları, oturum kayıtları, kullanıcı davranış analizi' },
        ],
        featured: true,
        badge: 'EN POPÜLER',
        buttonText: 'SEPETE EKLE',
        buttonVariant: '',
        accentColor: '#ffe600',
    },
    {
        id: 'yangin',
        tier: 'KURUMSAL',
        name: 'YANGIN',
        description: 'Büyük ölçekli projeler, e-ticaret ve kurumsal çözümler için eksiksiz paket.',
        price: 15900,
        displayPrice: '15.900',
        note: 'Başlangıç fiyatı · Proje kapsamına göre değişir',
        features: [
            'Sınırsız sayfa & özel modüller',
            'E-ticaret / Rezervasyon sistemi',
            'Çoklu dil desteği',
            'Özel admin paneli (CMS)',
            'API entegrasyonları',
            'Gelişmiş güvenlik paketi',
            'A/B test & dönüşüm optimizasyonu',
            'Sınırsız revizyon hakkı',
            '6 ay ücretsiz destek',
        ],
        backFeatures: [
            { icon: '📊', title: 'GA4 + GTM Kurulumu', desc: 'Google Tag Manager, gelişmiş e-ticaret tracking, custom dimensions' },
            { icon: '📘', title: 'Facebook & Instagram Pixel', desc: 'Katalog entegrasyonu, dinamik retargeting, lookalike audiences' },
            { icon: '🔍', title: 'Search Console Pro', desc: 'API entegrasyonu, otomatik raporlama, Core Web Vitals izleme' },
            { icon: '🎯', title: 'Premium SEO Suite', desc: 'Teknik SEO audit, backlink stratejisi, içerik optimizasyonu' },
            { icon: '📱', title: 'TikTok & LinkedIn Pixel', desc: 'Çoklu platform reklam pikselleri, cross-platform attribution' },
            { icon: '📈', title: 'Custom Dashboard', desc: 'Gerçek zamanlı KPI dashboard, otomatik haftalık raporlar' },
            { icon: '🛡️', title: 'KVKK & GDPR', desc: 'Çerez politikası, gizlilik sözleşmesi, otomatik onay yönetimi' },
            { icon: '🔗', title: 'CRM Entegrasyonu', desc: 'HubSpot, Salesforce veya özel CRM bağlantısı' },
        ],
        featured: false,
        buttonText: 'SEPETE EKLE',
        buttonVariant: 'secondary',
        accentColor: '#ff3d3d',
    },
];

const addons = [
    { id: 'addon-bakim', name: 'Aylık Bakım Paketi', description: 'Güvenlik güncellemeleri, yedekleme, içerik değişiklikleri, hız izleme', price: 2900, displayPrice: '2.900', period: '/ay', tier: 'EKSTRA' },
    { id: 'addon-logo', name: 'Logo & Marka Paketi', description: 'Logo tasarım, renk paleti, tipografi sistemi, marka kılavuzu', price: 7500, displayPrice: '7.500', period: '', tier: 'MARKA' },
    { id: 'addon-seo', name: 'SEO İçerik Paketi', description: '10 adet SEO uyumlu blog yazısı, anahtar kelime araştırması, içerik takvimi', price: 5900, displayPrice: '5.900', period: '', tier: 'İÇERİK' },
    { id: 'addon-sosyal', name: 'Sosyal Medya Kit', description: '20 adet sosyal medya görseli, hikaye şablonları, kapak fotoğrafları', price: 4500, displayPrice: '4.500', period: '', tier: 'SOSYAL' },
    { id: 'addon-fotograf', name: 'Profesyonel Fotoğraf Çekimi', description: 'Ürün/mekan fotoğrafçılığı, düzenleme, web optimizasyonu', price: 8900, displayPrice: '8.900', period: '', tier: 'GÖRSEL' },
    { id: 'addon-egitim', name: 'CMS Eğitim Paketi', description: '2 saat online eğitim, kullanım kılavuzu, video kayıtları', price: 1900, displayPrice: '1.900', period: '', tier: 'EĞİTİM' },
];

const faqs = [
    { q: 'Ödeme nasıl yapılır?', a: 'Projenin %50\'si sözleşme imzalandığında, kalan %50 teslimattan önce alınır. Kredi kartı, havale/EFT ve 12 aya kadar taksitli ödeme seçenekleri mevcuttur.' },
    { q: 'Proje süreci nasıl işliyor?', a: 'Keşif görüşmesi → Strateji & wireframe → Tasarım onayı → Geliştirme → Test → Lansman. Her aşamada sizden onay alıyoruz, sürpriz yok.' },
    { q: 'Tasarımı beğenmezsem ne olur?', a: 'Her paketimize revizyon hakkı dahildir. Memnuniyetiniz garantimizdir.' },
    { q: 'Google Analytics ve Facebook Pixel kurulumu dahil mi?', a: 'Evet! ALEV ve YANGIN paketlerinde GA4, Search Console, Facebook Pixel ve diğer entegrasyonlar dahildir. KIVILCIM paketinde temel GA4 ve Search Console kurulumu yapılır.' },
    { q: 'SEO ne kadar sürede sonuç verir?', a: 'Teknik SEO optimizasyonları hemen etkisini gösterir. Organik sıralama artışları genellikle 2-4 ay içinde belirgin hale gelir.' },
    { q: 'Bakım ve destek hizmeti sunuyor musunuz?', a: 'Evet. Her paketin kendi ücretsiz destek süresi vardır. Sonrasında aylık bakım paketimizle güvenlik güncellemeleri, içerik değişiklikleri ve performans izleme hizmeti sunuyoruz.' },
    { q: 'Taksit imkanı var mı?', a: 'Evet! Anlaşmalı bankalar ile 3, 6 ve 12 aya kadar taksit seçenekleri sunuyoruz.' },
    { q: 'Projemi iptal edebilir miyim?', a: 'Tasarım onayından önce projenizi iptal edebilir ve ön ödemenizin %80\'ini geri alabilirsiniz.' },
];

const comparisonData = [
    { feature: 'Özel UI/UX Tasarım', basic: true, mid: true, pro: true },
    { feature: 'Mobil Uyumluluk', basic: true, mid: true, pro: true },
    { feature: 'Google Analytics 4', basic: 'Temel', mid: 'Gelişmiş', pro: 'Premium + GTM' },
    { feature: 'Google Search Console', basic: true, mid: true, pro: 'Pro + API' },
    { feature: 'Facebook Pixel', basic: false, mid: true, pro: 'Gelişmiş' },
    { feature: 'SEO Optimizasyonu', basic: 'Temel', mid: 'Gelişmiş', pro: 'Premium Suite' },
    { feature: 'Blog / CMS', basic: false, mid: true, pro: true },
    { feature: 'E-Ticaret', basic: false, mid: false, pro: true },
    { feature: 'Isı Haritası (Hotjar)', basic: false, mid: true, pro: true },
    { feature: 'Animasyonlar', basic: 'Temel', mid: 'Gelişmiş', pro: 'Premium' },
    { feature: 'CRM Entegrasyonu', basic: false, mid: false, pro: true },
    { feature: 'A/B Test', basic: false, mid: false, pro: true },
    { feature: 'KVKK / GDPR', basic: 'Temel', mid: true, pro: 'Gelişmiş' },
    { feature: 'Destek Süresi', basic: '1 Ay', mid: '3 Ay', pro: '6 Ay' },
    { feature: 'Teslimat Süresi', basic: '5 gün', mid: '10 gün', pro: '15-25 gün' },
];

function FaqItem({ q, a }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="faq-item">
            <button className="faq-question" onClick={() => setOpen(!open)}>
                {q}
                <span className={`faq-icon ${open ? 'open' : ''}`}>+</span>
            </button>
            <div className={`faq-answer ${open ? 'open' : ''}`}>
                <p>{a}</p>
            </div>
        </div>
    );
}

function renderCell(val) {
    if (val === true) return <span className="check-yes">✓</span>;
    if (val === false) return <span className="check-no">—</span>;
    return val;
}

function FlipCard({ pkg, onAdd, isInCart, addedId }) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className={`flip-card-container reveal ${pkg.featured ? 'featured-container' : ''}`}>
            <div className={`flip-card ${flipped ? 'flipped' : ''}`}>
                {/* FRONT */}
                <div className="flip-card-front">
                    <div className={`pricing-card ${pkg.featured ? 'featured' : ''}`}>
                        {pkg.badge && <div className="pricing-badge">{pkg.badge}</div>}
                        <div className="pricing-tier">{pkg.tier}</div>
                        <h3>{pkg.name}</h3>
                        <p className="pricing-desc">{pkg.description}</p>
                        <div className="pricing-amount">
                            <span className="currency">₺</span>{pkg.displayPrice}
                        </div>
                        <p className="pricing-note">{pkg.note}</p>
                        <ul className="pricing-features">
                            {pkg.features.map((f) => (
                                <li key={f}><span className="check">✓</span> {f}</li>
                            ))}
                        </ul>

                        <button
                            className="flip-trigger"
                            onClick={() => setFlipped(true)}
                        >
                            🔄 Entegrasyonları Gör
                        </button>

                        {isInCart(pkg.id) ? (
                            <div className="added-badge">✓ SEPETTE</div>
                        ) : (
                            <button
                                className={`cta-button ${pkg.buttonVariant} ${addedId === pkg.id ? 'added' : ''}`}
                                style={{ width: '100%', textAlign: 'center', marginTop: '12px' }}
                                onClick={() => onAdd(pkg)}
                            >
                                {addedId === pkg.id ? '✓ EKLENDİ!' : pkg.buttonText}
                            </button>
                        )}
                    </div>
                </div>

                {/* BACK */}
                <div className="flip-card-back">
                    <div className={`pricing-card back-card ${pkg.featured ? 'featured' : ''}`}>
                        <div className="pricing-tier" style={{ color: pkg.accentColor }}>{pkg.tier}</div>
                        <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>
                            {pkg.name} <span style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Entegrasyonlar</span>
                        </h3>
                        <p className="back-subtitle">
                            Bu paket ile dahil olan tüm dijital araç ve platform entegrasyonları:
                        </p>

                        <div className="integration-list">
                            {pkg.backFeatures.map((feat) => (
                                <div className="integration-item" key={feat.title}>
                                    <span className="integration-icon">{feat.icon}</span>
                                    <div>
                                        <strong>{feat.title}</strong>
                                        <span>{feat.desc}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            className="flip-trigger back"
                            onClick={() => setFlipped(false)}
                        >
                            ← Pakete Dön
                        </button>

                        {isInCart(pkg.id) ? (
                            <div className="added-badge" style={{ marginTop: '12px' }}>✓ SEPETTE</div>
                        ) : (
                            <button
                                className={`cta-button ${pkg.buttonVariant} ${addedId === pkg.id ? 'added' : ''}`}
                                style={{ width: '100%', textAlign: 'center', marginTop: '12px' }}
                                onClick={() => onAdd(pkg)}
                            >
                                {addedId === pkg.id ? '✓ EKLENDİ!' : pkg.buttonText}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

import SEO from '../components/SEO';
import useRevealOnScroll from '../hooks/useRevealOnScroll';

export default function PricingPage() {
    useRevealOnScroll();
    const { addItem, items } = useCart();
    const [addedId, setAddedId] = useState(null);

    const handleAddPackage = (pkg) => {
        addItem({ id: pkg.id, name: pkg.name, tier: pkg.tier, price: pkg.price });
        setAddedId(pkg.id);
        setTimeout(() => setAddedId(null), 2000);
    };

    const handleAddAddon = (addon) => {
        addItem({ id: addon.id, name: addon.name, tier: addon.tier, price: addon.price });
        setAddedId(addon.id);
        setTimeout(() => setAddedId(null), 2000);
    };

    const isInCart = (id) => items.some((i) => i.id === id);

    return (
        <>
            <SEO
                title="Şeffaf Fiyatlar - Web Tasarım & E-Ticaret Paketleri"
                description="Gizli maliyet yok. Başlangıç, İşletme ve E-Ticaret paketleri ile ihtiyacınıza en uygun çözümü seçin. Aylık ödeme seçenekleri."
                keywords="web sitesi fiyatları 2026, kurumsal site fiyat, e-ticaret sitesi maliyeti, seo paketi fiyatları"
                canonical="/pricing"
                structuredData={{
                    "@context": "https://schema.org",
                    "@type": "PriceList",
                    "name": "Inferno Design Paketleri",
                    "offers": [
                        { "@type": "Offer", "name": "Başlangıç Paketi", "price": "14900", "priceCurrency": "TRY" },
                        { "@type": "Offer", "name": "Gelişmiş Paket", "price": "24900", "priceCurrency": "TRY" },
                        { "@type": "Offer", "name": "E-Ticaret Pro", "price": "39900", "priceCurrency": "TRY" }
                    ]
                }}
            />
            <div className="container">
                <div className="page-header">
                    <span className="page-label reveal">Fiyatlandırma</span>
                    <h1 className="reveal" style={{ transitionDelay: '0.1s' }}>
                        YATIRIMINIZIN <br /><span className="text-yellow">KARŞILIĞINI</span> ALIN.
                    </h1>
                    <p className="page-desc reveal" style={{ transitionDelay: '0.2s' }}>
                        Şeffaf fiyatlandırma, sürpriz maliyet yok. Her bütçeye uygun paketlerimizle dijital varlığınızı güçlendirin.
                    </p>
                </div>
            </div>

            <UrgencyBanner />

            {/* Integration Highlight Banner */}
            <section style={{ paddingTop: '40px', paddingBottom: '0' }}>
                <div className="container">
                    <div className="integration-banner reveal">
                        <h3>
                            <span className="text-cyan">TÜM PAKETLERDE</span> DİJİTAL ARAÇ ENTEGRASYONLARı
                        </h3>
                        <p>
                            Sadece güzel tasarım değil — <strong>ölçülebilir sonuçlar</strong> üretiyoruz. Her paketimize dahil edilen profesyonel entegrasyonlar sayesinde web siteniz bir <strong>satış ve veri makinesi</strong> haline gelir.
                        </p>
                        <div className="integration-icons-row">
                            <div className="integration-icon-card">
                                <span>📊</span>
                                <strong>Google Analytics 4</strong>
                            </div>
                            <div className="integration-icon-card">
                                <span>🔍</span>
                                <strong>Search Console</strong>
                            </div>
                            <div className="integration-icon-card">
                                <span>📘</span>
                                <strong>Facebook Pixel</strong>
                            </div>
                            <div className="integration-icon-card">
                                <span>🎯</span>
                                <strong>SEO Suite</strong>
                            </div>
                            <div className="integration-icon-card">
                                <span>📈</span>
                                <strong>Hotjar / Clarity</strong>
                            </div>
                            <div className="integration-icon-card">
                                <span>🛡️</span>
                                <strong>KVKK / GDPR</strong>
                            </div>
                        </div>
                        <p className="integration-tip">
                            💡 <strong>Neden önemli?</strong> Google Analytics olmadan hangi kanalın satış getirdiğini bilemezsiniz. Facebook Pixel olmadan reklam bütçenizin %70'i boşa gider. SEO olmadan Google'da görünmezsiniz. Biz bunları varsayılan olarak kuruyoruz.
                        </p>
                    </div>
                </div>
            </section>

            {/* Campaign Banner */}
            <section style={{ paddingTop: '40px', paddingBottom: '0' }}>
                <div className="container">
                    <div className="campaign-card reveal">
                        <div className="campaign-card-content">
                            <div className="campaign-card-badge">🔥 ŞUBAT KAMPANYASI</div>
                            <h3>İLK 5 MÜŞTERİYE ÖZEL</h3>
                            <p>Bu ay içinde projenizi başlatırsanız, tüm paketlerde <strong className="text-yellow">%20 erken kayıt indirimi</strong> + <strong className="text-cyan">ücretsiz SEO analizi</strong> hediye!</p>
                            <div className="campaign-timer-inline">
                                <span>⏰ 3 kontenjan kaldı</span>
                            </div>
                        </div>
                        <div className="campaign-card-visual">
                            <div className="campaign-percentage">%20</div>
                            <div className="campaign-sub-text">İNDİRİM</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Flip Pricing Cards */}
            <section>
                <div className="container">
                    <p className="flip-hint reveal" style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '12px', fontSize: '14px' }}>
                        🔄 Kartları çevirerek dahil edilen entegrasyonları keşfedin
                    </p>
                    <div className="pricing-grid">
                        {packages.map((pkg, i) => (
                            <FlipCard
                                key={pkg.id}
                                pkg={pkg}
                                onAdd={handleAddPackage}
                                isInCart={isInCart}
                                addedId={addedId}
                            />
                        ))}
                    </div>

                    {/* Guarantee */}
                    <div className="pricing-guarantee reveal">
                        <h3><span className="text-cyan">%100</span> MEMNUNİYET GARANTİSİ</h3>
                        <p>
                            Eğer tasarım sürecinin herhangi bir aşamasında memnun kalmazsanız, ödemenizi tam olarak iade ediyoruz. Hiçbir risk almıyorsunuz — kalitemize bu kadar güveniyoruz.
                        </p>
                    </div>
                </div>
            </section>

            {/* Scroll Fill */}
            <section style={{ padding: '60px 0' }}>
                <div className="container">
                    <ScrollFillText>
                        Ucuz tasarım pahalıya mal olur. Doğru yatırım kendini kat kat geri öder.
                    </ScrollFillText>
                </div>
            </section>

            {/* Add-on Services */}
            <section style={{ background: 'rgba(0,0,0,0.3)' }}>
                <div className="container">
                    <span className="text-cyan" style={{ fontFamily: "'Archivo Black'", fontSize: '12px', letterSpacing: '0.15em', display: 'block', marginBottom: '16px' }}>
                        EK HİZMETLER
                    </span>
                    <h2 className="reveal" style={{ fontSize: 'clamp(24px, 4vw, 36px)', marginBottom: '40px' }}>
                        PROJENİZİ <span className="text-yellow">GÜÇLENDİRİN</span>
                    </h2>

                    <div className="addons-grid">
                        {addons.map((addon, i) => (
                            <div className="addon-card reveal" style={{ transitionDelay: `${(i % 3) * 0.1}s` }} key={addon.id}>
                                <div className="addon-tier">{addon.tier}</div>
                                <h4>{addon.name}</h4>
                                <p>{addon.description}</p>
                                <div className="addon-price">
                                    <span>₺{addon.displayPrice}</span>
                                    {addon.period && <span className="addon-period">{addon.period}</span>}
                                </div>
                                {isInCart(addon.id) ? (
                                    <div className="added-badge small">✓ SEPETTE</div>
                                ) : (
                                    <button
                                        className="cta-button secondary"
                                        style={{ width: '100%', textAlign: 'center', padding: '8px 16px', fontSize: '12px' }}
                                        onClick={() => handleAddAddon(addon)}
                                    >
                                        {addedId === addon.id ? '✓ EKLENDİ!' : 'SEPETE EKLE'}
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section>
                <div className="container">
                    <h2 className="reveal" style={{ fontSize: 'clamp(24px, 4vw, 36px)', marginBottom: '20px' }}>
                        <span className="text-cyan">PAKETLERİ</span> KARŞILAŞTIR
                    </h2>
                    <div className="reveal table-scroll-wrapper">
                        <table className="comparison-table">
                            <thead>
                                <tr>
                                    <th>Özellik</th>
                                    <th>KIVILCIM</th>
                                    <th>ALEV ⭐</th>
                                    <th>YANGIN</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonData.map((row) => (
                                    <tr key={row.feature}>
                                        <td>{row.feature}</td>
                                        <td>{renderCell(row.basic)}</td>
                                        <td>{renderCell(row.mid)}</td>
                                        <td>{renderCell(row.pro)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <Testimonials />

            {/* FAQ */}
            <section>
                <div className="container">
                    <h2 className="reveal" style={{ textAlign: 'center', fontSize: 'clamp(24px, 4vw, 36px)' }}>
                        SIK SORULAN <span className="text-yellow">SORULAR</span>
                    </h2>
                    <div className="faq-list">
                        {faqs.map((faq) => (
                            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="cta-section">
                <div className="container">
                    <h2 className="reveal">
                        HANGİ PAKETİN SİZE UYGUN OLDUĞUNU <br /><span className="text-cyan">BİRLİKTE BELİRLEYELİM.</span>
                    </h2>
                    <p className="reveal" style={{ transitionDelay: '0.15s' }}>
                        Projenizi anlatın, ihtiyacınıza özel bir öneri sunalım. İlk strateji görüşmesi tamamen ücretsizdir.
                    </p>
                    <div className="reveal" style={{ transitionDelay: '0.3s' }}>
                        <Link to="/contact" className="cta-button large pulse">Ücretsiz Danışmanlık Al</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
