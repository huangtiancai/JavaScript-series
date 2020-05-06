// Performing a GET request - 执行GET请求
// Optionally the request above could also be done as

// 1.根据id获取接口数据
axios.get('http://jsonplaceholder.typicode.com/todos', {
	params: {
		id: 2
	}
})
	.then(res => console.log(res.data)) // Array 数组长度为1 => 一个对象
	.catch(err => console.log(err));


// 2.根据id获取接口数据,参数id为数组
axios.get('http://jsonplaceholder.typicode.com/todos', {
	params: {
		id: [1, 2, 3, 4]
	}
})
	.then(res => console.log(res.data)) // Array(4) 数组长度为4 => 四个对象
	.catch(err => console.log(err));