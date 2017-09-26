var autoprefixer = require('autoprefixer');
var {values} = require('lodash');

var rulesObj = {
  javascript: {
    test: /\.(t|j)sx?$/,
    exclude:  /(node_modules)/,
    use: "awesome-typescript-loader"
  }, 
  styles: {
    test: /\.(s?css)/,
    use: [
      "style-loader",
      "css-loader",
      {
        loader: "postcss-loader",
        options: {
          plugins: () => [
            autoprefixer()
          ]
        }
      },
      "sass-loader"
    ]
  },
  images: {
    test: /\.(jpe?g$|gif|png)$/i,
    use: ["url-loader", "img-loader"]
  },
  files: {
    test: /\.(txt|svg)$/,
    use: "file-loader"
  }
}


module.exports = values(rulesObj);