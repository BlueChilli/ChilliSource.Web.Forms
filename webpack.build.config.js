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
  entry: path.join(__dirname, '/app/entry'),
  output: {
    path: __dirname,
    libraryTarget: "umd",
    "filename": "index.js"
  },
  
  module: {
    rules: [{
      test: /\.tsx?$/,
      exclude:  /(node_modules|custom_modules)/,
      use: "awesome-typescript-loader"
    },{
      test: /\.jsx?$/,
      exclude: /(node_modules|custom_modules)/,
      use: "babel-loader"
    }, {
      test: /\.(s?css)/,
      use: ["style-loader" , "css-loader", "postcss-loader", "sass-loader"]
    }, {
      test: /\.(jpe?g$|gif|png)$/i,
      use: ["url-loader", "img-loader"]
    }, {
      test: /\.(txt|svg)$/,
      use: "raw-loader"
    }]
  },
  plugins: [
    // new webpack.NoErrorsPlugin(),
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
