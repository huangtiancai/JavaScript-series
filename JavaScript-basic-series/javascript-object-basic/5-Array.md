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

// 后续补充....
sort()
splice()
toString()
toLocaleString()
```