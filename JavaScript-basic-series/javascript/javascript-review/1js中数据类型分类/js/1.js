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
console.log(Number(undefined)); // NaN


