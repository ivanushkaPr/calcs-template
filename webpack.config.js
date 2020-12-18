const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/calcs/5452030.pug',
      filename: './calc.html',
      inject: 'head',
      inlineSource: '.(js|css)$' 
    }),
    new HtmlWebpackInlineSourcePlugin()
 /*
    new HtmlWebpackPlugin({
      template: './src/pages/room-details.pug',
      filename: './room-details.html',
      inject: true
    }),
    */
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {pretty: true}
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader',],
      },
      {
        test: /\.(png|jpg|gif|json|xml|ico|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/',
              publicPath: 'assets/'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
};