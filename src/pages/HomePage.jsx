import Hero from '../components/Hero';
import HookCards from '../components/HookCards';
import StatsBar from '../components/StatsBar';
import StatementBanner from '../components/StatementBanner';
import Services from '../components/Services';
import ProcessSteps from '../components/ProcessSteps';
import Testimonials from '../components/Testimonials';
import TrustBar from '../components/TrustBar';
import UrgencyBanner from '../components/UrgencyBanner';
import MarqueeTicker from '../components/MarqueeTicker';
import TechStack from '../components/TechStack';
import ParallaxText from '../components/ParallaxText';
import PortfolioShowcase from '../components/PortfolioShowcase';
import Timeline from '../components/Timeline';
import ScrollFillText from '../components/ScrollFillText';
import CircularProgress from '../components/CircularProgress';
import { Link } from 'react-router-dom';

import SEO from '../components/SEO';
import useRevealOnScroll from '../hooks/useRevealOnScroll';

export default function HomePage() {
    useRevealOnScroll();
    return (
        <>
            <SEO
                title="Ana Sayfa"
                description="Inferno Design, işletmeler için yüksek performanslı web siteleri, SEO ve dijital pazarlama çözümleri sunan ödüllü bir ajanstır."
                keywords="web tasarım, seo, dijital ajans, kurumsal web sitesi, e-ticaret"
            />
            <Hero />
            <TrustBar />
            <MarqueeTicker />
            <HookCards />
            <StatsBar />

            {/* Scroll Fill Text Section */}
            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <ScrollFillText>
                        Web siteniz markanızın dijital vitrinidir. Kötü bir vitrin, en iyi ürünü bile satar gösteremez.
                    </ScrollFillText>
                </div>
            </section>

            <StatementBanner />
            <Services />
            <TechStack />

            {/* Circular Progress Section */}
            <section style={{ background: 'rgba(0,0,0,0.2)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <span className="text-cyan" style={{ fontFamily: "'Archivo Black'", fontSize: '12px', letterSpacing: '0.15em', display: 'block', marginBottom: '16px' }}>
                        BAŞARI METRİKLERİ
                    </span>
                    <h2 className="reveal" style={{ fontSize: 'clamp(28px, 4vw, 42px)', marginBottom: '0' }}>
                        RAKAMLAR <span className="text-yellow">YALAN SÖYLEMEZ.</span>
                    </h2>

                    <div className="circular-stats">
                        <CircularProgress value={98} label="%98" description="Müşteri Memnuniyeti" />
                        <CircularProgress value={95} label="%95" description="Zamanında Teslimat" />
                        <CircularProgress value={85} label="%85" description="Tavsiye Oranı" />
                        <CircularProgress value={92} label="%92" description="Yenileme Oranı" />
                    </div>
                </div>
            </section>

            <ParallaxText />
            <ProcessSteps />

            {/* Portfolio Showcase */}
            <div id="portfolio-section">
                <PortfolioShowcase />
            </div>

            <Testimonials />
            <Timeline />

            {/* Another Scroll Fill Text */}
            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <ScrollFillText>
                        İlk izlenim için ikinci şansınız yoktur. Biz o ilk izlenimi unutulmaz kılarız.
                    </ScrollFillText>
                </div>
            </section>

            <UrgencyBanner />

            {/* Sales Closing CTA */}
            <section className="cta-section">
                <div className="container">
                    <h2 className="reveal">
                        <span className="text-yellow">BEDELSİZ</span> STRATEJİ <br /> TOPLANTISI ALIN
                    </h2>
                    <p className="reveal" style={{ transitionDelay: '0.15s' }}>
                        30 dakikalık ücretsiz strateji görüşmesinde, web sitenizin potansiyelini ve büyüme fırsatlarını birlikte analiz edelim. Sizi dinleyelim, yol haritanızı çizelim.
                    </p>
                    <div className="reveal" style={{ transitionDelay: '0.3s' }}>
                        <Link to="/contact" className="cta-button large pulse">Ücretsiz Görüşme Başlat</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
