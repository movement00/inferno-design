import { Link, useLocation } from 'react-router-dom';
import CartIcon from './CartIcon';

export default function Navbar() {
    const location = useLocation();
    const isActive = (path) => location.pathname === path ? 'active-link' : '';

    return (
        <nav>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                <Link to="/" className="logo">
                    INFERNO<span>.</span>DESIGN
                </Link>
                <div className="nav-links">
                    <Link to="/" className={isActive('/')}>Ana Sayfa</Link>
                    <Link to="/portfolio" className={isActive('/portfolio')}>Portföy</Link>
                    <Link to="/pricing" className={isActive('/pricing')}>Fiyatlar</Link>
                    <CartIcon />
                    <Link to="/contact" className={`cta-button ${isActive('/contact')}`} style={{ padding: '8px 16px' }}>Projeye Başla</Link>
                </div>
            </div>
        </nav>
    );
}
