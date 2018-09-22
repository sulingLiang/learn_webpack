let webpack = require('webpack');

module.exports = {
	entry:{
		app:"./main.js"
	},
	output:{
		filename:"bundle.js"
	},
	plugins:[
		/*new webpack.optimize.CommonsChunkPlugin({
			name:"vendor",
			filename:'vendor.js'
		})*/
		new webpack.ProvidePlugin({
			$:'jquery',
			jQuery:'jquery'
		})
	]
}