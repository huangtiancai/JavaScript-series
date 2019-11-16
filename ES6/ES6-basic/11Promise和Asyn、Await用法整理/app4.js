//Promise和Async/Await用法整理

// 3.链式调用简化

new Promise((resolve,reject) => {
	resolve('resolve');
})
.then(res => {
	console.log('res:'+res);   // res:resolve
	return 2; 
})
.then(res1 => {
	console.log('res1:'+res1); // res1:2
	return 3; 
})
.then(res2 => {
	console.log('res2:'+res2); // res2:3
});








