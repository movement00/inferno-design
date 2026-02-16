import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function ExitIntentPopup() {
    const [show, setShow] = useState(false);
    const shownRef = useRef(false);

    useEffect(() => {
        const handleMouseLeave = (e) => {
            if (e.clientY <= 0 && !shownRef.current) {
                const dismissed = sessionStorage.getItem('exitPopupDismissed');
                if (!dismissed) {
                    shownRef.current = true;
                    setShow(true);
                }
            }
        };

        document.addEventListener('mouseleave', handleMouseLeave);
        return () => document.removeEventListener('mouseleave', handleMouseLeave);
    }, []);

    const dismiss = () => {
        setShow(false);
        sessionStorage.setItem('exitPopupDismissed', 'true');
    };

    if (!show) return null;

    return (
        <div className="popup-overlay" onClick={dismiss}>
            <div className="popup-card exit-popup" onClick={(e) => e.stopPropagation()}>
                <button className="popup-close" onClick={dismiss}>✕</button>
                <div className="popup-badge">⚡ BİR DAKİKA!</div>
                <h3>Gitmeden önce...</h3>
                <p>
                    Bu ay içinde projenizi başlatırsanız, tüm paketlerimizde <strong className="text-yellow">%20 indirim</strong> ve ücretsiz SEO analizi hediye!
                </p>
                <div className="popup-cta-group">
                    <Link to="/pricing" className="cta-button" onClick={dismiss}>İndirimi Yakala!</Link>
                    <button className="popup-dismiss" onClick={dismiss}>Hayır, teşekkürler</button>
                </div>
            </div>
        </div>
    );
}
