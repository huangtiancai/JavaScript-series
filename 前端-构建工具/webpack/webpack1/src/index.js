// 浏览器不能识别ES6Module/CommonJS模块导入导出规范的代码 => 必须编译

// import jquery from 'expose-loader?$!jquery';

console.log('$:', $); // ReferenceError: $ is not defined

// ES6Module规范（必须在最开始引入）引入
import {
  fun2
} from './common2';

// CommonJS规范（NODE）引入
let {
  fun1
} = require('./common');

// 导入@babel/polyfill => asynsc await
// require('@babel/polyfill');

// js 插入图片 webpack:需要把图片导入进来再使用
// let imgSrc = require('./assets/htpp.png');

// CSS需要在我们的入口JS导入后才可以使用
require('./index.less');

// let img = new Image();
// img.src = imgSrc;
// // 通过js将图片追加到id为app的div内
// document.getElementById('app').appendChild(img);



// // 特殊语法：
// // ES6中类的装饰器
// @log
// class A {
//   // n是给A实例加的属性
//   n = 10;
//   // m是给类A加的属性
//   static m = 20;
//   // 默认的babel-loader @babel/core @babel/preset-env 不识别这种语法

//   sum() {
//     console.log('sum');
//   }

//   static fun() {
//     console.log('fun');
//   }
// }

// // target = 类A
// function log(target) {
//   target.decorator = true;
// }


fun1();
fun2();
console.log('1');


// // A.fun();  // fun
// // new A().sum();  // sum
// // console.log(new A().n); // 10
// // console.log(A.m); // 20
// // console.log(A.decorator); // true


// // polyfill 处理async、await语法
// function sum() {
//   return new Promise((resolve, reject) => {
//     setTimeout(_ => {
//       resolve(100);
//     }, 1000);
//   });
// }

// async function fn() {
//   let n = await sum();
//   console.log(n);
// }

// fn();