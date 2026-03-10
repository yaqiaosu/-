import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import cleaner from 'rollup-plugin-cleaner';
import dts from 'rollup-plugin-dts';
import { globSync } from 'glob';

// 匹配所有 hooks: use* 和 create* 开头的.ts/.tsx 文件 index
const hookFiles = globSync(['src/use*/index.ts']).reduce((entries, file) => {
  console.log(entries, 'entries');
  console.log(file, 'file');
  console.log(file.split('/'), 'file.split(/)');
  const name = file.split('/')[1];
  entries[`${name}/index`] = file;
  return entries;
}, {});
console.log(hookFiles, 'hookFiles');
export default [
  {
    input: {
      // !为什么设置这么多入口文件？ 为了按需加载
      index: 'src/index.ts',
      ...hookFiles,
    },
    output: [
      {
        dir: 'lib',
        format: 'cjs',
        exports: 'named',
        // ! 为什么要设置 preserveModules 为 true？ 为了保持目录结构  为了按需加载
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: '[name].js',
        sourcemap: true,
      },
      {
        dir: 'es',
        format: 'esm',
        exports: 'named',
        // ! 为什么要设置 preserveModules 为 true？ 为了保持目录结构  为了按需加载
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: '[name].js',
        sourcemap: true,
      },
    ],
    plugins: [
      cleaner({
        targets: ['./lib/', './es/'],
      }),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
      }),
      terser(),
    ],
    external: ['react'],
  },
  {
    input: {
      index: 'src/index.ts',
      ...hookFiles,
    },
    output: [
      {
        dir: 'lib',
        entryFileNames: '[name].d.ts',
        format: 'lib',
        preserveModules: true,
      },
    ],
    plugins: [dts()],
  },
  {
    input: 'src/index.ts',
    output: {
      dir: 'dist',
      format: 'umd',
      sourcemap: true,
      name: 'ReactHooks',
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
      }),
      terser(),
    ],
  },
];
