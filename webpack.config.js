
// ------------------------------------------------------------------ 
// Default Dependencies
// ------------------------------------------------------------------

const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {pluginsDev} = require('./webpack.config.dev');
const {pluginsProd} = require('./webpack.config.prod');

// ------------------------------------------------------------------ 
// Configs
// ------------------------------------------------------------------

const HtmlConfigs = {
  title: 'Webpage title',
  template: resolve(__dirname, 'source/templates/index.html')
};

// ------------------------------------------------------------------

const plugins = () => {
  let arr = [];
  arr.push(new HtmlWebpackPlugin(HtmlConfigs));
  process.env.NODE_ENV != 'production'
    ? arr.push(...pluginsDev())
    : arr.push(...pluginsProd());
  return arr;
};

// ------------------------------------------------------------------

const entries = () => {
  let entries = [];

  entries.push(resolve(__dirname, 'source/javascripts/index.js'));
  return entries;
};


// ------------------------------------------------------------------

let config = {
  entry: entries(),
  output: {
    filename: 'bundle_[hash].js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  context: resolve(__dirname, 'source'),
  devtool: process.env.NODE_ENV == 'production'
    ? 'source-map'
    : 'cheap-module-source-map',
  stats: 'errors-only',
  devServer: {
    hot: true,
    host: '0.0.0.0',
    port: 3000,
    historyApiFallback: true,
    publicPath: '/',
    disableHostCheck: true,
    openPage: '',
    stats: 'errors-only'
  },
  plugins: plugins(),
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }      
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.vue',
      '.jsx',
      '.json',
      '.scss',
      '.css',
      '.svg',
      '.pdf',
      '.zip'
    ],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      stylesheets: resolve(__dirname, 'source/stylesheets'),
      javascripts: resolve(__dirname, 'source/javascripts'),
      vuesrc: resolve(__dirname, 'source/vue'),
      assets: resolve(__dirname, 'assets')
    }
  }
};

// ------------------------------------------------------------------

module.exports = config;
