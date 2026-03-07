import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

export default function Search() {
  return (
    <div className="flex items-center animate-fade-in-up delay-100">
      <div className="relative group">
        <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[var(--text-muted)] group-focus-within:text-[var(--neon-cyan)] transition-colors" />
        <input
          type="text"
          className="cyber-input w-72 pl-12 pr-4 transition-all duration-300"
          placeholder="搜索问题..."
          name="search"
        />
      </div>
      <button className="cyber-btn ml-4 animate-float">
        提问
      </button>
    </div>
  );
}
