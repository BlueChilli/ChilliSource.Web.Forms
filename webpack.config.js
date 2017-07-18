var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ContextReplacementPlugin = require("webpack/lib/ContextReplacementPlugin");
var config = require('config');
var autoprefixer = require('autoprefixer');
var baseURL = config.get('baseURL');
var path = require('path');

process.env.NODE_ENV = JSON.stringify(config.get('buildEnvironment'));

module.exports = {
  devtool: 'eval-source-map',
  entry: path.join(__dirname, '/app/entry'),
  output: {
    path: "/",
    publicPath: "/"
  },
  module: {
    rules: [{
      test: /\.(t|j)sx?$/,
      exclude:  /(node_modules|custom_modules)/,
      use: "awesome-typescript-loader"
    }, {
      test: /\.(s?css)/,
      use: ["style-loader" , "css-loader", "postcss-loader", "sass-loader"]
    }, {
      test: /\.(jpe?g$|gif|png|svg)$/i,
      use: ["url-loader", "img-loader"]
    }]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      options: {
        postcss: () => {
          return [autoprefixer]
        }
      }
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
  }
};
