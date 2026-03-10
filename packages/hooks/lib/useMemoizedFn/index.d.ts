type noop = (this: unknown, ...args: any[]) => any;
declare function useMemoizedFn<T extends noop>(fn: T): T;

export { useMemoizedFn as default };
