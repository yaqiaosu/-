import React, { useRef, useEffect, useLayoutEffect } from 'react';

type EffectHookType = typeof React.useEffect | typeof React.useLayoutEffect;

export const createUpdateEffect: (effectHook: EffectHookType) => EffectHookType = (hook) => (effect, deps) => {
  const isMountedRef = useRef(false);

  hook(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
    } else {
      effect();
    }
  }, deps);
};

export default createUpdateEffect;
