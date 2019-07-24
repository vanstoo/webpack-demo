const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const webpack = require('webpack');

module.exports = merge(common, {
   mode: 'production',
   devtool: 'source-map',
   output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js',
    path: path.resolve(__dirname, '../build')
  },
  plugins:[
    new webpack.HashedModuleIdsPlugin()
  ]
 });