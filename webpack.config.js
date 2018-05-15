const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const plugins = [new ExtractTextPlugin('bundle.css')];

if (isProduction) {
  plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin(),
  );
}

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
            {
              loader: 'css-loader',
              options: {
                sourceMap: !isProduction,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: !isProduction,
              },
            },
          ],
        }),
      },
    ],
  },

  plugins,

  devtool: !isProduction ? 'inline-source-map' : '',

  devServer: {
    contentBase: './public',
    port: 3001,
    historyApiFallback: true,
  },
};
