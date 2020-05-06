// axios的API - 可以通过向 axios 传递相关配置来创建请求

// 拦截器
// 在请求或响应被 then 或 catch 处理前拦截它们。

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});



// 如果你想在稍后移除拦截器，可以这样：
var myInterceptor = axios.interceptors.request.use(function () {/*...*/ });
axios.interceptors.request.eject(myInterceptor);

// 可以为自定义 axios 实例添加拦截器
var instance = axios.create();
instance.interceptors.request.use(function () {/*...*/ });


// 错误处理
axios.get('/user/12345')
  .catch(function (error) {
    if (error.response) {
      // 请求已发出，但服务器响应的状态码不在 2xx 范围内
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
  });

// 可以使用 validateStatus 配置选项定义一个自定义 HTTP 状态码的错误范围。
axios.get('/user/12345', {
  validateStatus: function (status) {
    return status < 500; // 状态码在大于或等于500时才会 reject
  }
})




// 参考：
//1.https://www.kancloud.cn/yunye/axios/234845
//2.https://github.com/axios/axios



