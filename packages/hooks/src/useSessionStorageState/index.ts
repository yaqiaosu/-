import { createUseStorageState } from '../createUseStorageState';
import type { Options } from '../createUseStorageState';

export interface UseSessionStorageStateOptions<T> extends Options<T> {
  storage?: () => Storage;
}

function useSessionStorageState<T = string>(key: string, options?: UseSessionStorageStateOptions<T>) {
  const getStorage = options?.storage || (() => sessionStorage);
  const useStorageState = createUseStorageState(getStorage);
  return useStorageState(key, options as Options<T>);
}

export default useSessionStorageState;
