import React, { useState, useEffect } from 'react';
import Card from '@/components/Card';
import Navigation from '@/components/Navigation';
import Tabs from './Tabs';
import Creation from './Creation';
import SelfFunctions from './SelfFunctions';
import AdvancedBtns from './AdvancedBtns';
import SearchResults from '@/components/SearchResults';
import { SearchResult } from 'yaya-hooks';

export default function Home() {
  const [hideTabs, setHideTabs] = useState(true);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  // 使用滚动监听
  useEffect(() => {
    const handleScroll = () => {
      // 导航栏高度大约 56px
      const navHeight = 56;
      const scrollTop = window.scrollY;

      // 当滚动超过导航栏高度时，显示 Tab 导航
      if (scrollTop > navHeight) {
        setHideTabs(false);
      } else {
        setHideTabs(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // 初始化检查
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (results: SearchResult[], keyword: string) => {
    setSearchResults(results);
    setSearchKeyword(keyword);
    setIsSearching(false);
  };

  const handleSearchStart = () => {
    setIsSearching(true);
  };

  return (
    <div className="min-h-screen">
      <Navigation
        hideTabs={hideTabs}
        onSearch={(results, keyword) => {
          handleSearch(results, keyword);
        }}
        onSearchStart={handleSearchStart}
      />
      <div className="mx-auto max-w-6xl pt-20 pb-8 px-4">
        <div className="flex gap-6">
          {/* 左侧内容区 */}
          <div className="flex-1">
            {searchKeyword ? (
              <SearchResults
                results={searchResults}
                loading={isSearching}
                keyword={searchKeyword}
              />
            ) : (
              <Card className="animate-fade-in-up">
                <Tabs />
              </Card>
            )}
          </div>

          {/* 右侧侧边栏 */}
          <div className="w-80 flex flex-col gap-4">
            <Card className="animate-fade-in-right">
              <Creation />
            </Card>
            <Card className="animate-fade-in-right delay-100">
              <AdvancedBtns />
            </Card>
            <Card className="animate-fade-in-right delay-200">
              <SelfFunctions />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
