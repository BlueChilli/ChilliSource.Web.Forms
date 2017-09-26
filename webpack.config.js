var webpack = require('webpack');
var config = require('config');
var autoprefixer = require('autoprefixer');
var path = require('path');

process.env.NODE_ENV = JSON.stringify(config.get('buildEnvironment'));

module.exports = {
	devtool: 'eval-source-map',
	entry: ['webpack-hot-middleware/client', path.join(__dirname, '/app/entry')],
	output: {
		path: '/',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.(t|j)sx?$/,
				exclude: /(node_modules|custom_modules)/,
				use: 'awesome-typescript-loader'
			},
			{
				test: /\.(s?css)/,
				use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
			},
			{
				test: /\.(jpe?g$|gif|png|svg)$/i,
				use: ['url-loader', 'img-loader']
			}
		]
	},
	plugins: [
		new webpack.LoaderOptionsPlugin({
			minimize: true,
			options: {
				postcss: () => {
					return [autoprefixer];
				}
			}
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	resolve: {
		extensions: ['.js', '.jsx', '.tsx', '.ts']
	}
};
