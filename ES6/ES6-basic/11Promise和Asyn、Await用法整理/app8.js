//Promise和Async/Await用法整理

// 4.catch
// Promise实例具有then方法 Promise.prototype.catch
// 用于指定Promise状态转变为rejected时的回调函数可以认为是then(null,func2)的简写形式

let p = new Promise((resolve, rejected) => {
  // resolve("success");
  rejected("error");
});

// catchd的返回值
let p1 = p.catch(result => {
  console.log(result);
  return 2;
});

console.log(p1);
