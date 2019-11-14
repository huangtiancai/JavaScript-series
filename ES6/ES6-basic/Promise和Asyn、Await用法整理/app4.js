//Promise和Async/Await用法整理

// 3.链式调用简化

new Promise((resolve,reject) => {
	reject('reject');
})
.then(null,res => {
	console.log('res:'+res);   // res:reject
	return 2; 
})
.then(res1 => {
	console.log('res1:'+res1); // res1:2
});








