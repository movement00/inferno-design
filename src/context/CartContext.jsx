import { createContext, useContext, useState, useCallback } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [items, setItems] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const addItem = useCallback((item) => {
        setItems((prev) => {
            const exists = prev.find((i) => i.id === item.id);
            if (exists) return prev;
            return [...prev, item];
        });
        setIsOpen(true);
    }, []);

    const removeItem = useCallback((id) => {
        setItems((prev) => prev.filter((i) => i.id !== id));
    }, []);

    const clearCart = useCallback(() => {
        setItems([]);
    }, []);

    const total = items.reduce((sum, item) => sum + item.price, 0);
    const itemCount = items.length;

    const toggleCart = useCallback(() => setIsOpen((p) => !p), []);
    const openCart = useCallback(() => setIsOpen(true), []);
    const closeCart = useCallback(() => setIsOpen(false), []);

    return (
        <CartContext.Provider value={{
            items, addItem, removeItem, clearCart,
            total, itemCount,
            isOpen, toggleCart, openCart, closeCart,
        }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) throw new Error('useCart must be used within CartProvider');
    return context;
}
