// Performing a GET request - 执行GET请求
// Make a request for a user with a given ID
axios.get('http://localhost:3000/users?id=2')
    .then(response => {
        alert('success');
        console.log(response);

    })
	.catch(error => {
		console.log('捕捉错误信息：' + error);
	});
	
