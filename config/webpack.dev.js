const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')
const path = require('path')

module.exports = merge(common, {
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
    path: path.resolve(__dirname, '../build')
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: '../build',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
