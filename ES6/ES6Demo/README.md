全局安装 Babel-cli

1.初始化项目:npm init -y => 初始化项目后生成 => `package.json`
2.全局安装 Babel-cli：`npm install -g babel-cli`
3.本地安装 babel-preset-es2015 和 babel-cli:`npm install --save-dev babel-preset-es2015 babel-cli`
4.新建.babelrc => 输入:

{
     "presets": [
         "es2015"
     ],
     "plugins": []
 }

5.开始转换
现在，我们应该可以将 ES6 的文件转化为 ES5 的文件了，命令如下：（此命令略显复杂）
`babel src/index.js -o dist/index.js`

对命令进行简化，操作如下：
在文件 package.json 中修改键 scripts中的内容：

 "scripts": {
    ` "build": "babel src/index.js -o dist/index.js"`
 },


目前为止，环境配置好了
以后，我们执行如下命令，即可将src/index.js这个 ES6 文件转化为 dist/index.js这个 ES5 文件：
`npm run build`

