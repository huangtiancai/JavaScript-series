// ES6中的promise对象, 可以将异步操作以同步的流程表达出来，很好地解决了回调地狱
// ES6的Promise是一个构造函数, 用来生成promise实例

// promise对象的三个状态：
// 1.pending                - 初始化状态
// 2.fullfilled / resolved  - 成功状态
// 3.rejected               - 失败状态

// 使用promise的基本步骤
// - 创建promise对象
// - 用promise的回调函数then()


// 基本用法
// ES6 规定，Promise对象是一个构造函数，用来生成Promise实例

// Promise构造函数接受一个函数作为参数 => 该函数的两个参数分别是resolve和reject两个函数
// resolve函数作用:将Promise对象的状态从“未完成”变为“成功”   pending -> resolved
// reject函数的作用:将Promise对象的状态从“未完成”变为“失败”  pending -> rejected

// ---------------------------------------代码格式1------------------------------------------------------------------------------------
let promise = new Promise((resolve,reject) => {
	// 同步代码
	console.log('promise');
	
	// 开始异步操作：写异步代码：ajax请求 or 开启定时器
	if(/* 异步操作成功 */){
		// 如果请求成功了，请写resolve()，此时，promise的状态会被自动修改为fullfilled
		resolve();
	}else{
		// 如果请求失败了，请写reject()，此时，promise的状态会被自动修改为rejected
		reject();
	}
})

// Promise实例生成以后，用then方法分别指定resolved状态和rejected状态的回调函数

// then方法可以接受两个回调函数作为参数:
// 第一个回调函数是Promise对象的状态变为resolved时调用
// 第二个回调函数是Promise对象的状态变为rejected时调用 => 第二个函数是可选的，不一定要提供

// 这两个函数都接受Promise对象传出的值作为参数
promise.then(() => {
	// 如果promise的状态为fullfilled，则执行这里的代码
	console.log('成功！');
},() => {
	//如果promise的状态为rejected，则执行这里的代码
	console.log('失败！');
})

// ----------------------------------------代码格式2--------------------------------------------------------------------------------

// resolve()和 reject()两个方法可以给promise传递参数
let promise = new Promise((resolve,reject) => {
	// 同步代码
	console.log('promise');	
	if(/*异步请求成功*/){
		// 在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；
		resolve('成功');
	}else{
		// 在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去
		reject('失败');
	}
});

// 调用promise的then()
promise.then((successMsg) => { 
	 console.log(successMsg);
},(errorMsg) => {
	console.log(errorMsg);
});


// 同步代码
console.log('hello');

// ----------------------------ajax请求的举例（涉及到嵌套的回调）------------------------
