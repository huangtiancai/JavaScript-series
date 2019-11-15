// Performing a POST request 执行POST请求

axios.post('http://localhost:3000/users',{
	"name": "vue",
	"phone": "11-22-33",
	"email": "vue@gmail.com",
	"id": 1
})
.then(response => {
	console.log(response); // Object
})
.catch(error => {
	console.log(error);
});
