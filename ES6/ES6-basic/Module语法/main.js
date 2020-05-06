// import命令接受一对大括号，里面指定要从其他模块导入的变量名
// 大括号里面的变量名，必须与被导入模块（profile.js）对外接口的名称相同。
import {firstname,lastname,year}  from './profile.js';

// 为输入变量取名
import {lastname as surname} from './profile.js';

// import后面的from指定模块文件的位置：相对路径/绝对路径
// .js可省略

// 如果只是模块名，不带有路径，那么必须有配置文件，告诉 JavaScript 引擎该模块的位置
import {myMethod} from 'util';

// import命令具有提升效果
foo();
import {foo} from 'my_module';

// import语句会执行所加载的模块，因此可以有下面的写法
import 'lodash'; //仅执行lodash模块，但是不输入任何值

// 虽然foo和bar在两个语句中加载，但是它们对应的是同一个my_module实例
// 也就是说，import语句是 Singleton 模式
import { foo } from 'my_module';
import { bar } from 'my_module';

// 等同于
import { foo, bar } from 'my_module';


// 加载 circle.js
import {area,circumference} from './circle';
