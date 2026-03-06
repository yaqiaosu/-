import React from 'react';

export default function Creation() {
  return (
    <div className="bg-white p-4">
      {/* 顶部标题 */}
      <div className="flex justify-between items-center mb-4">
        <div className="font-semibold text-base">创作中心</div>
        <div className="text-sm text-gray-500">草稿箱(0)</div>
      </div>

      {/* 底部功能按钮 */}
      <div className="flex justify-between">
        {/* 回答问题 */}
        <div className="flex flex-col items-center cursor-pointer">
          <div className="w-10 h-10 bg-blue-50 rounded flex items-center justify-center mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <span className="text-xs text-gray-600">回答问题</span>
        </div>

        {/* 写文章 */}
        <div className="flex flex-col items-center cursor-pointer">
          <div className="w-10 h-10 bg-green-50 rounded flex items-center justify-center mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </div>
          <span className="text-xs text-gray-600">写文章</span>
        </div>

        {/* 发起提问 */}
        <div className="flex flex-col items-center cursor-pointer">
          <div className="w-10 h-10 bg-orange-50 rounded flex items-center justify-center mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-orange-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <span className="text-xs text-gray-600">发起提问</span>
        </div>

        {/* 草稿箱 */}
        <div className="flex flex-col items-center cursor-pointer">
          <div className="w-10 h-10 bg-gray-50 rounded flex items-center justify-center mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
              />
            </svg>
          </div>
          <span className="text-xs text-gray-600">草稿箱</span>
        </div>
      </div>
    </div>
  );
}
