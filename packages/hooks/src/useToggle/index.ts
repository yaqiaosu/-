import { useState, useMemo, useCallback } from 'react';

export type UseToggleActions<T> = {
  toggle: () => void;
  set: (value: T) => void;
  setLeft: () => void;
  setRight: () => void;
};

function useToggle<T = boolean>(defaultValue?: T): [T, UseToggleActions<T>];
function useToggle<T, U>(defaultValue: T, reverseValue?: U): [T | U, UseToggleActions<T | U>];
function useToggle<T = boolean, U = T>(defaultValue: T = false as T, reverseValue?: U): [T | U, UseToggleActions<T | U>] {
  const [value, setValue] = useState<T | U>(defaultValue);

  const reverseValueOrigin = useMemo(() => {
    if (reverseValue !== undefined) {
      return reverseValue;
    }
    // 如果 reverseValue 没传，当 defaultValue 是 boolean 时取反，否则取 defaultValue
    if (typeof defaultValue === 'boolean') {
      return !defaultValue as T | U;
    }
    return defaultValue as T | U;
  }, [defaultValue, reverseValue]);

  const toggle = useCallback(() => {
    setValue((prev) => (prev === defaultValue ? reverseValueOrigin : defaultValue));
  }, [defaultValue, reverseValueOrigin]);

  const set = useCallback((newValue: T | U) => {
    setValue(newValue);
  }, []);

  const setLeft = useCallback(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const setRight = useCallback(() => {
    setValue(reverseValueOrigin);
  }, [reverseValueOrigin]);

  const actions = useMemo(() => ({
    toggle,
    set,
    setLeft,
    setRight,
  }), [toggle, set, setLeft, setRight]);

  return [value, actions];
}

export default useToggle;
