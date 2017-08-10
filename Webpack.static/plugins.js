var {NoEmitOnErrorsPlugin, optimize} = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var {CheckerPlugin} = require('awesome-typescript-loader');
const AutoDllPlugin = require('autodll-webpack-plugin');

const prodPlugins = [
  new CleanWebpackPlugin(['../static/*'], {
    "verbose": true // Write logs to console.
  }),
  new CheckerPlugin(),
  new AutoDllPlugin({
      inject: true,
      context: __dirname,
      filename: '[name]_[hash].js',
      path: './dll',
      entry: {
        vendor: [
          'react',
          'react-dom',
          'redux',
          'recompose',
          'react-router',
          'axios',
          'immutable',
          'moment'
        ]
      }
    })
]


const getDefaultPlugins = () => {
  return [
    new NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.ejs",
      inject: 'body'
    })
  ]
}

module.exports = () => {
  return [
    ...getDefaultPlugins(),
    ...prodPlugins
  ]
}