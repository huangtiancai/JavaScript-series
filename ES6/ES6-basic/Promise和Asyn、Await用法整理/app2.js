//Promise和Async/Await用法整理

// 3.链式调用

let p = new Promise((resolve,reject) => {
	reject('reject');
});

console.log(p);  // Promise { <rejected> 'reject' }

// then方法返回的是一个全新的Promise实例，不是原来的Promise实例 => 可以采用链式写法，即在then方法后面再调用一个then方法
let p1 = p.then(null,res => {
	console.log('res:'+res);  
});

console.log(p1); // Promise { <pending> }

p1.then(res1 => {
	console.log('res1:'+res1); // unddefined
});
	







