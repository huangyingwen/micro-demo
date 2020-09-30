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
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-router-dom': 'ReactRouterDOM',
    'react-router-config': 'ReactRouterConfig',
    antd: 'antd',
    moment: 'moment',
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
  plugins: [
    new CustomModuleIdPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/index.html'),
        },
        {
          from: path.relative(
            __dirname,
            'node_modules/react/umd/react.development.js'
          ),
        },
        {
          from: path.relative(
            __dirname,
            'node_modules/react-dom/umd/react-dom.development.js'
          ),
        },
        {
          from: path.relative(
            __dirname,
            'node_modules/react-router-dom/umd/react-router-dom.js'
          ),
        },
        {
          from: path.relative(
            __dirname,
            'node_modules/react-router-config/umd/react-router-config.js'
          ),
        },
        {
          from: path.relative(__dirname, 'node_modules/antd/dist/antd.js'),
        },
        {
          from: path.relative(
            __dirname,
            'node_modules/moment/min/moment-with-locales.js'
          ),
        },
        {
          from: path.relative(
            __dirname,
            'node_modules/systemjs/dist/system.js'
          ),
        },
        {
          from: path.relative(
            __dirname,
            'node_modules/systemjs/dist/extras/amd.js'
          ),
        },
      ],
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
