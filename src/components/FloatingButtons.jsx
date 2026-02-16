import { useState, useEffect } from 'react';

export default function FloatingButtons() {
    const [showTop, setShowTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowTop(window.scrollY > 600);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="floating-buttons">
            <a
                href="https://wa.me/905550000000?text=Merhaba%2C%20web%20tasar%C4%B1m%20hizmeti%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                className="float-btn whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp ile iletişime geç"
            >
                💬
            </a>
            <button
                className={`float-btn back-to-top ${showTop ? 'visible' : ''}`}
                onClick={scrollToTop}
                title="Başa dön"
            >
                ↑
            </button>
        </div>
    );
}
