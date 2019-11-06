// Promise 第三个例子：异步加载图片
// 使用Promise包装了一个图片加载的异步操作。如果加载成功，就调用resolve方法，否则就调用reject方法


// synchronization  同步
// asynchronous		异步	
function Image(){
	console.log('Image');
}

function loadImageAsyn(url){
	return new Promise(function(resolve,reject){
		const image = new Image();
		
		image.onload = function(){
			resolve(image);
		};
		
		image.onerror = function(){
			reject(new Error('Could not load image at' + url));
		};
		
		image.src = url;
		
	});
}

loadImageAsyn().then(function(value){
	console.log('成功：'+value);
},function(error){
	console.log('失败：'+error);
})