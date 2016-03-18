var webpack = require('webpack');
var ignore = new webpack.IgnorePlugin(/\.svg$/);
var cssnext = require('postcss-cssnext');
var cssImport = require('postcss-import');
var precss = require('precss');

module.exports = {
	devtool: 'source-map',
	entry: {
		main: [
            './scripts/main.js',
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server'
        ]
	},
	output: {
		publicPath: 'http://localhost:8080/',
		filename: '/js/[name].js'
	},
	module: {
		loaders: [
            { test: /\.jsx?$/, loaders: ['react-hot', 'babel-loader'], exclude: /node_modules/ },
            { test: /\.css$/, loaders: ['style-loader', 'css-loader', 'postcss-loader'] }
        ]
	},
	plugins: [ignore],
	devServer: {
		host: '0.0.0.0',
		proxy: {
			'/api/*': 'http://localhost:8081',
		}
	},
	postcss: function(webpack) {
		return [
			cssImport({ addDependencyTo: webpack }),
			precss(),
			cssnext(),
		];
	}
};
