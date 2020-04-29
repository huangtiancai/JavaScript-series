1. ES6开发环境搭建
先建立一个项目的工程目录，并在目录下边建立两个文件夹：src和dist
- src：书写ES6代码的文件夹，写的js程序都放在这里。
- dist：利用Babel编译成的ES5代码的文件夹，在HTML页面需要引入的时这里的js文件。
- 新建一个index.html文件,引入dist目录下index.js文件
- 初始化我们的项目
  npm init -y
- 全局安装Babel-cli
  npm install -g babel-cli
- 安装转换包
  本地安装babel-preset-es2015 和 babel-cli
  npm install --save-dev babel-preset-es2015 babel-cli
- 在根目录下新建.babelrc文件
```javascript
{
    "presets":[
        "es2015"
    ],
    "plugins":[]
}
```
- 转换
```js
babel src/index.js -o dist/index.js
```
- 简化转化命令