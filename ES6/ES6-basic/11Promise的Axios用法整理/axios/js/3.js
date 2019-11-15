// Performing a GET request - 执行GET请求
// Make a request for a user with a given ID

// 这里不使用catch捕捉错误，使用promise实例的then方法指定resolved状态和rejected状态的回调函数
axios.get('http://localhost:3000/users?id=2')
    .then(response => {
        alert('success');
        console.log(response); // 
    },error => {
		console.log('错误信息：' + error);
	});

// ajax 方式
$.ajax({
	url:'http://localhost:3000/users?id=2',
	dataType:'json'
}).then(response => {
	alert('成功了');
	console.log(response); // 
},error => {
	alert('失败了');
});