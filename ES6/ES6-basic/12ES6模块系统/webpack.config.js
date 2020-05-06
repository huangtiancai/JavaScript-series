// 引用node的path包，版主路径上的操作（使用绝对路径更容易）
const path = require('path');

// CMD写法=>给node.js
module.exports = {
  mode:'development',
  entry:'./js/index.js',
  output:{
    // resolve把路径解析为绝对路径
    path:path.resolve(__dirname,'build'),
    filename:'bundle.js'
  }
}



// 编译模式
// 入口

