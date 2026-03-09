import React, { RefObject, useEffect, useRef, useState } from 'react';
import { mockList } from '@/mock/mokeList';
import { HandThumbUpIcon, ChatBubbleLeftIcon, ShareIcon, BookmarkIcon } from '@heroicons/react/24/outline';
import { apiGet } from '@/apis/request';

const RecommendData = ({ item, index }: { item: (typeof mockList)[0]; index: number }) => {
  const [selected, setSelected] = useState<boolean>(false);
  const [liked, setLiked] = useState<boolean>(false);
  const [bookmarked, setBookmarked] = useState<boolean>(false);
  const [likeCount, setLikeCount] = useState<number>(item?.target?.voteup_count || 0);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  const handleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarked(!bookmarked);
  };

  const title = item?.target?.question?.title || item?.target?.title || '未知';
  const excerpt = item?.target?.except || item?.target?.excerpt || '暂无摘要';
  const author = item?.target?.author;
  const commentCount = item?.target?.comment_count || 0;

  return (
    <div className="content-card mb-4 feature-card list-item" style={{ animationDelay: `${index * 0.15 + 0.3}s` }}>
      {/* 标题部分 */}
      <div className="mb-3">
        <a
          href=""
          className="text-xl font-bold text-[var(--text-primary)] hover:text-[var(--neon-cyan)] transition-all duration-300 leading-relaxed inline-block"
        >
          {title}
        </a>
      </div>

      {/* 作者信息 */}
      {author && (
        <div className="flex items-center gap-2 mb-3">
          <img
            src={author.avatar_url}
            alt={author.name}
            className="w-6 h-6 rounded-full transition-transform duration-300 hover:scale-110"
          />
          <span className="text-sm text-[var(--text-secondary)]">{author.name}</span>
          <span className="text-xs text-[var(--text-muted)]">· {author.followers_count || 0} 粉丝</span>
        </div>
      )}

      {/* 内容部分 */}
      <div className="mb-4">
        {selected ? (
          <div
            className="text-[var(--text-secondary)] leading-relaxed prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: item?.target?.question?.content || item?.target?.content || '暂无内容' }}
          />
        ) : (
          <p className="text-[var(--text-secondary)] leading-relaxed line-clamp-3">{excerpt}</p>
        )}
        <button
          className="text-[var(--neon-cyan)] text-sm mt-2 hover:underline transition-all duration-300"
          onClick={() => setSelected(!selected)}
        >
          {selected ? '收起' : '展开全文'}
        </button>
      </div>

      {/* 底部交互栏 */}
      <div className="flex items-center justify-between pt-3 border-t border-[var(--border-color)]">
        <div className="flex items-center gap-2">
          {/* 点赞按钮 */}
          <button
            onClick={handleLike}
            className={`interaction-btn flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all duration-300 ${
              liked
                ? 'bg-[var(--neon-cyan)]/20 text-[var(--neon-cyan)]'
                : 'text-[var(--text-secondary)] hover:bg-[var(--neon-cyan)]/10 hover:text-[var(--neon-cyan)]'
            }`}
          >
            <HandThumbUpIcon
              className={`h-4 w-4 transition-transform duration-300 ${liked ? 'fill-current scale-110' : ''}`}
            />
            <span className="text-sm">{likeCount}</span>
          </button>

          {/* 评论按钮 */}
          <button className="interaction-btn flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[var(--text-secondary)] hover:bg-[var(--neon-purple)]/10 hover:text-[var(--neon-purple)] transition-all duration-300">
            <ChatBubbleLeftIcon className="h-4 w-4" />
            <span className="text-sm">{commentCount}</span>
          </button>

          {/* 分享按钮 */}
          <button className="interaction-btn flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[var(--text-secondary)] hover:bg-[var(--neon-orange)]/10 hover:text-[var(--neon-orange)] transition-all duration-300">
            <ShareIcon className="h-4 w-4" />
            <span className="text-sm">分享</span>
          </button>
        </div>

        {/* 收藏按钮 */}
        <button
          onClick={handleBookmark}
          className={`interaction-btn flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all duration-300 ${
            bookmarked
              ? 'bg-[var(--neon-green)]/20 text-[var(--neon-green)]'
              : 'text-[var(--text-secondary)] hover:bg-[var(--neon-green)]/10 hover:text-[var(--neon-green)]'
          }`}
        >
          <BookmarkIcon
            className={`h-4 w-4 transition-transform duration-300 ${bookmarked ? 'fill-current scale-110' : ''}`}
          />
          <span className="text-sm">收藏</span>
        </button>
      </div>
    </div>
  );
};

// 通用 hook - 无限滚动
const useInfiniteScroll = (scrollRef: RefObject<HTMLDivElement>) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const len = useRef([]);
  const loadingRef = useRef(false);
  const hasMoreRef = useRef(true);

  useEffect(() => {
    if (!scrollRef.current) return;

    const observer: IntersectionObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (loadingRef.current || !hasMoreRef.current) return;
          loadingRef.current = true;
          setLoading(true);

          apiGet({ url: 'recommend', pageNum: len.current.length, pageSize: 10 })
            .then((res: any) => {
              const newItems = res?.data?.data?.items || [];
              if (newItems.length === 0) {
                hasMoreRef.current = false;
              } else {
                len.current = [...len.current, ...newItems];
                setList([...len.current]);
              }
            })
            .finally(() => {
              loadingRef.current = false;
              setLoading(false);
            });
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(scrollRef.current);
    return () => {
      if (scrollRef.current) {
        observer.disconnect();
      }
    };
  }, [scrollRef]);

  return [list, list.length, loading, hasMoreRef.current];
};

/**
 * 推荐列表组件
 * 用于展示推荐内容，支持无限滚动加载
 */
export default function RecommendList() {
  // 创建滚动引用，用于检测滚动位置
  const scrollRef = useRef<HTMLDivElement>(null);
  // 使用自定义hook获取滚动数据
  const [list, len, loading, hasMore] = useInfiniteScroll(scrollRef);

  return (
    <div className="flex flex-col">
      {/* 遍历显示列表数据 */}
      {(list || []).map((item: any, index: number) => {
        return <RecommendData key={index} index={index} item={item} />;
      })}
      <div ref={scrollRef} className="text-center mt-4 text-[var(--text-secondary)] cursor-pointer py-4">
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-[var(--neon-cyan)] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
            <span className="w-2 h-2 bg-[var(--neon-cyan)] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
            <span className="w-2 h-2 bg-[var(--neon-cyan)] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
          </span>
        ) : hasMore ? (
          <span className="text-[var(--text-muted)]">上拉加载更多</span>
        ) : (
          <span className="text-[var(--neon-purple)]">没有更多了</span>
        )}
      </div>
    </div>
  );
}
