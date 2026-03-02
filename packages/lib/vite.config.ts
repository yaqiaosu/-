import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [dts()],
  build: {
    lib: {
      // !因为我们想要把它作为一个基础包 约束，所以就需要在 build 当中的 lib来去约束当前基础包打包出来的规范内容
      // !找入口
      entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
      formats: ['es'],
      // !输出
      fileName: 'index',
    },
  },
});
