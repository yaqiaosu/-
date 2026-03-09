import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { BellIcon, ChatBubbleLeftRightIcon, UserIcon } from '@heroicons/react/24/solid';
import { router } from '../../router';
import { PureTabs } from '@/pages/home/Tabs';
import Search, { SearchProps } from '../Search';

const Logo = () => {
  return (
    <div className="px-2 logo-glow cursor-pointer">
      <svg viewBox="0 0 64 30" width="64" height="30" className="transition-transform duration-300 hover:scale-110">
        <defs>
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f5ff" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        <path
          fill="url(#logoGrad)"
          d="M29.05 4.582H16.733V25.94h3.018l.403 2.572 4.081-2.572h4.815V4.582zm-5.207 18.69l-2.396 1.509-.235-1.508h-1.724V7.233h6.78v16.04h-2.425zM14.46 14.191H9.982c0-.471.033-.954.039-1.458v-5.5h5.106V5.935a1.352 1.352 0 0 0-.404-.957 1.378 1.378 0 0 0-.968-.396H5.783c.028-.088.056-.177.084-.255.274-.82 1.153-3.326 1.153-3.326a4.262 4.262 0 0 0-2.413.698c-.57.4-.912.682-1.371 1.946-.532 1.453-.997 2.856-1.31 3.693C1.444 8.674.28 11.025.28 11.025a5.85 5.85 0 0 0 2.52-.61c1.119-.593 1.679-1.502 2.054-2.883l.09-.3h2.334v5.5c0 .5-.045.982-.073 1.46h-4.12c-.71 0-1.39.278-1.893.775a2.638 2.638 0 0 0-.783 1.874h6.527a17.717 17.717 0 0 1-.778 3.649 16.796 16.796 0 0 1-3.012 5.273A33.104 33.104 0 0 1 0 28.74s3.13 1.175 5.425-.954c1.388-1.292 2.631-3.814 3.23-5.727a28.09 28.09 0 0 0 1.12-5.229h5.967v-1.37a1.254 1.254 0 0 0-.373-.899 1.279 1.279 0 0 0-.909-.37z"
        ></path>
        <path
          fill="url(#logoGrad)"
          d="M11.27 19.675l-2.312 1.491 5.038 7.458a6.905 6.905 0 0 0 .672-2.218 3.15 3.15 0 0 0-.28-2.168l-3.118-4.563zM51.449 15.195V5.842c4.181-.205 7.988-.405 9.438-.483l.851-.05c.387-.399.885-2.395.689-3.021-.073-.25-.213-.666-.638-.555a33.279 33.279 0 0 1-4.277.727c-2.766.321-3.97.404-7.804.682-6.718.487-12.709.72-12.709.72a2.518 2.518 0 0 0 .788 1.834 2.567 2.567 0 0 0 1.883.706c2.278-.095 5.598-.25 8.996-.41v9.203h-12.78c0 .703.281 1.377.783 1.874a2.69 2.69 0 0 0 1.892.777h10.105v7.075c0 .887-.464 1.192-1.231 1.214h-3.92a4.15 4.15 0 0 0 .837 1.544 4.2 4.2 0 0 0 1.403 1.067 6.215 6.215 0 0 0 2.71.277c1.36-.066 2.967-.826 2.967-3.57v-7.607h11.28c.342 0 .67-.135.91-.374.242-.239.378-.563.378-.902v-1.375H51.449z"
        ></path>
        <path
          fill="url(#logoGrad)"
          d="M42.614 8.873a2.304 2.304 0 0 0-1.508-.926 2.334 2.334 0 0 0-1.727.405l-.376.272 4.255 5.85 2.24-1.62-2.884-3.98zM57.35 8.68l-3.125 4.097 2.24 1.663 4.517-5.927-.375-.277a2.32 2.32 0 0 0-1.722-.452 2.327 2.327 0 0 0-1.536.896z"
        ></path>
      </svg>
    </div>
  );
};

const Menu = () => {
  const location = useLocation();
  return (
    <div className="flex items-center">
      {router.map((item, index) => {
        const isActive = item.path === '/' ? location.pathname === '/' : location.pathname.startsWith(item.path || '');
        return (
          <NavLink
            key={item?.path}
            to={item.path || ''}
            className={() => {
              return (
                'hover:text-[var(--neon-cyan)] mx-4 py-2 transition-all flex items-center h-full relative group' +
                (isActive ? ' text-[var(--neon-cyan)]' : ' text-[var(--text-secondary)]')
              );
            }}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <span className="relative z-10">{item?.title}</span>
            {isActive && (
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-[var(--neon-cyan)] shadow-[0_0_10px_var(--neon-cyan)] animate-pulse-glow"></span>
            )}
          </NavLink>
        );
      })}
      <NavLink
        to="/useToggleDemo"
        className={({ isActive }) => {
          return (
            'hover:text-[var(--neon-cyan)] mx-4 py-2 transition-all flex items-center h-full relative group' +
            (isActive ? ' text-[var(--neon-cyan)]' : ' text-[var(--text-secondary)]')
          );
        }}
        style={{ animationDelay: '0.5s' }}
      >
        <span className="relative z-10">useToggle Demo</span>
        {location.pathname === '/useToggleDemo' && (
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-[var(--neon-cyan)] shadow-[0_0_10px_var(--neon-cyan)] animate-pulse-glow"></span>
        )}
      </NavLink>
    </div>
  );
};

const MenuArms = () => {
  return (
    <div className="flex mr-10 gap-4">
      <div className="cyber-icon-btn group animate-fade-in-up delay-200">
        <div className="icon-wrapper group-hover:border-[var(--neon-cyan)]">
          <BellIcon className="h-5 w-5" />
        </div>
        <span className="text-xs text-[var(--text-secondary)] group-hover:text-[var(--neon-cyan)]">消息</span>
      </div>
      <div className="cyber-icon-btn group animate-fade-in-up delay-300">
        <div className="icon-wrapper group-hover:border-[var(--neon-pink)]">
          <ChatBubbleLeftRightIcon className="h-5 w-5" />
        </div>
        <span className="text-xs text-[var(--text-secondary)] group-hover:text-[var(--neon-pink)]">私信</span>
      </div>
      <div className="cyber-icon-btn group animate-fade-in-up delay-400">
        <div className="icon-wrapper group-hover:border-[var(--neon-purple)]">
          <UserIcon className="h-5 w-5" />
        </div>
        <span className="text-xs text-[var(--text-secondary)] group-hover:text-[var(--neon-purple)]">创作中心</span>
      </div>
      <div className="flex justify-center items-center ml-2 animate-fade-in-up delay-500">
        <div className="avatar-ring">
          <img
            src="https://picx.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_l.jpg?source=32738c0c&needBackground=1"
            className="h-8 w-8 rounded-full"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

interface NavigationProps {
  hideTabs: boolean;
  onSearch?: SearchProps['onSearch'];
  onSearchStart?: SearchProps['onSearchStart'];
}

export default function Navigation({ hideTabs, onSearch, onSearchStart }: NavigationProps) {
  return (
    <div>
      {/* 第一个导航栏：Tab 显示时隐藏，只在顶部显示 Menu */}
      <div
        className={`fixed top-0 left-0 right-0 bg-[var(--bg-secondary)]/95 backdrop-blur-sm border-b border-[var(--border-color)] h-14 box-border z-40 transition-all duration-500 ease-in-out ${
          hideTabs ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="h-14 flex justify-center">
          <div className="w-full max-w-7xl flex items-center justify-between min-w-6xl px-4">
            <div className="flex items-center">
              <Logo />
              <Menu />
            </div>
            <Search onSearch={onSearch} onSearchStart={onSearchStart} />
            <MenuArms />
          </div>
        </div>
      </div>

      {/* 第二个导航栏：滚动时显示 Tab，顶部时隐藏 */}
      <div
        className={`fixed top-0 left-0 right-0 bg-[var(--bg-secondary)]/95 backdrop-blur-sm border-b border-[var(--border-color)] h-14 box-border z-50 transition-all duration-500 ease-in-out ${
          hideTabs ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
        }`}
        style={{
          boxShadow: hideTabs ? 'none' : '0 4px 20px rgba(0, 0, 0, 0.3)',
        }}
      >
        <div className="h-14 flex justify-center">
          <div className="w-full max-w-7xl flex items-center justify-between min-w-6xl px-4">
            <div className="flex items-center">
              <Logo />
              <PureTabs />
            </div>
            <Search onSearch={onSearch} onSearchStart={onSearchStart} />
            <MenuArms />
          </div>
        </div>
      </div>
    </div>
  );
}
