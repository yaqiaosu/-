import React from 'react';
import {
  PencilSquareIcon,
  DocumentTextIcon,
  QuestionMarkCircleIcon,
  ArchiveBoxIcon,
  VideoCameraIcon,
  PhotoIcon
} from '@heroicons/react/24/outline';

const creationItems = [
  { icon: QuestionMarkCircleIcon, label: '回答问题', color: 'var(--neon-cyan)', bg: 'rgba(0, 245, 255, 0.1)' },
  { icon: DocumentTextIcon, label: '写文章', color: 'var(--neon-green)', bg: 'rgba(16, 185, 129, 0.1)' },
  { icon: PencilSquareIcon, label: '发微文', color: 'var(--neon-purple)', bg: 'rgba(139, 92, 246, 0.1)' },
  { icon: VideoCameraIcon, label: '发视频', color: 'var(--neon-pink)', bg: 'rgba(255, 0, 255, 0.1)' },
  { icon: PhotoIcon, label: '上传图片', color: 'var(--neon-orange)', bg: 'rgba(245, 158, 11, 0.1)' },
  { icon: ArchiveBoxIcon, label: '草稿箱', color: 'var(--text-secondary)', bg: 'rgba(148, 163, 184, 0.1)' },
];

export default function Creation() {
  return (
    <div className="p-4 animate-fade-in-right delay-300">
      {/* 顶部标题 */}
      <div className="flex justify-between items-center mb-6">
        <div className="text-lg font-semibold text-[var(--text-primary)] flex items-center gap-2">
          <span className="w-1 h-5 bg-gradient-to-b from-[var(--neon-cyan)] to-[var(--neon-purple)] rounded-full animate-pulse-glow"></span>
          创作中心
        </div>
        <div className="text-sm text-[var(--text-muted)] hover:text-[var(--neon-cyan)] transition-colors cursor-pointer">草稿箱(0)</div>
      </div>

      {/* 统计数据 */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="text-center p-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] transition-all duration-300 hover:border-[var(--neon-cyan)] hover:shadow-[0_0_15px_rgba(0,245,255,0.2)] group">
          <div className="text-lg font-bold stat-number">0</div>
          <div className="text-xs text-[var(--text-muted)] group-hover:text-[var(--text-secondary)] transition-colors">昨日阅读</div>
        </div>
        <div className="text-center p-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] transition-all duration-300 hover:border-[var(--neon-purple)] hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] group">
          <div className="text-lg font-bold" style={{ background: 'linear-gradient(135deg, var(--neon-purple), var(--neon-pink))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>0</div>
          <div className="text-xs text-[var(--text-muted)] group-hover:text-[var(--text-secondary)] transition-colors">昨日收益</div>
        </div>
        <div className="text-center p-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] transition-all duration-300 hover:border-[var(--neon-green)] hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] group">
          <div className="text-lg font-bold" style={{ background: 'linear-gradient(135deg, var(--neon-green), var(--neon-cyan))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>0</div>
          <div className="text-xs text-[var(--text-muted)] group-hover:text-[var(--text-secondary)] transition-colors">累计赞同</div>
        </div>
      </div>

      {/* 功能按钮 */}
      <div className="grid grid-cols-3 gap-3">
        {creationItems.map((item, index) => (
          <div
            key={item.label}
            className="flex flex-col items-center cursor-pointer group animate-scale-in"
            style={{ animationDelay: `${0.4 + index * 0.1}s` }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-2 transition-all duration-300 group-hover:scale-125 group-hover:rotate-6"
              style={{ backgroundColor: item.bg }}
            >
              <item.icon className="h-6 w-6 transition-all duration-300 group-hover:scale-110" style={{ color: item.color }} />
            </div>
            <span className="text-xs text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-all duration-300 group-hover:font-medium">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
