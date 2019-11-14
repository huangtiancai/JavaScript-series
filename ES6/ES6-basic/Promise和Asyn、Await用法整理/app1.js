//Promise和Async/Await用法整理

// 2.prototype 属性允许您向对象添加属性和方法
// 注意： Prototype 是全局属性，适用于所有的 Javascript 对象。

	function Employee(name,age,born){
		this.name = name;
		this.age = age;
		this.born = born;
	}

	var em = new Employee('tom',10,'2000-11-11');
	console.log(em.name);
	
	// 添加属性
	Employee.prototype.hobby = 'this is a new property';
	console.log(em.hobby);
	
	// 添加方法
	Employee.prototype.getTime = function(){
		return new Date().toString();
	}
	
	console.log(em.getTime());
	
// Promise实例具有then方法 Promise.prototype.then => then方法是定义在原型上的
// 作用是为Promise实例添加状态改变时的回调函数
// 1.then(fun1,fun2)
// 2.then(fun1)
// 3.then(null,fun2)
	
	// 随机数
	let p = new Promise((resolve,reject) => {
		let m = Math.random();
		if(m>0.5){
			resolve('m>0.5');
		}else{
			reject('m<=0.5');
		}
	});
	
	console.log(p);  // Promise { 'm>0.5' } 或 Promise { <rejected> 'm<=0.5' }
	
	p.then(result => {
		console.log('resolve',result); // resolve m>0.5
	},result => {
		console.log('reject',result);  // reject m<=0.5
	});
	








