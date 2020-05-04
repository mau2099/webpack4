const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  entry: { main: path.resolve(__dirname, 'index.js') },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  devServer: {
    hot: true,
    open: true,
    // port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          // {
          //   loader: MiniCssExtractPlugin.loader,
          // },
          'css-loader',
        ],
      },
      {
        test: /\.(jpg|png|gif|eot|ttf|svg|mp4|webm)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 900000,
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'ulr folder',
      template: path.resolve(__dirname, 'index.html'),
    }),
    // new MiniCssExtractPlugin({
    //   filename: 'css/[name].css',
    // }),
  ],
};
