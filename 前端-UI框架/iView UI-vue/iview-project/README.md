# iView-project

This project is build for Vue.js 2 + vue-router + webpack2 + iView 3, just install and run.

## Install
```bush
// install dependencies
npm install
```
## Run
### Development
```bush
// For the first time, run init to create index.html
npm run init
npm run dev
```
### Production(Build)
```bush
npm run build
```

若构建失败：
```
  throw new ERR_INVALID_CALLBACK();
  ^
 
TypeError [ERR_INVALID_CALLBACK]: Callback must be a function

```
问题原因：node 版本问题，node v10 以上 fs.write 的callback 是必须的，降低Node版本可解决。
不安装node也可以，可以将webpack.dev.config.js 和 webpack.prod.config.js 中的代码修改即可：给fs.write添加必要的callback函数，具体操作是修改以上两个文件中的以下代码：
```
fs.write(fd, buf, 0, buf.length, 0, function(err, written, buffer) {});
```
修改为：
``` 
fs.write(fd, buf, 0, 'utf-8', function(err, written, buffer) {});
```
