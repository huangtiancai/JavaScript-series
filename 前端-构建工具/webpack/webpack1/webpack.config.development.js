// 设置自定义的打包规则

// webpack 基于node.js开发 => 所有规则必须以CommonJS规范导出，且规则写在 module.exports = {} 中 

// 使用node.js的path模块 => 指定输出的目录
const path = require('path');

// 每一个导入进来的插件都是一个类 => new HtmlWebpackPlugin({})
// 打包html
let HtmlWebpackPlugin = require('html-webpack-plugin');
// 抽离css
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 压缩css   optimize:优化
let OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// 压缩js
let UglifyJsPlugin = require('uglifyjs-webpack-plugin');

let Webpack = require('webpack');



module.exports = {
  // 设置webpack优化规则
  optimization: {
    // 压缩优化 => 优化有很多项 => 数组形式
    minimizer: [
      // 压缩css 产生的问题:js压缩不再执行自己默认的压缩的方式了,走的也是压缩css这个插件，自然导致无法压缩
      new OptimizeCssAssetsPlugin(),
      // 压缩js
      new UglifyJsPlugin({
        cache: true,      // 是否使用缓存
        parallel: true,   // 是否使用并发编译
        sourceMap: true   // 启动源码映射（方便调试）
      })
    ]
  },
  mode: 'production',
  // 入口 entry 可以是一个数组/对象
  entry: ['@babel/polyfill', './src/index.js', './src/a.js'],
  // 出口
  output: {
    // 输出的文件名  boundle.min.[hash].js => 让每一生成的文件名都带着hash值，而不是在？后添加hash值
    filename: 'boundle.min.[hash:8].js',
    // 输出的目录（必须是绝对路径）, __dirname:当前目录
    path: path.resolve(__dirname, 'dist'),
    // 给编译后引用资源地址前面设置的前缀 => 同时给js、css、img输出前加上目录
    // publicPath: './'
  },

  // webpack-dev-server配置  执行命令：webpack-dev-server xxx.js
  // 特点：服务器启动后，默认时不关闭的，当我们修改SRC中文件中，它会自动进行编译，然后自动刷新浏览器
  devServer: {
    port: 3000,               // 创建服务指定的端口
    progress: true,          // 显示打包编译进度
    compress: true,           // 服务器压缩
    contentBase: './dist',   // 指定当前服务处理资源目录 => 以这个目录起的服务
    open: true,               // 编译完自动打开浏览器
    hot: true
  },

  // 使用插件 => 很多插件 => 数组形式
  plugins: [
    // 传入对象进行配置
    new HtmlWebpackPlugin({
      // 指定模板（真实项目中一般把自己写好的html进行编译），不指定模板会按照默认模板创建一个html页面
      template: './src/index.html',
      title: 'Webpack App',
      filename: 'index.html', // 指定输出文件名
      //  让引入的js后面引入hash戳（清除缓存）  真实项目中都是每一次编译生成不同JS文件引入
      // hash: true
      // 控制html压缩
      minify: {
        collapseWhitespace: true,     // 去除空格
        // removeComments: true,         // Strip HTML comments 删除注释
        removeAttributeQuotes: true,  // 尽可能删除属性周围的引号
        // removeEmptyAttributes: true   // 删除所有含空白值的属性
      }
    }),

    new MiniCssExtractPlugin({
      // css不用匹配入口
      // 指定输出的文件名
      filename: "main.min.[hash:8].css"
    }),
    // 向每个模块中注入全局变量
    new Webpack.ProvidePlugin({
      $: "jquery"
    })
  ],

  // 使用加载器loader处理规则
  module: {
    // 规则有很多 => 数组
    rules: [{
      test: /\.(css|less)$/,   // 基于正则匹配处理哪些文件
      // 控制使用的loader（有顺序：从右到左执行）
      use: [
        // 配置加载器：1.字符串形式 "" 2.对象形式 {}

        // "style-loader",                   // 用内嵌的方式把编译好的css插入到页面的head中
        MiniCssExtractPlugin.loader,         // 使用mini-css-extract-plugin插件中的loader
        "css-loader",                        // 编译像 @import()、background的url() 这些导入外部资源的css语法
        // 设置前缀ident
        {
          loader: "postcss-loader",
          options: {
            ident: "postcss",
            plugins: [
              require('autoprefixer')
            ]
          }
        },
        // 编译less -  less加载器  => "less-loader" 
        {
          // less的配置也可以不用上面的字符串，使用对象 => 添加更多额外的配置
          loader: "less-loader",
          options: {
            // 加载器额外的配置
          }
        }
      ],
    }, {
      test: /\.js$/,
      use: [
        {
          loader: "babel-loader", // 编译js的loader
          options: {
            // 基于BABEL的语法解析包（ES6->ES5）
            presets: [
              "@babel/preset-env"
            ],
            // 使用插件处理>=ES6语法 => 特殊语法
            plugins: [
              ["@babel/plugin-proposal-decorators", { "legacy": true }],
              ["@babel/plugin-proposal-class-properties", { "loose": true }],
              "@babel/plugin-transform-runtime"
            ]
          }
        },
        // 先检测语法是否符合规范再转换
        "eslint-loader"
      ],
      // 指定JS编译的目录
      exclude: /node_modules/,
      // 指定忽略JS编译的目录
      include: path.resolve(__dirname, 'src')
    }, {
      // 处理图片
      test: /\.(png|jpg|jpeg|gif|ico)$/,
      use: [
        {
          loader: "url-loader",
          options: {
            esModule: false,
            // 只要图片小于200kb,在处理的时候直接给BASE64
            limit: 1 * 1024,
            // 控制打包后图片所在的目录
            outputPath: 'images'
          }
        }
      ]
    }, {
      // 处理html导入的img图片
      test: /\.(html|htm|xml)$/,
      use: ["html-withimg-loader"]
    }]
  }

}
