// 设置自定义的打包规则

// 1.webpack 基于node.js开发 => 所有规则必须以CommonJS规范导出，且规则写在 module.exports = {} 中 
// 2.


// 使用node.js的path模块
const path = require('path');

module.exports = {
  mode: 'production',
  // 入口
  entry: './src/index-entry.js',
  // 出口
  output: {
    // 输出的文件名
    filename: 'boundle.min.js',
    // 输出的目录（必须是绝对路径）, __dirname:当前目录
    path: path.resolve(__dirname, 'build')
  }
}