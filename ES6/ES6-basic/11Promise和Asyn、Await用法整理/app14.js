//Promise和Async/Await用法整理

// 9.Async-Await

// 1.简介
// async-await 与 promsie的关系：不存在谁替代谁，因为async-await寄生于promsie

// async-await做什么的？
// async用于声明一个function是异步的
// await指明哪些是异步操作，哪些是同步操作=> 主动去给异步操作加上await,用来表明这个操作不能直接就往下运行，需要等待（等待操作结束再往下继续走）

// async/await：以同步的方式（本质还是异步）写异步代码
// generator/yield 已经被async/awit代替



// 2.基本语法
async function testAsync() {
  return 'hello async'
}

const result = testAsync();
console.log(result);   // Promise { <state>: "fulfilled", <value>: "hello async" }

// async 函数返回的是一个Promsie对象


// 3.规则
// 1.async表示这是一个函数，await只能用在这个函数里面(await放在普通函数里是会报错的),不能单独使用
// 2.await表示这里等待promsie返回一个结果后，再继续执行
// 3.await后面应该跟着的应该是一个promise对象（当然可以是其他返回值也没关系，只是会立即执行，不过那样就没意义了）





