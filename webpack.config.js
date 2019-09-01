let path =require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let cof = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'main.js',
		publicPath: 'dist/'
	},
	devServer:{
		overlay: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/Header.html'
		})
	]
};

module.exports = cof;