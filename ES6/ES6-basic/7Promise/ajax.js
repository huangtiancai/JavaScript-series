function getJSON(url){
	let promise = new Promise((resolve,reject) => {
		// 同步代码
		console.log('promise');	
		
		// 异步任务
		let request = new XMLHttpRequest();
		
		request.responseType = 'json';
		request.open('GET',url,true);
		request.send();	
		
		request.onreadystatechange = function(){
			if(request.readyState==4){
				if(request.status==200){
					let jsonData = request.response;
					resolve(jsonData);
				}else{
					reject('请求失败！');
				}
			}
		}
		
	});
	
	return promise;
}

url = 'http://jsonplaceholder.typicode.com/users?id=1';


// 调用promise的then()
getJSON(url).then((success) => {
	console.log(success);
},(error) => {
	console.log(error);
});


// 同步代码
console.log('hello');