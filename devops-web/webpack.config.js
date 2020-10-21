const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const CustomModuleIdPlugin = require('../portal/custom-module-id-plugin');

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
    library: '@micro/devops-web',
    // chunkFilename: '[name].bundle.js',
  },

  externals: {
    react: ['@micro/portal', 'React'],
    'react-dom': ['@micro/portal', 'ReactDOM'],
    'react-router-dom': ['@micro/portal', 'ReactRouterDOM'],
    'react-router-config': ['@micro/portal', 'ReactRouterConfig'],
    'react-refresh/runtime': 'ReactRefresh',
    antd: ['@micro/portal', 'antd'],
    moment: ['@micro/portal', 'moment'],
    '@micro/portal': '@micro/portal',
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
  plugins: [
    new CustomModuleIdPlugin(),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),

  mode: 'development',

  // devtool: 'eval-source-map',
  // devtool: 'none',
  devtool: 'cheap-module-source-map',

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
