//Promise和Async/Await用法整理

// 1.简介

let promise = new Promise((resolve,reject) => {	
	console.log('同步代码-start');
	resolve('success');
	reject('error');
	
});

console.log(promise); // Promise { 'success' }

promise.then(success => {
	console.log(success);
},error => {
	console.log(error);
});

// Promise对象的特点和三个状态：
// 1.对象的状态不受外接影响
// 2.一旦状态改变就不会再变，状态会被凝固

// new出一个Promise对象 => 初始状态：pending 根据resolve或reject返回 Fuilled或Rejected状态


// 上述reject 的状态信息没有在下面接收的原因:
// 1.Promise对象的特点：状态凝固
// 2.先执行的是resolve('success'); => 状态已凝固为Fuilled 就不会执行的resolve('success');
// 3.主要看resolve和rejected谁能先执行（由实际条件判断），若更改执行的顺序，会输出error
//	reject('error');
//	resolve('success');



// 同步代码
console.log('同步代码-end');


// 同步代码-start
// Promise { 'success' }
// 同步代码-end
// success