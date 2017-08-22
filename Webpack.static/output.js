var path = require('path');

const prodOutput = {
  path: path.join(__dirname,  "../"),
  filename: "bundle.js",
  publicPath: ""
}

module.exports = () => {
  return prodOutput;
}