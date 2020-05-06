// Performing a POST request 执行POST请求

axios.post('http://localhost:3000/users', {
	"name": "vuex",
	"phone": "1234567",
	"email": "vuex@gmail.com",
	"id": 7
})
	.then(res => {
		console.log(res); // Object
	})
	.catch(err => {
		console.log(err);
	});
