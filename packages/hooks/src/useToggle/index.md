---
nav:
  path: /hooks
---

# useToggle

用于在两个状态值间进行切换的 Hook

## 特性

- 简洁易用的状态切换解决方案
- 支持任意类型值的切换
- 提供丰富的操作方法
- 完整的 TypeScript 类型支持

## 适用场景

| 场景 | 说明 |
| --- | --- |
| 模态框/弹窗 | 控制对话框的显示与隐藏 |
| 折叠面板 | 实现展开/收起功能 |
| 主题切换 | 明暗主题切换 |
| 表单开关 | 启用/禁用某个功能 |
| 菜单导航 | 侧边栏菜单的展开收起 |
| 加载状态 | 切换 loading/loaded 状态 |

## 代码演示

### 基础用法

<code src="./demo/demo1.tsx" />

### 高级用法

<code src="./demo/demo2.tsx" />

### 不传参数

<code src="./demo/demo3.tsx" />

### 自定义切换值

<code src="./demo/demo4.tsx" />

### 主题切换

<code src="./demo/demo5.tsx" />

### 模态框

<code src="./demo/demo6.tsx" />

### 折叠面板

<code src="./demo/demo7.tsx" />

## API

```typescript
// 不传参数，默认 false
const [state, { toggle, set, setLeft, setRight }] = useToggle()

// 传入初始值
const [state, { toggle, set }] = useToggle<T>(defaultValue: T)

// 传入初始值和反向值
const [state, { toggle, set, setLeft, setRight }] = useToggle<T, U>(defaultValue: T, reverseValue: U)
```

### Params

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue | 默认值 | `T` | `false` |
| reverseValue | 反向值 | `U` | - |

#### 泛型说明

- `T` - 默认值的类型
- `U` - 反向值的类型（可选，不传则与 T 相同）

### Result

| 参数 | 说明 | 类型 |
| --- | --- | --- |
| state | 当前状态 | `T` |
| actions | 操作集合 | `Actions<T>` |

### Actions

| 参数 | 说明 | 类型 |
| --- | --- | --- |
| toggle | 切换状态，在 defaultValue 和 reverseValue 之间切换 | `() => void` |
| set | 设置状态为指定值 | `(value: T) => void` |
| setLeft | 设置为默认值（defaultValue） | `() => void` |
| setRight | 设置为 reverseValue，若未传入则取 defaultValue 的反向值 | `() => void` |

### TypeScript 类型

```typescript
type UseToggleActions<T> = {
  toggle: () => void;
  set: (value: T) => void;
  setLeft: () => void;
  setRight: () => void;
};

type UseToggleReturn<T> = [T, UseToggleActions<T>];
```

## 注意事项

1. **参数类型** - 当不传 reverseValue 时，defaultValue 应为布尔类型，否则 toggle 的行为可能不符合预期
2. **值的选择** - 建议两个值类型保持一致，或确保切换后的值类型是预期接受的类型
3. **引用类型** - 如果传入对象或数组作为值，需要注意引用相等性问题
4. **setLeft/setRight** - setLeft 始终设置为 defaultValue，setRight 始终设置为 reverseValue
