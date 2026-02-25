import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import useRevealOnScroll from '../hooks/useRevealOnScroll';
import ScrollFillText from '../components/ScrollFillText';
import { blogPosts, categories } from '../data/blogPosts';

export default function BlogPage() {
    useRevealOnScroll();
    const [selectedCategory, setSelectedCategory] = useState('TÜMÜ');
    const filteredPosts = selectedCategory === 'TÜMÜ'
        ? blogPosts
        : blogPosts.filter(p => p.category === selectedCategory);

    const blogStructuredData = {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        'name': 'Inferno Design Blog',
        'description': 'Web tasarım, SEO, e-ticaret, dijital pazarlama ve UX tasarım hakkında uzman makaleleri, güncel trendler ve stratejik rehberler.',
        'url': 'https://inferno-design.com/blog',
        'inLanguage': 'tr',
        'publisher': {
            '@type': 'Organization',
            'name': 'Inferno Design',
            'logo': {
                '@type': 'ImageObject',
                'url': 'https://inferno-design.com/vite.svg'
            }
        },
        'blogPost': blogPosts.map(post => ({
            '@type': 'BlogPosting',
            'headline': post.title,
            'description': post.excerpt,
            'datePublished': post.isoDate,
            'author': {
                '@type': 'Person',
                'name': post.author,
                'jobTitle': post.authorRole
            },
            'keywords': post.tags.join(', '),
            'articleSection': post.category,
            'wordCount': post.content.split(/\s+/).length,
            'timeRequired': `PT${post.readTime.replace(' dk', 'M')}`,
        })),
    };

    return (
        <>
            <SEO
                title="Blog - Web Tasarım, SEO ve Dijital Pazarlama Rehberleri"
                description="Web tasarım trendleri, SEO stratejileri, e-ticaret dönüşüm optimizasyonu ve dijital pazarlama hakkında kapsamlı rehberler. Uzman ekibimizin içgörüleriyle dijital dünyada öne geçin."
                keywords="web tasarım blog, seo rehberi, dijital pazarlama makaleleri, e-ticaret ipuçları, web tasarım trendleri 2026, google analytics rehberi, mobil uyumlu tasarım, dönüşüm optimizasyonu, kurumsal web sitesi fiyatları, UX tasarım"
                canonical="/blog"
                ogType="blog"
                structuredData={blogStructuredData}
            />

            <div className="container">
                <header className="page-header">
                    <span className="page-label reveal">Blog</span>
                    <h1 className="reveal" style={{ transitionDelay: '0.1s' }}>
                        DİJİTAL <br /><span className="text-cyan">İÇGÖRÜLER.</span>
                    </h1>
                    <p className="page-desc reveal" style={{ transitionDelay: '0.2s' }}>
                        Web tasarım, SEO, e-ticaret ve dijital pazarlama hakkında uzman görüşleri ve stratejik rehberler.
                        Bilgiyi paylaşıyor, sektörü dönüştürüyoruz.
                    </p>
                </header>
            </div>

            {/* Category Filter */}
            <section style={{ paddingTop: 0, paddingBottom: '16px' }}>
                <div className="container">
                    <nav className="blog-categories reveal" aria-label="Blog kategorileri">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`blog-category-btn${selectedCategory === cat ? ' active' : ''}`}
                                onClick={() => setSelectedCategory(cat)}
                                aria-pressed={selectedCategory === cat}
                            >
                                {cat}
                            </button>
                        ))}
                    </nav>
                </div>
            </section>

            {/* Blog Grid */}
            <section>
                <div className="container">
                    <div className="blog-grid">
                        {filteredPosts.map((post, i) => (
                            <article
                                className="blog-card reveal"
                                style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
                                key={post.id}
                                itemScope
                                itemType="https://schema.org/BlogPosting"
                            >
                                <meta itemProp="datePublished" content={post.isoDate} />
                                <meta itemProp="author" content={post.author} />

                                <div className="blog-card-top">
                                    <span className="blog-category" style={{ color: post.accent }}>{post.category}</span>
                                    <span className="blog-meta">
                                        <time dateTime={post.isoDate}>{post.date}</time> · {post.readTime} okuma
                                    </span>
                                </div>

                                <h2 className="blog-title" itemProp="headline">{post.title}</h2>

                                <p className="blog-excerpt" itemProp="description">{post.excerpt}</p>

                                {/* Author Info */}
                                <div className="blog-author">
                                    <div className="blog-author-avatar" style={{ borderColor: post.accent }}>
                                        {post.author.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div className="blog-author-info">
                                        <span className="blog-author-name" itemProp="author">{post.author}</span>
                                        <span className="blog-author-role">{post.authorRole}</span>
                                    </div>
                                </div>

                                <div className="blog-tags">
                                    {post.tags.map(tag => (
                                        <span className="blog-tag" key={tag} itemProp="keywords">{tag}</span>
                                    ))}
                                </div>

                                <div className="blog-card-footer">
                                    <Link
                                        to={`/blog/${post.slug}`}
                                        className="blog-read-more"
                                        style={{ color: post.accent }}
                                    >
                                        Devamını Oku →
                                    </Link>
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
                            aria-label="E-posta adresiniz"
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
