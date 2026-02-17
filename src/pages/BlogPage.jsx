import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import useRevealOnScroll from '../hooks/useRevealOnScroll';
import ScrollFillText from '../components/ScrollFillText';

const blogPosts = [
    {
        id: 'web-tasarim-trendleri-2026',
        category: 'TREND',
        date: '15 Şubat 2026',
        readTime: '8 dk',
        title: '2026 Web Tasarım Trendleri: AI, Immersive Deneyimler ve Yeni Nesil UI',
        excerpt: 'Yapay zeka entegrasyonu, 3D etkileşimler ve sesli arayüzlerin web tasarımını nasıl dönüştürdüğünü keşfedin.',
        tags: ['Web Tasarım', 'AI', 'Trendler'],
        accent: '#00f2ff',
    },
    {
        id: 'seo-rehberi-baslangic',
        category: 'SEO',
        date: '10 Şubat 2026',
        readTime: '12 dk',
        title: 'SEO Başlangıç Rehberi: Google\'da İlk Sayfaya Çıkmanın 15 Adımı',
        excerpt: 'Teknik SEO\'dan içerik stratejisine, backlink\'lerden Core Web Vitals\'a kadar kapsamlı SEO yol haritası.',
        tags: ['SEO', 'Dijital Pazarlama', 'Google'],
        accent: '#ffe600',
    },
    {
        id: 'e-ticaret-donusum-optimizasyonu',
        category: 'E-TİCARET',
        date: '5 Şubat 2026',
        readTime: '10 dk',
        title: 'E-Ticaret Dönüşüm Oranınızı %300 Artıracak 10 UX Taktiği',
        excerpt: 'Sepet terk oranını düşüren, checkout sürecini iyileştiren kanıtlanmış stratejiler ve gerçek vaka çalışmaları.',
        tags: ['E-Ticaret', 'UX', 'Dönüşüm'],
        accent: '#25D366',
    },
    {
        id: 'kurumsal-web-sitesi-maliyet',
        category: 'REHBER',
        date: '28 Ocak 2026',
        readTime: '7 dk',
        title: 'Kurumsal Web Sitesi Ne Kadar Tutar? 2026 Fiyat Rehberi',
        excerpt: 'Web sitesi maliyetlerini etkileyen faktörler, bütçe planlaması ve ucuz vs. kaliteli site karşılaştırması.',
        tags: ['Fiyatlandırma', 'Kurumsal', 'Rehber'],
        accent: '#ff3d3d',
    },
    {
        id: 'google-analytics-4-kurulumu',
        category: 'ANALİTİK',
        date: '20 Ocak 2026',
        readTime: '9 dk',
        title: 'Google Analytics 4 Kurulum Rehberi: İlk Adımdan İleri Seviyeye',
        excerpt: 'GA4 kurulumu, etkinlik takibi, dönüşüm hedefleri ve raporlama nasıl yapılır? Adım adım rehber.',
        tags: ['Analytics', 'Google', 'Veri'],
        accent: '#9b59b6',
    },
    {
        id: 'mobil-uyumlu-tasarim-neden-onemli',
        category: 'TASARIM',
        date: '12 Ocak 2026',
        readTime: '6 dk',
        title: 'Neden Mobile-First Tasarım? Trafiğinizin %70\'ini Kaybetmeyin',
        excerpt: 'Mobil uyumlu olmayan sitelerin yaşadığı sorunlar ve responsive tasarımın SEO\'ya etkisi.',
        tags: ['Mobil', 'Responsive', 'UX'],
        accent: '#e67e22',
    },
];

export default function BlogPage() {
    useRevealOnScroll();
    return (
        <>
            <SEO
                title="Blog - Dijital İçgörüler & Rehberler"
                description="Web tasarım, SEO, e-ticaret ve dijital pazarlama hakkında uzman makaleleri. Dijital dünyada bir adım önde olun."
                keywords="web tasarım blog, seo rehberi, dijital pazarlama makaleleri, e-ticaret ipuçları"
            />

            <div className="container">
                <div className="page-header">
                    <span className="page-label reveal">Blog</span>
                    <h1 className="reveal" style={{ transitionDelay: '0.1s' }}>
                        DİJİTAL <br /><span className="text-cyan">İÇGÖRÜLER.</span>
                    </h1>
                    <p className="page-desc reveal" style={{ transitionDelay: '0.2s' }}>
                        Web tasarım, SEO, e-ticaret ve dijital pazarlama hakkında uzman görüşleri ve stratejik rehberler.
                    </p>
                </div>
            </div>

            {/* Blog Grid */}
            <section>
                <div className="container">
                    <div className="blog-grid">
                        {blogPosts.map((post, i) => (
                            <article className="blog-card reveal" style={{ transitionDelay: `${(i % 3) * 0.1}s` }} key={post.id}>
                                <div className="blog-card-top">
                                    <span className="blog-category" style={{ color: post.accent }}>{post.category}</span>
                                    <span className="blog-meta">{post.date} · {post.readTime} okuma</span>
                                </div>
                                <h2 className="blog-title">{post.title}</h2>
                                <p className="blog-excerpt">{post.excerpt}</p>
                                <div className="blog-tags">
                                    {post.tags.map(tag => (
                                        <span className="blog-tag" key={tag}>{tag}</span>
                                    ))}
                                </div>
                                <div className="blog-card-footer">
                                    <span className="blog-read-more" style={{ color: post.accent }}>Devamını Oku →</span>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Scroll Fill */}
            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <ScrollFillText>
                        Bilgi paylaştıkça çoğalır. Dijital dünyada bir adım önde olun.
                    </ScrollFillText>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section style={{ background: 'rgba(0,0,0,0.2)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(24px, 4vw, 36px)' }}>
                        DİJİTAL <span className="text-yellow">BÜLTEN</span>
                    </h2>
                    <p className="reveal" style={{ transitionDelay: '0.1s', maxWidth: '500px', margin: '0 auto 32px' }}>
                        Her ay yeni trendler, stratejiler ve ipuçları — doğrudan e-postanıza. Spam göndermiyoruz, söz!
                    </p>
                    <div className="newsletter-form reveal" style={{ transitionDelay: '0.2s' }}>
                        <input
                            type="email"
                            placeholder="E-posta adresiniz"
                            className="newsletter-input"
                        />
                        <button className="cta-button" style={{ flexShrink: 0 }}>Abone Ol</button>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section">
                <div className="container">
                    <h2 className="reveal">
                        BİR PROJENİZ Mİ VAR? <br /><span className="text-cyan">KONUŞALIM.</span>
                    </h2>
                    <p className="reveal" style={{ transitionDelay: '0.15s' }}>
                        Blog'daki stratejileri projenize uygulamak ister misiniz? İlk görüşme ücretsizdir.
                    </p>
                    <div className="reveal" style={{ transitionDelay: '0.3s' }}>
                        <Link to="/contact" className="cta-button large pulse">Ücretsiz Danışmanlık Al</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
