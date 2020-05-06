// 第一种:分模块输出三个变量
export var firstname = 'tom';
export var lastname = 'tom';
export var year = '1999';


// 第二种：统一输出变量
var firstname = 'tom';
var lastname = 'tom';
var year = '1999';

export {firstname,lastname,year};

// 输出函数或类（class）
// 对外输出一个函数multiply
export function multiply(x,y){
    return x*y;
}

// 通常情况下，export输出的变量就是本来的名字，但是可以使用as关键字重命名
function function1(){};
function function2(){};

export {
    function1 as fn1,
    function2 as fn2,
    function2 as fun2,
    // 使用as关键字，重命名了函数v1和v2的对外接口。重命名后，v2可以用不同的名字输出两次。
}


// export命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系
// 报错
// export 1;
// 报错
// m = 1;
// export m; 

// 上面两种写法都会报错，因为没有提供对外的接口:
// 第一种写法直接输出 1;
// 第二种写法通过变量m，还是直接输出 1。1只是一个值，不是接口

// 同样的，function和class的输出，也必须遵守这样的写法
// 报错
// function f(){};
// export f;

// 正确
export function f1(){};

// 正确
function f2() {};
export {f2};

// export语句输出的接口，与其对应的值是动态绑定关系，即通过该接口，可以取到模块内部实时的值
export var foo = 'bar';
setTimeout(() => { foo = 'car' },500);
// 上面代码输出变量foo，值为bar，500 毫秒之后输出的变量值变成car

// 最后，export命令可以出现在模块的任何位置，只要处于模块顶层就可以。如果处于块级作用域内，就会报错，下一节的import命令也是如此

