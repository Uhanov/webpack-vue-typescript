const path = require('path');
const webpack = require('webpack');
const baseWebpackConfig = require('./webpack.base');
const merge = require('webpack-merge');

module.exports = merge(baseWebpackConfig, {
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'eval',
  devServer: {
    hot: true,
    compress: true,
    port: 8800,
    open: false,
    overlay: true,
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  mode: 'development'
});
