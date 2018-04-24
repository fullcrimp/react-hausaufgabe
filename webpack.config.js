const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'DEVELOPMENT';

module.exports = {
	context: path.join(__dirname, 'src'),

	entry: {
		bundle: './index'
	},

	output: {
		path: path.join(__dirname, 'built'),
		filename: '[name].js'
	},

	resolve: {
		// modulesDirectories: ['node_modules'],
		extensions: [ '.js', '.jsx' ]
	},

	resolveLoader: {
		// modulesDirectories: ['node_modules'],
		// moduleTemplates: ['*-loader', '*'],
		extensions: [ '.js' ]
	},

	watch: NODE_ENV === 'DEVELOPMENT',
	watchOptions: {
		aggregateTimeout: 100
	},

	devtool: NODE_ENV === 'DEVELOPMENT' ? 'eval-source-map' : 'source-map',

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						plugins: [ 'transform-react-jsx' ]
						// presets: ['env']
					}
				}
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [ 'eslint-loader' ]
			}
		]
	},

	devServer: {
		contentBase: path.join(__dirname, './built/'),
		host: 'localhost',
		port: 8080
	},

	plugins: [
		new webpack.DefinePlugin({
			NODE_ENV: JSON.stringify(NODE_ENV)
		}),
		new HtmlWebpackPlugin({
			title: 'Title?',
			hash: true,
			template: './index.html'
		})
	]
};

if (NODE_ENV === 'PRODUCTION') {
	module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin());
};
