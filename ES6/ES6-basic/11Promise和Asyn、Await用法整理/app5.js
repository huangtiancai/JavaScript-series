//Promise和Async/Await用法整理

// 3.链式调用

Promise.resolve('1')
	.then(res => {
		console.log('res:' + res);   // res:1
		return 2;
	})
	.then(res1 => {
		console.log('res1:' + res1); // res1:2
	});








