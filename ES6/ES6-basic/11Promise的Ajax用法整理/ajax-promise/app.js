//Promise和Async/Await用法整理

// 链式调用-ajax
let url = 'http://jsonplaceholder.typicode.com/users?id=1';
let url1 = 'http://jsonplaceholder.typicode.com/users?id=2';
let url2 = 'http://jsonplaceholder.typicode.com/users?id=3';

$.ajax({
	type: 'GET',
	url: url,
	contentType: "application/json; charset=utf-8",
	data: 'JSON',
	success: function (res) {
		// let data = JSON.stringify(res);
		console.log(res); // JSON数组
	},
	error: function (err) {
		console.log(err);
	}
})