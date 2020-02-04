// Performing a GET request - 执行GET请求
// Make a request for a user with a given ID

// 这里不使用catch捕捉错误，使用promise实例的then方法指定resolved状态和rejected状态的回调函数
axios.get('http://jsonplaceholder.typicode.com/todos?id=2')
	.then(res => {
		console.log(res); // Object
		// 取数据
		console.log(res.data); // Array
	}, err => {
		console.log('错误信息：' + err);
	});

// ajax 方式
$.ajax({
	url: 'http://jsonplaceholder.typicode.com/todos?id=2',
	dataType: 'json'
}).then(res => {
	console.log(res);	// Array 直接获取数据
}, err => {
	alert('失败了');
});