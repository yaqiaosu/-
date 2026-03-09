import React from 'react';
import { useToggle } from 'yaya-hooks';

export default () => {
  const [isOpen, { toggle, set }] = useToggle(false);

  return (
    <div style={{ padding: 20 }}>
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
        打开弹窗
      </button>

      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
          onClick={() => set(false)}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: 24,
              borderRadius: 8,
              maxWidth: 400,
              width: '90%',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 style={{ marginTop: 0 }}>这是一个弹窗</h3>
            <p>点击遮罩层或下方按钮可以关闭弹窗。</p>
            <div style={{ textAlign: 'right', marginTop: 16 }}>
              <button
                onClick={() => set(false)}
                style={{
                  padding: '6px 16px',
                  background: '#ff4d4f',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                关闭
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
