import React from 'react';

export default function index() {
  return (
    <div className="flex">
      <input
        type="text"
        className="w-91 h-8 border border-slate-200 px-4 bg-slate-50 rounded-full"
        placeholder="搜索问题"
        name="search"
      />
      <button className="h-8 w-16 bg-blue-600 text-white rounded-full text-sm mx-4 hover:bg-blue-700 transition-all cursor-pointer">
        提问
      </button>
    </div>
  );
}
