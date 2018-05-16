const path = require('path');
const baseWebpackConfig = require('./webpack.base');
const merge = require('webpack-merge');

module.exports = merge(baseWebpackConfig, {
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'eval',
  devServer: {
    compress: true,
    port: 8800,
    open: false,
    overlay: true,
    historyApiFallback: true
  },
  mode: 'development'
});
