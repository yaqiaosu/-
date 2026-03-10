import React from 'react';
import { useLocalStorageState } from 'yaya-hooks';
export default function Demo() {
  const [value, setValue] = useLocalStorageState('useLocalStorageState', {
    defaultValue: '',
  });
  return (
    <div>
      <input value={value || ''} placeholder="请输入" onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => setValue('useLocalStorageState')}>重置</button>
      <button onClick={() => setValue('')}>清空</button>
    </div>
  );
}
