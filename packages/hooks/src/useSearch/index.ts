import { useState, useCallback } from 'react';

export interface SearchResult {
  id: number;
  title: string;
  description: string;
  author: string;
  avatar: string;
  tags: string[];
  likes: number;
  comments: number;
  time: string;
}

// 模拟搜索数据
const mockSearchResults: SearchResult[] = [
  {
    id: 1,
    title: 'React 19 新特性详解',
    description: '深入了解 React 19 带来的全新 Hook 和特性，包括 Server Components、Actions 等',
    author: '前端专家',
    avatar: 'https://picx.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_l.jpg',
    tags: ['React', '前端', 'JavaScript'],
    likes: 128,
    comments: 32,
    time: '2小时前'
  },
  {
    id: 2,
    title: 'TypeScript 高级类型实战',
    description: '掌握 TypeScript 高级类型，提升代码类型安全性和开发效率',
    author: 'TypeScript爱好者',
    avatar: 'https://picx.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_l.jpg',
    tags: ['TypeScript', '类型系统'],
    likes: 256,
    comments: 64,
    time: '5小时前'
  },
  {
    id: 3,
    title: 'Vue3 组合式 API 最佳实践',
    description: 'Vue3 组合式 API 的使用技巧和最佳实践指南',
    author: 'Vue开发者',
    avatar: 'https://picx.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_l.jpg',
    tags: ['Vue', '前端', '组合式API'],
    likes: 89,
    comments: 18,
    time: '1天前'
  },
  {
    id: 4,
    title: '前端工程化完全指南',
    description: '从零构建现代前端工程化体系，包括构建工具、测试、CI/CD 等',
    author: '工程化专家',
    avatar: 'https://picx.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_l.jpg',
    tags: ['工程化', '构建工具', 'DevOps'],
    likes: 312,
    comments: 78,
    time: '2天前'
  },
  {
    id: 5,
    title: 'CSS Grid 与 Flexbox 对比',
    description: '深入对比 CSS Grid 和 Flexbox 的适用场景，帮助选择合适的布局方案',
    author: 'CSS大师',
    avatar: 'https://picx.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_l.jpg',
    tags: ['CSS', '布局', 'Flexbox'],
    likes: 167,
    comments: 45,
    time: '3天前'
  }
];

export interface UseSearchOptions {
  onSuccess?: (data: SearchResult[]) => void;
  onError?: (error: Error) => void;
}

export interface UseSearchReturn {
  keyword: string;
  setKeyword: (keyword: string) => void;
  results: SearchResult[];
  loading: boolean;
  hasSearched: boolean;
  search: () => void;
  clearSearch: () => void;
}

function useSearch(options?: UseSearchOptions): UseSearchReturn {
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const search = useCallback(async () => {
    if (!keyword.trim()) {
      setResults([]);
      setHasSearched(false);
      return;
    }

    setLoading(true);
    setHasSearched(true);

    try {
      // 模拟 API 调用延迟
      await new Promise(resolve => setTimeout(resolve, 500));

      // 模拟搜索逻辑（实际项目中替换为真实 API 调用）
      const filtered = mockSearchResults.filter(item =>
        item.title.toLowerCase().includes(keyword.toLowerCase()) ||
        item.description.toLowerCase().includes(keyword.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(keyword.toLowerCase()))
      );

      setResults(filtered);
      options?.onSuccess?.(filtered);
    } catch (error) {
      options?.onError?.(error as Error);
    } finally {
      setLoading(false);
    }
  }, [keyword, options]);

  const clearSearch = useCallback(() => {
    setKeyword('');
    setResults([]);
    setHasSearched(false);
  }, []);

  return {
    keyword,
    setKeyword,
    results,
    loading,
    hasSearched,
    search,
    clearSearch,
  };
}

export default useSearch;
