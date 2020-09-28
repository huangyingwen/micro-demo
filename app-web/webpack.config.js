const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ReactRefreshWebpackPlugin = require('react-refresh-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

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
    library: '@micro/app-web',
    // chunkFilename: '[name].bundle.js',
  },

  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-router-dom': 'ReactRouterDOM',
    'react-router-config': 'ReactRouterConfig',
    antd: 'antd',
    moment: 'moment',
    '@micro/portal': '@micro/portal',
    '@micro/devops-web': '@micro/devops-web',
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
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization',
    },
  },
};
