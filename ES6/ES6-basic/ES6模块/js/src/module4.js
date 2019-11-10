//暴露模块：采用默认暴露的方式。
//默认暴露的方式可以暴露任意数据类型，暴露的是什么数据，接收到的就是什么数据

//语法格式：export default value;



// 如果想暴露多个属性、多个对象怎呢？很简单，把你想要暴露的所有内容，都放在default里，包成一个对象。
// 如下module4.js就是如此， 同时暴露了多个属性&方法。

// default方式暴露多个属性,代码里暴露了一个对象（一个对象有多个属性或方法）
export default{
    name: '我是 module4 中 default 方式暴露的属性 name',
    foo(){
        console.log('我是module4中default方式暴露的函数');
    }
}

