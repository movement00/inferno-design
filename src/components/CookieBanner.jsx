import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CookieBanner() {
    const [show, setShow] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [preferences, setPreferences] = useState({
        necessary: true,
        analytics: false,
        marketing: false,
    });

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            const timer = setTimeout(() => setShow(true), 2500);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptAll = () => {
        const consent = { necessary: true, analytics: true, marketing: true, date: new Date().toISOString() };
        localStorage.setItem('cookieConsent', JSON.stringify(consent));
        setShow(false);
    };

    const acceptSelected = () => {
        const consent = { ...preferences, date: new Date().toISOString() };
        localStorage.setItem('cookieConsent', JSON.stringify(consent));
        setShow(false);
    };

    const rejectAll = () => {
        const consent = { necessary: true, analytics: false, marketing: false, date: new Date().toISOString() };
        localStorage.setItem('cookieConsent', JSON.stringify(consent));
        setShow(false);
    };

    if (!show) return null;

    return (
        <div className="cookie-banner">
            <div className="cookie-content">
                <div className="cookie-text">
                    <h4>Çerez Tercihleri</h4>
                    <p>
                        Web sitemizde deneyiminizi iyileştirmek için çerezler kullanıyoruz.
                        KVKK ve 6698 sayılı kanun kapsamında kişisel verileriniz korunmaktadır.
                        Detaylı bilgi için <Link to="/privacy" className="cookie-link">Gizlilik Politikamızı</Link> inceleyebilirsiniz.
                    </p>
                </div>

                {showDetails && (
                    <div className="cookie-details">
                        <label className="cookie-option">
                            <input type="checkbox" checked disabled />
                            <div>
                                <strong>Zorunlu Çerezler</strong>
                                <span>Site işlevselliği için gerekli</span>
                            </div>
                        </label>
                        <label className="cookie-option">
                            <input
                                type="checkbox"
                                checked={preferences.analytics}
                                onChange={e => setPreferences(p => ({ ...p, analytics: e.target.checked }))}
                            />
                            <div>
                                <strong>Analitik Çerezler</strong>
                                <span>Ziyaretçi istatistikleri ve site performansı</span>
                            </div>
                        </label>
                        <label className="cookie-option">
                            <input
                                type="checkbox"
                                checked={preferences.marketing}
                                onChange={e => setPreferences(p => ({ ...p, marketing: e.target.checked }))}
                            />
                            <div>
                                <strong>Pazarlama Çerezleri</strong>
                                <span>Kişiselleştirilmiş reklam ve içerik</span>
                            </div>
                        </label>
                    </div>
                )}

                <div className="cookie-actions">
                    <button className="cookie-btn-text" onClick={() => setShowDetails(!showDetails)}>
                        {showDetails ? 'Gizle' : 'Tercihleri Yönet'}
                    </button>
                    {showDetails && (
                        <button className="cookie-btn-outline" onClick={acceptSelected}>Seçilenleri Kabul Et</button>
                    )}
                    <button className="cookie-btn-outline" onClick={rejectAll}>Sadece Zorunlu</button>
                    <button className="cta-button" onClick={acceptAll} style={{ padding: '10px 24px', fontSize: '13px' }}>Tümünü Kabul Et</button>
                </div>
            </div>
        </div>
    );
}
