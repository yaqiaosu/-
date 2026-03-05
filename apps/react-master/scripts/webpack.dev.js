const { merge } = require('webpack-merge');
const base = require('./webpack.base.js');
const path = require('path');
module.exports = merge(base(true), {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    port: 3000,
    compress: true,
    hot: true,
    historyApiFallback: true,
    open: true,
    static: {
      directory: path.resolve(__dirname, '../public'),
    },
  },
});
