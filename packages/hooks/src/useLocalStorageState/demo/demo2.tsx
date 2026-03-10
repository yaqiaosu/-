import React from 'react';
import { useLocalStorageState } from 'yaya-hooks';
export default function Demo() {
  const arr = ['apple', 'orange', 'peach', 'banana', 'watermelon', 'grape'];
  const [value, setValue] = useLocalStorageState('fruits  ', {
    defaultValue: arr,
  });
  return (
    <div>
      <p>{value.join(', ')}</p>
      <button onClick={() => setValue([...value, Math.random().toString(36).slice(-1)])}>添加</button>
      <button onClick={() => setValue([])}>清空</button>
      <button onClick={() => setValue(value.slice(0, -1))}>删除</button>
      <button onClick={() => setValue(arr)}>恢复</button>
    </div>
  );
}
