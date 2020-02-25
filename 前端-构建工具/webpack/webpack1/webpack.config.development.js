// 设置自定义的打包规则

// webpack 基于node.js开发 => 所有规则必须以CommonJS规范导出，且规则写在 module.exports = {} 中 

// 使用node.js的path模块
const path = require('path');

// 每一个导入进来的插件都是一个类 => new HtmlWebpackPlugin({})
// 引入html-webpack-plugin插件
let HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
  mode: 'development',
  // 入口
  entry: './src/index-entry.js',
  // 出口
  output: {
    // 输出的文件名  boundle.min.[hash].js => 让每一生成的文件名都带着hash值，而不是在？后添加hash值
    filename: `boundle.min.[hash].js`,
    // 输出的目录（必须是绝对路径）, __dirname:当前目录
    path: path.resolve(__dirname, 'build')
  },
  // webpack-dev-server配置  执行命令：webpack-dev-server xxx.js
  // 特点：服务器启动后，默认时不关闭的，当我们修改SRC中文件中，它会自动进行编译，然后自动刷新浏览器
  devServer: {
    port: 3000,               // 创建服务指定的端口
    progress: false,          // 显示打包编译进度
    // compress: true,           // 服务器压缩
    contentBase: './build',   // 指定当前服务处理资源目录 => 以这个目录起的服务
    open: true,               // 编译完自动打开浏览器
    hot: true
  },
  // 使用插件 => 很多插件 => 数组形式
  plugins: [
    // 传入对象进行配置
    new HtmlWebpackPlugin({
      // 指定模板（真实项目中一般把自己写好的html进行编译），不指定模板会按照默认模板创建一个html页面
      template: './src/index.html',
      filename: 'index.html', // 指定输出文件名
      //  让引入的js后面引入hash戳（清除缓存）  真实项目中都是每一次编译生成不同JS文件引入
      // hash: true
    })
  ]
  // module: {},   // 模块配置（html模块、js模块、css模块、图片模块）

  // resolve: []  // 配置解析
}
