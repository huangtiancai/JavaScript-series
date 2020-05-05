let str = "拼接";
let jieStr = `这是一个${str}字符串`;
console.log(jieStr);

var a = "ES6";
console.log(a);

// 数组Array
// length属性
const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];
console.log(clothing);

// includes()
let site = ['runoob', 'google', 'taobao'];
console.log(site.includes('runoob')); // true
console.log(site.includes('baidu'));  // false
console.log([1, 2, 4].includes(1)); // trtue
console.log([1, 2, 4].includes(2, 4)); // false


// push()
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.push("Kiwi")); // 5
console.log(fruits);              //  [ "Banana", "Orange", "Apple", "Mango", "Kiwi" ]
console.log(fruits.push("Hello", "world")); // 7
console.log(fruits); // Array(7) [ "Banana", "Orange", "Apple", "Mango", "Kiwi", "Hello", "world" ]


// splice()
let spliceArray = ['runoob', 'google', 'taobao'];
console.log(spliceArray.splice(2, 1));
console.log(spliceArray.splice(2, 0));

// 移除数组的第三个元素，并添加新元素
let spliceArray1 = ["Banana", "Orange", "Apple", "Mango"];
console.log(spliceArray1.splice(2, 1, "Lemon", "Kiwi"));
console.log(spliceArray1);

// 从第三个位置开始删除数组后的两个元素
let spliceArray2 = ["Banana", "Orange", "Apple", "Mango"];
console.log(spliceArray2.splice(2, 2));
console.log(spliceArray2);

//---------------------------------------------
// 返回ages数组中年龄大于等于20第一个元素的值
let ageArray = [3, 10, 20, 30];

function checkAge(age) {
  return age >= 20;
}

// 使用find方法
ageArray.find(checkAge);
ageArray.find(function checkAge(age) {
  return age >= 20;
});
ageArray.find(age => {
  return age >= 20;
});
// ES6
// 错误
ageArray.find(age => { age >= 20 });
ageArray.find(age => age >= 20);
//测试
console.log(ageArray.find(age => age >= 20));
//-----------------------------------------------
// find()
const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 12);
console.log(found); // 130
// findIndex()
const array2 = [5, 12, 8, 130, 44];
const isLargeNUmber = array2.findIndex(element => element > 12);
console.log(isLargeNUmber); // 3
// filter()
const array3 = [5, 12, 8, 130, 44];
const founds = array1.filter(element => element > 12);
console.log(founds);  // Array [ 130, 44 ]
// map()
const array4 = [1, 4, 8, 9, 19];
const map1 = array4.map(element => element * 2);
console.log(map1); // Array(5)[2, 8, 16, 18, 38]
// every()
const isBelowThreshold = (currentValue) => currentValue < 40;
const array5 = [1, 30, 39, 29, 10, 13];
const array6 = [1, 30, 39, 29, 10, 13, 45];
const every1 = array5.every(isBelowThreshold);
const every2 = array6.every(isBelowThreshold);
console.log(every1); // true
console.log(every2); // false

// concat()
const arr1 = ['a', 'b', 'c'];
const arr2 = ['d', 'e', 'f'];
const arr3 = arr1.concat(arr2);
console.log(arr3); // Array(6) [ "a", "b", "c", "d", "e", "f" ]

// forEach()
const EachArr = [1, 2, 3];
EachArr.forEach(element => {
  console.log(element + 1);
  // 2
  // 3
  // 4
})

// indexOf()
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('duck'));    // 3
console.log(beasts.indexOf('duck'), 1); // 2
console.log(beasts.indexOf('ducksss')); // -1

const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
console.log(animals.indexOf('Dodo'));     // 0
console.log(animals.lastIndexOf('Dodo')); // 3
console.log(animals.lastIndexOf('Tiger'));// 1

console.log('---------------------');


// lastIndexOf()
// 使用lastIndexOf注意
var arry = [2, 5, 9, 2];
// 从此位置开始逆向查找
console.log(arry.lastIndexOf(2));   // 3
// 默认为数组的长度减 1(arr.length - 1)，即整个数组都被查找
console.log(arry.lastIndexOf(2, 3)); // 3 从位置3逆向查找实际位置
console.log(arry.lastIndexOf(2, 4)); // 3 从位置3逆向查找实际位置
console.log(arry.lastIndexOf(2, 2)); // 0 从位置2逆向查找实际位置

console.log(arry.lastIndexOf(7)); // -1

// join()
// 使用四种不同的分隔符连接数组元素
var a = ['Wind', 'Rain', 'Fire'];
console.log(a.join());    // Wind,Rain,Fire
console.log(a.join(',')); // Wind,Rain,Fire
console.log(a.join(', ')); // Wind, Rain, Fire
console.log(a.join('+')); // Wind+Rain+Fire
console.log(a.join(''));  // WindRainFire

// reduce()
const reduceArr = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(reduceArr.reduce(reducer));     // 10
console.log(reduceArr.reduce(reducer, 5));  // 15

// reduce()应用场景
// 1.计算数组所有值的和
var sum = [2, 3, 4].reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0)
console.log(sum); // 9
// 2.箭头函数形式
var total = [2, 3, 4].reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(total); // 9
// 3.累加对象数组里的值
var initialValue = 0;
var sumObject = [{ x: 1, y: "he" }, { x: 2, y: 'll' }, { x: 3, y: "o" }].reduce(
  (accumulator, currentValue) => accumulator + currentValue.x,
  initialValue
);

console.log(sumObject); // 6

// 4.将二维数组转化为一维
// 5.计算数组中每个元素出现的次数
// 6.数组去重
let arrs = [2, 3, 4, 4, 5, 6, 3, 1, 5, 6, 7, 8, 4];
let result = arrs.sort().reduce((init, current) => {
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
const shiftArr = [5, 3, 4];
const firstElement = shiftArr.shift();
console.log(firstElement); // 5
console.log(typeof firstElement); // number
console.log(shiftArr);    // [3,4]


// pop()
let plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
let popped = plants.pop();
console.log(popped);        // tomato
console.log(plants);        // Array(4) [ "broccoli", "cauliflower", "cabbage", "kale" ]


const shiftArr1 = [1, 2, 3];

console.log(shiftArr1.unshift(4, 5)); // 5
console.log(shiftArr1); // [ 4, 5, 1, 2, 3 ]


// sort()
const sortArray = [4, 10, 23, 6, 28, 45];
sortArray.sort();
console.log(sortArray);