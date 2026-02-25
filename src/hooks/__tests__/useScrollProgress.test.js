import { renderHook } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import useScrollProgress from '../useScrollProgress';

describe('useScrollProgress', () => {
  it('should return initial scroll progress as 0', () => {
    const { result } = renderHook(() => useScrollProgress());
    expect(result.current).toBe(0);
  });
});
