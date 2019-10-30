### ES6模块化的基本语法
特点：
模块中可以导入和导出各种类型的变量，如函数，对象，字符串，数字，布尔值，类等
每个模块都有自己的上下文，每一个模块内声明的变量都是局部变量，不会污染全局作用域
每一个模块只加载一次（是单例的）， 若再去加载同目录下同文件，直接从内存中读取

ES6 的模块化分为:
导出模块：export
引入模块：import

### ES6模块化的使用举例（自定义模块）
1. 初始化项目
（1）在工程文件中新建如下目录：
```
js
    | src
    	| module1.js
    	| module2.js
    	| module3.js
    	| main.js


index.html
```
（2）在工程的根目录下，新建文件package.json，内容如下：
```
{
    "name": "es6-babel-browserify",
    "version": "1.0.0"
}
```

2. 环境配置：安装babel 和 browserify等
（1）安装babel 和 browserify：
```
npm install babel-cli -g
npm install babel-preset-es2015 --save-dev
npm install browserify -g
```
（2）新建.babelrc：
```
{
    "presets":[
        "es2015"
    ],
    "plugins":[]
}
```


3. 编写代码

4. 编译转换
如果我们不进行转换，而是直接在 index.html 中加载 js/src/main.js，是会报错的
（1）利用 babel 将 ES6 转换为 ES5：
```
babel src -d build      //build目录会自动生成
```



