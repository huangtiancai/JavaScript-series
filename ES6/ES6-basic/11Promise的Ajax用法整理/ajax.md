关键字：
ajax、Callback(回调)、jsonp、XSRF、Promise、async/awit、CORS

重点：jquery的ajax和promise的结合使用，使用Promise封装ajax()
1.ajax
1).js      ajax  =>   XMLHttpRequest对象     
2).jQuery  ajax  =>   对原生XHR的封装、支持JSONP

2.回调
callback 是一种特殊的函数，这个函数被作为参数传给另一个函数去调用。这样的函数就是回调函数。

回调例子:
```
$button.on('click', function(){})
```
click后面的 function 就是一个回调，因为「我」没有调用过这个函数，是 jQuery 在用户点击 button 时调用的(当用户点击之后,这个函数才执行,现在我只是传了一个参数,这个参数是一个点击后要执行的函数)。
```
div.addEventListener('click', function(){})
```
click 后面的 function 也是一个回调，因为「我」没有调用过这个函数，是浏览器在用户点击 button 时调用的。

一般来说，只要参数是一个函数，那么这个函数就是回调。

3.$.Ajax()中的promise 
具体基于Promise的例子参考：
[ajax-promise](../10Promise/1.html)
[promise](../笔记.txt)
