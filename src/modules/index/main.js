if(ENV == 'DEV') {
	require('dist/html/index.html')
}
require('bootstrap')
import 'src/assets/css/reset.scss'
import './style.css'
import api from 'src/api/api'

import app from 'src/tpl/main/ele_index.ejs'

module.exports = $(() => {
	var user = {
		name: 'wt',
		age: '11',
		one: '7',
		flag: false,
		data1: ["====1","====2","====3"],
		data2:["====4","====5","====6"]
	}

	$('#app').html(app(user))

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
			console.log(response);
			console.log(response.data);
			console.log(response.status);
			console.log(response.statusText);
			console.log(response.headers);
			console.log(response.config);
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
})

 