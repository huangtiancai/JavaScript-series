// 补充：setTimeout(function, milliseconds, param1, param2, ...)
setTimeout(
    function () {
        console.log('这是定时器setTimeout');
    },
    1000
)

// Promise对象简单例子1 -ES6写法
function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done');
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