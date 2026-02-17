import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFoundPage() {
    return (
        <>
            <SEO
                title="404 - Sayfa Bulunamadı"
                description="Aradığınız sayfa bulunamadı. Lütfen ana sayfaya dönün."
                noindex={true}
            />
            <div className="container">
                <div className="not-found-page">
                    <div className="not-found-glitch" data-text="404">404</div>
                    <h1 className="not-found-title">SAYFA <span className="text-cyan">BULUNAMADI.</span></h1>
                    <p className="not-found-desc">
                        Aradığınız sayfa taşınmış, silinmiş ya da hiç var olmamış olabilir.
                        Ama merak etmeyin — sizi doğru yere yönlendirebiliriz.
                    </p>
                    <div className="not-found-actions">
                        <Link to="/" className="cta-button large">Ana Sayfaya Dön</Link>
                        <Link to="/contact" className="cta-button secondary large" style={{ marginLeft: '16px' }}>İletişime Geç</Link>
                    </div>
                    <div className="not-found-fire">
                        <span>🔥</span>
                        <span>🔥</span>
                        <span>🔥</span>
                    </div>
                </div>
            </div>
        </>
    );
}
