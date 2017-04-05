if(ENV == 'DEV') {
	require('dist/html/info.html')
}

import 'src/assets/css/reset.scss'

var data= {
	flag: true,
	data1: ["actions", "template", "getters"],
	data2: ["jquery", "zepto", "new"]
}

import app  from 'src/tpl/main/ele_info.ejs'

$('#app').html(app(data))