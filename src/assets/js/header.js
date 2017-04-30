import ehead from 'src/tpl/layout/ele-header.ejs'

let hdata = {
    logo: 'logo',
    nav: [
        {"text":"首页","src":"#index","isChild":false},
        {"text":"课程","src":"#course","isChild":false},
        {
            "text":"更多",
            "src":"#more",
            "isChild":true,
            "childNav":[
                {"text":"个人中心","src":"#ucenter"},
                {"text":"我的课程","src":"#myCourse"},
                {"text":"学习记录","src":"#studeHistory"}
            ]
        }
    ]
}

module.exports = $(() => {
    $('#header-ele').html(ehead(hdata))
})