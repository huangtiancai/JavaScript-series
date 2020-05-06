// Promise 第一个例子

function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done');
    })
}
// 调用timeout函数
timeout(2000).then((value) => {
    console.log(value);
})

console.log('末尾');

// 末尾：立刻输出
// 这是定时器setTimeout：1s后输出
// done:2s后输出