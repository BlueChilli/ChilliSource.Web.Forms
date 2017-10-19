var autoprefixer = require('autoprefixer');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var nodeExternals = require('webpack-node-externals');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: path.join(__dirname, '/app/index'),
	output: {
		path: path.join(__dirname, '/dist/'),
		libraryTarget: 'umd',
		filename: 'main.js'
	},

	module: {
		rules: [
            {
                test: /\.(t|j)sx?$/,
                exclude: /(node_modules|custom_modules)/,
                use: [{
                    loader: "awesome-typescript-loader",
                    options: {
                      useBabel: true
                    }
                  }]
                },
			{
				test: /\.(s?css)/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						'css-loader',
						{
							loader: 'postcss-loader',
							options: { plugins: () => [autoprefixer()] }
						},
						'sass-loader'
					]
				})
			},
			{
				test: /\.(jpe?g$|gif|png|svg)$/i,
				use: ['url-loader', 'img-loader']
			}
		]
	},

	externals: [nodeExternals(
        {
        whitelist: [ 'cs.core', 'lodash-es']
        }
    )],

    plugins: [new ExtractTextPlugin('main.css'),
     new UglifyJSPlugin(),
    new BundleAnalyzerPlugin({
        // Can be `server`, `static` or `disabled`. 
        // In `server` mode analyzer will start HTTP server to show bundle report. 
        // In `static` mode single HTML file with bundle report will be generated. 
        // In `disabled` mode you can use this plugin to just generate Webpack Stats JSON file by setting `generateStatsFile` to `true`. 
        analyzerMode: 'server',
        // Host that will be used in `server` mode to start HTTP server. 
        analyzerHost: '127.0.0.1',
        // Port that will be used in `server` mode to start HTTP server. 
        analyzerPort: 8888,
        // Path to bundle report file that will be generated in `static` mode. 
        // Relative to bundles output directory. 
        reportFilename: 'report.html',
        // Module sizes to show in report by default. 
        // Should be one of `stat`, `parsed` or `gzip`. 
        // See "Definitions" section for more information. 
        defaultSizes: 'parsed',
        // Automatically open report in default browser 
        openAnalyzer: true,
        // If `true`, Webpack Stats JSON file will be generated in bundles output directory 
        generateStatsFile: false,
        // Name of Webpack Stats JSON file that will be generated if `generateStatsFile` is `true`. 
        // Relative to bundles output directory. 
        statsFilename: 'stats.json',
        // Options for `stats.toJson()` method. 
        // For example you can exclude sources of your modules from stats file with `source: false` option. 
        // See more options here: https://github.com/webpack/webpack/blob/webpack-1/lib/Stats.js#L21 
        statsOptions: null,
        // Log level. Can be 'info', 'warn', 'error' or 'silent'. 
        logLevel: 'info'
      })],
	resolve: {
		extensions: ['.js', '.jsx', '.tsx', '.ts']
	}
};
