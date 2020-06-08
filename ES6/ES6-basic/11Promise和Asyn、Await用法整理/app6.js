//Promise和Async/Await用法整理

// 链式调用-ajax
let url = 'http://jsonplaceholder.typicode.com/users?id=1';
let url1 = 'http://jsonplaceholder.typicode.com/users?id=2';
let url2 = 'http://jsonplaceholder.typicode.com/users?id=3';

$.ajax(url) // promise对象
	.then(res => {
		console.log(res);
		return $.ajax(url1);
	})
	.then(res => {
		console.log(res);
		return $.ajax(url2);
	})
	.then(res => {
		console.log(res);
	});








