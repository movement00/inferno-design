import { useCart } from '../context/CartContext';

export default function CartIcon() {
    const { itemCount, toggleCart } = useCart();

    return (
        <button className="cart-icon-btn" onClick={toggleCart} title="Sepet">
            🛒
            {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
        </button>
    );
}
