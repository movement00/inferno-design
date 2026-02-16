import { useEffect, useRef } from 'react';

export default function ScrollFillText({ children }) {
    const textRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!textRef.current) return;
            const rect = textRef.current.getBoundingClientRect();
            const viewH = window.innerHeight;

            const start = viewH * 0.8;
            const end = viewH * 0.2;
            const progress = Math.max(0, Math.min(1, (start - rect.top) / (start - end)));

            const bgPos = 100 - progress * 100;
            textRef.current.style.backgroundPosition = `${bgPos}% 0`;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <p className="scroll-fill-text" ref={textRef}>
            {children}
        </p>
    );
}
