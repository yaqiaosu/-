import React from 'react';
import { useLocalStorageState } from 'yaya-hooks';
export default function Demo() {
  const [value, setValue] = useLocalStorageState('fruits  ', {
    defaultValue: '世界上的人际交互的频率低于0.01%都好冷🩸',
    serializer: (value) => value ?? '',
    deserializer: (value) => value,
  });
  return (
    <div>
      <input value={value || 'text'} placeholder="请输入" onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => setValue('')}>清空</button>
      <button onClick={() => setValue(undefined)}>删除</button>
      <button onClick={() => setValue('世界上的人际交互的频率低于0.01%都好冷🩸')}>重置</button>
    </div>
  );
}
