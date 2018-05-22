const path = require('path');
const webpack = require('webpack');
const baseWebpackConfig = require('./webpack.base');
const merge = require('webpack-merge');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const HOST = 'localhost';
const PORT = 8800;

module.exports = merge(baseWebpackConfig, {
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'eval',
  devServer: {
    quiet: true,
    hot: true,
    compress: true,
    host: HOST,
    port: PORT,
    open: false,
    overlay: true,
    historyApiFallback: true
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [`You application is running here http://${HOST}:${PORT}`]
      },
      clearConsole: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  mode: 'development'
});
