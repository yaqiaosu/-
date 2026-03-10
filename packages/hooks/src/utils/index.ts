export const isDev = process.env.NODE_ENV === 'development';
export const isFunction = (val: unknown): val is Function => typeof val === 'function';
export const isUndefined = (val: unknown): val is undefined => typeof val === 'undefined';
