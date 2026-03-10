type UseToggleActions<T> = {
    toggle: () => void;
    set: (value: T) => void;
    setLeft: () => void;
    setRight: () => void;
};
declare function useToggle<T = boolean>(defaultValue?: T): [T, UseToggleActions<T>];
declare function useToggle<T, U>(defaultValue: T, reverseValue?: U): [T | U, UseToggleActions<T | U>];

export { useToggle as default };
export type { UseToggleActions };
