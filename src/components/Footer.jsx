import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer id="contact-footer">
            <div className="container">
                <h2 className="footer-cta reveal">
                    Markanızı <br />
                    <span>Alevlendirelim.</span>
                </h2>

                <div className="contact-grid">
                    <div className="contact-col">
                        <h4>İletişim</h4>
                        <a href="mailto:hello@inferno.design">hello@inferno.design</a>
                        <a href="tel:+905550000000">+90 555 000 00 00</a>
                    </div>
                    <div className="contact-col">
                        <h4>Ofis</h4>
                        <p>Levent, İstanbul</p>
                        <p>Teknoloji Vadisi, No: 42</p>
                    </div>
                    <div className="contact-col">
                        <h4>Keşfet</h4>
                        <Link to="/about">Hakkımızda</Link>
                        <Link to="/services">Hizmetler</Link>
                        <Link to="/portfolio">Portföy</Link>
                        <Link to="/pricing">Fiyatlar</Link>
                        <Link to="/blog">Blog</Link>
                        <Link to="/contact">İletişim</Link>
                    </div>
                    <div className="contact-col">
                        <h4>Sosyal</h4>
                        <a href="#" target="_blank" rel="noopener">Instagram</a>
                        <a href="#" target="_blank" rel="noopener">LinkedIn</a>
                        <a href="#" target="_blank" rel="noopener">Behance</a>
                        <a href="#" target="_blank" rel="noopener">Dribbble</a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2026 INFERNO DESIGN AGENCY.</p>
                    <p>Tüm hakları saklıdır.</p>
                </div>
            </div>
        </footer>
    );
}
