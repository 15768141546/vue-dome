const {
	VueLoaderPlugin
} = require('vue-loader');

module.exports = {
	//省略一堆配置...
	devtool:'eval-source-map',
	entry: {
		index: "./main.js" //webpack的入口文件，指定将哪个文件进行打包
	},
	module: {
		rules: [{
			test: /\.vue$/, //vue文件加载器
			use: ['vue-loader']
		}, {
			test: /\.js$/, //js文件加载器
			use: ['babel-loader'],
			exclude: /node_modules/
		}, {
			test: /\.less$/, //lsaa文件加载器
			loaders: ["style-loader", "css-loader", "less-loader"]
		}, {
			test: /\.css$/, //css文件加载器
			loaders: ["style-loader", "css-loader"]
		},
		{
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: 'file-loader'
      }]
	},
	plugins: [
		// 添加VueLoaderPlugin，以响应vue-loader
		new VueLoaderPlugin()
	]

}
