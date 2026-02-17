import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CartIcon from './CartIcon';

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
        <nav className="navbar">
            <div className="container nav-container">
                <Link to="/" className="logo">
                    INFERNO<span>.</span>DESIGN
                </Link>

                {/* Desktop Nav */}
                <div className="nav-links desktop-nav">
                    <Link to="/" className={isActive('/')}>Ana Sayfa</Link>
                    <Link to="/about" className={isActive('/about')}>Hakkımızda</Link>
                    <Link to="/services" className={isActive('/services')}>Hizmetler</Link>
                    <Link to="/portfolio" className={isActive('/portfolio')}>Portföy</Link>
                    <Link to="/pricing" className={isActive('/pricing')}>Fiyatlar</Link>
                    <Link to="/blog" className={isActive('/blog')}>Blog</Link>
                    <CartIcon />
                    <Link to="/contact" className={`cta-button ${isActive('/contact')}`} style={{ padding: '8px 16px' }}>Projeye Başla</Link>
                </div>

                {/* Mobile: Cart + Hamburger */}
                <div className="mobile-nav-actions">
                    <CartIcon />
                    <button
                        className={`hamburger ${menuOpen ? 'open' : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Menü"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)}></div>

                {/* Mobile Menu */}
                <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                    <div className="mobile-menu-header">
                        <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
                            INFERNO<span>.</span>DESIGN
                        </Link>
                        <button className="mobile-menu-close" onClick={() => setMenuOpen(false)} aria-label="Kapat">✕</button>
                    </div>
                    <div className="mobile-menu-links">
                        <Link to="/" className={isActive('/')} onClick={() => setMenuOpen(false)}>
                            <span className="mobile-link-num">01</span>
                            Ana Sayfa
                        </Link>
                        <Link to="/about" className={isActive('/about')} onClick={() => setMenuOpen(false)}>
                            <span className="mobile-link-num">02</span>
                            Hakkımızda
                        </Link>
                        <Link to="/services" className={isActive('/services')} onClick={() => setMenuOpen(false)}>
                            <span className="mobile-link-num">03</span>
                            Hizmetler
                        </Link>
                        <Link to="/portfolio" className={isActive('/portfolio')} onClick={() => setMenuOpen(false)}>
                            <span className="mobile-link-num">04</span>
                            Portföy
                        </Link>
                        <Link to="/pricing" className={isActive('/pricing')} onClick={() => setMenuOpen(false)}>
                            <span className="mobile-link-num">05</span>
                            Fiyatlar
                        </Link>
                        <Link to="/blog" className={isActive('/blog')} onClick={() => setMenuOpen(false)}>
                            <span className="mobile-link-num">06</span>
                            Blog
                        </Link>
                        <Link to="/contact" className={isActive('/contact')} onClick={() => setMenuOpen(false)}>
                            <span className="mobile-link-num">07</span>
                            İletişim
                        </Link>
                    </div>
                    <div className="mobile-menu-footer">
                        <Link to="/contact" className="cta-button large" onClick={() => setMenuOpen(false)} style={{ width: '100%', textAlign: 'center', display: 'block' }}>
                            🔥 Projeye Başla
                        </Link>
                        <div className="mobile-menu-socials">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                        </div>
                        <p className="mobile-menu-copy">© 2026 Inferno Design. Tüm hakları saklıdır.</p>
                    </div>
                </div>
            </div>
        </nav>
    );
}
