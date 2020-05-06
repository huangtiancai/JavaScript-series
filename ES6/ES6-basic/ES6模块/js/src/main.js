//主模块引入其他的模块

// module1和module2是采用常规暴露的形式，在引入它们时，模块名要一致,而且，要求用对象解构赋值的形式，而不是用 import myModule from ...这种形式（否则会报错 undefined）
// module3和module4是采用默认暴露的形式，在引入它们时，模块名随便起


// 采用解构赋值的形式进行导入 
import {foo1,foo2} from './module1';   //  注意，括号里的对象名，要和 module1 中的对象名一致
import {fn1,fn2} from './module2';     //  注意，括号里的对象名，要和 module2 中的对象名一致
import myModule3 from './module3';
import myModule4 from './module4';

// 调用module1、module2中的内容
foo1();
foo2();
fn1();
fn2();

// 调用module3中的内容
myModule3();

// 调用module4
console.log(myModule4.name); // module4中的属性
myModule4.foo();            // module4中的方法


