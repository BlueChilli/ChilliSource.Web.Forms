var rules = require("./rules");
var getPlugins = require("./plugins");
var resolve = require("./resolve");
var getOutput = require("./output");

module.exports = {
  devtool: false,
  entry: [
    './app/entry'
  ],
  output: getOutput(),
  module: {
    rules
  },
  plugins: getPlugins(),
  resolve
};
