const { merge } = require('webpack-merge');
const base = require('./webpack.base.js');
const cssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const terserWebpackPlugin = require('terser-webpack-plugin');
module.exports = merge(base(false), {
  mode: 'production',
  optimization: {
    // !开启压缩.
    minimize: true,
    // !压缩规则.
    minimizer: [
      // !css 压缩
      new cssMinimizerPlugin(),
      // !js 压缩
      new terserWebpackPlugin({
        // !开启多线程压缩.
        parallel: true,
        // !压缩级别.
        terserOptions: {
          compress: {
            pure_funcs: ['console.log', 'console.debug'],
          },
        },
        // !代码分割.
        splitChunks: {
          chunks: 'all',
          // !缓存组.
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              // !缓存组优先级.
              priority: -10,
            },
            reactCom: {
              test: /[\\/]node_modules[\\/]react/,
              name: 'reactCom',
              priority: 20,
            },
            common: {
              test: /[\\/]node_modules[\\/]/,
              name: 'common',
              priority: -20,
            },
            // default: {
            //   // !缓存组最小引用次数.
            //   minChunks: 2,
            //   priority: -20,
            //   reuseExistingChunk: true,
            // },
          },
        },
      }),
    ],
  },
});
