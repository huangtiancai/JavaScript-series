// Performing a GET request - 执行GET请求
// Make a request for a user with a given ID

// 1.请求JSONSERVER接口数据(注意：请求的数据接口不固定，只作为测试)
// axios.get('http://localhost:3000/users?id=2')
//     .then(res => {
//         console.log(res);
//         console.log(res.data);
//         console.log(res.headers);
//         console.log(res.status);
//         console.log(res.statusText);
//     })
//     .catch(err => {
//         console.log('捕捉错误信息：' + err);
//     });

// 2.请求jsonplaceholder 接口数据 获取所有200条数据
// axios.get('http://jsonplaceholder.typicode.com/todos')
//     .then(res => {
//         console.log(res);
//         console.log(res.data);
//     })
//     .catch(err => console.log(err));

// 请求jsonplaceholder接口数据（根据id获取）
axios.get('http://jsonplaceholder.typicode.com/todos/2')
    .then(res => console.log(res.data)) // Object
    .catch(err => console.log(err));