var {NoEmitOnErrorsPlugin, optimize} = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var {CheckerPlugin} = require('awesome-typescript-loader');

const prodPlugins = [
  new CleanWebpackPlugin(['../static/*'], {
    "verbose": true // Write logs to console.
  }),
  new CheckerPlugin()
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