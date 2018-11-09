const path = require('path');

module.exports = {
	mode: "development",
    entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'react-bundle.js'
	},
	devServer: {
		historyApiFallback: true,
		contentBase: path.join(__dirname, 'public'),
    	port: 9000
	},
	resolve: {
		extensions: [".css", ".js", ".scss"]
	},
	module: {
		rules: [
		{ test: /\.js?$/, use: ['babel-loader'], exclude: /node_modules/ },
		{
			test: /\.(gif|png|jpe?g|svg)$/i,
			use: [
				'file-loader',
				{
					loader: 'image-webpack-loader',
					options: {
						bypassOnDebug: true,
					},
				},
			],
		},
		{
			test: /\.css$/,
			use: [
				"css-loader" 
			]
		},
		{
			test: /\.scss$/,
			use: [
				{   loader: "style-loader" },
				{
					loader: "css-loader", options: {
						sourceMap: true
					}
				},
				{ 
					loader: "sass-loader", options: {
						sourceMap: true
					}
				}
			],
		},
		]
	}
 }