const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: './index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist')
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '../dist')
    },
    allowedHosts: 'auto',
    open: true,
    compress: true,
    port: 4321,
    hot: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: ['html-loader']
      }
    ]
  }
};
