"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var str = "拼接";
var jieStr = "\u8FD9\u662F\u4E00\u4E2A" + str + "\u5B57\u7B26\u4E32";
console.log(jieStr);

var a = "ES6";
console.log(a);

// 数组Array
// length属性
var clothing = ['shoes', 'shirts', 'socks', 'sweaters'];
console.log(clothing);

// includes()
var site = ['runoob', 'google', 'taobao'];
console.log(site.includes('runoob')); // true
console.log(site.includes('baidu')); // false
console.log([1, 2, 4].includes(1)); // trtue
console.log([1, 2, 4].includes(2, 4)); // false


// push()
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.push("Kiwi")); // 5
console.log(fruits); //  [ "Banana", "Orange", "Apple", "Mango", "Kiwi" ]
console.log(fruits.push("Hello", "world")); // 7
console.log(fruits); // Array(7) [ "Banana", "Orange", "Apple", "Mango", "Kiwi", "Hello", "world" ]


// splice()
var spliceArray = ['runoob', 'google', 'taobao'];
console.log(spliceArray.splice(2, 1));
console.log(spliceArray.splice(2, 0));

// 移除数组的第三个元素，并添加新元素
var spliceArray1 = ["Banana", "Orange", "Apple", "Mango"];
console.log(spliceArray1.splice(2, 1, "Lemon", "Kiwi"));
console.log(spliceArray1);

// 从第三个位置开始删除数组后的两个元素
var spliceArray2 = ["Banana", "Orange", "Apple", "Mango"];
console.log(spliceArray2.splice(2, 2));
console.log(spliceArray2);

//---------------------------------------------
// 返回ages数组中年龄大于等于20第一个元素的值
var ageArray = [3, 10, 20, 30];

function checkAge(age) {
  return age >= 20;
}

// 使用find方法
ageArray.find(checkAge);
ageArray.find(function checkAge(age) {
  return age >= 20;
});
ageArray.find(function (age) {
  return age >= 20;
});
// ES6
// 错误
ageArray.find(function (age) {
  age >= 20;
});
ageArray.find(function (age) {
  return age >= 20;
});
//测试
console.log(ageArray.find(function (age) {
  return age >= 20;
}));
//-----------------------------------------------
// find()
var array1 = [5, 12, 8, 130, 44];
var found = array1.find(function (element) {
  return element > 12;
});
console.log(found); // 130
// findIndex()
var array2 = [5, 12, 8, 130, 44];
var isLargeNUmber = array2.findIndex(function (element) {
  return element > 12;
});
console.log(isLargeNUmber); // 3
// filter()
var array3 = [5, 12, 8, 130, 44];
var founds = array1.filter(function (element) {
  return element > 12;
});
console.log(founds); // Array [ 130, 44 ]
// map()
var array4 = [1, 4, 8, 9, 19];
var map1 = array4.map(function (element) {
  return element * 2;
});
console.log(map1); // Array(5)[2, 8, 16, 18, 38]
// every()
var isBelowThreshold = function isBelowThreshold(currentValue) {
  return currentValue < 40;
};
var array5 = [1, 30, 39, 29, 10, 13];
var array6 = [1, 30, 39, 29, 10, 13, 45];
var every1 = array5.every(isBelowThreshold);
var every2 = array6.every(isBelowThreshold);
console.log(every1); // true
console.log(every2); // false

// concat()
var arr1 = ['a', 'b', 'c'];
var arr2 = ['d', 'e', 'f'];
var arr3 = arr1.concat(arr2);
console.log(arr3); // Array(6) [ "a", "b", "c", "d", "e", "f" ]

// forEach()
var EachArr = [1, 2, 3];
EachArr.forEach(function (element) {
  console.log(element + 1);
  // 2
  // 3
  // 4
});

// indexOf()
var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('duck')); // 3
console.log(beasts.indexOf('duck'), 1); // 2
console.log(beasts.indexOf('ducksss')); // -1

var animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
console.log(animals.indexOf('Dodo')); // 0
console.log(animals.lastIndexOf('Dodo')); // 3
console.log(animals.lastIndexOf('Tiger')); // 1

console.log('---------------------');

// lastIndexOf()
// 使用lastIndexOf注意
var arry = [2, 5, 9, 2];
// 从此位置开始逆向查找
console.log(arry.lastIndexOf(2)); // 3
// 默认为数组的长度减 1(arr.length - 1)，即整个数组都被查找
console.log(arry.lastIndexOf(2, 3)); // 3 从位置3逆向查找实际位置
console.log(arry.lastIndexOf(2, 4)); // 3 从位置3逆向查找实际位置
console.log(arry.lastIndexOf(2, 2)); // 0 从位置2逆向查找实际位置

console.log(arry.lastIndexOf(7)); // -1

// join()
// 使用四种不同的分隔符连接数组元素
var a = ['Wind', 'Rain', 'Fire'];
console.log(a.join()); // Wind,Rain,Fire
console.log(a.join(',')); // Wind,Rain,Fire
console.log(a.join(', ')); // Wind, Rain, Fire
console.log(a.join('+')); // Wind+Rain+Fire
console.log(a.join('')); // WindRainFire

// reduce()
var reduceArr = [1, 2, 3, 4];
var reducer = function reducer(accumulator, currentValue) {
  return accumulator + currentValue;
};
console.log(reduceArr.reduce(reducer)); // 10
console.log(reduceArr.reduce(reducer, 5)); // 15

// reduce()应用场景
// 1.计算数组所有值的和
var sum = [2, 3, 4].reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
console.log(sum); // 9
// 2.箭头函数形式
var total = [2, 3, 4].reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
console.log(total); // 9
// 3.累加对象数组里的值
var initialValue = 0;
var sumObject = [{ x: 1, y: "he" }, { x: 2, y: 'll' }, { x: 3, y: "o" }].reduce(function (accumulator, currentValue) {
  return accumulator + currentValue.x;
}, initialValue);

console.log(sumObject); // 6

// 4.将二维数组转化为一维
// 5.计算数组中每个元素出现的次数
// 6.数组去重
var arrs = [2, 3, 4, 4, 5, 6, 3, 1, 5, 6, 7, 8, 4];
var result = arrs.sort().reduce(function (init, current) {
  if (init.length === 0 || init[init.length - 1] !== current) {
    init.push(current);
  }
  return init;
}, []);
console.log(result);

// 7.功能型函数管道(https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

// 8.使用 reduce实现map
console.log([2, 3, 1, 4].reverse()); //  [ 4, 1, 3, 2 ]

// shift
var shiftArr = [5, 3, 4];
var firstElement = shiftArr.shift();
console.log(firstElement); // 5
console.log(typeof firstElement === "undefined" ? "undefined" : _typeof(firstElement)); // number
console.log(shiftArr); // [3,4]


// pop()
var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
var popped = plants.pop();
console.log(popped); // tomato
console.log(plants); // Array(4) [ "broccoli", "cauliflower", "cabbage", "kale" ]


var shiftArr1 = [1, 2, 3];

console.log(shiftArr1.unshift(4, 5)); // 5
console.log(shiftArr1); // [ 4, 5, 1, 2, 3 ]


// sort()
var sortArray = [4, 10, 23, 6, 28, 45];
sortArray.sort();
console.log(sortArray);
