// Performing a GET request - 执行GET请求
// Optionally the request above could also be done as
axios.get('http://localhost:3000/users',{
	params:{id:2}
}).then(response => {
	alert('success');
	console.log(response);
})
.catch(error => {
	console.log('捕捉错误信息：' + error);
});	