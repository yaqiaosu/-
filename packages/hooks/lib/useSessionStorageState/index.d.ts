import { Options } from '../createUseStorageState/index.js';

interface UseSessionStorageStateOptions<T> extends Options<T> {
    storage?: () => Storage;
}
declare function useSessionStorageState<T = string>(key: string, options?: UseSessionStorageStateOptions<T>): any;

export { useSessionStorageState as default };
export type { UseSessionStorageStateOptions };
