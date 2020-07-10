const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')
const path = require('path')

module.exports = merge(common, {
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
    path: path.resolve(__dirname, '../dist')
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 9527,
    contentBase: '../dist',
    hot: true,
    historyApiFallback: true // 解决本地刷新404
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
