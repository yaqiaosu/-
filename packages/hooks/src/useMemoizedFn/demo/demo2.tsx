import React, { useState, useCallback, useRef } from 'react';
import { useMemoizedFn } from 'yaya-hooks';
import path from 'path';

export default function Demo2() {
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
      <p>useMemoizedFn</p>
      <Example showCount={memoizedFn} />
      <p>useCallback (引用发生变化) </p>
      <Example showCount={callBackFn} />
    </div>
  );
}

const Example = React.memo<{ showCount: () => void }>(({ showCount }) => {
  const renderCountRef = useRef(0);
  renderCountRef.current++;

  return (
    <div>
      <p>Render count: {renderCountRef.current}</p>
      <button onClick={showCount}>+1</button>
    </div>
  );
});
