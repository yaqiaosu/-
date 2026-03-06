import React, { useState, useEffect, useRef } from 'react';
import Card from '@/components/Card';
import Navigation from '@/components/Navigation';
import Tabs from './Tabs';
import Creation from './Creation';
import SelfFunctions from './SelfFunctions';
import AdvancedBtns from './AdvancedBtns';
export default function Home() {
  const [hideTabs, setHideTabs] = useState(true); // 第二个导航栏Tabs（滚动时显示）
  const scrollTopRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      if (currentScrollTop > scrollTopRef.current && currentScrollTop > 50) {
        // 向上滚动，显示Tabs
        setHideTabs(false);
      } else {
        // 向下滚动，隐藏Tabs
        setHideTabs(true);
      }
      scrollTopRef.current = currentScrollTop;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (isHide: boolean) => {
    console.log(isHide, 'isHide');
    setHideTabs(isHide);
  };
  return (
    <div className="bg-slate-100 min-h-screen">
      <Navigation hideTabs={hideTabs} />
      <div className="mx-auto max-w-5xl border flex my-2 px-2 pt-12">
        <Card className="w-2/3">
          <Tabs handleClick={handleClick} />
        </Card>
        <div className="w-1/3 flex flex-col flex-1">
          <Card>
            <Creation />
          </Card>
          <Card>
            <AdvancedBtns />
          </Card>
          <Card>
            <SelfFunctions />
          </Card>
        </div>
      </div>
    </div>
  );
}
