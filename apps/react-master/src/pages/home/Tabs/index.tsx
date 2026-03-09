import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const tabs = [
  { name: '关注', to: '/follow' },
  { name: '推荐', to: '/' },
  { name: '热榜', to: '/hot' },
  { name: '专栏', to: '/column' },
];

export const PureTabs = () => {
  return (
    <div className="w-full">
      <div className="flex mx-6 box-border">
        {tabs.map((item) => (
          <NavLink
            to={item.to}
            key={item.name}
            className={({ isActive }) => {
              return (
                'whitespace-nowrap p-4 text-base transition-all cyber-tab' +
                (isActive ? ' active text-[var(--neon-cyan)]' : ' text-[var(--text-secondary)] hover:text-white')
              );
            }}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default function Tabs() {
  return (
    <div className="w-full">
      <div className="flex mx-6 box-border">
        <PureTabs />
      </div>
      <Outlet />
    </div>
  );
}
