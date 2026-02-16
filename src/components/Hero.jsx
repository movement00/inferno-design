import TypewriterText from './TypewriterText';

export default function Hero() {
    return (
        <header>
            <div className="container">
                <div className="hero-content">
                    <h1 className="hero-title reveal">
                        Web Siteniz <br />
                        <span className="text-cyan"><TypewriterText /></span>
                    </h1>
                    <p className="hero-subtitle reveal" style={{ transitionDelay: '0.2s' }}>
                        Vasat tasarımlar görünmezdir. Görünmezlik iş dünyasında ölümdür. Markanız için akılda kalıcı, yüksek oktanlı dijital deneyimler tasarlıyoruz.
                    </p>
                    <div className="reveal" style={{ transitionDelay: '0.4s' }}>
                        <a href="#contact-footer" className="cta-button">Ateşi Yak</a>
                        <a href="#portfolio-section" className="cta-button secondary" style={{ marginLeft: '16px' }}>İşlerimizi Gör</a>
                    </div>
                </div>
            </div>
        </header>
    );
}
