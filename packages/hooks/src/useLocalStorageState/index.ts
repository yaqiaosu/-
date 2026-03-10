import { createUseStorageState } from '../createUseStorageState';
import type { Options } from '../createUseStorageState';

export interface UseLocalStorageStateOptions<T> extends Options<T> {
  storage?: () => Storage;
}

function useLocalStorageState<T = string>(key: string, options?: UseLocalStorageStateOptions<T>) {
  // 默认使用 localStorage，可以通过 options.storage 覆盖
  const getStorage = options?.storage || (() => localStorage);
  const useStorageState = createUseStorageState(getStorage);
  return useStorageState(key, options as Options<T>);
}

export default useLocalStorageState;
