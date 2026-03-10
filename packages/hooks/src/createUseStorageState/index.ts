import { useState } from 'react';
import { isFunction, isUndefined } from '../utils/index';
import useUpdateEffect from '../useUpdateEffect';
import useMemoizedFn from '../useMemoizedFn';
export type setStateFn<T> = T | ((newState: T) => T);
export interface Options<T> {
  // 可以是一个值，也可以是一个函数，用于获取默认值
  defaultValue: T | (() => string);
  serializer?: (value: T) => string;
  deserializer?: (value: string) => T;
  onError?: (error: Error) => void;
}

export function createUseStorageState(getStorage: () => Storage) {
  function useStorageState<T>(key: string, options: Options<T>) {
    let storage: Storage | undefined;
    const { defaultValue, onError } = options;

    try {
      storage = getStorage();
    } catch (error) {
      onError?.(error as Error);
    }
    const serializer = (value: T) => {
      if (options.serializer) {
        return options.serializer(value);
      }
      return JSON.stringify(value);
    };
    const deserialize = (value: string) => {
      if (options.deserializer) {
        return options.deserializer(value);
      }
      return JSON.parse(value);
    };
    const getStorageValue = () => {
      const value = storage?.getItem(key);
      if (value) {
        return deserialize(value);
      }
      if (isFunction(defaultValue)) {
        return defaultValue();
      }
      return defaultValue;
    };
    const [state, setState] = useState(getStorageValue());
    useUpdateEffect(() => {
      setState(getStorageValue());
    }, [key]);
    const updateState = (newState?: setStateFn<T>) => {
      const value = isFunction(newState) ? newState(state) : newState;
      setState(value);
      if (isUndefined(value)) {
        storage?.removeItem(key);
      } else {
        try {
          storage?.setItem(key, serializer(value));
        } catch (error) {
          onError?.(error as Error);
        }
      }
    };
    return [state, useMemoizedFn(updateState)] as const;
  }
  return useStorageState;
}
