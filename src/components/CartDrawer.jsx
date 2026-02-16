import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
    const { items, removeItem, clearCart, total, isOpen, closeCart } = useCart();

    return (
        <>
            {/* Backdrop */}
            <div className={`cart-backdrop ${isOpen ? 'open' : ''}`} onClick={closeCart} />

            {/* Drawer */}
            <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
                <div className="cart-header">
                    <h3>SEPETİNİZ</h3>
                    <button className="cart-close" onClick={closeCart}>✕</button>
                </div>

                {items.length === 0 ? (
                    <div className="cart-empty">
                        <div className="cart-empty-icon">🛒</div>
                        <p>Sepetiniz boş.</p>
                        <Link to="/pricing" className="cta-button secondary" onClick={closeCart} style={{ marginTop: '16px' }}>
                            Paketleri İncele
                        </Link>
                    </div>
                ) : (
                    <>
                        <div className="cart-items">
                            {items.map((item) => (
                                <div className="cart-item" key={item.id}>
                                    <div className="cart-item-info">
                                        <div className="cart-item-tier">{item.tier}</div>
                                        <div className="cart-item-name">{item.name}</div>
                                        <div className="cart-item-price">₺{item.price.toLocaleString('tr-TR')}</div>
                                    </div>
                                    <button className="cart-item-remove" onClick={() => removeItem(item.id)}>✕</button>
                                </div>
                            ))}
                        </div>

                        {/* Add-ons upsell */}
                        <div className="cart-upsell">
                            <p className="cart-upsell-title">🔥 ÖNERİLEN EKSTRALAR</p>
                            <div className="cart-addon" onClick={() => { }}>
                                <span>Aylık Bakım Paketi</span>
                                <span className="cart-addon-price">+₺2.900/ay</span>
                            </div>
                            <div className="cart-addon" onClick={() => { }}>
                                <span>Logo & Marka Kiti</span>
                                <span className="cart-addon-price">+₺7.500</span>
                            </div>
                        </div>

                        <div className="cart-footer">
                            <div className="cart-total">
                                <span>TOPLAM</span>
                                <span className="cart-total-price">₺{total.toLocaleString('tr-TR')}</span>
                            </div>
                            <Link to="/contact" className="cta-button large pulse" style={{ width: '100%', textAlign: 'center' }} onClick={closeCart}>
                                TEKLİF AL
                            </Link>
                            <button className="cart-clear" onClick={clearCart}>Sepeti Temizle</button>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}
