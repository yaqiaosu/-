interface Options<T> {
    defaultValue: T | (() => string);
    serializer?: (value: T) => string;
    deserializer?: (value: string) => T;
    onError?: (error: Error) => void;
}

export type { Options };
