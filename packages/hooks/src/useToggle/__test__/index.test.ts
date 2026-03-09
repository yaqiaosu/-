import { renderHook, act, RenderResult } from '@testing-library/react';
import useToggle from '../index';

const callToggle = (hook: RenderResult<ReturnType<typeof useToggle>, undefined>) => {
  act(() => {
    hook.result.current[1].toggle();
  });
};

describe('useToggle', () => {
  it('test on init', () => {
    const hook = renderHook(() => useToggle());
    expect(hook.result.current[0]).toBe(false);
  });

  it('test toggle', async () => {
    const hook = renderHook(() => useToggle('ILoveYou'));
    expect(hook.result.current[0]).toBe('ILoveYou');
    callToggle(hook);
    expect(hook.result.current[0]).toBe(false);
    act(() => {
      hook.result.current[1].setLeft();
    });
    expect(hook.result.current[0]).toBe('ILoveYou');
    act(() => {
      hook.result.current[1].setRight();
    });
    expect(hook.result.current[0]).toBe(false);
  });
  it('test reverseValue', () => {
    const hook = renderHook(() => useToggle(false, true));
    expect(hook.result.current[0]).toBe(false);
    callToggle(hook);
    expect(hook.result.current[0]).toBe(true);
    act(() => {
      hook.result.current[1].set(true);
    });
    expect(hook.result.current[0]).toBe(true);
    callToggle(hook);
    expect(hook.result.current[0]).toBe(false);
  });
});
