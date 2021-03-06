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
ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋 => 解构

1. 数组的解构赋值
简单的数组解构
```js
let [a1, b1, c1] = [1, 2, 3];
```
左右形式须相同
```js
let [a, b, [c, d], e] = [1, 2, [3, 4], 5];
```

解构的默认值
```js
let [foo = true] = [];
console.log(foo); // true

let [fo1, fo2 = "serve"] = ['json'];
console.log(fo1 + fo2); // jsonserve

let [fo3 = "json", fo4] = ['serve'];
console.log(fo3 + fo4); // serveundefined
```

注意undefined 和 null 的区别
```js
// undefined相当于什么都没有，b是默认值
let [a, b = "serve"] = ["json", undefined];
console.log(a + b); // jsonserve
// null 相当于有值，但值为null,所以b并没有取默认值，而是解构成了null
let [a, b = "serve"] = ["json", null];
console.log(a + b); // jsonnull
```

2. 对象的解构赋值
解构不仅可以用于数组，还可以用于对象
```js
let { foo, bar } = { foo: "jsone", bar: "serve" };
console.log(foo + bar); // jsoneserve
```
>注意：
对象的解构与数组有一个重要的不同。
数组的元素是按次序排列的，变量的取值由它的位置决定；
对象的属性没有次序，变量必须与属性同名，才能取到正确的值

圆括号的使用
在解构前定义变量，会直接报错
```js
let foo;
{ foo } ={ foo: 'json' };
```
解决报错,在解构的语句外边加上()
```js
let foo;
({ foo } = { foo: 'json' });
console.log(foo); // josn
```

3. 字符串解构
```js
const [a, b, c, d] = "json";
console.log(a); // j 
console.log(b); // s
console.log(c); // o
console.log(d); // n
```


### 扩展运算符和res运算符（三个点）
对象扩展运算符(...)
```js
function fun1(...arg) {
  console.log(arg[0]);
  console.log(arg[1]);
  console.log(arg[2]);
  console.log(arg[3]);
}

fun1(1, 2, 3); // 1,2,3,undefined
```
扩展运算符的用处
问题：改变arr2值，arr1值也变化（对内存的堆栈的引用，不是真正的赋值）？
```js
let arr1 = ['www', 'josnserve', 'cn'];
let arr2 = arr1;

console.log(arr2); // [ "www", "josnserve", "cn" ]
arr2.push("vuepress");
console.log(arr1); // ["www", "josnserve", "cn", "vuepress"]
```
简单的扩展运算符可以解决这个问题
```js
let arr1 = ['www', 'josnserve', 'cn'];
let arr2 = [...arr1];

console.log(arr2); // [ "www", "josnserve", "cn" ]
arr2.push("vuepress");
console.log(arr2); // [ "www", "josnserve", "cn", "vuepress" ]
console.log(arr1); // [ "www", "josnserve", "cn" ]
```

res运算符

```js
// ...c必须放在最后，后面有别的参数
function show(a, b, ...c) {
  console.log(a, b, c);
}
show(12, 6, 8, 10, 20); // 12 6  [8, 10, 20]  => c是一个数组 c接受剩余参数
show(12, 6, 8, 10);    // 12 6  [8, 10]  
show(12, 6);         // 12 6  []  => c是一个空数组
show(12);           // 12 undefined []
```

```js
function show(first, ...arg) {
  console.log(arg.length); // arg有4个数组元素
}
show(12, 6, 8, 10, 20); // 4
```
for...of循环打印arg的值
```js
function show(first, ...arg) {
  for (let val of arg) {
    console.log(val);
  }
}
show(0, 1, 2, 3, 4, 5, 6, 7);
```

### 字符串模版
ES6对字符串新增的操作 => 字符串模版
1. 不用拼接字符串和变量
2. 支持模版里有简单计算操作

#### 字符串模版
```js
// ES5
let str = 'ES6';
let jsStr = '这里使用Babel把' + str + '编译成ES5';
console.log(jsStr);

// ES6
let str = 'ES6';
let jsStr = `这里使用Babel把${str}编译成ES5`;
console.log(jsStr);

// 支持html标签
let str = 'ES6';
let jsStr = `<b>这里使用Babel把${str}编译成ES5</b>`;
document.write(jsStr); // 把标签输出到屏幕上

// 运算支持
let a = 1;
let b = 2;
let result = `${a + b}`;
console.log(result);
```

#### 字符串查找
```js
// ES5
let str = 'ES6';
let jsStr = '这里使用Babel把ES6编译成ES5';
document.write(jsStr.indexOf(str)); // 10

// ES6
let str = 'ES6';
let jsStr = '这里使用Babel把ES6编译成ES5';
console.log(jsStr.includes(str)); // true

// 判断开头是否存在
console.log(jsStr.startsWith(str)); // false
// 判断结尾是否存在
console.log(jsStr.endsWith(str));   // false
// 复制字符串
console.log(str.repeat(2));   // ES6ES6
```


### ES6数字操作

### ES6中新增的数组知识
JSON数组格式转换
JOSN的数组格式：JOSN => 数组
```js
// 标准的JSON数组格式
let json = {
  '0': 'ES6',
  '1':'技术',
  '2': '前端',
  length: 3 // 普通的JSON对比是在最后多了一个length属性
}

// 在ES6中绝大部分的Array操作都存在于Array对象里
let arr = Array.from(json);
console.log(arr);  // Array(3)["ES6", "技术", "前端"]

// Array.of()方法
let arr = Array.of(3,4,5,6);
console.log(arr);  // Array(4) [ 3, 4, 5, 6 ]

let arr = Array.of('ES6','技术','前端');
console.log(arr);  // Array(3) [ "ES6", "技术", "前端" ]


// find() 实例方法 
// 在find方法中我们需要传入一个匿名函数，函数需要传入三个参数：
// value：表示当前查找的值。
// index：表示当前查找的数组索引。
// arr：表示当前数组。
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.find(function (value, index, arr) {
  return value > 5;
})); // 6
```


### ES6中新增的数组知识2
```js
// fill()实例方法 
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.fill('ES6',2,5); // [)
console.log(arr); // Array(9)[1, 2, "ES6", "ES6", "ES6", 6, 7, 8, 9]
```

数组的遍历
```js


```









```js
let arr = [3, 2, 1, 4, 5];
arr.sort(function compare(a, b) {
  //  1   4   1<4 返回 -1 => 1 排到 4前
  if (a < b) {
    return - 1;
  }
  //  3   2   3>2 返回 1 => 2 排到 3之前
  if (a > b) {
    return 1;
  }
  return 0;
})
console.log(arr); // Array(5) [ 1, 2, 3, 4, 5 ]
```

数组升序排列1
```js
let arr = [3, 2, 1, 4, 5];
arr.sort(function compare(a, b) {
  return a - b;
})
console.log(arr); // Array(5) [ 1, 2, 3, 4, 5 ]
```
数组升序排列2
```js
let arr = [3, 2, 1, 4, 5];
arr.sort((a, b) => { return a - b });
console.log(arr); // Array(5) [ 1, 2, 3, 4, 5 ]
```
数组升序排列3
```js
let arr = [3, 2, 1, 4, 5];
arr.sort((a, b) => a - b);
console.log(arr); // Array(5) [ 1, 2, 3, 4, 5 ]
```






