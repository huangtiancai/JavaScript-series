// 使用node.js的path模块
let path = require('path');

// export一个对象
module.exports = {
  // 模式
  mode: 'development',
  // 入口
  entry: './src/index-entry.js',
  // 出口
  output: {
    // 输出的文件名
    filename: 'boundle.min.js',
    // 输出的目录（必须是绝对路径）
    path: path.resolve(__dirname, 'build')
  },
  devServer: {
    // 指定当前服务处理资源目录
    contentBase: path.join('./dist'),
    // 显示打包编译进度
    progress: true,
    // 创建服务指定的端口
    port: 9000,
    // 编译完自动打开浏览器
    open: true
  }

}