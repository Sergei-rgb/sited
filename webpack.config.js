let path =require('path');

let cof = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'main.js',
		publicPath: 'dist/'
	},
	devServer:{
		overlay: true
	}
};

module.exports = cof;