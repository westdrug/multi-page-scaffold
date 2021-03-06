var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var map = require('./map')
var ROOT = path.resolve(__dirname)
var ENV = process.env.ENV
var CDN = process.env.CDN

var entry = {
		'vendor': [
			'jquery',
			'bootstrap'
		]
	},
	plugins = []

for (chunk in map) {
	entry[chunk] = map[chunk].src
	plugins.push(new HtmlWebpackPlugin({
		alwaysWriteToDisk: true,
		title: map[chunk].title,
		filename: ROOT + '/dist/html/' + map[chunk].tpl + '.html',
		template: ROOT + '/src/tpl/' + map[chunk].tpl + '.ejs',
		chunks: ['vendor', chunk],
		inject: 'body',
		hash: false,
		cache: true,
		minify: {                       //压缩HTML文件
			removeComments: true,       //移除HTML中的注释
			collapseWhitespace: true    //删除空白符与换行符
		}
	}))
}

if(ENV == 'DEV') {
	plugins.push(new HtmlWebpackHarddiskPlugin())
}else {
	plugins.push(new webpack.optimize.UglifyJsPlugin({minimize: true}))	
}

module.exports = {
	devtool: ENV == 'DEV' ? 'cheap-eval-source-map' : '',
	entry: entry,
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: CDN ? CDN : 'http://127.0.0.1:8090/dist/',
		chunkFilename: "/libs/ensure/ensure.[name].js"//给require.ensure用
	},
	resolve: {
		alias: {
			'src': path.resolve(__dirname,'src'),
			'dist': path.resolve(__dirname,'dist'),
			'dialog': path.resolve(__dirname,'src/components/dialog/index'),
			'api': path.resolve(__dirname, 'src/api/api')
		},
		extensions: ['', '.js', '.jsx', '.ejs', '.scss', '.css']
	},
	externals: {   //通过引用外部文件的方式引入第三方库，如下的配置
		//'d3': 'window.d3'
		//'bootstrap': 'bootstrap'
	},
	devServer: {   //设置服务器代理 调用返回数据
		historyApiFallback: true,
		hot: true,                 //热启动
		inline: true,              //监控js变化
		stats: {colors: true},
		proxy: {
			'/api/*': {  
                target: 'https://api.douban.com',
				pathRewrite: {'^/api' : ''},
				changeOrigin: true,
                secure: false  
            }
		}
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style', 'css!autoprefixer?{browsers:["last 2 version", "> 1%"]}')
			},
    		{
    			test: /\.s[a|c]ss$/,
    			loader: ExtractTextPlugin.extract('style', 'css!autoprefixer?{browsers:["last 2 version", "> 1%"]}!sass')
    		},
			{
				test: /\.js$/,
				loader: "babel",
				exclude: /node_modules/
			},
    		{
		      test: /\.(jpe?g|png|gif|svg)$/i,
		      loader: 'url-loader?limit=8192&name=/assets/img/[name].[ext]'
		    },
			{ 
				test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/, 
				loader: "file-loader?name=/assets/font/[name].[ext]"
			},
			{
				test: /(\.html|\.php)$/,
      			loader: "raw-loader"
			},
			{
				test: /\.ejs$/,
				loader: "ejs-compiled?htmlmain"
			}
		]
	},
	'ejs-compiled-loader': {
		'htmlmin': true, 
		'htmlminOptions': {
			removeComments: true
		}
	},
	plugins: plugins.concat([
		new webpack.DefinePlugin({
			'ENV': JSON.stringify(process.env.ENV)
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			filename: 'vendor.css',
			minChunk: 2
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			filename: 'libs/vendor.js',
			chunks: ['jquery', 'bootstrap']
		}),
		new ExtractTextPlugin('assets/css/[name].css'),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery:"jquery",
			"window.jQuery":"jquery",
			bootstrap: 'bootstrap',
			axios: 'axios'
		})
	])
}