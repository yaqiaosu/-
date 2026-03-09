import React, { useState, useCallback } from 'react';

import { useMemoizedFn } from 'yaya-hooks';
export default function Demo() {
  const [count, setCount] = useState(0);
  const callBackFn = useCallback(() => {
    console.log('count', count);
  }, [count]);
  const memoizedFn = useMemoizedFn(() => {
    console.log('count', count);
  });

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={callBackFn}>useCallback</button>
      <button onClick={memoizedFn}>useMemoizedFn</button>
    </div>
  );
}
