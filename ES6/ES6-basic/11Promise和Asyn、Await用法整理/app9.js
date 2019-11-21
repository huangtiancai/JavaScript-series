//Promise和Async/Await用法整理

// 5.Promise.resolve() - 将现有对象转为Promise对象的快捷方式

let pm = Promise.resolve(2)
console.log(pm); // Promise { 2 }   Promsie{<state>: "fulfilled",<value>: 2}
 
// 传一个普通对象
let p = Promise.resolve({
  name:"promise",
  age:"10"
}); 

p.then(res => {
  console.log(res); // Object { name: "promise", age: "10" }
});

// 若传一个Promise对象，直接返回
let p1 = new Promise((resolve,rejected) => {
  setTimeout(() => {
    resolve("success"); // success
  },1000)
});

let p2 = Promise.resolve(p1);

p2.then(res => {
  console.log(res);
});

console.log(p1 === p2); // true

// true
// success

