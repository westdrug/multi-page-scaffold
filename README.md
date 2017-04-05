基于 webpack 的开发多页面项目的脚手架，支持：

* 代码热替换
* ES2015
* Axios
* ejs

## 使用

```shell
git@github.com:westdrug/multi-page-scaffold.git
cd multi-page-scaffold
npm install
```

* 开发：`npm run dev`
* 上线：`npm run build`


## 配置

修改 `map.js`:

```js
var path = require('path')
var ROOT = path.resolve(__dirname)

module.exports = {
    'index/main': { // 模块名
        "src": ROOT + "/src/index/main", // 对应页面主模块
        "tpl": "index", // 对应模板名
        "title": "首页" // 模板title
    },
    'list/main': {
        "src": ROOT + '/src/list/main',
        "tpl": "list",
        "title": "列表"
    }
}
```

`index/main`: `;list/main` 对应一个页面，模板对应 `src/tpl/index.ejs`，js 模块对应 `src/index/main.js`

在 `src/index/main.js` 中：

```js
// 为了支持修改模板文件文件时页面自动刷新
if(ENV == 'DEV') {
    require('dist/html/index.html')
}
[使用ProvidePlugin](./src/info/main.js)
import style from './style.css' // 引入css
import common from 'src/common' // 引入common模块
```

## 示例

* [使用externals](./src/index/main.js)
* [使用公共模块](./src/list/main.js)
* [使用ProvidePlugin](./src/info/main.js)
* [使用webpack-dev-server的代理](./src/index/main.js)

