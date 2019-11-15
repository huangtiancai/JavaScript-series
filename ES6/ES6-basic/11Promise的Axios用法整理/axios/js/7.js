// axios的API

let res = axios.get('http://localhost:3000/users?id=1');
console.log(res);
console.log(res.id);
console.log(res.email);
console.log(res.name);
