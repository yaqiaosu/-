import React, { useState, useEffect } from 'react';
import { useToggle } from 'yaya-hooks';

// 霓虹光效组件
const NeonGlow = ({ color, className = '' }) => (
  <div
    className={`absolute inset-0 rounded-lg ${className}`}
    style={{
      background: `linear-gradient(45deg, ${color}, transparent)`,
      filter: 'blur(8px)',
      opacity: 0.3,
      transform: 'scale(1.1)',
      animation: 'pulse 2s infinite'
    }}
  />
);

// 霓虹边框组件
const NeonBorder = ({ color, children, className = '' }) => (
  <div className={`relative ${className}`}>
    <NeonGlow color={color} />
    <div className="relative bg-black bg-opacity-50 rounded-lg border border-cyan-400 border-opacity-30">
      {children}
    </div>
  </div>
);

// 示例卡片组件
const ExampleCard = ({ title, children, color = 'cyan' }) => {
  const colorMap = {
    cyan: '#00f5ff',
    purple: '#8b5cf6',
    orange: '#ff6b35'
  };

  return (
    <NeonBorder color={colorMap[color]}>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4 text-cyan-400" style={{ fontFamily: 'Orbitron, monospace' }}>
          {title}
        </h3>
        {children}
      </div>
    </NeonBorder>
  );
};

// 霓虹按钮组件
const NeonButton = ({ children, onClick, className = '', color = 'cyan', disabled = false }) => {
  const colorMap = {
    cyan: 'from-cyan-600 to-purple-600',
    purple: 'from-purple-600 to-orange-600',
    orange: 'from-orange-600 to-cyan-600'
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-3 bg-gradient-to-r ${colorMap[color]} text-white rounded-lg font-bold transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-current/50 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      style={{ fontFamily: 'Space Mono, monospace' }}
    >
      {children}
    </button>
  );
};

// 代码演示组件
const ToggleDemo = () => {
  const [isOn, { toggle, set, setLeft, setRight }] = useToggle(false);

  return (
    <div className="p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2 text-cyan-400" style={{ fontFamily: 'Orbitron, monospace' }}>
          useToggle 演示
        </h2>
        <p className="text-gray-400">点击按钮查看状态切换效果</p>
      </div>

      <div className="flex justify-center items-center gap-8 mb-8">
        <div className="text-center">
          <p className="text-lg mb-2">当前状态:</p>
          <p className="text-2xl font-bold text-cyan-400">
            {isOn ? 'ON' : 'OFF'}
          </p>
        </div>
      </div>

      <div className="flex justify-center gap-4 flex-wrap">
        <NeonButton onClick={(e) => { e.stopPropagation(); toggle(); }} color="cyan">
          切换 (toggle)
        </NeonButton>
        <NeonButton onClick={(e) => { e.stopPropagation(); set(false); }} color="purple">
          设为 OFF
        </NeonButton>
        <NeonButton onClick={(e) => { e.stopPropagation(); set(true); }} color="orange">
          设为 ON
        </NeonButton>
        <NeonButton onClick={(e) => { e.stopPropagation(); setLeft(); }} color="cyan">
          setLeft
        </NeonButton>
        <NeonButton onClick={(e) => { e.stopPropagation(); setRight(); }} color="purple">
          setRight
        </NeonButton>
      </div>
    </div>
  );
};

// 基础用法示例
const BasicUsageExample = () => {
  const [isVisible, { toggle, set }] = useToggle(false);

  return (
    <ExampleCard title="基础用法">
      <div className="space-y-4">
        <NeonButton onClick={toggle} color="cyan">
          切换显示
        </NeonButton>
        {isVisible && (
          <div className="p-4 bg-black bg-opacity-50 rounded-lg border border-cyan-400 border-opacity-30">
            <p className="text-cyan-400">内容已显示</p>
          </div>
        )}
      </div>
    </ExampleCard>
  );
};

// 自定义切换值示例
const CustomToggleExample = () => {
  const [status, { toggle, setLeft, setRight }] = useToggle('pending', 'success');

  return (
    <ExampleCard title="自定义切换值" color="purple">
      <div className="space-y-4">
        <p className="text-lg">当前状态: <span className="text-cyan-400 font-bold">{status}</span></p>
        <div className="flex gap-3">
          <NeonButton onClick={toggle} color="purple">
            切换状态
          </NeonButton>
          <NeonButton onClick={setLeft} color="orange">
            设为 pending
          </NeonButton>
          <NeonButton onClick={setRight} color="cyan">
            设为 success
          </NeonButton>
        </div>
      </div>
    </ExampleCard>
  );
};

// 模态框控制示例
const ModalExample = () => {
  const [isOpen, { toggle, set }] = useToggle(false);

  return (
    <ExampleCard title="模态框控制" color="orange">
      <div className="space-y-4">
        <NeonButton onClick={toggle} color="orange">
          打开模态框
        </NeonButton>

        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-black bg-opacity-90 p-8 rounded-lg border border-cyan-400 border-opacity-50 max-w-md w-full mx-4">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400" style={{ fontFamily: 'Orbitron, monospace' }}>
                模态框标题
              </h3>
              <p className="text-gray-300 mb-6">模态框内容</p>
              <NeonButton onClick={() => set(false)} color="cyan">
                关闭
              </NeonButton>
            </div>
          </div>
        )}
      </div>
    </ExampleCard>
  );
};

// 主题切换示例
const ThemeToggleExample = () => {
  const [theme, { toggle }] = useToggle('dark', 'light');

  return (
    <ExampleCard title="主题切换" color="cyan">
      <div style={{
        backgroundColor: theme === 'dark' ? '#0a0a0a' : '#1a1a2e',
        color: theme === 'dark' ? 'white' : '#e0e0e0',
        padding: '20px',
        borderRadius: '8px',
        border: '1px solid rgba(0, 245, 255, 0.3)'
      }}>
        <NeonButton onClick={toggle} color="cyan">
          切换主题
        </NeonButton>
        <div className="mt-4">
          <h3 className="text-xl font-bold mb-2 text-cyan-400">页面内容</h3>
          <p className="text-gray-400">这是一个示例页面，展示了主题切换功能。</p>
        </div>
      </div>
    </ExampleCard>
  );
};

// 折叠面板示例
const CollapsiblePanelExample = () => {
  const [isExpanded, { toggle, set }] = useToggle(false);

  return (
    <ExampleCard title="折叠面板" color="purple">
      <div className="space-y-4">
        <NeonButton onClick={toggle} color="purple">
          折叠面板标题
        </NeonButton>
        {isExpanded && (
          <div className="p-4 bg-black bg-opacity-50 rounded-lg border border-purple-400 border-opacity-30">
            <p className="text-purple-400">面板内容区域</p>
            <p className="text-gray-400 mt-2">这里可以放置任意内容，比如表单、列表等。</p>
          </div>
        )}
      </div>
    </ExampleCard>
  );
};

// 多状态切换示例
const MultiStateExample = () => {
  const [status, { toggle, setLeft, setRight }] = useToggle('idle', 'loading');

  const handleStart = () => {
    set('loading');
    setTimeout(() => {
      set('success');
    }, 2000);
  };

  const handleReset = () => {
    set('idle');
  };

  return (
    <ExampleCard title="多状态切换" color="orange">
      <div className="space-y-4">
        <p className="text-lg">当前状态: <span className="text-cyan-400 font-bold">{status}</span></p>
        <div className="flex gap-3">
          <NeonButton onClick={handleStart} color="orange" disabled={status === 'loading'}>
            {status === 'loading' ? '加载中...' : '开始'}
          </NeonButton>
          <NeonButton onClick={handleReset} color="cyan">
            重置
          </NeonButton>
        </div>
      </div>
    </ExampleCard>
  );
};

// 表单开关示例
const FormToggleExample = () => {
  const [isEnabled, { toggle, set }] = useToggle(false);

  return (
    <ExampleCard title="表单开关" color="cyan">
      <div className="space-y-4">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={isEnabled}
            onChange={(e) => set(e.target.checked)}
            className="w-5 h-5 text-cyan-600 bg-black border border-cyan-400 rounded focus:ring-cyan-500 focus:ring-2"
          />
          <span className="text-lg text-cyan-400" style={{ fontFamily: 'Space Mono, monospace' }}>
            启用功能
          </span>
        </label>

        {isEnabled && (
          <div className="p-4 bg-black bg-opacity-50 rounded-lg border border-cyan-400 border-opacity-30">
            <h4 className="text-lg font-bold mb-2 text-cyan-400">功能设置</h4>
            <p className="text-gray-400">当功能启用时显示的设置选项。</p>
          </div>
        )}
      </div>
    </ExampleCard>
  );
};

export default function UseToggleDemo() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden relative">
      {/* 网格背景 */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 245, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 245, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      {/* 粒子效果 */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.5 + 0.2
            }}
          />
        ))}
      </div>

      {/* 主内容 */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-orange-400" style={{ fontFamily: 'Orbitron, monospace' }}>
            useToggle Hook 演示
          </h1>
          <p className="text-xl text-gray-400" style={{ fontFamily: 'Space Mono, monospace' }}>
            体验状态切换的强大功能
          </p>
        </header>

        {/* 代码演示 */}
        <div className="max-w-4xl mx-auto mb-12">
          <ToggleDemo />
        </div>

        {/* 用法示例 */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-cyan-400 text-center" style={{ fontFamily: 'Orbitron, monospace' }}>
            用法示例
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BasicUsageExample />
            <CustomToggleExample />
            <ModalExample />
            <ThemeToggleExample />
            <CollapsiblePanelExample />
            <MultiStateExample />
            <FormToggleExample />
          </div>
        </div>
      </div>

      {/* CSS 样式 */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}