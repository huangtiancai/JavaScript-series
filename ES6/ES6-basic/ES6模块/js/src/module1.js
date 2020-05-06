// let myName = 'ES6';
// let myAge = '20';
// let myFn = function(){
//     return "my name is" + myName + "! and I'm" + myAge + "years old.";
// }

// let myClass = class myClass{
//     static a = 'spring';
// }

// export {myName,myAge,myFn,myClass}


// 暴露模块：采用分别暴露的方式
export function foo1(){
     console.log('我是module1中的foo1');
}

export function foo2() {
    console.log('我是module1中的foo2');
}

export let arr = [1,2,3,4,5];

