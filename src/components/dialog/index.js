//加载模态框模板
import dHtml from './index.ejs'
//嵌套数据
var dText = {
    dTitle: '这是一个弹框标题',
    dContent: '服务包括社交网络、门户网站、电子商务、手机游戏和多人在线游戏。'
}
module.exports = ()=> {
    var $body = $('body'),
        $dialog =  dHtml(dText),
        $dclone = $($dialog).clone()

    var $dElement = $body.find('.bs-ejs-modal-lg')
    if($dElement.length>0 && $dElement.is(':hidden')) {
        $dElement.modal('show')
    } else {
        $body.append($dclone)
        $body.find('.bs-ejs-modal-lg').modal('show')
    }
    
    
}