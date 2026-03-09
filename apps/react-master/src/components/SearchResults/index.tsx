import React from 'react';
import { SearchResult } from '@yaoyaohooks';
import Card from '@/components/Card';

export interface SearchResultsProps {
  results: SearchResult[];
  loading: boolean;
  keyword: string;
}

const SearchItem = ({ item }: { item: SearchResult }) => {
  return (
    <div className="p-4 border-b border-[var(--border-color)] last:border-b-0 hover:bg-[var(--bg-hover)] transition-colors cursor-pointer">
      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 hover:text-[var(--neon-cyan)] transition-colors">
        {item.title}
      </h3>
      <p className="text-sm text-[var(--text-secondary)] mb-3 line-clamp-2">
        {item.description}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src={item.avatar}
            alt={item.author}
            className="w-6 h-6 rounded-full"
          />
          <span className="text-xs text-[var(--text-muted)]">{item.author}</span>
          <span className="text-xs text-[var(--text-muted)]">·</span>
          <span className="text-xs text-[var(--text-muted)]">{item.time}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-[var(--text-muted)]">
            ❤️ {item.likes}
          </span>
          <span className="text-xs text-[var(--text-muted)]">
            💬 {item.comments}
          </span>
        </div>
      </div>
      <div className="flex gap-2 mt-2">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded-full bg-[var(--neon-cyan)]/10 text-[var(--neon-cyan)]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const LoadingSkeleton = () => {
  return (
    <div className="p-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="mb-4">
          <div className="h-6 bg-[var(--bg-hover)] rounded w-3/4 mb-2 animate-pulse"></div>
          <div className="h-4 bg-[var(--bg-hover)] rounded w-full mb-2 animate-pulse"></div>
          <div className="h-4 bg-[var(--bg-hover)] rounded w-1/2 animate-pulse"></div>
        </div>
      ))}
    </div>
  );
};

const EmptyState = ({ keyword }: { keyword: string }) => {
  return (
    <div className="p-8 text-center">
      <div className="text-4xl mb-4">🔍</div>
      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
        未找到相关结果
      </h3>
      <p className="text-sm text-[var(--text-secondary)]">
        没有找到与 "{keyword}" 相关的文章
      </p>
      <p className="text-xs text-[var(--text-muted)] mt-2">
        试试其他关键词
      </p>
    </div>
  );
};

export default function SearchResults({ results, loading, keyword }: SearchResultsProps) {
  if (loading) {
    return (
      <Card className="animate-fade-in-up">
        <LoadingSkeleton />
      </Card>
    );
  }

  if (!keyword) {
    return null;
  }

  if (results.length === 0) {
    return (
      <Card className="animate-fade-in-up">
        <EmptyState keyword={keyword} />
      </Card>
    );
  }

  return (
    <Card className="animate-fade-in-up">
      <div className="p-4 border-b border-[var(--border-color)]">
        <h2 className="text-lg font-semibold text-[var(--text-primary)]">
          搜索结果
        </h2>
        <p className="text-sm text-[var(--text-muted)]">
          找到 {results.length} 个相关结果
        </p>
      </div>
      {results.map((item) => (
        <SearchItem key={item.id} item={item} />
      ))}
    </Card>
  );
}
