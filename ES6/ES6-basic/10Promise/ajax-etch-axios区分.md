同步&异步

1.js      ajax  =>   XMLHttpRequest对象     
2.jQuery  ajax  =>   对原生XHR的封装、支持JSONP
3.axios         =>   Axios本质上也是对原生XHR的封装，只不过它是Promise的实现版本，符合最新的ES规范    
                     axios:自己本身不支持jsonp
                     支持:post get
特性：
- 从浏览器中创建 XMLHttpRequests
- 从 node.js 创建 http 请求
- 支持 Promise API
- 拦截请求和响应
- 转换请求数据和响应数据
- 取消请求
- 自动转换 JSON 数据
- 客户端支持防御 XSRF
- 提供了一些并发请求的接口（重要，方便了很多的操作）

4.Fetch   替代ajax
  Fetch是基于promise设计的;
  Fetch的代码结构比起ajax简单，参数有点像jQuery ajax,但是fetch不是ajax的进一步封装，而是原生js;
  Fetch函数就是原生js，没有使用XMLHttpRequest对象

5.Vue框架:
vue-resource
    官方：https://github.com/pagekit/vue-resource
    目前官方已经不再维护，作者建议使用axios
    支持：post get jsonp
Vue2.0之后，尤雨溪推荐大家用axios替换JQuery ajax;


关键字：
Callback(回调)、ajax、fetch、axios、vue-resource、jsonp、XSRF、Promise、async/awit、CORS
注意：
fetch：基于Promise设计 => Promise => ES6
axios:Promise based HTTP client for the browser and node.js

总结：jquery比较老、fetch比较年轻、使用axios => 学习Prommsie => ES6


代码比较：
jquery ajax:
```javascript
$.ajax({
   type: 'POST',
   url: url,
   data: data,
   dataType: dataType,
   success: function () {},
   error: function () {}
});
```
axios：
```javascript
axios({
    method: 'post',
    url: '/user/12345',
    data: {
        firstName: 'Fred',
        lastName: 'Flintstone'
    }
})
.then(function (response) {
    console.log(response);
})
.catch(function (error) {
    console.log(error);
});
```
fetch:
```javascript
try {
  let response = await fetch(url);
  let data = response.json();
  console.log(data);
} catch(e) {
  console.log("Oops, error", e);
}
```


MDN Promise 教程:https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise
jQuery ajax,Axios,Fetch区别：https://segmentfault.com/a/1190000012836882
Fetch API:https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API
https://github.com/camsong/blog/issues/2