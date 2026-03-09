import React from 'react';
import { useToggle } from 'yaya-hooks';

export default () => {
  const [theme, { toggle }] = useToggle('dark', 'light');

  const isDark = theme === 'dark';

  return (
    <div
      style={{
        padding: 20,
        backgroundColor: isDark ? '#1a1a1a' : '#ffffff',
        color: isDark ? '#ffffff' : '#000000',
        borderRadius: 8,
        transition: 'all 0.3s',
      }}
    >
      <div style={{ marginBottom: 16 }}>
        <strong>当前主题: {theme}</strong>
      </div>
      <button
        onClick={toggle}
        style={{
          padding: '8px 16px',
          background: isDark ? '#1890ff' : '#722ed1',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        切换主题
      </button>
      <div style={{ marginTop: 16, padding: 16, border: `1px solid ${isDark ? '#333' : '#ddd'}`, borderRadius: 4 }}>
        <h3>示例内容</h3>
        <p>这是一段示例文本，用于展示主题切换效果。</p>
      </div>
    </div>
  );
};
