# 搜索功能设计方案

## 1. 需求概述

- **应用**: React 主应用 (`react-master`)
- **功能**: 搜索文章/内容列表
- **UI**: 顶部导航栏作为搜索框
- **交互**: 点击搜索按钮后执行搜索
- **展示**: 当前页面内展示搜索结果列表
- **数据**: 暂不调用后端（预留接口）

## 2. 架构设计

### 2.1 自定义 Hook (`useSearch`)

位于 `packages/hooks/src/useSearch.ts`

```typescript
interface UseSearchOptions {
  onSuccess?: (data: SearchResult[]) => void;
  onError?: (error: Error) => void;
}

interface UseSearchReturn {
  keyword: string;
  setKeyword: (keyword: string) => void;
  results: SearchResult[];
  loading: boolean;
  hasSearched: boolean;
  search: () => void;
  clearSearch: () => void;
}

function useSearch(options?: UseSearchOptions): UseSearchReturn
```

### 2.2 Search 组件

扩展现有 `components/Search/index.tsx`：

- 输入框：绑定 keyword 状态
- 搜索按钮：点击触发 search 方法
- 支持回车键触发搜索

### 2.3 搜索结果展示

- 在 Home 页面的左侧内容区展示搜索结果
- 使用 `SearchResults` 组件封装结果列表
- 复用现有 Card 组件样式

## 3. 数据流

```
Search 组件 (输入关键字)
    ↓ onSearch(keyword)
useSearch Hook (调用 API)
    ↓ setResults
Home 页面 (根据 hasSearched 状态渲染搜索结果或默认内容)
```

## 4. 组件结构

```
Search (输入框 + 按钮)
    ↓ 触发搜索
useSearch (搜索逻辑)
    ↓ 返回 results, loading, search
Home (渲染 SearchResults 或 Tabs)
```

## 5. API 接口（预留）

后端需要提供搜索接口，前端预留调用方式：

```ts
// 预期接口
GET /api/search?keyword=xxx

// 响应格式
{
  code: 200,
  data: {
    items: SearchResult[],
    total: number
  }
}
```

## 6. 样式与交互

- 搜索结果使用与现有 Tabs 相似的卡片样式
- 加载状态显示骨架屏或 Loading
- 无结果时显示空状态提示
- 搜索时保留导航栏和其他 UI

## 7. 实现计划

1. 创建 `useSearch` Hook
2. 修改 `Search` 组件集成搜索功能
3. 创建 `SearchResults` 组件
4. 修改 Home 页面支持搜索结果展示
5. 添加空状态和加载状态

---

> 创建时间: 2026-03-08
