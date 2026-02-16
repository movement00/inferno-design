import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const projects = [
    {
        title: 'NOVA E-TİCARET',
        subtitle: 'E-Ticaret Platformu',
        tags: ['Shopify', 'UI/UX'],
        result: '↑ %420 Satış Geliri',
        color: '#ffe600',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=75',
    },
    {
        title: 'MERİDYEN FİNANS',
        subtitle: 'Kurumsal Web',
        tags: ['Fintech', 'React'],
        result: '↑ %310 Lead Artışı',
        color: '#00f2ff',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=75',
    },
    {
        title: 'BLOOM WELLNESS',
        subtitle: 'Landing Page',
        tags: ['Branding', 'Animasyon'],
        result: '↑ %680 Kayıt Oranı',
        color: '#25D366',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=75',
    },
    {
        title: 'ARTISAN GASTRO',
        subtitle: 'Restoran Sitesi',
        tags: ['Gastronomi', 'SEO'],
        result: '↑ %500 Online Rezv.',
        color: '#ffe600',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=75',
    },
    {
        title: 'TECHPULSE SaaS',
        subtitle: 'Web Uygulaması',
        tags: ['SaaS', 'Dashboard'],
        result: '↑ %95 Tutundurma',
        color: '#9b59b6',
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=75',
    },
    {
        title: 'ATLAS LOJİSTİK',
        subtitle: 'Kurumsal Platform',
        tags: ['B2B', 'Portal'],
        result: '↓ %70 Destek Talebi',
        color: '#e67e22',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=75',
    },
];

export default function PortfolioShowcase() {
    const scrollRef = useRef(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        const onDown = (e) => {
            isDragging.current = true;
            startX.current = e.pageX - el.offsetLeft;
            scrollLeft.current = el.scrollLeft;
        };
        const onUp = () => { isDragging.current = false; };
        const onMove = (e) => {
            if (!isDragging.current) return;
            e.preventDefault();
            const x = e.pageX - el.offsetLeft;
            const walk = (x - startX.current) * 1.5;
            el.scrollLeft = scrollLeft.current - walk;
        };

        el.addEventListener('mousedown', onDown);
        window.addEventListener('mouseup', onUp);
        el.addEventListener('mousemove', onMove);

        return () => {
            el.removeEventListener('mousedown', onDown);
            window.removeEventListener('mouseup', onUp);
            el.removeEventListener('mousemove', onMove);
        };
    }, []);

    return (
        <section className="portfolio-showcase">
            <div className="container" style={{ marginBottom: '40px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <div>
                        <span className="text-cyan" style={{ fontFamily: "'Archivo Black'", fontSize: '12px', letterSpacing: '0.15em', display: 'block', marginBottom: '16px' }}>
                            PORTFÖYÜMÜZ
                        </span>
                        <h2 className="reveal" style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}>
                            SEÇİLMİŞ <span className="text-yellow">İŞLER</span>
                        </h2>
                    </div>
                    <Link to="/portfolio" className="cta-button secondary" style={{ flexShrink: 0 }}>
                        Tümünü Gör →
                    </Link>
                </div>
            </div>

            <div className="portfolio-scroll-wrapper" ref={scrollRef}>
                <div className="portfolio-scroll-track">
                    {projects.map((project) => (
                        <Link to="/portfolio" className="showcase-card" key={project.title} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="sc-image">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="sc-real-image"
                                    loading="lazy"
                                />
                                <div className="sc-overlay">
                                    <span>DETAYLARI İNCELE →</span>
                                </div>
                            </div>
                            <div className="sc-body">
                                <div className="sc-tags">
                                    {project.tags.map((tag) => (
                                        <span className="sc-tag" key={tag}>{tag}</span>
                                    ))}
                                </div>
                                <h3>{project.title} — {project.subtitle}</h3>
                                <div className="sc-result">{project.result}</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <p className="portfolio-scroll-hint">← Kaydırarak keşfet →</p>
        </section>
    );
}
