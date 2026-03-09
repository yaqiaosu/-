import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
// !全局配置
afterEach(() => {
  // 每个测试用例执行后，清理 DOM 元素
  cleanup();
});
