//Promise和Async/Await用法整理

// 3.链式调用

let p = new Promise((resolve,reject) => {
	resolve('resolve');
});

console.log(p);  // Promise { 'resolve' }

// Promise实现了链式调用，也就是说每次调用then之后返回的都是一个Promise，并且是一个全新的Promise，原因也是因为状态不可变。如果你在then中 使用了return，那么return的值会被Promise.resolve()包装
let p1 = p.then(res => {
	console.log('res:'+res); // res:resolve
	return 2; // 包装成 Promise.resolve(2) => 传递给下一个then方法
});

console.log(p1); // Promise { <pending> }

let p2 = p1.then(res1 => {
	console.log('res1:'+res1); // res1:2s
	return 3; // 包装成 Promise.resolve(3) => 传递给下一个then方法
});

console.log(p2); // Promise { <pending> }

p2.then(res2 => {
	console.log('res2:'+res2); // res2:3s
});




// Promise { 'resolve' }
// Promise { <pending> }
// Promise { <pending> }
// res:resolve
// res1:2
// res2:3

// Promise {<resolved>: "resolve"}
//	 	__proto__: Promise
// 		[[PromiseStatus]]: "resolved"
// 		[[PromiseValue]]: "resolve"
// Promise {<pending>}
// 		__proto__: Promise
// 		[[PromiseStatus]]: "resolved"
//		[[PromiseValue]]: 2
// Promise {<pending>}
// 		__proto__: Promise
// 		[[PromiseStatus]]: "resolved"
//		[[PromiseValue]]: 3
// res:resolve
// res1:2
// res2:3
	







