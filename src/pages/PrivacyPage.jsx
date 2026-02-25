import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import useRevealOnScroll from '../hooks/useRevealOnScroll';

export default function PrivacyPage() {
    useRevealOnScroll();
    return (
        <>
            <SEO
                title="Gizlilik Politikası & KVKK Aydınlatma Metni"
                description="Inferno Design gizlilik politikası ve KVKK kapsamında kişisel verilerin korunması hakkında bilgilendirme."
                canonical="/privacy"
            />
            <div className="container legal-page">
                <header className="page-header">
                    <span className="page-label reveal">Yasal</span>
                    <h1 className="reveal" style={{ transitionDelay: '0.1s' }}>
                        GİZLİLİK <span className="text-cyan">POLİTİKASI</span>
                    </h1>
                    <p className="page-desc reveal" style={{ transitionDelay: '0.2s' }}>
                        Son güncelleme: 1 Ocak 2026
                    </p>
                </header>

                <div className="legal-content reveal">
                    <section className="legal-section">
                        <h2>1. Veri Sorumlusu</h2>
                        <p>
                            Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında
                            veri sorumlusu sıfatıyla <strong>Inferno Design</strong> ("Şirket") tarafından hazırlanmıştır.
                        </p>
                        <div className="legal-info-box">
                            <p><strong>Unvan:</strong> Inferno Design Dijital Ajans</p>
                            <p><strong>Adres:</strong> Levent, İstanbul, Türkiye</p>
                            <p><strong>E-posta:</strong> hello@inferno.design</p>
                        </div>
                    </section>

                    <section className="legal-section">
                        <h2>2. Toplanan Kişisel Veriler</h2>
                        <p>Web sitemizi ziyaret ettiğinizde ve hizmetlerimizi kullandığınızda aşağıdaki kişisel veriler toplanabilmektedir:</p>
                        <ul>
                            <li><strong>Kimlik Bilgileri:</strong> Ad, soyad</li>
                            <li><strong>İletişim Bilgileri:</strong> E-posta adresi, telefon numarası, şirket adı</li>
                            <li><strong>Dijital İz Bilgileri:</strong> IP adresi, tarayıcı bilgileri, çerez verileri, ziyaret edilen sayfalar</li>
                            <li><strong>Proje Bilgileri:</strong> İletişim formunda paylaştığınız proje detayları, bütçe ve zaman çizelgesi bilgileri</li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <h2>3. Verilerin İşlenme Amaçları</h2>
                        <p>Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
                        <ul>
                            <li>Hizmet taleplerinize yanıt verilmesi ve teklif hazırlanması</li>
                            <li>Sözleşme süreçlerinin yürütülmesi</li>
                            <li>Web sitesi performansının analiz edilmesi ve iyileştirilmesi</li>
                            <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                            <li>Pazarlama faaliyetleri (açık rızanız ile)</li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <h2>4. Verilerin Hukuki Dayanağı</h2>
                        <p>Kişisel verileriniz KVKK'nın 5. maddesi kapsamında aşağıdaki hukuki dayanaklara istinaden işlenmektedir:</p>
                        <ul>
                            <li>Açık rızanız</li>
                            <li>Sözleşmenin kurulması veya ifası için gerekli olması</li>
                            <li>Şirketin hukuki yükümlülüğünü yerine getirmesi</li>
                            <li>Meşru menfaat</li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <h2>5. Çerez (Cookie) Politikası</h2>
                        <p>Web sitemiz aşağıdaki çerez türlerini kullanmaktadır:</p>
                        <div className="legal-table-wrap">
                            <table className="legal-table">
                                <thead>
                                    <tr>
                                        <th>Çerez Türü</th>
                                        <th>Amaç</th>
                                        <th>Süre</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Zorunlu Çerezler</td>
                                        <td>Site işlevselliği için gerekli</td>
                                        <td>Oturum</td>
                                    </tr>
                                    <tr>
                                        <td>Analitik Çerezler</td>
                                        <td>Ziyaretçi istatistikleri</td>
                                        <td>12 ay</td>
                                    </tr>
                                    <tr>
                                        <td>Tercih Çerezleri</td>
                                        <td>Dil, tema gibi kullanıcı tercihleri</td>
                                        <td>12 ay</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="legal-section">
                        <h2>6. Verilerin Aktarılması</h2>
                        <p>
                            Kişisel verileriniz, hizmet sağlayıcılarımız (hosting, analitik, e-posta hizmetleri) ile
                            KVKK'nın 8. ve 9. maddelerinde belirtilen şartlara uygun olarak paylaşılabilmektedir.
                            Verileriniz yurt dışına aktarılması halinde, KVKK'nın öngördüğü güvenlik önlemleri alınmaktadır.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>7. Veri Güvenliği</h2>
                        <p>Kişisel verilerinizin güvenliği için aşağıdaki teknik ve idari tedbirler alınmaktadır:</p>
                        <ul>
                            <li>SSL/TLS şifreleme</li>
                            <li>Güvenlik duvarı ve saldırı tespit sistemleri</li>
                            <li>Erişim yetkilendirme ve loglanma</li>
                            <li>Düzenli güvenlik denetimleri</li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <h2>8. Haklarınız (KVKK Madde 11)</h2>
                        <p>KVKK kapsamında aşağıdaki haklara sahipsiniz:</p>
                        <ul>
                            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                            <li>İşlenmişse buna ilişkin bilgi talep etme</li>
                            <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                            <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
                            <li>Eksik veya yanlış işlenmiş olması halinde düzeltilmesini isteme</li>
                            <li>KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde silinmesini isteme</li>
                            <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <h2>9. İletişim</h2>
                        <p>
                            KVKK kapsamındaki haklarınızı kullanmak için aşağıdaki kanallardan bize ulaşabilirsiniz:
                        </p>
                        <div className="legal-info-box">
                            <p><strong>E-posta:</strong> kvkk@inferno.design</p>
                            <p><strong>Adres:</strong> Levent, İstanbul, Türkiye</p>
                        </div>
                        <p style={{ marginTop: '16px', color: 'var(--text-secondary)', fontSize: '14px' }}>
                            Başvurularınız en geç 30 gün içinde yanıtlanacaktır.
                        </p>
                    </section>
                </div>

                <div className="legal-footer reveal">
                    <Link to="/" className="cta-button secondary">Ana Sayfaya Dön</Link>
                </div>
            </div>
        </>
    );
}
