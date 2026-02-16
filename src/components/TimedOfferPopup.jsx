import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function TimedOfferPopup() {
    const [show, setShow] = useState(false);
    const [countdown, setCountdown] = useState({ m: 14, s: 59 });

    useEffect(() => {
        const dismissed = sessionStorage.getItem('timedOfferDismissed');
        if (dismissed) return;

        const showTimer = setTimeout(() => setShow(true), 25000);
        return () => clearTimeout(showTimer);
    }, []);

    useEffect(() => {
        if (!show) return;

        const interval = setInterval(() => {
            setCountdown((prev) => {
                if (prev.s === 0) {
                    if (prev.m === 0) {
                        clearInterval(interval);
                        return prev;
                    }
                    return { m: prev.m - 1, s: 59 };
                }
                return { ...prev, s: prev.s - 1 };
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [show]);

    const dismiss = () => {
        setShow(false);
        sessionStorage.setItem('timedOfferDismissed', 'true');
    };

    if (!show) return null;

    return (
        <div className="popup-overlay" onClick={dismiss}>
            <div className="popup-card timed-popup" onClick={(e) => e.stopPropagation()}>
                <button className="popup-close" onClick={dismiss}>✕</button>

                {/* Campaign Banner */}
                <div className="campaign-banner">
                    <div className="campaign-flames">🔥🔥🔥</div>
                    <div className="campaign-label">ÖZEL KAMPANYA</div>
                    <div className="campaign-discount">%30 İNDİRİM</div>
                    <div className="campaign-sub">Tüm web tasarım paketlerinde</div>
                </div>

                <div className="popup-countdown">
                    <span className="countdown-label">Bu teklif şu sürede sona eriyor:</span>
                    <div className="countdown-timer">
                        <div className="countdown-block">
                            <span className="countdown-num">{String(countdown.m).padStart(2, '0')}</span>
                            <span className="countdown-unit">DAK</span>
                        </div>
                        <span className="countdown-sep">:</span>
                        <div className="countdown-block">
                            <span className="countdown-num">{String(countdown.s).padStart(2, '0')}</span>
                            <span className="countdown-unit">SAN</span>
                        </div>
                    </div>
                </div>

                <p style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '14px', margin: '16px 0' }}>
                    Bu fırsat bir daha gelmeyebilir. Hemen harekete geçin!
                </p>

                <div className="popup-cta-group">
                    <Link to="/pricing" className="cta-button large" onClick={dismiss}>Fırsatı Değerlendir</Link>
                    <button className="popup-dismiss" onClick={dismiss}>Sonra bakarım</button>
                </div>
            </div>
        </div>
    );
}
