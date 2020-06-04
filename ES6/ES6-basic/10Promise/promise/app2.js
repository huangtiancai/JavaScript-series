// Promise 第一个例子详解

// 补充：setTimeout(function, milliseconds, param1, param2, ...)
// setTimeout、setInterval被遗忘的第三个参数:https://www.cnblogs.com/leaf930814/p/6828588.html

function timeout(ms){
	// Promise构造函数接受一个函数作为参数 new Promise(函数)
	// new Promise(这个函数是ES6写法)， 该函数的两个参数分别是resolve和reject两个函数

	// ES6写法的函数内部是一个定时器setTimeout

	// 定时器setTimeout：setTimeout(code/function, milliseconds, param1, param2, ...)
	// 定时器setTimeout内部接收的参数:调用的代码串/函数、等待的时间、第三个以后的参数是作为第一个func()的参数传进去
	
	// 这里定时器setTimeout内部接收的参数:
	// 第一个参数：resolve - ES6写法的函数传递的resolve函数
	// 第二个参数：milliseconds -等待的时间
	// 第三个参数：'done' => resolve('done')
	return new Promise((resolve,reject) => {
			setTimeout(resolve,ms,'done');
	})

}
// 调用timeout函数返回的就是Promise实例 =>  表示一段时间以后才会发生的结果
// => 过了指定的时间（ms参数）以后，Promise实例的状态变为resolved，就会触发then方法绑定的回调函数
timeout(2000).then((value) => {
		console.log(value);
})

console.log('末尾');

// 末尾：立刻输出
// 这是定时器setTimeout：1s后输出
// done:2s后输出
			