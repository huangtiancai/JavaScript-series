// axios的API - 可以通过向 axios 传递相关配置来创建请求


// 发送 GET 请求（默认的方法）
let p = axios.get('http://localhost:3000/users?id=1');
console.log(p); // Promise { <state>: "pending" }

p.then(res => {
  console.log(res); // Object
  console.log(res.data); // Array
});



// axios(config)
// Send a GET request
axios({
  method: 'get',
  url: 'http://localhost:3000/companies',
  responseType: 'stream'
})
  .then(response => {
    console.log("使用 then 时，你将接收下面这样的响应：");
    console.log(response.data); // Array(3) [ {…}, {…}, {…} ]
    console.log(response.status); // 200
    console.log(response.statusText); //OK
    console.log(response.headers);
    console.log(response.config);
  }).catch(error => {
    console.log(error);
  });



// Send a POST request
// axios({
//   method:'post',
//   url:'http://localhost:3000/users',
//   data:{
//     "name": "axios",
//     "phone": "900",
//     "email": "axios@gmail.com",
//     "id": 6
//   }
// }).then(response => {
// 	console.log(response.data); // Object { name: "axios", phone: "900", email: "axios@gmail.com", id: 6 }
// })
// .catch(error => {
// 	console.log(error);
// });



// 请求方法的别名
// 为方便起见，为所有支持的请求方法提供了别名
  // axios.request(config)
  // axios.get(url[, config])
  // axios.delete(url[, config])
  // axios.head(url[, config])
  // axios.options(url[, config])
  // axios.post(url[, data[, config]])
  // axios.put(url[, data[, config]])
  // axios.patch(url[, data[, config]])


// 并发
// 处理并发请求的助手函数
// axios.all(iterable)
// axios.spread(callback)

