import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CartIcon from './CartIcon';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
    const { t } = useTranslation();
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const isActive = (path) => location.pathname === path ? 'active-link' : '';

    // Close menu on route change
    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    const navLinks = [
        { path: '/', label: t('nav.home') },
        { path: '/about', label: t('nav.about') },
        { path: '/services', label: t('nav.services') },
        { path: '/portfolio', label: t('nav.portfolio') },
        { path: '/pricing', label: t('nav.pricing') },
        { path: '/blog', label: t('nav.blog') },
    ];

    return (
        <nav className="navbar" role="navigation" aria-label="Ana navigasyon">
            <div className="container nav-container">
                <Link to="/" className="logo" aria-label="Inferno Design Ana Sayfa">
                    INFERNO<span>.</span>DESIGN
                </Link>

                {/* Desktop Nav */}
                <div className="nav-links desktop-nav" role="menubar">
                    {navLinks.map(({ path, label }) => (
                        <Link key={path} to={path} className={isActive(path)} role="menuitem">{label}</Link>
                    ))}
                    <CartIcon />
                    <div className="nav-toggles">
                        <ThemeToggle />
                        <LanguageSwitcher />
                    </div>
                    <Link to="/contact" className={`cta-button ${isActive('/contact')}`} style={{ padding: '8px 16px' }} role="menuitem">{t('nav.cta')}</Link>
                </div>

                {/* Mobile: Cart + Hamburger */}
                <div className="mobile-nav-actions">
                    <ThemeToggle />
                    <LanguageSwitcher />
                    <CartIcon />
                    <button
                        className={`hamburger ${menuOpen ? 'open' : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div
                    className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`}
                    onClick={() => setMenuOpen(false)}
                    aria-hidden="true"
                ></div>

                {/* Mobile Menu */}
                <div
                    id="mobile-menu"
                    className={`mobile-menu ${menuOpen ? 'open' : ''}`}
                    role="dialog"
                    aria-label="Mobil menü"
                    aria-hidden={!menuOpen}
                >
                    <div className="mobile-menu-header">
                        <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
                            INFERNO<span>.</span>DESIGN
                        </Link>
                        <button className="mobile-menu-close" onClick={() => setMenuOpen(false)} aria-label="Menüyü kapat">&times;</button>
                    </div>
                    <div className="mobile-menu-links" role="menu">
                        {navLinks.map(({ path, label }, i) => (
                            <Link key={path} to={path} className={isActive(path)} onClick={() => setMenuOpen(false)} role="menuitem">
                                <span className="mobile-link-num">{String(i + 1).padStart(2, '0')}</span>
                                {label}
                            </Link>
                        ))}
                        <Link to="/contact" className={isActive('/contact')} onClick={() => setMenuOpen(false)} role="menuitem">
                            <span className="mobile-link-num">{String(navLinks.length + 1).padStart(2, '0')}</span>
                            {t('nav.contact')}
                        </Link>
                    </div>
                    <div className="mobile-menu-footer">
                        <Link to="/contact" className="cta-button large" onClick={() => setMenuOpen(false)} style={{ width: '100%', textAlign: 'center', display: 'block' }}>
                            {t('nav.cta')}
                        </Link>
                        <div className="mobile-menu-socials">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">Twitter</a>
                        </div>
                        <p className="mobile-menu-copy">&copy; 2026 Inferno Design.</p>
                    </div>
                </div>
            </div>
        </nav>
    );
}
