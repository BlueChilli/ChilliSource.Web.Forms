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
  entry: path.join(__dirname, '/app/index'),
  output: {
    path: path.join(__dirname, "/dist/"),
    libraryTarget: "umd",
    filename: "chillisource-web-forms.js"
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
      test: /\.(jpe?g$|gif|png)$/i,
      use: ["url-loader", "img-loader"]
    }, {
      test: /\.(txt|svg)$/,
      use: "file-loader"
    }]
  },

  externals: {
    "classnames": {
      commonjs: "classnames",
      commonjs2: "classnames",
      amd: "classnames",
      root: "classnames"
    },
    "immutable": {
      commonjs: "immutable",
      commonjs2: "immutable",
      amd: "immutable",
      root: "Immutable"
    },
    "moment": {
      commonjs: "moment",
      commonjs2: "moment",
      amd: "moment",
      root: "Moment"
    },
    "react": {
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
      root: "React"
    },
    "react-date-range": {
      commonjs: "react-date-range",
      commonjs2: "react-date-range",
      amd: "react-date-range",
      root: "ReactDateRange"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "react-dom",
      root: "ReactDOM"
    },
    "react-dropzone": {
      commonjs: "react-dropzone",
      commonjs2: "react-dropzone",
      amd: "react-dropzone",
      root: "ReactDropzone"
    },
    "react-onclickoutside": {
      commonjs: "react-onclickoutside",
      commonjs2: "react-onclickoutside",
      amd: "react-onclickoutside",
      root: "ReactOnclickoutside"
    },
    "recompose": {
      commonjs: "recompose",
      commonjs2: "recompose",
      amd: "recompose",
      root: "Recompose"
    }
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
