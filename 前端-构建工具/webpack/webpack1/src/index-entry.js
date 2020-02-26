// 浏览器不能识别ES6Module/CommonJS模块导入导出规范的代码 => 必须编译

// ES6Module规范（必须在最开始引入）引入
import {
  fun2
} from './common2';

// CommonJS规范（NODE）引入
let {
  fun1
} = require('./common');


// CSS需要在我们的入口JS导入后才可以使用
require('./index.less');


fun1();
fun2();
console.log('1234');