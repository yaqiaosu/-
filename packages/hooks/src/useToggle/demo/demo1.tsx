import React from 'react';
import { useToggle } from 'yaya-hooks';

export default () => {
  const [isVisible, { toggle, set }] = useToggle(false);

  return (
    <div style={{ padding: 20 }}>
      <div>
        当前状态: <strong>{isVisible ? '显示' : '隐藏'}</strong>
      </div>
      <div style={{ marginTop: 16 }}>
        <button
          onClick={toggle}
          style={{
            padding: '8px 16px',
            background: '#1890ff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginRight: 8,
          }}
        >
          Toggle 切换
        </button>
        <button
          onClick={() => set(true)}
          style={{
            padding: '8px 16px',
            background: '#52c41a',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginRight: 8,
          }}
        >
          显示
        </button>
        <button
          onClick={() => set(false)}
          style={{
            padding: '8px 16px',
            background: '#ff4d4f',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          隐藏
        </button>
      </div>
      {isVisible && (
        <div
          style={{
            marginTop: 16,
            padding: 16,
            background: '#f5f5f5',
            borderRadius: 4,
          }}
        >
          这是一段可显示/隐藏的内容
        </div>
      )}
    </div>
  );
};
