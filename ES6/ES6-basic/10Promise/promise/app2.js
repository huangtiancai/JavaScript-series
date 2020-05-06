// Promise 第二个例子

// Promise新建后立即执行，首先输出的是promise
let promise = new Promise((resolve,reject) => { 
	console.log('promise');
	resolve();
});

// then方法指定的回调函数将在当前脚本的同步任务全部执行完才会执行 => 最后输出resolved
promise.then(() => {
	console.log('resolved');
});

// 同步任务
console.log('结束');

// promise
// 结束
// done