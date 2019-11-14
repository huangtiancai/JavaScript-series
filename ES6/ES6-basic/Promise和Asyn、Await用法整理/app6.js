//Promise和Async/Await用法整理

// 链式调用-ajax
let url = 'http://jsonplaceholder.typicode.com/users?id=1';
let url1 = 'http://jsonplaceholder.typicode.com/users?id=2';
let url2 = 'http://jsonplaceholder.typicode.com/users?id=3';

$.ajax({
	type:'GET',
	url:url,
	contentType: "application/json; charset=utf-8",
	data: 'JSON',
	success: function (res) {
		let data = JSON.stringify(res);
		console.log(data);
	},
	error: function (err) {
		console.log(err);
	}
})
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








