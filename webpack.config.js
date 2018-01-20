const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	// entry: './index.js', // assumes your entry point is the index.js in the root of your project folder
	// entry: {
	// 	app: './src/index.js',
	// 	print: './src/print.js'
	// },
	entry:  './src/index.js',
	output: {
		// the target directory for all output files
		// must be an absolute path (use the Node.js path module)
		path: path.resolve(__dirname, "dist"), // string or __dirname
		filename: 'bundle.js' // './bundle.js' assumes your bundle.js will also be in the root of your project folder or path.resolve(__dirname, 'dist')
		// use 'bundle.js', run npx webpack src/index.js dist/bundle.js, then use '[name].js' to create bundle, and run again. Then switch back to bundle.js and a single entry point
	},
	// devtool: 'source-map',  // or inline-source-map
	// devServer: {
	// 	contentBase: './dist',
	// 	port: 9000
	// },
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				options: {
					presets: ['react', 'env', 'stage-3'] // needed to use stage-3 for destructuring and spread oper here for some reason
				}
			},
			{
				test: /\.scss$/,
				use: [{
					loader: "style-loader" // creates style nodes from JS strings
				}, {
					loader: "css-loader" // translates CSS into CommonJS
				}, {
					loader: "sass-loader" // compiles Sass to CSS
				}]
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader', 'sass-loader' ] //must incl this for @import
			},
			{
				test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?.*$|$)/,
				loader: 'file-loader' // must include this for fonts
			}
		]
	}
};




// IGNORE BELOW


// module.exports = {
// 	entry: {
// 	  app: './src/index.js',
// 	  print: './src/print.js'
// 	},
// 	devtool: 'inline-source-map',
// 	devServer: {
// 		contentBase: './dist'
// 	},
// 	plugins: [
// 		new CleanWebpackPlugin(['dist']),
// 		new HtmlWebpackPlugin({
// 			title: 'Development'
// 		})
// 	],
// 	output: {
// 		filename: '[name].bundle.js',
// 		path: path.resolve(__dirname, 'dist')
// 	}
// };

// output: {
// 	// options related to how webpack emits results
//
// 	path: path.resolve(__dirname, "dist"), // string
// 	  // the target directory for all output files
// 	  // must be an absolute path (use the Node.js path module)
//
// 	  filename: "bundle.js", // string
// 	  // the filename template for entry chunks
//
// 	  publicPath: "/assets/", // string
// 	  // the url to the output directory resolved relative to the HTML page
//
// 	  library: "MyLibrary", // string,
// 	  // the name of the exported library
//
// 	  libraryTarget: "umd", // universal module definition
// 	// the type of the exported library
//
// 	/* Advanced output configuration (click to show) */
// },
