import path from 'path';
import { menu } from '../config/hooks.ts';

// 配置文件
export default {
  // 具体配置项
  base: '/-/', // 添加这个
  exportStatic: {},
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  history: {
    type: 'hash',
  },
  // 主题配置
  theme: {},
  themeConfig: {
    name: 'yaya-hooks',
  },
  styles: [
    'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap',
  ],
  extraBabelPlugins: [
    // 按需引入
    [
      'babel-plugin-import',
      {
        libraryName: '@alifd/next',
        style: true,
      },
    ],
  ],
  mode: 'site',
  title: 'YaYa React Hooks',
  dynamicImport: {},
  manifest: {},
  hash: true,
  alias: {
    'yaya-hooks': path.resolve(__dirname, '../packages/hooks/src/index.ts'),
  },
  resolve: {
    includes: ['docs', 'packages/hooks/src'],
  },
  navs: [
    {
      title: '指南',
      path: '/guide',
    },
    {
      title: 'Hooks',
      path: '/hooks',
    },
  ],
  menus: {
    // 需要自定义侧边菜单的路径，没有配置的路径还是会使用自动生成的配置
    '/': [
      {
        title: '首页',
        path: 'index',
      },
    ],
    // 如果该路径有其他语言，需在前面加上语言前缀，需与 locales 配置中的路径一致
    '/guide': [
      // 省略，配置同上
      {
        title: '指南',
        path: 'guide',
      },
    ],
    '/hooks': menu,
  },
};
