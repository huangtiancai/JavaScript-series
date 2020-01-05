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
> src:存储项目开发的原文件
> dist:打包后的文件目录

### 在webpack中所有文件都是模块
- js模块 模块化（AMD CMD es6Module commonjs）


