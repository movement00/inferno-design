import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CartIcon from './CartIcon';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
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

    return (
        <nav className="navbar" role="navigation" aria-label="Ana navigasyon">
            <div className="container nav-container">
                <Link to="/" className="logo" aria-label="Inferno Design Ana Sayfa">
                    INFERNO<span>.</span>DESIGN
                </Link>

                {/* Desktop Nav */}
                <div className="nav-links desktop-nav" role="menubar">
                    <Link to="/" className={isActive('/')} role="menuitem">Ana Sayfa</Link>
                    <Link to="/about" className={isActive('/about')} role="menuitem">Hakkımızda</Link>
                    <Link to="/services" className={isActive('/services')} role="menuitem">Hizmetler</Link>
                    <Link to="/portfolio" className={isActive('/portfolio')} role="menuitem">Portföy</Link>
                    <Link to="/pricing" className={isActive('/pricing')} role="menuitem">Fiyatlar</Link>
                    <Link to="/blog" className={isActive('/blog')} role="menuitem">Blog</Link>
                    <CartIcon />
                    <ThemeToggle />
                    <LanguageSwitcher />
                    <Link to="/contact" className={`cta-button ${isActive('/contact')}`} style={{ padding: '8px 16px' }} role="menuitem">Projeye Başla</Link>
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
                        <button className="mobile-menu-close" onClick={() => setMenuOpen(false)} aria-label="Menüyü kapat">✕</button>
                    </div>
                    <div className="mobile-menu-links" role="menu">
                        <Link to="/" className={isActive('/')} onClick={() => setMenuOpen(false)} role="menuitem">
                            <span className="mobile-link-num">01</span>
                            Ana Sayfa
                        </Link>
                        <Link to="/about" className={isActive('/about')} onClick={() => setMenuOpen(false)} role="menuitem">
                            <span className="mobile-link-num">02</span>
                            Hakkımızda
                        </Link>
                        <Link to="/services" className={isActive('/services')} onClick={() => setMenuOpen(false)} role="menuitem">
                            <span className="mobile-link-num">03</span>
                            Hizmetler
                        </Link>
                        <Link to="/portfolio" className={isActive('/portfolio')} onClick={() => setMenuOpen(false)} role="menuitem">
                            <span className="mobile-link-num">04</span>
                            Portföy
                        </Link>
                        <Link to="/pricing" className={isActive('/pricing')} onClick={() => setMenuOpen(false)} role="menuitem">
                            <span className="mobile-link-num">05</span>
                            Fiyatlar
                        </Link>
                        <Link to="/blog" className={isActive('/blog')} onClick={() => setMenuOpen(false)} role="menuitem">
                            <span className="mobile-link-num">06</span>
                            Blog
                        </Link>
                        <Link to="/contact" className={isActive('/contact')} onClick={() => setMenuOpen(false)} role="menuitem">
                            <span className="mobile-link-num">07</span>
                            İletişim
                        </Link>
                    </div>
                    <div className="mobile-menu-footer">
                        <Link to="/contact" className="cta-button large" onClick={() => setMenuOpen(false)} style={{ width: '100%', textAlign: 'center', display: 'block' }}>
                            Projeye Başla
                        </Link>
                        <div className="mobile-menu-socials">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">Twitter</a>
                        </div>
                        <p className="mobile-menu-copy">© 2026 Inferno Design. Tüm hakları saklıdır.</p>
                    </div>
                </div>
            </div>
        </nav>
    );
}
