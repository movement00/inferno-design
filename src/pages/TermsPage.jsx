import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import useRevealOnScroll from '../hooks/useRevealOnScroll';

export default function TermsPage() {
    useRevealOnScroll();
    return (
        <>
            <SEO
                title="Kullanım Şartları"
                description="Inferno Design web sitesi kullanım şartları ve koşulları."
                canonical="/terms"
            />
            <div className="container legal-page">
                <header className="page-header">
                    <span className="page-label reveal">Yasal</span>
                    <h1 className="reveal" style={{ transitionDelay: '0.1s' }}>
                        KULLANIM <span className="text-yellow">ŞARTLARI</span>
                    </h1>
                    <p className="page-desc reveal" style={{ transitionDelay: '0.2s' }}>
                        Son güncelleme: 1 Ocak 2026
                    </p>
                </header>

                <div className="legal-content reveal">
                    <section className="legal-section">
                        <h2>1. Genel Hükümler</h2>
                        <p>
                            Bu web sitesini ("Site") kullanarak aşağıdaki kullanım şartlarını kabul etmiş sayılırsınız.
                            Bu şartları kabul etmiyorsanız, lütfen siteyi kullanmayınız. Inferno Design, bu şartları
                            önceden bildirimde bulunmaksızın değiştirme hakkını saklı tutar.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>2. Hizmet Tanımı</h2>
                        <p>
                            Inferno Design, web tasarım, geliştirme, SEO, dijital pazarlama ve marka kimliği
                            hizmetleri sunan bir dijital ajanstır. Site üzerinden sunulan bilgiler genel
                            bilgilendirme amaçlıdır ve bağlayıcı bir teklif niteliği taşımaz.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>3. Fikri Mülkiyet Hakları</h2>
                        <p>
                            Bu sitedeki tüm içerikler (metin, grafik, logo, ikon, görsel, ses, video, yazılım ve diğer
                            materyaller) Inferno Design'ın veya lisans verenlerinin fikri mülkiyetidir.
                        </p>
                        <ul>
                            <li>İçerikler izinsiz kopyalanamaz, çoğaltılamaz veya dağıtılamaz</li>
                            <li>Ticari amaçla kullanılamaz</li>
                            <li>Kaynak gösterilmeden alıntı yapılamaz</li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <h2>4. Kullanıcı Yükümlülükleri</h2>
                        <p>Siteyi kullanırken aşağıdaki kurallara uymayı kabul edersiniz:</p>
                        <ul>
                            <li>Yasalara ve ahlak kurallarına aykırı davranmamak</li>
                            <li>Siteye zarar verebilecek yazılım veya kodlar yüklememek</li>
                            <li>Diğer kullanıcıların haklarını ihlal etmemek</li>
                            <li>İletişim formlarında doğru bilgi vermek</li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <h2>5. Fiyatlandırma ve Ödeme</h2>
                        <p>
                            Sitede belirtilen fiyatlar referans amaçlıdır ve proje kapsamına göre değişiklik
                            gösterebilir. Kesin fiyat, proje detaylarının değerlendirilmesinin ardından teklif
                            aşamasında belirlenir. Tüm fiyatlara KDV dahil değildir (aksi belirtilmedikçe).
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>6. Proje Süreci ve Teslimat</h2>
                        <ul>
                            <li>Proje başlangıcı için %50 ön ödeme talep edilmektedir</li>
                            <li>Teslimat süreleri tahmini olup, proje karmaşıklığına göre değişebilir</li>
                            <li>Müşteri kaynaklı gecikmeler teslimat süresini uzatabilir</li>
                            <li>Revizyon hakları sözleşmede belirtilir</li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <h2>7. Sorumluluk Sınırlandırması</h2>
                        <p>
                            Inferno Design, site üzerindeki bilgilerin doğruluğu ve güncelliği konusunda azami
                            özeni göstermekle birlikte, bilgilerin eksiksiz ve hatasız olduğunu garanti etmez.
                            Site kullanımından doğabilecek doğrudan veya dolaylı zararlardan sorumlu tutulamaz.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>8. Harici Bağlantılar</h2>
                        <p>
                            Sitemiz üçüncü taraf web sitelerine bağlantılar içerebilir. Bu sitelerin içerik
                            ve gizlilik politikalarından Inferno Design sorumlu değildir.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>9. Uyuşmazlık Çözümü</h2>
                        <p>
                            Bu kullanım şartlarından doğan uyuşmazlıklarda Türkiye Cumhuriyeti hukuku uygulanacak
                            olup, İstanbul Mahkemeleri ve İcra Daireleri yetkilidir.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>10. İletişim</h2>
                        <div className="legal-info-box">
                            <p><strong>E-posta:</strong> hello@inferno.design</p>
                            <p><strong>Adres:</strong> Levent, İstanbul, Türkiye</p>
                        </div>
                    </section>
                </div>

                <div className="legal-footer reveal">
                    <Link to="/" className="cta-button secondary">Ana Sayfaya Dön</Link>
                </div>
            </div>
        </>
    );
}
