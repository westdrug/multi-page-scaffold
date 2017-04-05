var path = require('path')
var ROOT = path.resolve(__dirname)

module.exports = {
	'index/main': {
		"src": ROOT + "/src/index/main",
		"tpl": "index",
		"title": "首页"
	},
	'list/main': {
		"src": ROOT + '/src/list/main',
		"tpl": "list",
		"title": "列表页"
	},
	'info/main': {
		"src": ROOT + '/src/info/main',
		"tpl": "info",
		"title": "详情页"
	}
}