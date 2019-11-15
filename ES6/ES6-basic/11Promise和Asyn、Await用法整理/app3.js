//Promise和Async/Await用法整理

// 3.链式调用

let p = new Promise((resolve,reject) => {
	reject('reject');
});

console.log(p);  // Promise { <rejected> 'reject' }

// Promise实现了链式调用，也就是说每次调用then之后返回的都是一个Promise，并且是一个全新的Promise，原因也是因为状态不可变。如果你在then中 使用了return，那么return的值会被Promise.resolve()包装
let p1 = p.then(null,res => {
	console.log('res:'+res);  
	return 2; // 包装成 Promise.resolve(2) => 传递给下一个then方法
});

console.log(p1); // Promise { <pending> }

p1.then(res1 => {
	console.log('res1:'+res1); // 2
});
	







