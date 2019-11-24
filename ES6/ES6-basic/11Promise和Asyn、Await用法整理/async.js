async function demo(){
  let p = Promise.resolve("123"); 
  let result = await Promise.resolve("123");  
  console.log(p);      // Promise { '123' } Promise { <state>: "fulfilled", <value>: "123" }
  console.log(result); // 123
}
demo();


async function show(){
  let a = 2;
  let b = 3;

  let p = $.ajax({url:'data/1.txt',dataType:'json'}); 
  let data = await $.ajax({url:'data/1.txt',dataType:'json'}); // 写起来和同步一样的方便，内部仍然是异步的    

  console.log(p);       // object
  console.log(data);    // Array(5) [ 1, 2, 3, 4, 6 ]
  console.log(data[0]); // 1
  console.log(a+b+data[0]); // 6
}
// 调用
show(); // 6