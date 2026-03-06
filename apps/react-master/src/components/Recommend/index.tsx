import React, { useState } from 'react';
import { mockList } from '@/mock/mokeList';
const RecommendData = ({ item }: { item: (typeof mockList)[0] }) => {
  const [selected, setSelected] = useState<boolean>(false);
  const handleClick = () => {
    setSelected(!selected);
  };
  console.log(item);
  return (
    <div className="flex flex-col items-start p-4 border-t border-slate-200">
      {/* 标题部分 */}
      <div className="h-auto flex justify-start">
        <a href="" className="text-black text-lg font-bold leading-10">
          {item?.target?.question?.title || item?.target?.title || '未知'}
        </a>
      </div>
      {/* 内容部分 */}
      {selected ? (
        <>
          <div
            dangerouslySetInnerHTML={{ __html: item?.target?.question?.content || item?.target?.content || '未知' }}
          ></div>
        </>
      ) : (
        <button className="text-blue-600 font-bold" onClick={() => handleClick()}>
          {item?.target?.except}
          <span className="text-sm text-gray-500">阅读全文</span>
        </button>
      )}
      {/* 底部bar */}
      <div className={`flex bg-white w-full ${selected ? 'bottom-0 sticky' : ''}`}>
        <div className="h-10 bg-blue-100 text-blue-600 rounded-sm p-2 m-2 inline-flex items-center">
          <span className="inline-flex items-center">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              className="Zi Zi--TriangleUp VoteButton-TriangleUp"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M13.792 3.681c-.781-1.406-2.803-1.406-3.584 0l-7.79 14.023c-.76 1.367.228 3.046 1.791 3.046h15.582c1.563 0 2.55-1.68 1.791-3.046l-7.79-14.023Z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="ml-1">赞同</span>
          </span>
        </div>
        {selected && (
          <div
            className="h-10 bg-blue-100 text-blue-600 rounded-sm p-2 m-2 inline-flex items-center"
            onClick={() => handleClick()}
          >
            收起
          </div>
        )}
      </div>
    </div>
  );
};

export default function RecommendList() {
  return (
    <div className="flex flex-col border-t">
      {mockList.map((item: unknown, index: number) => {
        return <RecommendData key={index} item={item} />;
      })}
    </div>
  );
}
