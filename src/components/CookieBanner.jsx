import { useState, useEffect } from 'react';

export default function CookieBanner() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const accepted = localStorage.getItem('cookiesAccepted');
        if (!accepted) {
            const timer = setTimeout(() => setShow(true), 3000);
            return () => clearTimeout(timer);
        }
    }, []);

    const accept = () => {
        setShow(false);
        localStorage.setItem('cookiesAccepted', 'true');
    };

    if (!show) return null;

    return (
        <div className="cookie-banner">
            <div className="cookie-text">
                <span>🍪</span>
                <p>Bu site deneyiminizi iyileştirmek için çerez kullanmaktadır. Devam ederek çerez politikamızı kabul etmiş olursunuz.</p>
            </div>
            <div className="cookie-actions">
                <button className="cta-button" onClick={accept} style={{ padding: '8px 20px', fontSize: '12px' }}>Kabul Et</button>
                <button className="popup-dismiss" onClick={accept} style={{ fontSize: '12px' }}>Reddet</button>
            </div>
        </div>
    );
}
