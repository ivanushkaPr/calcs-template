const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    calc5452030: './src/calcs/5452030/calc5452030.js',
    someOtherCalc: './src/calcs/someOtherCalc/someOtherCalc.js',
  },
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundles/[name].js',
    chunkFilename: '[id].[chunkhash].js'
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/calcs/5452030/5452030.pug',
      filename: './5452030.html',
      inject: 'head',
      inlineSource: '.(js|css)$',
      chunks: ['calc5452030'],
      chunksSortMode: 'manual',
    }),
    new HtmlWebpackPlugin({
      template: './src/calcs/someOtherCalc/someOtherCalc.pug',
      filename: './someOtherCalc.html',
      inject: 'head',
      inlineSource: '.(js|css)$',
      chunks: ['someOtherCalc'],
      chunksSortMode: 'manual',
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