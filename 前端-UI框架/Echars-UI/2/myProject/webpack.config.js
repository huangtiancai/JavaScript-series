// 使用node.js的path模块
const path = require('path');

module.exports = {
  mode: 'production',
  // 入口
  entry: './src/line.js',
  // 出口
  output: {
    // 输出的文件名
    filename: 'line.min.js',
    // 输出的目录（必须是绝对路径）, __dirname:当前目录
    path: path.resolve(__dirname, 'lib')
  }
}