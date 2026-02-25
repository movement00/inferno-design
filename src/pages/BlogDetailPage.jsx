import { useParams, Link, useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import useRevealOnScroll from '../hooks/useRevealOnScroll';
import { getBlogPost, getRelatedPosts } from '../data/blogPosts';

function renderContent(content) {
    return content.split('\n\n').map((paragraph, pi) => {
        if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
            return <h3 key={pi} className="blog-detail-heading">{paragraph.replace(/\*\*/g, '')}</h3>;
        }
        if (paragraph.includes('|') && paragraph.includes('---')) {
            const rows = paragraph.split('\n').filter(r => r.trim() && !r.includes('---'));
            const headers = rows[0]?.split('|').filter(c => c.trim()).map(c => c.trim());
            const dataRows = rows.slice(1);
            return (
                <div key={pi} className="blog-detail-table-wrap">
                    <table className="blog-detail-table">
                        <thead>
                            <tr>{headers?.map((h, hi) => <th key={hi}>{h}</th>)}</tr>
                        </thead>
                        <tbody>
                            {dataRows.map((row, ri) => (
                                <tr key={ri}>
                                    {row.split('|').filter(c => c.trim()).map((cell, ci) => (
                                        <td key={ci}>{cell.trim()}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        }
        if (paragraph.includes('**')) {
            const parts = paragraph.split(/\*\*(.*?)\*\*/g);
            return (
                <p key={pi} className="blog-detail-paragraph">
                    {parts.map((part, partI) =>
                        partI % 2 === 1
                            ? <strong key={partI}>{part}</strong>
                            : <span key={partI}>{part}</span>
                    )}
                </p>
            );
        }
        if (paragraph.startsWith('•') || paragraph.startsWith('✅')) {
            const items = paragraph.split('\n').filter(l => l.trim());
            return (
                <ul key={pi} className="blog-detail-list">
                    {items.map((item, li) => {
                        const cleaned = item.replace(/^[•✅]\s*/, '');
                        const parts = cleaned.split(/\*\*(.*?)\*\*/g);
                        return (
                            <li key={li}>
                                {parts.map((part, partI) =>
                                    partI % 2 === 1
                                        ? <strong key={partI}>{part}</strong>
                                        : <span key={partI}>{part}</span>
                                )}
                            </li>
                        );
                    })}
                </ul>
            );
        }
        if (/^\d+\./.test(paragraph)) {
            const items = paragraph.split('\n').filter(l => l.trim());
            return (
                <ol key={pi} className="blog-detail-list ordered">
                    {items.map((item, li) => {
                        const cleaned = item.replace(/^\d+\.\s*/, '');
                        const parts = cleaned.split(/\*\*(.*?)\*\*/g);
                        return (
                            <li key={li}>
                                {parts.map((part, partI) =>
                                    partI % 2 === 1
                                        ? <strong key={partI}>{part}</strong>
                                        : <span key={partI}>{part}</span>
                                )}
                            </li>
                        );
                    })}
                </ol>
            );
        }
        return <p key={pi} className="blog-detail-paragraph">{paragraph}</p>;
    });
}

export default function BlogDetailPage() {
    useRevealOnScroll();
    const { slug } = useParams();
    const navigate = useNavigate();
    const post = getBlogPost(slug);

    if (!post) {
        return (
            <div className="container" style={{ textAlign: 'center', padding: '120px 0' }}>
                <h1>Makale Bulunamadı</h1>
                <p style={{ margin: '16px 0 32px', color: 'var(--text-secondary)' }}>
                    Aradığınız blog yazısı mevcut değil veya kaldırılmış olabilir.
                </p>
                <Link to="/blog" className="cta-button">Blog'a Dön</Link>
            </div>
        );
    }

    const relatedPosts = getRelatedPosts(slug, 3);
    const wordCount = post.content.split(/\s+/).length;

    return (
        <>
            <SEO
                title={`${post.title} - Inferno Design Blog`}
                description={post.excerpt}
                keywords={post.tags.join(', ')}
                canonical={`/blog/${post.slug}`}
                ogType="article"
                structuredData={{
                    '@context': 'https://schema.org',
                    '@type': 'BlogPosting',
                    'headline': post.title,
                    'description': post.excerpt,
                    'datePublished': post.isoDate,
                    'author': { '@type': 'Person', 'name': post.author, 'jobTitle': post.authorRole },
                    'publisher': { '@type': 'Organization', 'name': 'Inferno Design' },
                    'keywords': post.tags.join(', '),
                    'wordCount': wordCount,
                    'articleSection': post.category,
                }}
            />

            {/* Hero */}
            <div className="blog-detail-hero">
                <div className="container">
                    <button className="blog-detail-back reveal" onClick={() => navigate('/blog')}>
                        ← Blog'a Dön
                    </button>
                    <div className="blog-detail-meta reveal" style={{ transitionDelay: '0.05s' }}>
                        <span className="blog-detail-category" style={{ color: post.accent }}>{post.category}</span>
                        <span className="blog-detail-dot">·</span>
                        <time dateTime={post.isoDate}>{post.date}</time>
                        <span className="blog-detail-dot">·</span>
                        <span>{post.readTime} okuma</span>
                        <span className="blog-detail-dot">·</span>
                        <span>{wordCount} kelime</span>
                    </div>
                    <h1 className="blog-detail-title reveal" style={{ transitionDelay: '0.1s' }}>{post.title}</h1>
                    <p className="blog-detail-excerpt reveal" style={{ transitionDelay: '0.15s' }}>{post.excerpt}</p>

                    {/* Author */}
                    <div className="blog-detail-author reveal" style={{ transitionDelay: '0.2s' }}>
                        <div className="blog-detail-author-avatar" style={{ borderColor: post.accent }}>
                            {post.author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                            <div className="blog-detail-author-name">{post.author}</div>
                            <div className="blog-detail-author-role">{post.authorRole}</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <article className="blog-detail-content">
                <div className="container blog-detail-container">
                    <div className="blog-detail-body reveal">
                        {renderContent(post.content)}
                    </div>

                    {/* Tags */}
                    <div className="blog-detail-tags reveal">
                        {post.tags.map(tag => (
                            <span className="blog-tag" key={tag}>{tag}</span>
                        ))}
                    </div>

                    {/* Share */}
                    <div className="blog-detail-share reveal">
                        <span>Paylaş:</span>
                        <div className="blog-detail-share-buttons">
                            <button onClick={() => navigator.clipboard?.writeText(window.location.href)} title="Linki Kopyala">
                                Linki Kopyala
                            </button>
                        </div>
                    </div>
                </div>
            </article>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <section className="blog-detail-related">
                    <div className="container">
                        <h2 className="reveal">
                            İLGİLİ <span className="text-cyan">YAZILAR</span>
                        </h2>
                        <div className="blog-grid">
                            {relatedPosts.map((rp, i) => (
                                <Link
                                    to={`/blog/${rp.slug}`}
                                    className="blog-card reveal"
                                    style={{ transitionDelay: `${i * 0.1}s`, textDecoration: 'none', color: 'inherit' }}
                                    key={rp.id}
                                >
                                    <div className="blog-card-top">
                                        <span className="blog-category" style={{ color: rp.accent }}>{rp.category}</span>
                                        <span className="blog-meta">
                                            <time dateTime={rp.isoDate}>{rp.date}</time> · {rp.readTime} okuma
                                        </span>
                                    </div>
                                    <h3 className="blog-title">{rp.title}</h3>
                                    <p className="blog-excerpt">{rp.excerpt}</p>
                                    <div className="blog-card-footer">
                                        <span className="blog-read-more" style={{ color: rp.accent }}>Devamını Oku →</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="cta-section">
                <div className="container">
                    <h2 className="reveal">
                        BU STRATEJİLERİ <span className="text-yellow">UYGULAMAK</span> İSTER MİSİNİZ?
                    </h2>
                    <p className="reveal" style={{ transitionDelay: '0.15s' }}>
                        İlk görüşme ücretsizdir. Projenizi anlatın, size özel yol haritası çıkaralım.
                    </p>
                    <div className="reveal" style={{ transitionDelay: '0.3s' }}>
                        <Link to="/contact" className="cta-button large pulse">Ücretsiz Danışmanlık Al</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
