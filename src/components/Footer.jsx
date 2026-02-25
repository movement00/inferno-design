import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer id="contact-footer">
            <div className="container">
                <h2 className="footer-cta reveal">
                    {t('footer.cta')} <br />
                    <span>{t('footer.ctaHighlight')}</span>
                </h2>

                <div className="contact-grid">
                    <div className="contact-col">
                        <h4>{t('footer.contactTitle')}</h4>
                        <a href="mailto:hello@inferno.design">hello@inferno.design</a>
                        <a href="tel:+905550000000">+90 555 000 00 00</a>
                    </div>
                    <div className="contact-col">
                        <h4>{t('footer.officeTitle')}</h4>
                        <p>{t('footer.officeAddress1')}</p>
                        <p>{t('footer.officeAddress2')}</p>
                    </div>
                    <div className="contact-col">
                        <h4>{t('footer.exploreTitle')}</h4>
                        <Link to="/about">{t('nav.about')}</Link>
                        <Link to="/services">{t('nav.services')}</Link>
                        <Link to="/portfolio">{t('nav.portfolio')}</Link>
                        <Link to="/pricing">{t('nav.pricing')}</Link>
                        <Link to="/calculator">{t('footer.priceCalc')}</Link>
                        <Link to="/blog">{t('nav.blog')}</Link>
                        <Link to="/contact">{t('nav.contact')}</Link>
                    </div>
                    <div className="contact-col">
                        <h4>{t('footer.socialTitle')}</h4>
                        <a href="#" target="_blank" rel="noopener">Instagram</a>
                        <a href="#" target="_blank" rel="noopener">LinkedIn</a>
                        <a href="#" target="_blank" rel="noopener">Behance</a>
                        <a href="#" target="_blank" rel="noopener">Dribbble</a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 INFERNO DESIGN AGENCY.</p>
                    <div className="footer-legal">
                        <Link to="/privacy">{t('footer.privacy')}</Link>
                        <span>&middot;</span>
                        <Link to="/terms">{t('footer.terms')}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
