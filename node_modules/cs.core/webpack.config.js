var webpack = require("webpack");
var autoprefixer = require('autoprefixer');
var path = require('path');

process.env.NODE_ENV = "development";

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
