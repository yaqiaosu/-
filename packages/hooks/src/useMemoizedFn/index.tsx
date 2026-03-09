import React, { useCallback, useRef } from 'react';
import { isDev, isFunction } from '../utils';
import { useMemo } from 'react';
type noop = (this, ...args: any[]) => void;
type PickFunction<T extends noop> = (this: thisParameterType<T>, ...args: Parameters<T>) => ReturnType<T>;
export default function useMemoizedFn<T extends noop>(fn: T) {
  if (isDev) {
    if (!isFunction(fn)) {
      console.error(`useMemoizedFn expected parameter is a function, got ${typeof fn}`);
    }
  }
  // 缓存函数引用
  const fnRef = useRef<T>(fn);
  fnRef.current = useMemo(() => fn, [fn]);
  const memoizedFn = useRef<PickFunction<T>>(null);

  // !返回稳定的引用
  if (!memoizedFn.current) {
    memoizedFn.current = function (this, ...args) {
      return fnRef.current.apply(this, args);
    };
  }
  return memoizedFn.current as T;
}
