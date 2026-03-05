import React from 'react';
import { Outlet, RouteObject } from 'react-router-dom';

export interface extraBizObject {
  title?: string;
}

type ZHRouter = extraBizObject & RouteObject;

const RootLayout: React.FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export const router: ZHRouter[] = [
  {
    path: '/',
    element: <RootLayout />,
    title: '首页',
    children: [
      { path: '', element: <div>推荐</div> },
      { path: 'follow', element: <div>关注</div> },
      { path: 'hot', element: <div>热榜</div> },
      { path: 'column', element: <div>专栏</div> },
    ],
  },
  {
    path: '/education',
    element: <div>知学堂</div>,
    title: '知学堂',
  },
  {
    path: '/question',
    element: <div>等你来答</div>,
    title: '等你来答',
    children: [
      { path: '', element: <div>为你推荐</div> },
      { path: 'hot', element: <div>人气问题</div> },
      { path: 'new', element: <div>最新问题</div> },
    ],
  },
];
