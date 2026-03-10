import { useCallback, useRef, useMemo } from 'react';
import { isDev, isFunction } from '../utils';
type noop = (this: unknown, ...args: any[]) => any;
type PickFunction<T extends noop> = (this: ThisParameterType<T>, ...args: Parameters<T>) => ReturnType<T>;
export default function useMemoizedFn<T extends noop>(fn: T) {
  if (isDev) {
    if (!isFunction(fn)) {
      console.error(`useMemoizedFn expected parameter is a function, got ${typeof fn}`);
    }
  }
  // 缓存函数引用
  const fnRef = useRef<T>(fn);
  fnRef.current = useMemo(() => fn, [fn]);
  const memoizedFn = useRef<PickFunction<T> | null>(null);

  // !返回稳定的引用
  if (!memoizedFn.current) {
    memoizedFn.current = function (this: unknown, ...args: Parameters<T>) {
      return fnRef.current.apply(this, args);
    };
  }
  return memoizedFn.current as unknown as T;
}
