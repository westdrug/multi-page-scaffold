var path = require('path')
var ROOT = path.resolve(__dirname)
const webTitel = '—webpack构建'

module.exports = {
	'modules/index/main': {
		"src": ROOT + "/src/modules/index/main",
		"tpl": "index",
		"title": "首页" + webTitel
	},
	'modules/list/main': {
		"src": ROOT + '/src/modules/list/main',
		"tpl": "list",
		"title": "列表页" + webTitel
	},
	'modules/info/main': {
		"src": ROOT + '/src/modules/info/main',
		"tpl": "info",
		"title": "详情页" + webTitel
	}
}