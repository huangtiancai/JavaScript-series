//Promise和Async/Await用法整理

// 9.Async-Await

// Promise 并不能消灭回调地狱，也并没有太多的简化,但是它可以使回调变得可控

// 使用async/await配合promise简化

async function show(){

  try{
      let data = await $.ajax({url:'data/1.txt',dataType:'json'}); // 写起来和同步一样的方便，内部仍然是异步的    
      return data;
  }catch(e){
      alert("出错了！");
  }
}

// 调用 async返回的也是promise对象，所以用then接受就行了
console.log(show()); // Promise { <state>: "pending" }

show().then(res => {
  console.log(res); // Array(5) [ 1, 2, 3, 4, 6 ]
  
});
