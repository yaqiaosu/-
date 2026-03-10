import { Options } from '../createUseStorageState/index.js';

interface UseLocalStorageStateOptions<T> extends Options<T> {
    storage?: () => Storage;
}
declare function useLocalStorageState<T = string>(key: string, options?: UseLocalStorageStateOptions<T>): any;

export { useLocalStorageState as default };
export type { UseLocalStorageStateOptions };
