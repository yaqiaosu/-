import React from 'react';
import { useToggle } from 'yaya-hooks';

export default () => {
  const [isExpanded, { toggle }] = useToggle(false);

  return (
    <div style={{ padding: 20 }}>
      <div
        style={{
          border: '1px solid #d9d9d9',
          borderRadius: 8,
          overflow: 'hidden',
        }}
      >
        <button
          onClick={toggle}
          style={{
            width: '100%',
            padding: '12px 16px',
            background: '#fafafa',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 14,
          }}
        >
          <span>点击展开/收起</span>
          <span style={{ transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>▶</span>
        </button>
        {isExpanded && (
          <div style={{ padding: 16, borderTop: '1px solid #d9d9d9' }}>
            <p>这是折叠面板的内容区域。</p>
            <p>可以放置任意内容，如表单、列表、图片等。</p>
          </div>
        )}
      </div>
    </div>
  );
};
