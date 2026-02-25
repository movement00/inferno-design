import { renderHook } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import useCountUp from '../useCountUp';

describe('useCountUp', () => {
  it('should start at 0', () => {
    const { result } = renderHook(() => useCountUp(100, 1000));
    expect(result.current).toBe(0);
  });

  it('should accept end value of 0', () => {
    const { result } = renderHook(() => useCountUp(0, 1000));
    expect(result.current).toBe(0);
  });
});
