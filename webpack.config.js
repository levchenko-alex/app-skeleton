var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: path.join(__dirname, '/src/index.js'),
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist/'),
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }]
  },
  
  plugins: [
    /**
    * HtmlWebpackPlugin will make sure out JavaScript files are being called
    * from within our index.html
    */
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/src/index.html'),
      filename: 'index.html',
      inject: 'body',
    }),
  ],
};
