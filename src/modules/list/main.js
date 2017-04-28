if(ENV == 'DEV') {
	require('dist/html/list.html')
}

import 'src/assets/css/reset.scss'
import './style.css'
import common from 'src/assets/js/common'
common()

let data = {
	names: ['opp', 'xiaomi', 'apple', 'vivo']
}

import app from 'src/tpl/main/ele_list.ejs'

$('#app').html(app(data))
