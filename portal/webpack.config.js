const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const CustomModuleIdPlugin = require('./custom-module-id-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    index: './src/index.js',
  },

  output: {
    publicPath: '/',
    filename: '[name].js',
    path: path.resolve(__dirname, 'release'),
    libraryTarget: 'this',
    library: '@micro/portal',
    // chunkFilename: '[name].bundle.js',
  },

  externals: {
    // 'react-dom': 'ReactDOM',
    // 'react-router-dom': 'ReactRouterDOM',
    // 'react-router-config': 'ReactRouterConfig',
    // antd: 'antd',
    // moment: 'moment',
    '@micro/devops-web': '@micro/devops-web',
    '@micro/app-web': '@micro/app-web',
  },

  module: {
    rules: [
      {
        test: /\.js/,
        use: ['babel-loader?cacheDirectory'],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/app1/',
            },
          },
        ],
      },
    ],
  },
  optimization: {
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      // minSize: 0,
      minSize: 50000,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`;
          },
        },
        antd: {
          test: /[\\/]node_modules[\\/]antd[\\/]/,
        },
      },
    },
  },
  plugins: [
    new CustomModuleIdPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.temp.html',
      // The following settings are optional and only used for
      // demo purposes:
      meta: {
        charset: { charset: 'utf-8' },
        viewport: 'width=device-width, initial-scale=1',
      },
      minify: false,
      inject: false,
    }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    // 定义变量
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new ReactRefreshWebpackPlugin(),
  ],

  mode: process.env.NODE_ENV,

  devtool: 'eval-source-map',
  // devtool: 'none',
  // devtool: 'cheap-module-source-map',
  // devtool: 'none',

  devServer: {
    historyApiFallback: true,
    watchOptions: { aggregateTimeout: 300, poll: 1000 },
    hot: true,
    hotOnly: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization',
    },
  },
};
