//Promise和Async/Await用法整理

// 5.Promise.reject() - 快速获取一个拒绝状态的Promise对象

let p = Promise.reject(2)
console.log(p); // Promise { <rejected> 2 }   Promise { <state>: "rejected" } uncaught exception: 2
 
p.then(res => {
  console.log(res);
})
.catch(res => {
  console.log('catch',res); // catch 2
});


