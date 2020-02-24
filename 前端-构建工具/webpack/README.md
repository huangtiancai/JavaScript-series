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
以webpack4.0为准，主要是因为快速构建工程化项目的脚手架：
[Vue的脚手架-Vue-CLI和React的脚手架-create-react-app]基于webpack4.0

参考：https://www.webpackjs.com

### webpack的使用
初始化package.json
```
npm init -y
```
- 全局安装(不i推荐)
```
npm i webpack webpack-cli -g
```
本地安装（为了防止全局安装出现的版本冲突，一般把webpack安装在本地项目中）

webpack安装:
1. npm命令安装
```webpack以前版本只需要安装webpack,webpack4.0必须多安装一个webpack-cli
npm i webpack webpack-cli --save-dev
```
2. yarn命令安装：
```
yarn add webpack webpack-cli -D
```

### 运行webpack
webpack如果全局安装 => 直接执行打包命令webpack => 全局安装不推荐 => 本地安装
全局安装:webpack
本地安装:npx webpack

前提：未添加入口文件：index.js
1. npm5.2后提供了一个命令：npx,基于这个命令可以执行本地安装的模块,同时解决全局安装冲突的问题
`$ npx webpack`  基于npx执行了webpack命令，而这个命令就是实现打包部署的

npx webpack执行的过程：
1）找到node-modules/.bin
2）会执行node_modules对应的bin下的webpack.cmd (根据webpack.cmd寻找..\webpack\bin\webpack.js)
3) npx webpack = node "%dp0%\..\webpack\bin\webpack.js" => node webpack.js

2. 在package.json配置可执行的脚本（真实项目中使用）
```
"scripts": {
    "build": "webpack"
  }
```
`$ npm run build OR $ yarn build`

$ npx webpack OR $ npm run build OR $ yarn build 执行后有两个错误：
>1. ERROR in Entry module not found: Error: Can't resolve './src' in '...'
原因：上述两种方式都能运行webpack(没有提示不是系统命令),只是没有指定入口模块，故报错
>2. The 'mode' option has not been set => 没有设置mode

解决：故添加默认的入口文件index.js,并设置模式(development/production)

#### npx webpack
npx webpack 命令后指定mode

`$ npx webpack --mode development`

```bash
$ npx webpack --mode development
Hash: 4cd5e7a11cb7c3bf2508
Version: webpack 4.41.6
Time: 287ms
Built at: 2020-02-24 17:41:59
  Asset     Size  Chunks             Chunk Names
main.js  5.2 KiB    main  [emitted]  main
Entrypoint main = main.js
[./src/common.js] 77 bytes {main} [built]
[./src/common2.js] 107 bytes {main} [built]
[./src/index.js] 286 bytes {main} [built]
```
可以发现已经产生了dist目录，此目录为最终打包出的结果，main.js可以在html中直接引用

#### npm run build：
在package.json中配置脚本(脚本中配置模式)：
```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --mode development"
  },
```

$ npm run build

```bash
$ npm run build

> webpack1@1.0.0 build C:\GitHub\LocalGithub\JavaScript-series\前端-构建工具\webpack\webpack1
> webpack --mode development

Hash: 4cd5e7a11cb7c3bf2508
Version: webpack 4.41.6
Time: 97ms
Built at: 2020-02-24 17:49:15
  Asset     Size  Chunks             Chunk Names
main.js  5.2 KiB    main  [emitted]  main
Entrypoint main = main.js
[./src/common.js] 77 bytes {main} [built]
[./src/common2.js] 107 bytes {main} [built]
[./src/index.js] 286 bytes {main} [built]
```

#### yarn build
在package.json中配置脚本(脚本中配置模式)：
```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --mode development"
  },
```
$ yarn build

```bash
$ yarn build
yarn run v1.21.1
$ webpack --mode development
Hash: 4cd5e7a11cb7c3bf2508
Version: webpack 4.41.6
Time: 98ms
Built at: 2020-02-24 17:50:23
  Asset     Size  Chunks             Chunk Names
main.js  5.2 KiB    main  [emitted]  main
Entrypoint main = main.js
[./src/common.js] 77 bytes {main} [built]
[./src/common2.js] 107 bytes {main} [built]
[./src/index.js] 286 bytes {main} [built]
Done in 1.39s.
```
总结：开发中一般使用脚本命令方式：npm run build OR yarn build 且yarn命令下载安装包速度更快，推荐使用yarn命令

详细分析打包目录
### 基础打包语法
1. 传统不打包的情况下，必须在index.html中引入所有所有js文件
```javascript
<script src="common.js"></script>
<script src="common2.js"></script>
<script src="index.js"></script>
```
在common.js和common2.js中分别定义函数，index.js中调用定义的函数
然后在index.html中引入js文件的顺序要注意：common.js和common2.js必须在index.js之前引入，否则会报错

2. 打包
将common.js和common2.js的函数分别用CommonJS/ES6Module模块导出,
在index.js中（调用）使用CommonJS/ES6Module模块导入，
在index.html中引入index.js后，浏览器也会报错：
浏览器不支持CommonJS规范和ES6Module规范：
    （1）CommonJS规范属于nodes模块的规范，node中可以执行
    （2）ES6Module
  故用webpack按照js的依赖关系进行打包成一个js文件，再引入就可以了

3. 打包编译
> src:存储项目开发的源文件目录（html、js、css、图片等）
> dist:打包后的文件目录
上述npm run build打包编译是默认的：
- 默认入口文件为src下的index.js
- 默认的打包后的文件目录为dist,文件为main.js
index.html中引入打包后生成的js文件浏览器就可以生效了
```javascript
<script src="../dist/main.js"></script>
```


### webpack自定义规则配置
从webpack4.0可以采用0配置打包，但是实际打包时一般不会采用0配置

webpack在打包时默认会查找当前目录下的
- webpack.config.js
- webpackfile.js
如果没有上述两配置文件，或者有这两个文件，但是未设置自定义的打包规则 => 采用默认打包

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
$ npx webpack --config webpack.config.development.js 
或
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


