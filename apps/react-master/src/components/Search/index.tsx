import React, { useCallback } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useSearch, SearchResult } from 'yaya-hooks';

export interface SearchProps {
  onSearch?: (results: SearchResult[], keyword: string) => void;
  onSearchStart?: () => void;
}

export default function Search({ onSearch, onSearchStart }: SearchProps) {
  const {
    keyword,
    setKeyword,
    results,
    loading,
    search,
  } = useSearch({
    onSuccess: (data) => {
      onSearch?.(data, keyword);
    },
  });

  const handleSearch = useCallback(() => {
    onSearchStart?.();
    search();
  }, [search, onSearchStart]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }, [handleSearch]);

  return (
    <div className="flex items-center animate-fade-in-up delay-100">
      <div className="relative group">
        <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[var(--text-muted)] group-focus-within:text-[var(--neon-cyan)] transition-colors" />
        <input
          type="text"
          className="cyber-input w-72 pl-12 pr-4 transition-all duration-300"
          placeholder="搜索问题..."
          name="search"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <button
        className="cyber-btn ml-4 animate-float"
        onClick={handleSearch}
        disabled={loading}
      >
        {loading ? '搜索中...' : '搜索'}
      </button>
    </div>
  );
}
