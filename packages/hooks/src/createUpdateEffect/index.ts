import * as React from 'react';

type EffectHookType = typeof React.useEffect | typeof React.useLayoutEffect;
type EffectCallback = () => void;
type DependencyList = React.DependencyList | undefined;

export const createUpdateEffect: (effectHook: EffectHookType) => EffectHookType = (hook) => (effect: EffectCallback, deps: DependencyList) => {
  const isMountedRef = React.useRef(false);

  hook(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
    } else {
      effect();
    }
  }, deps);
};

export default createUpdateEffect;
