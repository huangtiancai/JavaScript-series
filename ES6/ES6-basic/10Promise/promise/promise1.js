 // Promise对象简单例子2 -ES6写法

// Promise新建后立刻执行
let promise = new Promise((resolve,reject) => {
		console.log('Promise');
		resolve();
});
// then方法指定回调函数，将在当前脚本所有同步任务执行完才会执行，所以resolved最后输出。
promise.then(() => {
		console.log('resolved');
});

console.log('末尾');

// Promise
// 末尾
// resolved