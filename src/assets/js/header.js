import ehead from 'src/tpl/layout/ele-header.ejs'

let hdata = {
    logo: 'webpacklogo',
    url: [
        {"text":"首页","src":"#index"},
        {"text":"课程","src":"#course"},
        {"text":"资讯","src":"#list"}
    ]
}

module.exports = $(() => {
    $('#header-ele').html(ehead(hdata))
})