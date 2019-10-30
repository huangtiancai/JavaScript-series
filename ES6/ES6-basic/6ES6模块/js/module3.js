//暴露模块：采用默认暴露的方式。
//默认暴露的方式可以暴露任意数据类型，暴露的是什么数据，接收到的就是什么数据

//语法格式：export default value; => 暴露方式（默认暴露），在暴露时，加上了default这个关键字

// 代码里暴露了一个箭头函数
export default() => {
    console.log('我是module3中default方式暴露的函数');
}