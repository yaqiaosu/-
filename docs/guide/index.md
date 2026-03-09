---
title: 指南
hero:
  image: https://api.dicebear.com/7.x/bottts-neutral/svg?seed=YaYaHooks&backgroundColor=030307
  desc: 全面掌握 YaYa Hooks 的使用技巧
  actions:
    - text: 快速开始
      link: /guide
    - text: API 参考
      link: /hooks

footer: false
---

## 简介

欢迎使用 **YaYa Hooks**！这是一个专为 React 开发者设计的 Hooks 工具库，提供了一系列实用、高效的 Hooks，帮助你更优雅地处理常见场景。

---

## 核心设计理念

### 1. 极简 API

每个 Hook 都经过精心设计，API 简洁直观，让你能够快速上手。

```tsx
// 一行代码搞定状态切换
const [isOn, toggle] = useToggle(false);
```

### 2. 极致性能

所有 Hooks 都经过深度优化，确保零不必要的重新渲染。

```tsx
// 自动防抖，告别性能损耗
const debouncedValue = useDebounce(value, 300);
```

### 3. TypeScript 支持

完整的类型推导，让你的编辑器能够提供智能提示。

```tsx
// 自动推断返回类型
const [value, setValue] = useLocalStorage('key', 'default');
// ✓ setValue 接受 string 类型
// ✓ value 被正确推断为 string | undefined
```

---

## 基础 Hooks

### useToggle

用于布尔值状态切换的 Hook，适用于模态框、折叠面板、开关等场景。

```tsx
import { useToggle } from 'yaya-hooks';

function App() {
  const [isVisible, toggle] = useToggle(false);

  return (
    <div>
      <button onClick={toggle}>
        {isVisible ? '隐藏' : '显示'}
      </button>
      {isVisible && <Modal />}
    </div>
  );
}
```

**参数说明：**

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `initialValue` | `boolean` | `false` | 初始状态值 |

**返回值：**

返回 `[value, toggle, set]` 元组：
- `value`: 当前状态
- `toggle`: 切换状态函数
- `set`: 设置状态函数

---

### useDebounce

用于对值进行防抖处理的 Hook，常用于搜索输入、自动保存等场景。

```tsx
import { useDebounce, useState } from 'yaya-hooks';

function Search() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 300);

  // debouncedQuery 会在输入停止 300ms 后更新
  useEffect(() => {
    if (debouncedQuery) {
      searchAPI(debouncedQuery);
    }
  }, [debouncedQuery]);

  return (
    <input
      value={query}
      onChange={e => setQuery(e.target.value)}
      placeholder="搜索..."
    />
  );
}
```

**参数说明：**

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `value` | `T` | — | 需要防抖的值 |
| `delay` | `number` | `300` | 防抖延迟时间(毫秒) |

---

### useLocalStorage

用于本地存储的 Hook，提供简洁的 API 来读取和写入 localStorage。

```tsx
import { useLocalStorage } from 'yaya-hooks';

function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');
  const [username, setUsername] = useLocalStorage('username', '');

  return (
    <div className={theme}>
      <input
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder="输入用户名"
      />
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        切换主题
      </button>
    </div>
  );
}
```

**参数说明：**

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `key` | `string` | — | localStorage 的键名 |
| `initialValue` | `T` | — | 初始值 |
| `options` | `object` | — | 配置选项 |

**选项说明：**

| 选项 | 类型 | 说明 |
|------|------|------|
| `serializer` | `(value: T) => string` | 自定义序列化函数 |
| `deserializer` | `(value: string) => T` | 自定义反序列化函数 |

---

## 最佳实践

### 1. 组合使用 Hooks

多个 Hooks 可以自由组合，解决复杂场景：

```tsx
function AdvancedSearch() {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(1);

  const debouncedQuery = useDebounce(query, 300);
  const debouncedFilters = useDebounce(filters, 500);

  const results = useAsync(
    () => fetchResults(debouncedQuery, debouncedFilters, page),
    [debouncedQuery, debouncedFilters, page]
  );

  const isLoading = useToggle(false);

  return (
    <div>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <FilterPanel onChange={setFilters} />
      <ResultsList data={results.data} loading={results.loading} />
      <Pagination page={page} onChange={setPage} />
    </div>
  );
}
```

### 2. 自定义 Hook

基于 YaYa Hooks 创建自己的自定义 Hook：

```tsx
function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setValues(prev => ({ ...prev, [field]: value }));
    // 清除对应字段的错误
    setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
  };

  return { values, errors, handleChange, reset };
}
```

### 3. 性能优化

使用 `useMemo` 和 `useCallback` 避免不必要的重新计算：

```tsx
function ExpensiveComponent() {
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState('');

  const filteredList = useMemo(
    () => list.filter(item => item.name.includes(filter)),
    [list, filter]
  );

  const handleItemClick = useCallback((id) => {
    console.log('Clicked:', id);
  }, []);

  return (
    <List
      data={filteredList}
      onItemClick={handleItemClick}
    />
  );
}
```

---

## 常见问题

### Q: Hooks 必须在组件顶层调用吗？

是的，Hooks 必须遵循 React 的调用规则，不能在循环、条件语句或嵌套函数中调用。

### Q: 如何处理 SSR 环境？

YaYa Hooks 支持 SSR，但某些 Hooks（如 `useLocalStorage`）需要客户端环境。请使用 `useEffect` 进行条件判断：

```tsx
function ClientOnlyComponent() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <MyComponent />;
}
```

### Q: 如何贡献代码？

欢迎提交 PR！请确保：
- 遵循现有的代码风格
- 添加完整的类型定义
- 编写测试用例
- 更新相关文档

---

## 下一步

- [浏览所有 Hooks →](/hooks)
- [查看源码 →](https://github.com)
- [报告问题 →](https://github.com)
