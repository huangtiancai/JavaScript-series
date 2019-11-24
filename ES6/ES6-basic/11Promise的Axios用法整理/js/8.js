// axios的API - 可以通过向 axios 传递相关配置来创建请求

// 创建实例
// 可以使用自定义配置新建一个 axios 实例
// axios.create([config])

var instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

console.log(instance); // function exports()

// ----------instance打印-----------
// defaults: Object { baseURL: "https://some-domain.com/api/", timeout: 1000, xsrfCookieName: "XSRF-TOKEN", … }
// delete: function exports()​
// get: function exports()​
// getUri: function exports()​
// head: function exports()​
// interceptors: Object { request: {…}, response: {…} }
// length: 0
// name: ""
// options: function exports()​
// patch: function exports()​
// post: function exports()​
// prototype: Object { … }
// put: function exports()​
// request: function exports()​
// <prototype>: function ()


// 实例方法
// 以下是可用的实例方法。指定的配置将与实例的配置合并
// axios#request(config)
// axios#get(url[, config])
// axios#delete(url[, config])
// axios#head(url[, config])
// axios#options(url[, config])
// axios#post(url[, data[, config]])
// axios#put(url[, data[, config]])
// axios#patch(url[, data[, config]])
// axios#getUri([config])


// 参考：
//1.https://www.kancloud.cn/yunye/axios/234845
//2.https://github.com/axios/axios
//3.https://segmentfault.com/a/1190000018206604



