import React from 'react';
import { useToggle } from 'yaya-hooks';

export default () => {
  const [status, { toggle, setLeft, setRight }] = useToggle('pending', 'success');

  const getStatusColor = (s: string) => {
    switch (s) {
      case 'pending':
        return '#faad14';
      case 'success':
        return '#52c41a';
      default:
        return '#d9d9d9';
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <div>
        当前状态: <strong style={{ color: getStatusColor(status) }}>{status}</strong>
      </div>
      <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
        <button
          onClick={toggle}
          style={{
            padding: '8px 16px',
            background: '#1890ff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          切换
        </button>
        <button
          onClick={setLeft}
          style={{
            padding: '8px 16px',
            background: '#faad14',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          设为 pending
        </button>
        <button
          onClick={setRight}
          style={{
            padding: '8px 16px',
            background: '#52c41a',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          设为 success
        </button>
      </div>
    </div>
  );
};
