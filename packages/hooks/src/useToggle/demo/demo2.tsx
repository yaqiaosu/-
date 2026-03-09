import React, { useState, useCallback } from 'react';
import { useToggle } from 'yaya-hooks';

export default () => {
  const [value, { toggle, set, setLeft, setRight }] = useToggle('apple', 'orange');

  return (
    <div className="toggle-demo-container">
      <div className="toggle-demo-card">
        <div className="demo-header">
          <h1>状态切换演示</h1>
          <p className="demo-subtitle">useToggle Hook 实时展示</p>
        </div>

        <div className="status-display">
          <div className="status-label">当前状态</div>
          <div className={`status-value status-${value}`}>{value}</div>
          <div className="status-indicator">
            <span className="indicator-dot"></span>
            <span className="indicator-text">{value === 'apple' ? '🍎 苹果' : '🍊 橙子'}</span>
          </div>
        </div>

        <div className="button-group primary-group">
          <button className="btn btn-toggle" onClick={toggle}>
            <span className="btn-icon">⚡</span>
            <span className="btn-text">切换状态</span>
          </button>
        </div>

        <div className="divider">
          <span>或直接设置</span>
        </div>

        <div className="button-group secondary-group">
          <button className={`btn btn-set ${value === 'on' ? 'active' : ''}`} onClick={() => set('on')}>
            设置为 on
          </button>
          <button className={`btn btn-set ${value === 'off' ? 'active' : ''}`} onClick={() => set('off')}>
            设置为 off
          </button>
        </div>
      </div>
    </div>
  );
};
