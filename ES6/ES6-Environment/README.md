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

7. 实现自动编译
本地安装 nodemon 模块，开发模式
```bash
npm install nodemon --save -D
```
简化
```json
"scripts": {
   "build": "babel src/index.js -o dist/index.js",
   "start": "nodemon -w src --exec npm run build"
}
```
以后使用`npm run start`自动编译

### 新的声明方式
ES6对声明的进行了扩展，现在可以有三种声明方式了
1. var：它是variable的简写，可以理解成变量的意思。
2. let：它在英文中是“让”的意思，也可以理解为一种声明的意思。
3. const：它在英文中也是常量的意思，在ES6也是用来声明常量的，常量你可以简单理解为不变的量

### 变量的解构赋值


### 

整理常见方法(ES6 => ES5)
```js
import express from 'express';
const app = express();
// express 实例方法
app.use();
app.get();
app.post();
app.delete();
app.param();
app.listen();

req.app.get('env');
res.send("数据添加成功");
res.json(newPost); // newPost - 对象
res.status(err.status).json(err);
res.json(new PublicInfo("post deleted", 200));
res.json(new PublicInfo("post added", 200, { post: newPost }));
res.json(new APIError("Validation Error", "Post not found", 404));
res.json(new PostDetail(selectPost, selectedTodos, imgURLs));
res.status(404).json({ status: "failed", message: "post not found" });


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array


// 数组属性
Array.length
//用于确定传递的值是否是一个 Array。
Array.isArray(obj)
// concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组
var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])

// indexOf()方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1
arr.indexOf(searchElement[, fromIndex])
// lastIndexOf() 方法返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 fromIndex 处开始。
arr.lastIndexOf(searchElement[, fromIndex])
// join() 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符
arr.join([separator])
// includes() 方法用来判断一个数组是否包含一个指定的值，如果是返回 true，否则false
array.includes();
// find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined
array.find(function(currentValue, index, arr),thisValue)
// findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。
array.findIndex(function(currentValue, index, arr), thisValue)
// filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素
array.filter(function(currentValue,index,arr), thisValue)
// every() 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。
array.every(function(currentValue,index,arr), thisValue)
// map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值
array.map(function(currentValue,index,arr), thisValue)
// reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值
arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
// forEach() 方法对数组的每个元素执行一次给定的函数
arr.forEach(callback(currentValue,index,array),thisArg])


// push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。
array.push(item1, item2, ..., itemX)
// howmany:删除的数量；itemX:要添加到数组的新元素,返回删除的数组
array.splice(index,howmany,item1,.....,itemX)
// reverse() 方法将数组中元素的位置颠倒，并返回该数组。数组的第一个元素会变成最后一个，数组的最后一个元素变成第一个。该方法会改变原数组
arr.reverse()
// shift(u) 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度
arr.shift()
// pop()方法从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度
arr.pop()
// unshift() 方法将一个或多个元素添加到数组的开头，并返回该数组的新长度(该方法修改原有数组)
unshfit()
// slice() 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。原始数组不会被改变
slice()



sort()
splice()
toString()
toLocaleString()



```