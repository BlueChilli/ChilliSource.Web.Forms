/* eslint no-console: 0 */
let path = require('path');
let open = require('open');
let express = require('express');
let webpack = require('webpack');
let webpackMiddleware = require('webpack-dev-middleware');
let webpackHotMiddleware = require('webpack-hot-middleware');
let webpackConfig = require('./webpack.config.js');
let config = require('config');
let fs = require('fs');
let https = require('https');
let http = require('http');

const compiler = webpack(webpackConfig);
const app = express();
const host = process.env.HOST || config.get("host") || 'localhost';
const port = config.get("port") || 443;
const url = 'https://' + host + ":" + port + '/';

app.use(express.static(__dirname + '/'));

const serverOptions = {
  publicPath: webpackConfig.output.publicPath,
  noInfo: true,
  stats: 'errors-only'
};

app.use(webpackMiddleware(compiler, serverOptions));
app.use(webpackHotMiddleware(compiler));

app.get('*', function response(req, res) {
  res.sendFile(path.join(__dirname, 'app/index.dev.html'));
});

let key = fs.readFileSync('/SSL/bluechilli.com.key');
let cert = fs.readFileSync('/SSL/bluechilli.com.pem');


let httpsServer = https.createServer({
  key: key, cert: cert
}, app);


httpsServer.listen(port, function onStart(err) {
  if (err) {
    console.log(err);
  }
  open(url);
  console.info('Listening to =>%s in your browser.', url);
});