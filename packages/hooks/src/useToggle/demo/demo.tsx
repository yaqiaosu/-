import React, { useState, useCallback } from 'react';
import { useToggle } from 'yaya-hooks';

export default () => {
  const [isOn, { toggle, set, setLeft, setRight }] = useToggle(false);

  const handleButtonClick = (action) => (e) => {
    e.stopPropagation();
    action();
  };

  return (
    <div style={{ padding: 20 }}>
      <div>
        当前状态: <strong>{isOn ? 'ON' : 'OFF'}</strong>
      </div>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 16 }}>
        <button
          onClick={handleButtonClick(toggle)}
          style={{
            padding: '8px 16px',
            background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            fontFamily: 'monospace',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            minWidth: '100px',
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.05)';
            e.target.style.boxShadow = '0 0 20px rgba(6, 182, 212, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = 'none';
          }}
        >
          Toggle
        </button>
        <button
          onClick={handleButtonClick(() => set(true))}
          style={{
            padding: '8px 16px',
            background: 'linear-gradient(135deg, #8b5cf6, #f97316)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            fontFamily: 'monospace',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            minWidth: '100px',
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.05)';
            e.target.style.boxShadow = '0 0 20px rgba(139, 92, 246, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = 'none';
          }}
        >
          Set True
        </button>
        <button
          onClick={handleButtonClick(() => set(false))}
          style={{
            padding: '8px 16px',
            background: 'linear-gradient(135deg, #f97316, #06b6d4)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            fontFamily: 'monospace',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            minWidth: '100px',
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.05)';
            e.target.style.boxShadow = '0 0 20px rgba(249, 115, 22, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = 'none';
          }}
        >
          Set False
        </button>
        <button
          onClick={handleButtonClick(setLeft)}
          style={{
            padding: '8px 16px',
            background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            fontFamily: 'monospace',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            minWidth: '100px',
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.05)';
            e.target.style.boxShadow = '0 0 20px rgba(6, 182, 212, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = 'none';
          }}
        >
          Set Left
        </button>
        <button
          onClick={handleButtonClick(setRight)}
          style={{
            padding: '8px 16px',
            background: 'linear-gradient(135deg, #8b5cf6, #f97316)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            fontFamily: 'monospace',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            minWidth: '100px',
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.05)';
            e.target.style.boxShadow = '0 0 20px rgba(139, 92, 246, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = 'none';
          }}
        >
          Set Right
        </button>
      </div>
    </div>
  );
};
