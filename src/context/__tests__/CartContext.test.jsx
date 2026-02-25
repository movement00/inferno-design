import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { CartProvider, useCart } from '../CartContext';

const wrapper = ({ children }) => <CartProvider>{children}</CartProvider>;

describe('CartContext', () => {
  it('should start with empty cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    expect(result.current.items).toEqual([]);
    expect(result.current.total).toBe(0);
    expect(result.current.itemCount).toBe(0);
  });

  it('should add item to cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    act(() => {
      result.current.addItem({ id: 1, name: 'Test', price: 100 });
    });
    expect(result.current.items).toHaveLength(1);
    expect(result.current.total).toBe(100);
  });

  it('should not add duplicate items', () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    act(() => {
      result.current.addItem({ id: 1, name: 'Test', price: 100 });
      result.current.addItem({ id: 1, name: 'Test', price: 100 });
    });
    expect(result.current.items).toHaveLength(1);
  });

  it('should remove item from cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    act(() => {
      result.current.addItem({ id: 1, name: 'Test', price: 100 });
    });
    act(() => {
      result.current.removeItem(1);
    });
    expect(result.current.items).toHaveLength(0);
    expect(result.current.total).toBe(0);
  });

  it('should clear cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    act(() => {
      result.current.addItem({ id: 1, name: 'A', price: 100 });
      result.current.addItem({ id: 2, name: 'B', price: 200 });
    });
    act(() => {
      result.current.clearCart();
    });
    expect(result.current.items).toHaveLength(0);
    expect(result.current.total).toBe(0);
  });

  it('should toggle cart open/close', () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    expect(result.current.isOpen).toBe(false);
    act(() => {
      result.current.toggleCart();
    });
    expect(result.current.isOpen).toBe(true);
    act(() => {
      result.current.toggleCart();
    });
    expect(result.current.isOpen).toBe(false);
  });

  it('should throw error when used outside provider', () => {
    expect(() => {
      renderHook(() => useCart());
    }).toThrow('useCart must be used within CartProvider');
  });
});
