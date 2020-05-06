// 路径必须写（webpack编译）- 依赖node,node的要求
// import * as mod1 from './mod1';

// console.log(mod1.a,mod1.b,mod1.c);

// Uncaught SyntaxError: Unexpected token * => 浏览器都不支持 =>使用webpack编译


// 只引入default
import mod1 from './mod1';

console.log(mod1);