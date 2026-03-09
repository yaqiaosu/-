const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

const projectRoot = path.resolve(__dirname, '..');

module.exports = function (isDev) {
  return {
    entry: path.resolve(projectRoot, 'src/index.tsx'),
    output: {
      path: path.resolve(projectRoot, 'dist'),
      filename: 'static/js/[name].[hash:8].js',
      clean: true,
      // !打包后的文件路径
      publicPath: '/',
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js'],
      alias: {
        '@': path.resolve(projectRoot, 'src'),
        'yaya-hooks': path.resolve(projectRoot, '../../packages/hooks/src'),
      },
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx|js|jsx)$/,
          use: [
            {
              loader: 'babel-loader',
            },
          ],
        },
        {
          // !优化的方式之一.匹配的文件不会继续匹配，以节省匹配时间。
          oneOf: [
            {
              test: /\.module\.(css|scss|sass)$/,
              include: [path.resolve(__dirname, '../src')],
              use: [
                isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                {
                  loader: 'css-loader',
                  options: { modules: { localIdentName: '[path][name]__[local]--[hash:base64:5]' } },
                },
                'postcss-loader',
                'less-loader',
              ],
            },
            {
              test: /\.css$/,
              use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
            },
            {
              test: /\.less$/,
              use: [
                isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader',
                'less-loader',
              ],
            },
          ],
        },
        // !Webpack 5 内置了 URL 或者 Asset Modules (file-loader) 等
        {
          test: /\.(png|jpe?g|gif|svg)$/,
          type: 'asset',
          parser: {
            dataUrlCondition: {
              maxSize: 10 * 1024, // 10kb
            },
          },
          generator: {
            filename: 'static/images/[name].[hash:8][ext]',
          },
        },
        {
          test: /\.(woff2?|eot|ttf|otf)$/,
          type: 'asset/resource',
          generator: {
            filename: 'static/fonts/[name].[hash:8][ext]',
          },
        },
        {
          test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
          type: 'asset/resource',
          generator: {
            filename: 'static/media/[name].[hash:8][ext]',
          },
        },
      ],
    },
    plugins: [
      // !提取 CSS 到单独的文件中
      new MiniCssExtractPlugin({
        filename: 'static/css/[name].[hash:8].css',
      }),
      new htmlWebpackPlugin({
        template: path.resolve(__dirname, '../public/index.html'),
        inject: 'body',
        chunks: ['main'],
        title: '我的工程化搭建',
      }),
    ],
  };
};
