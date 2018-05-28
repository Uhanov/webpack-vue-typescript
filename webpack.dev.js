const path = require('path');
const webpack = require('webpack');
const baseWebpackConfig = require('./webpack.base');
const merge = require('webpack-merge');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const HOST = 'localhost';
const PORT = 8800;

module.exports = merge(baseWebpackConfig, {
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
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
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [`Application is running here: http://${HOST}:${PORT}`]
      },
      clearConsole: true
    }),

    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  mode: 'development'
});
