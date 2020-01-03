// Performing multiple concurrent requests 执行并发请求
function getUser() {
	return axios.get('http://localhost:3000/users?id=1');
};

function getCompanies() {
	return axios.get('http://localhost:3000/companies?id=2');
};

axios.all([getUser(), getCompanies()])
	.then(axios.spread(function (user, company) {
		//当这两个请求都完成的时候会触发这个函数，两个参数分别代表返回的结果
		console.log(user);
		console.log(company);
	}));