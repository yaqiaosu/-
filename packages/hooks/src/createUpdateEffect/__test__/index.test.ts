import { renderHook } from '@testing-library/react';
import { useEffect, useLayoutEffect } from 'react';
import { createUpdateEffect } from '../index';

describe('createUpdateEffect', () => {
  it('serial test------', () => {
    const useUpdateEffect = createUpdateEffect(useEffect);
    let count = 0;
    const hook = renderHook(() => {
      useUpdateEffect(() => {
        console.log('update effect');
        count++;
      });
    });
    expect(count).toBe(0);
    hook.rerender();
    expect(count).toBe(1);
  });
});
