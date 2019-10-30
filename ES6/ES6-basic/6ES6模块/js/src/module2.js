// import {myName,myAge,myFn,myClass} from 'module1.js';
// console.log(myName);
// console.log(myAge);
// console.log(myFn());
// console.log(myClass.a);


// 暴露模块：采用统一暴露的方式
function fn1() {
    console.log('我是module1中的fn1');
}

function fn2() {
    console.log('我是module1中的fn2');
}

//统一暴露
export {fn1,fn2};




