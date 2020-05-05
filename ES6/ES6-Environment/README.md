---

---


### ES6开发环境搭建
Webpack - 自动编译转换，Babel也能完成ES6 -> ES5 的转换
Webpack参考：前端-构建工具部分，这里讲解Babel的转换

先建立一个项目的工程目录 ES6-Environment ，并在目录下边建立两个文件夹：src和dist

- src：书写ES6代码的文件夹，写的js程序都放在这里。
- dist：利用Babel编译成的ES5代码的文件夹，在HTML页面需要引入的时这里的js文件
- 新建一个index.html文件,引入dist目录下index.js文件

1. 初始化我们的项目
   npm init -y
   生成 => `package.json`
2. 全局安装Babel-cli
   npm install -g babel-cli
3. 本地安装（安装转换包）
   npm install --save-dev babel-preset-es2015 babel-cli
4. 在根目录下新建.babelrc文件
```javascript
{
    "presets":[
        "es2015"
    ],
    "plugins":[]
}
```
5. 转换
现在，我们应该可以将 ES6 的文件转化为 ES5 的文件了，命令如下：
`babel src/index.js -o dist/index.js`
此命令略显复杂

6. 简化转化命令
在文件 package.json 中修改键 scripts中的内容：
```json
"scripts": {
    "build": "babel src/index.js -o dist/index.js"
 }
```

目前为止，环境配置好了
以后，我们执行如下命令，即可将src/index.js这个 ES6 文件转化为 dist/index.js这个 ES5 文件：
`npm run build`

### 新的声明方式
ES6对声明的进行了扩展，现在可以有三种声明方式了
1. var：它是variable的简写，可以理解成变量的意思。
2. let：它在英文中是“让”的意思，也可以理解为一种声明的意思。
3. const：它在英文中也是常量的意思，在ES6也是用来声明常量的，常量你可以简单理解为不变的量

### 变量的解构赋值

常见方法：
```js
const givenFields = Object.getOwnPropertyNames(req.body);
if (!requireFields.every(filed => givenFields.includes(filed))) {
   // 使用 APIError 接口 返回错误信息
   return next(new APIError("Data missing", "not all required", 400));
}
```

```js
DataStore.posts.push(newPost);
const postIndex = DataStore.posts.findIndex((item: any) => item.id == req.params.id);
DataStore.posts.splice(postIndex, 1);n
```