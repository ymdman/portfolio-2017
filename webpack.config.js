const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const webpack = require('webpack');
// const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  entry: {
    bundle: './src/main.js',
  },

  output: {
    path: `${__dirname}/public`,
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },

      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'postcss-loader',
          ],
        }),
      },
    ],
  },

  plugins: [
    new ExtractTextPlugin('bundle.css'),
  ],

  devServer: {
    contentBase: './public',
    port: 3000,
  },
};
