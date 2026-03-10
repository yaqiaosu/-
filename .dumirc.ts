import { defineConfig } from 'dumi';

export default defineConfig({
  // 基础配置
  base: '/',
  // 主题配置
  themeConfig: {
    name: 'YaYa Hooks',
    logo: '/logo.png',
    nav: [
      { title: '指南', link: '/guide' },
      { title: 'Hooks API', link: '/hooks' },
    ],
  },
  // 开发服务器配置
  devServer: {
    port: 8000,
  },
  // 代码演示配置
  demos: {
    // 确保代码演示正确加载 React
    wrapper: '@dumi/theme-default/lib/Demo',
  },
  // 禁用不必要的插件
  plugins: [
    // 确保使用正确的 React 插件
    'dumi/plugin-react',
  ],
  // 确保使用正确的 Babel 配置
  babel: {
    presets: [
      ['@babel/preset-react', { runtime: 'automatic' }],
    ],
  },
});