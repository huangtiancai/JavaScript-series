## webpack安装
初始化package.json
$ npm init -y OR  $ yarn init -y

webpack（本地）安装:
1. npm命令安装
webpack以前版本只需要安装webpack,webpack4.0必须多安装一个webpack-cli
```
npm i webpack webpack-cli --save-dev
```
2. yarn命令安装：
```
yarn add webpack webpack-cli -D
```

## webpack可以进行0配置
1. npm5.2后提供了一个命令：npx
$ npx webpack => 基于npx执行了webpack命令实现了打包部署

以下有两个常见错误：
>1. ERROR in Entry module not found: Error: Can't resolve './src' in '...'
原因：上述两种方式都能运行webpack(没有提示不是系统命令),只是没有指定入口模块，故报错
>2. The 'mode' option has not been set => 没有设置mode

解决：
1. 故添加默认的入口文件index.js
2. 设置模式(development/production)


npx webpack 命令后指定mode:developemnt OR production
$ npx webpack --mode development


在package.json中配置脚本(脚本中配置模式)：
```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --mode development"
  },
```
$ npm run build   OR   $ yarn build

目录分析：
> src:存储项目开发的源文件目录（html、js、css、图片等）
> dist:打包后的文件目录
上述npm run build打包编译是默认的：
- 默认入口文件为src下的index.js
- 默认的打包后的文件目录为dist,文件为main.js
index.html中引入打包后生成的js文件浏览器就可以生效了
```javascript
<script src="../dist/main.js"></script>
```

## 手动配置webpack
webpack默认配置文件： webpack.config.js/- webpackfile.js

1. 通过默认配置文件webpack.config.js打包进行自定义规则配置
```javascript
// 使用node.js的path模块
let path = require('path');

// export一个对象
module.exports = {
  // 模式
  mode: 'development',
  // 入口
  entry: './src/index-my.js',
  // 出口
  output: {
    // 输出的文件名
    filename: 'boundle.min.js',
    // 输出的目录（必须是绝对路径）
    path: path.resolve(__dirname, 'build')
}
```
注意上述的打包设置的模式：`mode: 'development'` => 这是第三种设置模式的方式
在webpack.config.js中配置模式时，package.json文件的脚本命令不需要写


总结：
mode: 'development' - 开发环境
mode: 'production'  - 生产
区别：开发环境打包的代码不会被压缩，生产环境下会被压缩，默认：生产环境-压缩

- 指定模式：三种
  + 直接命令:`npx webpack --mode development` OR `npx webpack --mode production`
  + package.json配置：`"build": "webpack --mode development"` OR `"build": "webpack --mode production"`
  + webpack.config.js配置：module.exports = { mode: 'development/production'  } 

- 三种指定优先级：
  直接命令npx > package.json >  配置文件webpack.config.js

- 模式特点：
  + 不指定模式(三种指定方式均不指定均不配置模式） 
    + 有警告：WARNING in configuration；
    + 默认打包成生产环境下的代码，代码会被压缩
  + 指定模式：
    + 不管那种模式编译过打包编译打印的日志都不会有警告
    + 打包后的代码会不会被压缩，视具体设置的模式

2. webpack.config.js | webpackfile.js => webpack在打包时默认会查找这两个文件
  通过打包测试，配置文件命名为webpack.config.js 或 webpackfile.js 均可以打包成功

3. webpack.config.js 配置文件改名后如何配置？；
   webpack.config.js  => webpack.config.development.js
  这里使用`npx webpack`、`npm run build` OR `yarn build`均打包失败，下面有两种方式打包：
#### 长命令：
$ npx webpack --config webpack.config.development.js 或
$ webpack --config webpack.config.development.js

#### 上述命令太长不方便=>在package.json配置可执行的脚本=>将长命令配置进去
package.json
```json
"scripts": {
  "build": "webpack --config webpack.config.development.js" // npx有无均可
}
```
使用命令打包：
$ yarn build  OR  $ npm run build   

创建其它文件名的作用：配置多个文件名是为了适应开发和生产环境的需
如：
$ yarn dev   -  "build": "webpack --config webpack.config.production.js"
$ yarn build -  "build": "webpack --config webpack.config.development.js"


### webpack-dev-server - 以指定目录启动服务
参考：https://webpack.js.org/configuration/dev-server
配置开发服务器，可以在实现在内存中打包,并且自动启动服务
安装webpack-dev-server：
$ yarn add webpack-dev-server -D
OR
$ npm install webpack-dev-server --save-dev

上面的打包命令不管是什么形式-本质都是执行webpack命令=>仅能实现编译，不能做到边编译边创建服务边打开,需要使用webpack-dev-server的相关命令

这样启动编译会报错：
$ webpack-dev-server  => 'webpack-dev-server' 不是内部或外部命令，也不是可运行的程序或批处理文件。
$ npx webpack-dev-server => 未指定入口文件
$ npx webpack-dev-server --config webpack.config.development.js => 配置文件中指定了入口文件
$ npx webpack-dev-server --open firefox --config webpack.config.development.js => 指定打开的额浏览器

配置package.json脚本：
区分开分环境：serve 和生产环境:build
webpack-dev-server在内存中打包 => serve => development    开发
webpack能打包出实体文件        => build => production     上线
```json 
"scripts": {
  //        开发服务器                 设置打开的浏览器  指定的配置文件
  "serve": "webpack-dev-server --open firefox --config webpack.config.development.js", // npx有无均可
  "build": "webpack --config webpack.config.production.js"
}
```
启动服务：
开发：$ yarn serve  OR  $ npm run serve
生产：$ yarn build  OR  $ npm run build
以开发 或 生产 环境 模式编译打包， 均可以打开浏览器显示

注意：
1. webpack 命令直接编译 或者 配置脚本（也是webpack） 执行后均可以编译打包 => 能生成打包后的文件
2. webpack-dev-server创建服务器 - 边编译边创建服务 => 不会打包出实体文件，只是在内存中打包，但是仍然能显示
http://localhost:3000/boundle.min.js => 能访问

以build目录启动了一个服务，如下build下：
index.html
boundle.min.js  - 非实体文件，在内存中
test.json

http://localhost:3000 = http://localhost:3000/index.html  一般默认找的index.html
http://localhost:3000/boundle.min.js 内存中
http://localhost:3000/test.json

以上均可以正常访问

现在的脚手架中都有webpack-dev-server,实现的功能还有很多，如跨域代理



### 基于webpack实现HTML的输出编译 - html-webpack-plugin
参考：
https://webpack.js.org/plugins/html-webpack-plugin
https://github.com/jantimon/html-webpack-plugin

上述实现的只是src下js文件的合并压缩
其它文件html、css、图片等还未实现合并压缩，如index.html - 手动编写 

webpack默认打包JS

1. 删除build文件夹
2. src下新建index.html
  src
    common.js
    common2.js
    index-entry.js
    index.html
  将src下html、js文件全部打包到build下

3. html-webpack-plugin
安装：yarn add html-webpack-plugin -D

packahe.json调整：
```json
"scripts": {
    "serve": "webpack-dev-server --open firefox --config webpack.config.development.js",
    "build": "webpack --config webpack.config.development.js"
  },
```
webpack.config.development.js插件配置：
```javascript
// 使用插件 => 很多插件 => 数组形式
  plugins: [
    // 传入对象进行配置
    new HtmlWebpackPlugin({
      // 指定html模板（一般真实项目把自己写好的html进行编译），不指定模板会按照默认模板创建一个html页面
      template:'./index.html',
      filename: 'index.html', // 指定输出文件名
    })
  ]
```
打包编译：
yarn build  OR  npm run build  => 生成build目录：index.html、boundle.min.js => index.html自动引入boundle.min.js

注意：
```javascript
<script type="text/javascript" src="boundle.min.js"></script>
```
script标签 - 从服务器上请求js文件 - get请求 - 每次请求资源文件相同会产生缓存
如果请求的js已经修改，但是刷新时有时浏览器还是引入的时缓存的js文件，为了保证每次请求访问的都是修改后的js

=>

解决缓存问题:
1. 以前：src="boundlbinayie.min.js?时间戳" 请求地址后+?+时间戳/hash戳
如配置hash戳： hash: true
- src="boundle.min.js?ecc083f9dae327a9bf10"  修改js后hash戳变化，js不修改hash戳不变化
- src="boundle.min.js?c9cedaf9e95dbc542073"

2. 现在：现在让每次编译后的js名字都不一样
js出口处filename配置：boundle.min.[hash].js
```javascript
output: {
    // 输出的文件名  boundle.min.[hash].js => 让每一生成的文件名都带着hash值，而不是在？后添加hash值
    filename: 'boundle.min.[hsah].js',
    // 输出的目录（必须是绝对路径）, __dirname:当前目录
    path: path.resolve(__dirname, 'build')
  }
```
- src="boundle.min.c9cedaf9e95dbc542073.js"   修改js后引入的js文件名变化，否则不变化
- src="bounzdle.min.ecc083f9dae327a9bf10.js"

3. hash
```javascript
filename: 'boundle.min.[hsah].js'     hash 默认值20位
filename: 'boundle.min.[hsah:8].js'   设置hash位数为8 
filename: "main.min.[hash:8].css"
```

注意：
- 一般只对js和css做hash,index.html不做hash
- 上述实现了build文件夹下的html、js文件自动生成，
但是只有js（生产环境）会被压缩，自动生成的html未被压缩 => minify


参考：
minify
https://github.com/jantimon/html-webpack-plugin#minification

另外一个插件：
https://github.com/kangax/html-minifier
https://github.com/DanielRuf/html-minifier-terser

配置mifify
```javascript
minify: {
  collapseWhitespace: true,     // 去除空格
  removeComments: true,         // Strip HTML comments 删除注释
  removeAttributeQuotes: true,  // 尽可能删除属性周围的引号
  removeEmptyAttributes: true   // 删除所有含空白值的属性
}
```



### 基于webpack实现CSS样式的处理 -webpack中的加载器loader
1. css-loader:编译@import()/url()这种语法
$ yarn add css-loader -D  OR  npm run css-loader --save-dev
2. style-loader:css编译后 放到 html
$ yarn add style-loader -D  OR  npm run style-loader --save-dev

加载器loader配置：
```javascript
// 使用加载器loader处理规则
module: {
  // 规则有很多 => 数组
  rules: [{
    test: /\.css$/,   // 基于正则匹配处理哪些文件
    // 控制使用的loader（有顺序：从右到左执行）
    use: [
      "style-loader", // 把编译号的css插入到页面的head中
      "css-loader",   // 编译@import()/url()这种语法的
    ],
  }]
}
```
3. CSS需要在我们的入口JS导入后才可以使用
```javascript
require('./index.css');
```
编译打包:$ yarn serve


5. less 处理
步骤:less 编译成css => 编译css中@import()/url()这些特殊语法 => 插入到head
$ yarn add less less-loader -D

```javascript
module: {
  // 规则有很多 => 数组
  rules: [{
    test: /\.(css|less)$/,   // 基于正则匹配处理哪些文件
    // 控制使用的loader（有顺序：从右到左执行）
    use: [
      "style-loader", // 把编译号的css插入到页面的head中
      "css-loader",   // 编译@import()/url()这种语法的
      // "less-loader",  // less加载器(编译less)
      {
        // less的配置也可以不用上面的字符串，使用对象 => 添加更多额外的配置
        loader: "less-loader",
        options: {
          // 加载器额外的配置
        }
      }
    ],
  }]
}
```
6. 入口JS导入调整
require('./index.less');

编译打包:$ yarn serve  => 编译成功

7. postcss-loader（处理前缀，浏览器兼容问题） 
由于postcss-loader需要autoprefixer插件，因此我们还需要安装autoprefixer插件
安装:$ yarn add autoprefixer postcss-loader -D

postcss-loader 配合 autoprefixer 使用两种方法：
- postcss-loader 使用字符串配置，创建postcss.config.js引入autoprefixer插件并导出
- postcss-loader 使用对象形式配置，无需创建postcss.config.js，autoprefixer直接在option中配置

#### 第一种方式：
webpack.config.development.js
`"postcss-loader",   // 设置前缀`

创建 postcss.config.js
```javascript
postcss.config.js
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}
```

$ yarn serve 
按照以上配置，编译打包后查看css文件还是未自动添加浏览器前缀

解决：
1. postcss.config.js 如果没有配置在哪些浏览器上自动添加前缀，会无法添加成功
```javascript
module.exports = {
  plugins: [
    require("autoprefixer")({
      // 必须设置支持的浏览器才会自动添加添加浏览器兼容
      "browsers": [
        "defaults",
        "not ie < 11",
        "last 2 versions",
        "> 1%",
        "iOS 7",
        "last 3 iOS versions"
      ]
    })
  ]
}
```

2. 上述可以完成添加浏览器前缀，但是会报个警告
```bash
Replace Autoprefixer browsers option to Browserslist config.
Use browserslist key in package.json or .browserslistrc file.

Using browsers option can cause errors. Browserslist config
can be used for Babel, Autoprefixer, postcss-normalize and other tools.

If you really need to use option, rename it to overrideBrowserslist.

Learn more at:
https://github.com/browserslist/browserslist#readme
https://twitter.com/browserslist
```

错误原因：Autoprefixer版本的问题，太高？browsers配置取消了？
按照错误提示：1）overrideBrowserslist 2）在 package.json 添加 Browserslist config

3. postcss.config.js 修改,去掉browsers设置，然后在package.json中添加配置项
postcss.config.js
```javascript
module.exports = {
  plugins: [
    require("autoprefixer")
  ]
}
```
package.json
```json
{
  "browserslist": [
    "defaults",
    "not ie < 11",
    "last 2 versions",
    "> 1%",
    "iOS 7",
    "last 3 iOS versions"
  ]
}
```

#### 第二种方式：
直接在postcss-loader加载器的options中引入插件
```javascript
module: {
  rules: [{
    test: /\.(css|less)$/,
    use: [
      "style-loader",
      "css-loader",
      {
        loader: "postcss-loader",
        options: {
          ident: "postcss",
          plugins: [
            require('autoprefixer')  // 引入autoprefixer插件
          ]
        }
      },
      {
        loader: "less-loader",
        options: {
          // ...
        }
      }
    ],
  }]
}
```
$ yarn serve   编译后正常


### 基于webpack实现CSS的抽离和压缩
上述是使用 style-loader 加载器把编译好的css以内嵌的方式插入到页面的head中 =>实际上应该将css单独分离打包

1. mini-css-extract-plugin 抽离css内容
不使用style-loader了，使用mini-css-extract-plugin插件中的loader将编译好的css以外链(link)的方式导入 html

```javascript
plugins: [
...
  new MiniCssExtractPlugin({
    // css不用匹配入口
    // 指定输出的文件名
    filename: "main.min.[hash].css"
  })
],
```
$ yarn serve  编译打包后，css文件可以以外链的方式引入html了，但是css未实现压缩

2. optimize-css-assets-webpack-plugin
```javascript
// 设置webpack优化规则
optimization: {
  // 压缩优化 => 优化有很多项 => 数组形式
  minimizer: [
    // 压缩css
    new OptimizeCssAssetsPlugin()
  ]
}
```

$ yarn serve  编译打包后，css已经实现压缩了
产生的问题:js压缩不再执行自己默认的压缩的方式了,走的也是压缩css这个插件，自然导致无法压缩

3. uglifyjs-webpack-plugin 混淆js
```javascript
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
}
```

$ yarn serve   编译打包：报错
未设置压缩js的规则时，走的是webpack默认的优化规则，能压缩和编译；
设置压缩js的规则后，仅仅能压缩，不能实现对js中的某些语法编译


### 在webpack中基于babel和对应的插件实现JS的编译
1. 安装：
           babel加载器    核心        语法转换模块
$ yarn add babel-loader @babel/core @babel/preset-env -D

```javascript
{
  test: /\.js$/,
  use: [
    {
      loader: "babel-loader", // 编译js的loader
      options: {
        // 基于BABEL的语法解析包（ES6->ES5）
        presets: [
          "@babel/preset-env"
        ]
      }
    }
  ]
}
```

$ yarn serve    编译成功

2. 处理特殊js语法
$ yarn add @babel/plugin-proposal-class-properties -D  处理类属性
$ yarn add @babel/plugin-proposal-decorators -D        处理装饰器

$ yarn serve 报错？
原因：每次编译都会编译node_modules下的js,安装的插件不能解析，故科设置忽略编译的js

```javascript
// 指定JS编译的目录
exclude: /node_modules/,
// 指定忽略JS编译的目录
include: path.resolve(__dirname, 'src')
```

3. 使用 @babel/plugin-transform-runtime  => 必须安装 @babel/runtime、@babel/polyfill 且需要安装生产环境
$ yarn add @babel/plugin-transform-runtime -D   => 开发环境   => includes
$ yarn add @babel/runtime @babel/polyfill       => 生产环境   => ES7中新的语法：aynsc、await...

 polyfill 处理async、await语法

 @babel/polyfill 使用：
 1) 生产环境下安装好后，在js中 require 导入：require('@babel/polyfill');
 2) 配置在webpack入口 => entry: ['@babel/polyfill', './src/index.js'] 

 4. 使用jquery
 安装： $ yarn add jquery
 导入：import jquery from 'jquery';

暴露全局loader
$ yarn add expose-loader -D
```javascript
// 向每个模块中注入全局变量
new Webpack.ProvidePlugin({
  $: "jquery"
})
```

### ESlint语法检测
安装：
           语法检测
$ yarn add eslint eslint-loader -D


在vscode中开启ES7中类的装饰器，项目根目录设置jsconfig.json，这样装饰器语法就不会报错了
```json
{
  "compilerOptions": {
    "experimentalDecorators": true
  }
}
```


### 基于webpack图片处理
在html中导入
在js中创建图片
在css中设置背景图
...

1. css - background:url引入背景图   仅需要file-loader
安装：
$ yarn add file-loader html-withimg-loader -D
```javascript
 {
  // 处理图片
  test: /\.(png|jpg|jpeg|gif)$/,
  use: [
    {
      loader: "file-loader",
      options: {
        esModule: false
      }
    }
  ]
}
```

2. html - img标签引入图片   需要file-loader 和 html-withimg-loader 两个loader处理
```javascript
{ 
  // 处理图片
  test: /\.(png|jpg|jpeg|gif)$/,
  use: [
    {
      loader: "file-loader",
      options: {
        esModule: false
      }
    }
  ]
},{
  // 处理html导入的img图片
  test: /\.(html|htm|xml)$/,
  use: ["html-withimg-loader"]
}
```

webpack打包html引入图片问题: 
参考：
https://www.cnblogs.com/webSong/p/12118595.html
https://segmentfault.com/q/1010000021251426?utm_source=tag-newest


"file-loader": "^5.1.0" 

file-loader升级了，以前4.2的时候是没事的，现在file-loader升级到5.0了，所以需要在file-loader的options里使用一个配置：esModule:false

3. js引入图片 - 仅需要file-loader
```javascript
{ 
  // 处理图片
  test: /\.(png|jpg|jpeg|gif)$/,
  use: [
    {
      loader: "file-loader",
      options: {
        esModule: false
      }
    }
  ]
}
```

index.js
```javascript
// js 插入图片 webpack:需要把图片导入进来再使用
// 相对地址需要require处理，绝对地址不需要,如：https://cn.vuejs.org/images/logo.png
let imgSrc = require('./assets/htpp.png');

let img = new Image();
img.src = imgSrc;
// 通过js将图片追加到id为app的div内
document.getElementById('app').appendChild(img);
```

4. url-loader  实际开发一般不使用file-loader
安装：$ yarn add url-loader -D
```javascript
{
  loader: "url-loader",
  options: {
    esModule: false,
    // 只要图片小于200kb,在处理的时候直接给BASE64
    limit: 1 * 1024,
  }
}
```

base64的使用？图片处理？


### 最后实现分目录打包
一般对js和css不做处理，一般只有一个js一个css,只给图片做处理
1. 加前缀
```javascript
// 给编译后引用资源地址前面设置的前缀 => 同时给js、css、img输出前加上目录
publicPath: './'
```
2. 定义目录
```javascript
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
```

问题：
定义 publicPath: './' 后，开发环境：yarn serve 打开的页面报错？故先注释掉  // publicPath: './'

### 多目录打包（多入口、多出口）
1. js文件间无依赖关系
index.js引入了有依赖关系的js,然后一起打包，如果有一js文件:a.js和index.js没有依赖关系，怎么处理？
```javascript
// 入口 entry 可以写一个数组
entry: ['@babel/polyfill', './src/index.js', './src/a.js'],
```

2. 打包多页：多入口、多出口
单页  index.html 引用多个js
多页  index.html index.js /  a.html a.js
```javascript
entry: {
  index: './src/index.js',
  a: './src/a.js'
},
output: {
  filename: '[name].min.[hash:8].js',
  path: path.resolve(__dirname, 'dist'),
}

plugins: [
  new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    chunks: ['index'],
  }),
  new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'a.html',
    chunks: ['a']
  })
]
```

### 补充
1. 热更新，不刷新浏览器
不需要HotModuleReplacementPlugin加载器？？
仅需要在js中配置：
```javascript
if (module.hot) {
  module.hot.accept();
}
```
2. 抽离
- style-loader 加载器把编译好的css以内嵌的方式插入到页面的head中 =>实际上应该将css单独分离打包
- mini-css-extract-plugin 抽离css内容，不使用style-loader了，使用mini-css-extract-plugin插件中的loader将编译好的css以外链(link)的方式导入 html => 抽离后的是一个css文件
- css/less  分别抽离


总结：
基本webpack配置:

- 1.mode
- 2.entry
- 3.output
- 4.devServer
- plugins 插件
  + 5.html-webpack-plugin 打包html

- module 加载器loader处理规则
  + css
    + 6.less-loader                   编译css中@import()/url()这些特殊语法
    + 7.postcss-loader(autoprefixer)  处理前缀，浏览器兼容问题
    + 8.css-loader                    编译像 @import()、background的url() 这些导入外部资源的css语法
    + 9.style-loader                  用内嵌的方式把编译好的css插入到页面的head中
    + 10.mini-css-extract-plugin      css抽离
  + js
    + 13.babel-loader                 ES6语法编译
      + presets: 
        + 14.@babel/preset-env
      + plugins:                      特殊语法
        + 15.@babel/plugin-proposal-decorators
        + 16.@babel/plugin-proposal-class-propertie
        + 17.@babel/plugin-transform-runtime
        + 18.@babel/runtime、@babel/polyfill       polyfill 处理async、await语法
        + 19.expose-loader            暴露全局loader => 向每个模块中注入全局变量...
      + 20.eslint-loader                语法检测
  + 处理图片
    + 21.file-loader
    + 22.url-loader
  + 处理html导入的img图片
    + 23.html-withimg-loader


- optimization 优化规则
  + 11.optimize-css-assets-webpack-plugin  压缩css
  + 12.uglifyjs-webpack-plugin             压缩js
