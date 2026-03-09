---
title: 首页
hero:
  image: https://api.dicebear.com/7.x/bottts-neutral/svg?seed=YaYaHooks&backgroundColor=030307
  desc: 探索 React 状态管理的艺术 - 精心打磨的 Hooks 工具库
  actions:
    - text: 开始探索
      link: /guide
    - text: 查看源码
      link: /hooks

features:
  - title: 极致性能
    desc: 每一个 Hook 都经过深度优化，确保你的应用保持丝滑流畅，拒绝任何性能损耗
  - title: TypeScript First
    desc: 完整的类型推导，编辑器智能提示如丝般顺滑，让类型错误无所遁形
  - title: 极简 API
    desc: 精心设计的接口，简单导入即可使用，让专注回归业务逻辑本身
  - title: 持续进化
    desc: 紧跟 React 最新特性，持续迭代打磨，只为给你最好的开发体验

---

> YaYa Hooks —— 让 React 开发更加优雅

## 为什么选择 YaYa Hooks?

React Hooks 彻底改变了我们编写组件的方式，但默认的 hooks 有时显得过于简单。**YaYa Hooks** 提供了一套更强大、更优雅的 hooks 解决方案，让你的代码更简洁、更可维护。

---

## 安装

选择你喜欢的包管理器一键安装：

```bash
# pnpm (推荐)
pnpm add yaya-hooks

# npm
npm install yaya-hooks

# yarn
yarn add yaya-hooks
```

---

## 快速开始

导入你需要的 Hook，开始使用：

```tsx
import { useToggle, useDebounce, useLocalStorage } from 'yaya-hooks';

function App() {
  // 状态切换 - 再也不用写冗长的 setState
  const [isOn, toggle] = useToggle(false);

  // 自动防抖 - 再也不怕频繁触发
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value, 300);

  // 本地存储 - 数据持久化从未如此简单
  const [theme, setTheme] = useLocalStorage('theme', 'dark');

  return (
    <div>
      <button onClick={toggle}>
        {isOn ? 'ON' : 'OFF'}
      </button>
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <p>Debounced: {debouncedValue}</p>
    </div>
  );
}
```

---

## 核心 Hooks

| Hook | 描述 | 使用场景 |
|------|------|----------|
| `useToggle` | 布尔状态切换 | 模态框、折叠面板、开关 |
| `useDebounce` | 防抖值 | 搜索输入、自动保存 |
| `useLocalStorage` | 本地存储 | 用户偏好、缓存数据 |

---

## 即将推出

我们正在持续开发更多实用的 Hooks：

- `useClipboard` — 剪贴板操作
- `useIntersectionObserver` — 元素可见性
- `useMediaQuery` — 媒体查询
- `usePagination` — 分页逻辑
- `useInfiniteScroll` — 无限滚动
- `useDarkMode` — 主题切换

---

立即开始使用，让你的 React 开发体验提升到一个新的层次！
