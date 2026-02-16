import { useState } from 'react';
import { useCart } from '../context/CartContext';
import Testimonials from '../components/Testimonials';
import ScrollFillText from '../components/ScrollFillText';

import SEO from '../components/SEO';

export default function ContactPage() {
    const { items, total } = useCart();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        budget: '',
        projectType: '',
        message: '',
        timeline: '',
        hearAbout: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <>
            <SEO
                title="İletişim - Teklif Alın"
                description="Projeniz için ücretsiz strateji görüşmesi başlatın. 24 saat içinde dönüş garantisi."
                keywords="web tasarım teklif, iletişim, istanbul web ajansı contact"
            />
            <div className="container">
                <div className="page-header">
                    <span className="page-label reveal">İletişim</span>
                    <h1 className="reveal" style={{ transitionDelay: '0.1s' }}>
                        PROJENİZİ <br /><span className="text-cyan">ANLATINIZ.</span>
                    </h1>
                    <p className="page-desc reveal" style={{ transitionDelay: '0.2s' }}>
                        Formu doldurun, 24 saat içinde size özel bir strateji önerisiyle dönelim. İlk görüşme tamamen ücretsizdir.
                    </p>
                </div>
            </div>

            {/* If cart has items, show summary */}
            {items.length > 0 && (
                <section style={{ paddingTop: 0, paddingBottom: '40px' }}>
                    <div className="container">
                        <div className="cart-summary-banner reveal">
                            <div className="cart-summary-left">
                                <span className="cart-summary-label">🛒 SEÇİLİ PAKETLER</span>
                                <div className="cart-summary-items">
                                    {items.map((item) => (
                                        <span className="cart-summary-tag" key={item.id}>{item.name}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="cart-summary-right">
                                <span className="cart-summary-total">₺{total.toLocaleString('tr-TR')}</span>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            <section style={{ paddingTop: 0 }}>
                <div className="container">
                    <div className="contact-form-section">
                        {/* Left Side - Info */}
                        <div className="contact-info-side reveal-left">
                            <h3>NEDEN <span className="text-cyan">INFERNO?</span></h3>
                            <p>
                                Sadece güzel siteler yapmıyoruz — iş sonuçları üreten dijital deneyimler tasarlıyoruz.
                                127+ projenin ardından edindiğimiz deneyimle, markanız için en doğru stratejiyi belirliyoruz.
                            </p>

                            <div className="contact-detail-item">
                                <div className="detail-icon">📧</div>
                                <div>
                                    <h4>E-posta</h4>
                                    <a href="mailto:hello@inferno.design">hello@inferno.design</a>
                                </div>
                            </div>

                            <div className="contact-detail-item">
                                <div className="detail-icon">📱</div>
                                <div>
                                    <h4>Telefon / WhatsApp</h4>
                                    <a href="tel:+905550000000">+90 555 000 00 00</a>
                                </div>
                            </div>

                            <div className="contact-detail-item">
                                <div className="detail-icon">📍</div>
                                <div>
                                    <h4>Ofis</h4>
                                    <p>Levent, İstanbul<br />Teknoloji Vadisi, No: 42</p>
                                </div>
                            </div>

                            <div className="contact-detail-item">
                                <div className="detail-icon">⏰</div>
                                <div>
                                    <h4>Çalışma Saatleri</h4>
                                    <p>Pazartesi – Cuma: 09:00 – 18:00</p>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="contact-socials">
                                <a href="#" className="social-link">Instagram</a>
                                <a href="#" className="social-link">LinkedIn</a>
                                <a href="#" className="social-link">Behance</a>
                                <a href="#" className="social-link">Dribbble</a>
                            </div>

                            {/* Trust elements */}
                            <div className="contact-trust-box">
                                <div className="trust-item">
                                    <strong>✦ Ücretsiz Strateji Görüşmesi</strong>
                                    <span>30 dakikalık görüşmede projenizi analiz ediyoruz.</span>
                                </div>
                                <div className="trust-item">
                                    <strong>✦ 48 Saat İçinde Teklif</strong>
                                    <span>Detaylı proje teklifini 2 iş günü içinde iletiyoruz.</span>
                                </div>
                                <div className="trust-item">
                                    <strong>✦ %100 Memnuniyet Garantisi</strong>
                                    <span>Memnun kalmazsanız ödemenizi iade ediyoruz.</span>
                                </div>
                                <div className="trust-item">
                                    <strong>✦ NDA ile Gizlilik</strong>
                                    <span>Tüm proje bilgileriniz gizlilik sözleşmesi ile korunur.</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Form */}
                        <div className="contact-form reveal-right">
                            {submitted ? (
                                <div className="form-success">
                                    <div className="success-icon">🔥</div>
                                    <h3>MESAJINIZ ALINDI!</h3>
                                    <p>
                                        En kısa sürede size dönüş yapacağız. Genellikle 24 saat içinde geri bildirim sağlıyoruz.
                                    </p>
                                    <div className="success-details">
                                        <div className="success-step">
                                            <span className="success-step-num">1</span>
                                            <span>Mesajınız inceleniyor</span>
                                        </div>
                                        <div className="success-step">
                                            <span className="success-step-num">2</span>
                                            <span>Strateji önerisi hazırlanıyor</span>
                                        </div>
                                        <div className="success-step">
                                            <span className="success-step-num">3</span>
                                            <span>24 saat içinde geri dönüş</span>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <h3>PROJENİZİ BAŞLATIN</h3>
                                    <p className="form-subtitle">Aşağıdaki formu doldurun, size özel teklifimizi hazırlayalım.</p>

                                    <form onSubmit={handleSubmit}>
                                        <div className="form-row">
                                            <div className="form-group">
                                                <label htmlFor="name">Adınız *</label>
                                                <input type="text" id="name" name="name" required placeholder="Adınız Soyadınız" value={formData.name} onChange={handleChange} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email">E-posta *</label>
                                                <input type="email" id="email" name="email" required placeholder="mail@sirketiniz.com" value={formData.email} onChange={handleChange} />
                                            </div>
                                        </div>

                                        <div className="form-row">
                                            <div className="form-group">
                                                <label htmlFor="phone">Telefon</label>
                                                <input type="tel" id="phone" name="phone" placeholder="+90 5XX XXX XX XX" value={formData.phone} onChange={handleChange} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="company">Şirket / Marka</label>
                                                <input type="text" id="company" name="company" placeholder="Şirket adınız" value={formData.company} onChange={handleChange} />
                                            </div>
                                        </div>

                                        <div className="form-row">
                                            <div className="form-group">
                                                <label htmlFor="projectType">Proje Türü *</label>
                                                <select id="projectType" name="projectType" required value={formData.projectType} onChange={handleChange}>
                                                    <option value="">Seçiniz</option>
                                                    <option value="kurumsal">Kurumsal Web Sitesi</option>
                                                    <option value="eticaret">E-Ticaret Sitesi</option>
                                                    <option value="landing">Landing Page</option>
                                                    <option value="webapp">Web Uygulaması</option>
                                                    <option value="platform">Platform / Portal</option>
                                                    <option value="marka">Marka Kimliği</option>
                                                    <option value="redesign">Mevcut Site Yenileme</option>
                                                    <option value="diger">Diğer</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="budget">Bütçe Aralığı</label>
                                                <select id="budget" name="budget" value={formData.budget} onChange={handleChange}>
                                                    <option value="">Seçiniz</option>
                                                    <option value="15-25k">₺15.000 – ₺25.000</option>
                                                    <option value="25-50k">₺25.000 – ₺50.000</option>
                                                    <option value="50-100k">₺50.000 – ₺100.000</option>
                                                    <option value="100k+">₺100.000+</option>
                                                    <option value="bilmiyorum">Henüz Bilmiyorum</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="form-row">
                                            <div className="form-group">
                                                <label htmlFor="timeline">Zaman Çizelgesi</label>
                                                <select id="timeline" name="timeline" value={formData.timeline} onChange={handleChange}>
                                                    <option value="">Seçiniz</option>
                                                    <option value="acil">Acil (1-2 hafta)</option>
                                                    <option value="1ay">1 ay içinde</option>
                                                    <option value="3ay">3 ay içinde</option>
                                                    <option value="esnek">Esnek</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="hearAbout">Bizi nereden duydunuz?</label>
                                                <select id="hearAbout" name="hearAbout" value={formData.hearAbout} onChange={handleChange}>
                                                    <option value="">Seçiniz</option>
                                                    <option value="google">Google Arama</option>
                                                    <option value="instagram">Instagram</option>
                                                    <option value="linkedin">LinkedIn</option>
                                                    <option value="referans">Müşteri Referansı</option>
                                                    <option value="diger">Diğer</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="message">Proje Detayları *</label>
                                            <textarea id="message" name="message" required placeholder="Projeniz hakkında kısaca bilgi verin. Ne tür bir web sitesine ihtiyacınız var? Hedefleriniz neler? Referans siteleriniz var mı?" value={formData.message} onChange={handleChange} />
                                        </div>

                                        <button type="submit" className="cta-button large pulse" style={{ width: '100%', textAlign: 'center' }}>
                                            ÜCRETSİZ TEKLİF AL
                                        </button>

                                        <p style={{ fontSize: '12px', color: '#666', textAlign: 'center', marginTop: '16px' }}>
                                            🔒 Bilgileriniz gizli tutulur ve KVKK kapsamında korunur. Spam göndermiyoruz.
                                        </p>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Scroll fill text */}
            <section style={{ padding: '60px 0' }}>
                <div className="container">
                    <ScrollFillText>
                        Bir form, bir mesaj, bir adım. Dijital dönüşümünüz burada başlıyor.
                    </ScrollFillText>
                </div>
            </section>

            <Testimonials />

            {/* FAQ Mini */}
            <section className="cta-section">
                <div className="container">
                    <h2 className="reveal">
                        HÂLÂ <span className="text-yellow">TEREDDÜT MÜ</span> EDİYORSUNUZ?
                    </h2>
                    <p className="reveal" style={{ transitionDelay: '0.15s' }}>
                        Bize yazın veya arayın — hiçbir soruyu cevapsız bırakmıyoruz. İlk adımı atmanız yeterli.
                    </p>
                    <div className="reveal" style={{ transitionDelay: '0.3s', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="https://wa.me/905550000000" target="_blank" rel="noopener noreferrer" className="cta-button large" style={{ background: '#25D366' }}>WhatsApp ile Yaz</a>
                        <a href="tel:+905550000000" className="cta-button large secondary">Hemen Ara</a>
                    </div>
                </div>
            </section>
        </>
    );
}
