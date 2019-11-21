//Promise和Async/Await用法整理

// 6.Promise.all() - 将产生多个Promise实例，包装成新的Promise实例 成功和失败返回的类型是不同的
let p = Promise.resolve(2);
let p1 = Promise.resolve("success");
let p2 = Promise.resolve("hello");

// 成功之后就是数组类型，当所有状态都是成功状态才返回数组，只要其中有一个的对象是reject的，就返回reject的状态值。
Promise.all([p,p1,p2]).then(res => {
  console.log(res); // Array(3) [ 2, "success", "hello" ]
});


Promise.all([
  $.ajax({url:'http://jsonplaceholder.typicode.com/users?id=1',dataType:'json'}),
  $.ajax({url:'http://jsonplaceholder.typicode.com/users?id=1',dataType:'json'}),
  $.ajax({url:'http://jsonplaceholder.typicode.com/users?id=1',dataType:'json'}),
]).then(arr => {
  console.log(arr);
});
