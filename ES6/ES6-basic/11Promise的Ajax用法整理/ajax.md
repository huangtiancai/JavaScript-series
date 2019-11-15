1.js      ajax  =>   XMLHttpRequest对象     
2.jQuery  ajax  =>   对原生XHR的封装、支持JSONP


关键字：
ajax、Callback(回调)、jsonp、XSRF、Promise、async/awit、CORS
注意：

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
