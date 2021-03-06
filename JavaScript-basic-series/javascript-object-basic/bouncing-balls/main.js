const BALLS_COUNT = 25;
const BALL_SIZE_MIN = 10;
const BALL_SIZE_MAX = 20;
const BALL_SPEED_MAX = 7;

// 设定画布
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// 设定画布长宽
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;


// 定义一个数组来保存所有的球
const balls = [];

// 生成随机数的函数（生成一个 min 至 max 之间的随机整数）
function random(min,max) {
  return Math.floor(Math.random()*(max-min)) + min;
}

// 生成随机颜色的函数
function randomColor() {
  return 'rgb(' +
         random(0, 255) + ', ' +
         random(0, 255) + ', ' +
         random(0, 255) + ')';
}

//为程序中的小球建立模型
//定义 Ball 构造器
function Ball(x, y, velX, velY, color, size){
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.color = color;
  this.size = size;
}

//画小球
//定义绘制球的函数
Ball.prototype.draw = function(){
  ctx.save();
  ctx.beginPath();            //声明我们现在要开始在纸上画一个图形了
  ctx.fillStyle = this.color; //定义这个图形的颜色
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);//使用 arc() 方法来在纸上画出一段圆弧
  ctx.fill();//使用 fill() 方法，也就是声明我们结束了以 beginPath() 开始的绘画，并且使用我们之前设置的颜色进行填充。
  ctx.restore(); 
}


// 定义更新球的函数
Ball.prototype.update = function() {
  // x/y 坐标是小球中心的坐标

  //检查小球的 x 坐标是否大于画布的宽度（小球会从右边缘离开）
  if ((this.x + this.size) >= width) {
    this.velX = -(this.velX);
  }
  //检查小球的 x 坐标是否小于0（小球会从左边缘离开）
  if ((this.x - this.size) <= 0) {
    this.velX = -(this.velX);
  }
  //检查小球的 y 坐标是否大于画布的高度（小球会从下边缘离开）
  if ((this.y + this.size) >= height) {
    this.velY = -(this.velY);
  }
  //检查小球的 y 坐标是否小于0（小球会从上边缘离开）
  if ((this.y - this.size) <= 0) {
    this.velY = -(this.velY);
  }
  //将 velX 的值加到 x 的坐标上，将 velY 的值加到 y 坐标上 —— 每次调用这个方法的时候小球就移动这么多
  this.x += this.velX;
  this.y += this.velY;
}

//添加碰撞检测
// 定义碰撞检测函数
Ball.prototype.collisionDetect = function() {
  for (var j = 0; j < balls.length; j++) {
    if (!(this === balls[j])) {
      var dx = this.x - balls[j].x;
      var dy = this.y - balls[j].y;
      var distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + balls[j].size) {
        balls[j].color = this.color = randomColor();
      }
    }
  }
}


// 定义一个循环来不停地播放
function loop() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.fillRect(0, 0, width, height);

  while (balls.length < BALLS_COUNT) {
    const size = random(BALL_SIZE_MIN, BALL_SIZE_MAX);
    var ball = new Ball(
        //为避免绘制错误，球至少离画布边缘球本身一倍宽度的距离
        random(0 + size, width - size),
        random(0 + size, height - size),
        random(-BALL_SPEED_MAX, BALL_SPEED_MAX),
        random(-BALL_SPEED_MAX, BALL_SPEED_MAX),
        randomColor(),
        size
      );
      balls.push(ball);
    }

    for (var i = 0; i < balls.length; i++) {
      balls[i].draw();
      balls[i].update();
      balls[i].collisionDetect();
    }
    //当一个函数正在运行时传递相同的函数名，从而每隔一小段时间都会运行一次这个函数
    //递归
    requestAnimationFrame(loop);
}
loop(); 