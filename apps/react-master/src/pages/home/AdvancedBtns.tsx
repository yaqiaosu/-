import React from 'react';
import { SparklesIcon, FireIcon, BoltIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const features = [
  {
    icon: SparklesIcon,
    title: 'AI 辅助创作',
    desc: '智能生成内容',
    color: 'var(--neon-purple)',
    bg: 'rgba(139, 92, 246, 0.1)',
  },
  {
    icon: FireIcon,
    title: '热门话题',
    desc: '参与实时讨论',
    color: 'var(--neon-orange)',
    bg: 'rgba(245, 158, 11, 0.1)',
  },
  {
    icon: BoltIcon,
    title: '快速涨粉',
    desc: '流量扶持计划',
    color: 'var(--neon-cyan)',
    bg: 'rgba(0, 245, 255, 0.1)',
  },
  {
    icon: ShieldCheckIcon,
    title: '认证服务',
    desc: '提升可信度',
    color: 'var(--neon-green)',
    bg: 'rgba(16, 185, 129, 0.1)',
  },
];

export default function AdvancedBtns() {
  return (
    <div className="p-4 animate-fade-in-right delay-400">
      <div className="text-sm font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
        <SparklesIcon className="h-5 w-5 text-[var(--neon-purple)] animate-pulse" />
        进阶功能
      </div>

      <div className="space-y-3">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className="flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[var(--bg-secondary)] border border-transparent hover:border-[var(--border-color)] group feature-card animate-fade-in-up"
            style={{ animationDelay: `${0.5 + index * 0.1}s` }}
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-115 group-hover:rotate-3"
              style={{ backgroundColor: feature.bg }}
            >
              <feature.icon className="h-5 w-5 transition-all duration-300" style={{ color: feature.color }} />
            </div>
            <div className="flex-1">
              <div className="text-sm text-[var(--text-primary)] group-hover:text-[var(--neon-cyan)] transition-all duration-300 group-hover:translate-x-1">
                {feature.title}
              </div>
              <div className="text-xs text-[var(--text-muted)] transition-all duration-300 group-hover:text-[var(--text-secondary)]">{feature.desc}</div>
            </div>
            <div className="w-6 h-6 rounded-full border border-[var(--border-color)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
              <svg className="w-3 h-3 text-[var(--neon-cyan)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
