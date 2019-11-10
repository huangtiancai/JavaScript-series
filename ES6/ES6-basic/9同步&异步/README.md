### 同步任务和异步任务
同步和异步操作的区别就是是否阻碍后续代码的执行;
- 同步 - 阻碍 顺序执行
- 异步 - 不阻碍  

- 同步任务:是那些没有被引擎挂起、在主线程上排队执行的任务。只有前一个任务执行完毕，才能执行后一个任务。
- 异步任务:是那些被引擎放在一边，不进入主线程、而进入任务队列的任务 => 挂起来的异步任务

只有引擎认为某个异步任务可以执行了（比如 Ajax 操作从服务器得到了结果）【发布订阅】，该任务（采用回调函数的形式）才会进入主线程执行。排在异步任务后面的代码，不用等待异步任务结束会马上运行，也就是说，异步任务不具有“堵塞”效应。


### 线程模式
- JS是单线程的，但JS引擎是多线程的
- 主线程/任务队列

1. 首先，`主线程`会去执行所有的`同步任务`;
2. 等到`同步任务全部执行完`，就会去看任务队列里面的`异步任务`。
3. 如果`满足条件` = 引擎认为某个异步任务可以执行了（比如 Ajax 操作从服务器得到了结果），那么异步任务就`重新进入主线程`开始执行，这时它就`变成同步任务`了。等到执行完，下一个异步任务再进入主线程开始执行。
4. 一旦任务队列清空，程序就结束执行。

### 事件循环
JavaScript 引擎怎么知道异步任务有没有结果，能不能进入主线程呢?
只要`同步任务`执行完了，引擎就会一遍又一遍地去检查那些挂起来的异步任务，是不是可以进入主线程了。
这种`循环检查的机制`，就叫做`事件循环（Event Loop）`

### 异步任务的写法通常是`回调函数`的形式
一旦异步任务重新进入主线程，就会执行对应的`回调函数`。
如果一个异步任务没有回调函数，就不会进入任务队列，也就是说，不会重新进入主线程，因为没有用回调函数指定下一步的操作。


在setTimeout的执行形式上来看，`setTimeout是不会阻碍其后续代码的执行的`。所以可以理解为`setTimeout是异步操作`。


### setTimeout、setInterval、setImmediate
setTimeout、setInterval、setImmediate的`回调函数`，追加在`次轮循环`

setTimeout、setInterval 运行机制（重要）
1. 将`指定的代码移出本次执行`，等到下一轮Event Loop时，`再检查是否到了指定时间`
    如果到了，就执行对应的代码;
    如果不到，就等到再下一轮Event Loop时重新判断;

    意思是setTimeout指定的代码，必须等到本次事件循环执行的所有代码都执行完，才会执行
      
2. setTimeout的作用是`将代码推迟到指定时间执行`，如果指定时间为0，即setTimeout(f,0)，也不会立刻执行,如下：
   ```
   console.log('start');    
    setTimeout(function(){
        console.log('异步任务');
    },0)
    console.log('end');
    控制台输出：
    start
    end
    异步任务
    ```
3. setTimeout(f,0)将第二个参数设为0，作用是让f在现有的任务（脚本的同步任务和“任务队列”中已有的事件）一结束就立刻执行。也就是说，setTimeout(f,0)的作用是，尽可能早地执行指定的任务；
执行的顺序仍然是：start => end => 异步任务

4. setTimeout在 *timers* 阶段执行，而setImmediate在 *check* 阶段执行。所以，setTimeout会早于setImmediate完成。

### process.nextTick()  和 setImmediate()
process.nextTick追加到`本轮循环执行`，而且是所有异步任务里面最快执行的。
setImmediate的`回调函数`，追加在`次轮循环`

1. 为了立即异步执行一个任务，会这样调用setTimeout()来达到所需的效果(上述2):
```
setTimeout(function () {
    //code
}, 0); 
```
2. 由于事件循环自身的特点，定时器的精确度不够;
   setTimeout(fn, 0)的方式较为浪费性能。=> process.nextTick()方法的操作相对较为轻量

 process.nextTick()的例子 => 在node环境中运行
 setImmediate() => 在node环境中运行



### Promise异步
Promise 的`回调函数`不是正常的异步任务，而是`微任务（microtask）`。它们的区别在于，正常任务追加到下一轮事件循环，微任务队列追加在process.nextTick队列的后面，也属于本轮循环。



### 小结
相比于V8引擎，node 中增加了两种异步方式： process.nextTick()  和 setImmediate()
以下四种均为异步操作/方式 => 不会阻碍其后续代码的执行
process.nextTick            - 本轮循环 
Promise异步                 - 本轮循环
setTimeout、setInterval     - 次轮循环
setImmediate                - 次轮循环

### 事件循环的六个阶段
首先，事件循环是在`主线程`上完成的。
其次，脚本开始执行时，事件循环只进行了初始化，并没有开始。
只有当下面事件执行完后，事件循环才会开始。

- 同步任务
- 发出异步请求
- 规划定时器生效的时间
- 执行process.nextTick()等等

事件循环会无限次地执行，一轮又一轮。只有异步任务的回调函数队列清空了，才会停止执行。

每一轮的事件循环，分成`六个阶段`:
1. timers：定时器阶段，处理setTimeout()和setInterval()的回调函数。进入这个阶段后，主线程会检查一下当前时间，是否满足定时器的条件。如果满足就执行回调函数，否则就离开这个阶段。
2. I/O callbacks：除了以下操作的回调函数，其他的回调函数都在这个阶段执行。
    【setTimeout()和setInterval()的回调函数；
      setImmediate()的回调函数；
      用于关闭请求的回调函数，比如socket.on('close', ...)】
3. idle, prepare：这个阶段是轮询时间，用于等待还未返回的 I/O 事件，比如服务器的回应、用户移动鼠标等等。
这个阶段的时间会比较长。如果没有其他异步任务要处理（比如到期的定时器），会一直停留在这个阶段，等待 I/O 请求返回结果。
4. poll：这个阶段是轮询时间，用于等待还未返回的 I/O 事件，比如服务器的回应、用户移动鼠标等等。
5. check：该阶段执行setImmediate()的回调函数。
6. close callbacks：该阶段执行关闭请求的回调函数，比如socket.on('close', ...)

每个阶段都有一个先进先出的回调函数队列。只有一个阶段的回调函数队列清空了，该执行的回调函数都执行了，事件循环才会进入下一个阶段。

    
参考：
https://www.cnblogs.com/ceceliahappycoding/p/10772351.html
https://www.cnblogs.com/wangwenhui/p/7657654.html
https://www.imooc.com/article/71081
http://javascript.ruanyifeng.com/advanced/promise.html
http://www.ruanyifeng.com/blog/2018/02/node-event-loop.htm