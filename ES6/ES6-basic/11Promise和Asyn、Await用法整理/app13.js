//Promise和Async/Await用法整理

// 8.异常处理

// try{
let p = new Promise((resolve, reject) => {
  throw new Error("this is a error");
});
// }catch(e){
//   console.log("catch",e);
// }

p.catch(res => {
  console.log(res);
});

// 建议：在promise链的尾部必须要有个catch接着

