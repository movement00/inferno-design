import { useEffect, useRef } from 'react';

export default function ParallaxText() {
    const sectionRef = useRef(null);
    const line1Ref = useRef(null);
    const line2Ref = useRef(null);
    const line3Ref = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const scrollProgress = -rect.top / window.innerHeight;

            if (line1Ref.current) {
                line1Ref.current.style.transform = `translateX(${scrollProgress * 120}px)`;
            }
            if (line2Ref.current) {
                line2Ref.current.style.transform = `translateX(${scrollProgress * -80}px)`;
            }
            if (line3Ref.current) {
                line3Ref.current.style.transform = `translateX(${scrollProgress * 150}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="parallax-section" ref={sectionRef}>
            <div className="parallax-line parallax-line-1" ref={line1Ref}>
                TASARIM — STRATEJİ — İNOVASYON — BÜYÜME — PERFORMANS —
            </div>
            <div className="parallax-line parallax-line-2" ref={line2Ref}>
                INFERNO DESIGN — DİJİTAL DÖNÜŞÜM — MARKA KİMLİĞİ — PREMIUM —
            </div>
            <div className="parallax-line parallax-line-3" ref={line3Ref}>
                WEB GELİŞTİRME — E-TİCARET — MOBİL — SEO — UI/UX — KOD — YARATICILIK —
            </div>
        </div>
    );
}
