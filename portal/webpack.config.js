const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
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
    libraryTarget: 'umd',
    library: '@micro/portal',
    // chunkFilename: '[name].bundle.js',
  },

  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    'react-router-dom': 'react-router-dom',
    'react-router-config': 'react-router-config',
    antd: 'antd',
    moment: 'moment',
    '@micro/portal': '@micro/portal',
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
    // new HtmlWebpackPlugin({ template: 'index.html' }),
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
  ],

  mode: 'development',

  devtool: 'eval-source-map',
  // devtool: 'none',

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
