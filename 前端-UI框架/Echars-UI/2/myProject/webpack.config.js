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
  },
  // 警告 webpack 的性能提示
  performance: {
    //关闭 webpack 的性能提示
    // hints: false

    // 将展示一条警告，通知你这是体积大的资源。在开发环境，推荐这样设置(默认)
    hints: "warning"

    // 将展示一条错误，通知你这是体积大的资源。
    // 在生产环境构建时，我们推荐使用 hints: "error"，
    // 有助于防止把体积巨大的 bundle 部署到生产环境，从而影响网页的性能
    // hints: "error"

  }
}