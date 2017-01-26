const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let loaders = [
  'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
  'sass-loader',
]

module.exports = {
  cache: true,
  entry: {
    main: './src/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: '[name].js',
    chunkFilename: '[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({loader: loaders }),
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/src/index.html'),
      filename: 'index.html',
      inject: 'body',
    }),
    new ExtractTextPlugin('bundle.css')
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
};