### 前端自动化部署工具
- grunt
- glup
- fis - 百度
以上基本不用
- webpack:1.0-4.0

### webpack作用
base64
sass、less => css
ES6 => 兼容
...

webpack 基于node.js <= node.js中的fs模块（IO操作）

### webpack版本
webpack版本的使用：
以webpack4.0为准，主要是因为快速构建工程化项目的脚手架：[Vue的脚手架-Vue-CLI和React的脚手架-create-react-app]基于webpack4.0

### webpack的使用
初始化package.json
```
npm init -y
```

- 全局安装(不i推荐)
```
npm i webpack webpack -g
```

- 本地安装（为了防止全局安装出现的版本冲突，一般把webpack安装在本地项目中）
npm安装：
```
npm i webpack webpack-cli --save-dev

```
webpack以前版本只需要安装webpack,webpack4.0必须多安装一个webpack-cli

yarn安装：
```
yarn add webpack webpack-cli -D
```

### 运行webpack
1.npm5.2后提供了一个命令：npx,基于这个命令可以执行本地安装的模块
```
npx webpack
```
基于npx执行了webpack命令，而这个命令就是实现打包部署的
- 找到node-modules/.bin
- 会执行node_modules对应的bin下的webpack.cmd (实际执行的是..\webpack\bin\webpack.js)

执行效果：
```
$npx webpack
Hash: a9ac1a88937e54b33dc5
Version: webpack 4.41.5
Time: 461ms
Built at: 2020-01-05 23:22:13
  Asset       Size  Chunks             Chunk Names
main.js  990 bytes       0  [emitted]  main
Entrypoint main = main.js
[0] ./src/index.js 44 bytes {0} [built]
[1] ./src/a.js 25 bytes {0} [built]

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/
```
可以发现已经产生了dist目录，此目录为最终打包出的结果。main.js可以在html中直接引用,这里还提示我们默认mode 为production


2.在package.json配置可执行的脚本（真实项目中使用）
```
"scripts": {
    "build": "webpack"
  }
```
```
npm run build
```
执行效果：
```
$npm run build

> webpack1@1.0.0 build C:\GitHub\LocalGithub\JavaScript-series\前端-构建工具\webpack\webpack1
> webpack

Hash: a9ac1a88937e54b33dc5
Version: webpack 4.41.5
Time: 105ms
Built at: 2020-01-05 23:43:58
  Asset       Size  Chunks             Chunk Names
main.js  990 bytes       0  [emitted]  main
Entrypoint main = main.js
[0] ./src/index.js 44 bytes {0} [built]
[1] ./src/a.js 25 bytes {0} [built]

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/
```

### 基础打包语法
1.不打包的情况下，必须在index.html中引入所有所有js文件
```javascript
<script src="common.js"></script>
<script src="common2.js"></script>
<script src="index.js"></script>
```
在common.js和common2.js中分别定义函数，index.js中调用定义的函数，index.html中引入js文件的顺序要注意：common.js和common2.js必须在index.js之前引入，否则会报错

2.将common.js和common2.js的函数分别用CommonJS/ES6Module模块导出,在index.js中（调用）使用CommonJS/ES6Module模块导入，在index.html中引入index.js后，浏览器也会报错：
浏览器不支持commonjs规范（nodes是基于commonjs规范）

3.打包编译

> src:存储项目开发的原文件目录（html、js、css、图片等）
> dist:打包后的文件目录
上述npm run build打包编译是默认的：
- 默认入口文件为src下的index.js
- 默认的打包后的文件目录为dist,文件为main.js
index.html中引入打包后生成的js文件浏览器就可以生效了
```
<script src="../dist/main.js"></script>
```

### webpack自定义规则配置
webpack4.0可以采用0配置打包，但是打包时一般不会采用0配置，webpack在打包时默认会查找当前目录下的 webpack.config.js or webpackfile.js 文件

1.通过配置文件webpack.config.js打包进行自定义规则配置：
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
注意上述的打包如果不设置打包的模式会有警告：WARNING in configuration
- 不指定模式，默认打包成生产环境下的代码，代码会被压缩
- 指定模式，如开发模式,打包后的代码不会被压缩，且编译过打包编译打印的日志不会有警告
mode: 'development' - 开发环境
mode: 'production'  - 生产
2.webpack.config.js/webpackfile.js => webpack在打包时默认会查找这两个文件
通过打包测试，配置文件命名为webpack.config.js 或 webpackfile.js 均可以打包成功

2.webpack.config.js => webpack.config.development.js
配置文件改名后:
- 配置文件名：webpack.config.development.js
- package.json的"build": "webpack"

使用`npm run build`或`npx webpack`均打包失败，下面有两种方式打包：
1. 长命令：
```
npx webpack --config webpack.config.development.js 
或
webpack --config webpack.config.development.js
```
2. 上述命令太长不方便=>在package.json配置可执行的脚本=>将长命令配置进去
package.json
```json
"scripts": {
  "build": "webpack --config webpack.config.development.js" // npx有无均可
}
```
使用命令打包：
```
npm run build
```

### webpack-dev-server
参考：https://webpack.js.org/configuration/dev-server
配置开发服务器，可以在实现在内存中打包,并且自动启动服务
安装webpack-dev-server
```
npm install webpack-dev-server --save-dev
```
上面的打包命令不管是什么形式-本质都是执行webpack命令=>仅能实现编译，不能做到边编译边创建服务边打开,需要使用webpack-dev-server的相关命令

这样启动编译会报错：
```
npx webpack-dev-server
```
这样启动正常
```
npx webpack-dev-server --config webpack.config.development.js
```
配置package.json脚本：
```
"scripts": {
  "serve": "webpack-dev-server --config webpack.config.development.js",
  "build": "webpack --config webpack.config.development.js"
}
```
直接使用命令：
```
npm run serve
```
注意：上述命令创建服务器后是在内存中打包,未生成build文件夹
http://localhost:8080/
http://localhost:8080/boundle.js => 能访问

以build目录启动了一个服务
在build下创建一个index.json文件 http://localhost:8080/index.json 正常访问





### 基于webpack实现HTML的输出编译

### 基于webpack实现CSS的抽离和压缩

### 在webpack中基于babel和对应的插件实现JS的编译

### 基于webpack图片处理


### 在webpack中所有文件都是模块
- js模块 模块化（AMD CMD es6Module commonjs）


