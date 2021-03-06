if(ENV == 'DEV') {
	require('dist/html/index.html')
}
require('bootstrap')
import 'src/assets/css/reset.scss'
import './style.css'
import head from 'src/assets/js/header'
import api from 'api'

import app from 'src/tpl/main/ele_index'

module.exports = $(() => {
	//$('#app').html(app())
    /** 1、 Axios 
	 *      基于Promise的HTTP请求客户端，可同时在浏览器和node.js中使用
	 *      在浏览器中发送XMLHttpRequests请求
	 *      在node.js中发送http请求
	 *      支持Promise api
	 *      拦截请求和响应
	 *      转换请求和响应数据
	 *      自动转换JSON数据
	 *      客户端支持保护安全免受XSRF攻击
	 */

	let _url = api.videoList
	axios.post(_url,{withCredentinals: true})  // withCredentinals: true 解决跨域
		.then(function(response) {
			$('#app').html(app(response.data))
			//console.log(response);
			//console.log(response.data);
			//console.log(response.status);
			//console.log(response.statusText);
			//console.log(response.headers);
			//console.log(response.config);
		})
		.catch(function(error) {
			console.log(error)
		})

    /** 2、使用jquery封装ajax请求数据 */
	// $.ajax({
	// 	type: 'POST',
	// 	url: _url,
	// 	async: false,
	// 	data: '',
	// 	contentType: 'application/json; charset=utf-8',
	// 	dataType: 'jsonp',
	// 	jsonp: 'jsonpCallback',
	// 	success: function(data) {
	// 		console.log(data)
	// 	},
	// 	eror: function(msg) {
	// 		console.log(msg)
	// 	}
	// })
	
	$('button[type="button"]').on('click', function() {
		require(['dialog'], function(dialog) {
			dialog()
		})
	})
})

 