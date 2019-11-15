// Performing a GET request - 执行GET请求
// Make a request for a user with a given ID

// Want to use async/await? Add the `async` keyword to your outer function/method.

async function getUser(){
	try{
		const response = axios.get('http://localhost:3000/users?id=2');
		console.log(response); // Promise
	}catch(e){
		alert('出错了');
	}
}
getUser();
	
