import { useUpdateEffect } from 'yaya-hooks';
import { useState, useEffect } from 'react';
import path from 'path';
export default function Demo() {
  const [count, setCount] = useState(0);
  const [effectCount, setEffectCount] = useState(0);
  const [updateEffectCount, setUpdateEffectCount] = useState(0);
  useEffect(() => {
    setEffectCount((c) => c + 1);
  }, [count]);
  useUpdateEffect(() => {
    setUpdateEffectCount((c) => c + 1);
  }, [count]);
  return (
    <div>
      <p>count: {count}</p>
      <p>effectCount: {effectCount}</p>
      <p>updateEffectCount: {updateEffectCount}</p>

      <button onClick={() => setCount((c) => c + 1)}>count: {count}</button>
    </div>
  );
}
