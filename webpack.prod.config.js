var path = require('path');
var webpack = require('webpack');
var ignore = new webpack.IgnorePlugin(/\.svg$/);
var nodeModulesDir = path.resolve(__dirname, 'node_modules');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var cssnext = require('postcss-cssnext');
var cssImport = require('postcss-import');
var precss = require('precss');

module.exports = {
    entry: {
        main: './scripts/main.js',
        vendor: [
            'lodash',
            'moment',
            'normalizr',
            'react',
            'redux',
			'redux-saga'
        ]
    },
    output: {
        publicPath: 'http://localhost:8080/',
        filename: './server/public/js/[name].js'
    },
    module: {
        loaders: [
            {
				test: /\.js$/,
				loader: 'babel',
				exclude: [nodeModulesDir]
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader?minimize!postcss-loader')
			}
        ]
    },
    plugins: [
        ignore,
        new ExtractTextPlugin('./server/public/css/main.css'),
        new webpack.optimize.CommonsChunkPlugin('vendor', './server/public/js/vendor.js')
    ],
	postcss: function(webpack) {
		return [
			cssImport({ addDependencyTo: webpack }),
			precss(),
			cssnext(),
		];
	}
};
