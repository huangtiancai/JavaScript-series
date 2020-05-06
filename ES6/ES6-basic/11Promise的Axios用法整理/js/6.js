// Performing multiple concurrent requests 执行并发请求
function getUser() {
	return axios.get('http://jsonplaceholder.typicode.com/users?id=1');
};

function getTodos() {
	return axios.get('http://jsonplaceholder.typicode.com/todos?id=2');
};

// axios执行
axios.all([getUser(), getTodos()])
	.then(axios.spread(function (user, todo) {
		// Both requests are now complete
		//当这两个请求都完成的时候会触发这个函数，两个参数分别代表返回的结果
		console.log(user);
		console.log(todo);
	}));