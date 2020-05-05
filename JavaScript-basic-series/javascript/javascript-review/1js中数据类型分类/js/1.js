// console.log([val]);
// // console.log('hello');

// ==:进行比较
// console.log(1 == 2); // false
// console.log('AA' == NaN); // false
// console.log(10 == NaN); // false
// console.log(NaN == NaN); // false

// isNaN([val]) 参数描述占位符
console.log(isNaN(10)); // false
console.log(isNaN('AA')); // true
/*
Number('AA') => NaN
isNaN(NaN)   => true
*/

console.log(isNaN('10')); // false
/*
Number('10') => 10;
isNaN(10)    => false
*/

//--------------Number---------------
// 把字符串转换为数字，只要字符串中包含任意一个非有效数字字符（第一个点除外）结果都是NaN
console.log(Number('12.5'));    // 12.5
console.log(Number('12.5px'));  // NaN
console.log(Number('12.5.5'));  // NaN

// 布尔转换为数字
console.log(Number(true));      // 1
console.log(Number(false));     // 0
// 布尔转换的结果不管是1或0,都是有效数字 isNaN(有效数字) => false
console.log(isNaN(true));       // false
console.log(isNaN(false));      // false

console.log(Number(null));      // 0
<<<<<<< HEAD
console.log(Number(undefined)); // NaN
=======
console.log(Number(undefined)); // NaN

console.log(parseInt('10.5', 10));
console.log(parseInt('10.5', 10));

// ES5下字符串拼接
let str = '一个拼接的';
let jieStr = '这是' + str + '字符串';
document.write(jieStr);

// ES6字符串模版
// let str1 = '一个拼接的';
// let jieStr1 = `这是' + ${str} + '字符串`;
// document.write(jieStr1);
>>>>>>> 71d2b15ce6d2d61553e703f340691c6ddfe7ca37
