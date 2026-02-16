import { useEffect, useRef } from 'react';

const techData = [
    { name: 'React / Next.js', value: 96 },
    { name: 'UI/UX Tasarım', value: 98 },
    { name: 'WordPress / Headless CMS', value: 90 },
    { name: 'SEO & Performans', value: 94 },
    { name: 'E-Ticaret Platformları', value: 92 },
    { name: 'Mobil Responsive', value: 99 },
    { name: 'Animasyon & Motion', value: 88 },
    { name: 'API Entegrasyonları', value: 85 },
];

function TechBar({ name, value, delay }) {
    const barRef = useRef(null);
    const fillRef = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    setTimeout(() => {
                        if (fillRef.current) {
                            fillRef.current.style.width = `${value}%`;
                            fillRef.current.classList.add('filled');
                        }
                    }, delay);
                }
            },
            { threshold: 0.3 }
        );

        if (barRef.current) observer.observe(barRef.current);
        return () => {
            if (barRef.current) observer.unobserve(barRef.current);
        };
    }, [value, delay]);

    return (
        <div className="tech-bar-item reveal" ref={barRef}>
            <div className="tech-bar-header">
                <span className="tech-bar-name">{name}</span>
                <span className="tech-bar-value">{value}%</span>
            </div>
            <div className="tech-bar-track">
                <div className="tech-bar-fill" ref={fillRef} />
            </div>
        </div>
    );
}

export default function TechStack() {
    return (
        <section className="tech-stack-section">
            <div className="container">
                <span className="text-cyan" style={{ fontFamily: "'Archivo Black'", fontSize: '12px', letterSpacing: '0.15em', display: 'block', marginBottom: '16px' }}>
                    TEKNOLOJİ YIĞINIMIZ
                </span>
                <h2 className="reveal" style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}>
                    UZMANLIK <span className="text-yellow">ALANLARI</span>
                </h2>

                <div className="tech-bars">
                    {techData.map((tech, i) => (
                        <TechBar key={tech.name} name={tech.name} value={tech.value} delay={i * 100} />
                    ))}
                </div>
            </div>
        </section>
    );
}
