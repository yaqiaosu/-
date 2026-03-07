import React, { useState, useEffect, useRef } from 'react';
import Card from '@/components/Card';
import Navigation from '@/components/Navigation';
import Tabs from './Tabs';
import Creation from './Creation';
import SelfFunctions from './SelfFunctions';
import AdvancedBtns from './AdvancedBtns';

export default function Home() {
  const [hideTabs, setHideTabs] = useState(true);
  const scrollTopRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      if (currentScrollTop > scrollTopRef.current && currentScrollTop > 50) {
        setHideTabs(false);
      } else {
        setHideTabs(true);
      }
      scrollTopRef.current = currentScrollTop;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (isHide: boolean) => {
    setHideTabs(isHide);
  };

  return (
    <div className="min-h-screen">
      <Navigation hideTabs={hideTabs} />
      <div className="mx-auto max-w-6xl pt-20 pb-8 px-4">
        <div className="flex gap-6">
          {/* 左侧内容区 */}
          <div className="flex-1">
            <Card className="animate-fade-in-up">
              <Tabs handleClick={handleClick} />
            </Card>
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
