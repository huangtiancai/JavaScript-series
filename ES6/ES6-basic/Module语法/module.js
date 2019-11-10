// CommonJS 模块
let {stat,exsits,readFile} = require('fs');

// 等同于 => 整体加载fs模块（即加载fs的所有方法），生成一个对象（_fs）
let _fs = require('fs');
// 然后再从这个对象上面读取 3 个方法 => 运行时加载
let stat = _fs.stat;
let exsits = _fs.exists;
let readFile = _fs.readFile;


// ES 模块 => 实质是从fs模块加载 3 个方法，其他方法不加载 => 编译时加载/静态加载
import {stat,exsits,readFile} from 'fs';


// 优点：ES6 可以在编译时就完成模块加载，效率要比 CommonJS 模块的加载方式高
