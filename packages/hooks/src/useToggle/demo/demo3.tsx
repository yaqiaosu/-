import React from 'react';
import { useToggle } from 'yaya-hooks';

export default () => {
  // 不传参数时，默认值为 false
  const [state, { toggle }] = useToggle();

  return (
    <div style={{ padding: 20 }}>
      <div>
        当前状态: <strong>{state ? 'true' : 'false'}</strong>
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
          }}
        >
          Toggle
        </button>
      </div>
    </div>
  );
};
