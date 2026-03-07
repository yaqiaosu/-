import React from 'react';
import { Cog6ToothIcon, UserCircleIcon, ChartBarIcon, BellAlertIcon } from '@heroicons/react/24/outline';

const functions = [
  { icon: UserCircleIcon, label: '个人主页', color: 'var(--neon-cyan)' },
  { icon: ChartBarIcon, label: '数据分析', color: 'var(--neon-purple)' },
  { icon: BellAlertIcon, label: '通知设置', color: 'var(--neon-orange)' },
  { icon: Cog6ToothIcon, label: '更多设置', color: 'var(--text-secondary)' },
];

export default function SelfFunctions() {
  return (
    <div className="p-4 animate-fade-in-right delay-500">
      <div className="text-sm font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
        <Cog6ToothIcon className="h-5 w-5 text-[var(--neon-purple)]" />
        个人中心
      </div>

      <div className="grid grid-cols-2 gap-3">
        {functions.map((func, index) => (
          <div
            key={func.label}
            className="flex items-center gap-2 p-3 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[var(--bg-secondary)] border border-transparent hover:border-[var(--border-color)] group feature-card animate-fade-in-up"
            style={{ animationDelay: `${0.6 + index * 0.1}s` }}
          >
            <func.icon className="h-5 w-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" style={{ color: func.color }} />
            <span className="text-sm text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-all duration-300">
              {func.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
