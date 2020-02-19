## 获取 ECharts
1. 从 Apache ECharts (incubating) 官网下载界面 获取官方源码包后构建。
2. 在 ECharts 的 GitHub 获取。
3. 通过 npm 获取 echarts，npm install echarts --save，详见“在 webpack 中使用 echarts”
4. 通过 jsDelivr 等 CDN 引入

## CDN引入/JS文件直接引入

## 自定义构建 ECharts
一般来说可以直接从 CDN 中获取构建后的 echarts
也可以从 GitHub 中的 echarts/dist 文件夹中获取构建好的 echarts，这都可以直接在浏览器端项目中使用

- 完全版：echarts/dist/echarts.js，体积最大，包含所有的图表和组件，所包含内容参见：echarts/echarts.all.js。
- 常用版：echarts/dist/echarts.common.js，体积适中，包含常见的图表和组件，所包含内容参见：echarts/echarts.common.js。
- 精简版：echarts/dist/echarts.simple.js，体积较小，仅包含最常用的图表和组件，所包含内容参见：echarts/echarts.simple.js。

也可以自己构建 echarts，能够仅仅包括自己所需要的图表和组件。可以用这几种方式自定义构建：
- 在线自定义构建：比较方便
- 使用 echarts/build/build.js 脚本自定义构建：比在线构建更灵活一点，并且支持多语言
- 直接使用构建工具（如 rollup、webpack、browserify）自己构建：也是一种选择

=> 介绍后两种方式 => 1.使用 echarts/build/build.js 脚本自定义构建
                    2.直接使用构建工具

### 准备工作：创建自己的工程和安装 echarts
使用命令行，创建自己的工程：
```
mkdir myProject
cd myProject
```

在 myProject 目录下使用命令行，初始化工程的 npm 环境并安装 echarts（这里前提是您已经安装了 npm）：
```
npm init
npm install echarts --save
```

通过 npm 安装的 echarts 会出现在 myProject/node_modules 目录下，从而可以直接在项目代码中得到 echarts，例如：
使用 ES Module
```
import * as echarts from 'echarts'
```
使用 CommonJS(Node规范)：
```
var echarts = require('echarts')
```

下面仅以使用 ES Module 的方式来举例

### 使用 echarts 提供的构建脚本自定义构建 - echarts/build/build.js
需求：创建一个饼图，并且想自定义构建一个只含有饼图的 echarts 文件，从而能使 echarts 文件的大小比较小一些

echarts 已经提供了构建脚本 echarts/build/build.js，基于 Node.js 运行。我们可以在 myProject 目录下使用命令行，看到它的使用方式：
```
node node_modules/echarts/build/build.js --help
```

- 自定义构建一个只含有饼图的 echarts 文件
我们需要创建一个入口文件，可以命名为 myProject/echarts.custom.js

- 在 myProject 目录下使用命令行，这样开始构建：
```
node node_modules/echarts/build/build.js --min -i echarts.custom.js -o lib/echarts.custom.min.js
```
=> myProject/lib/echarts.custom.min.js 就生成了 => 可以创建 myProject/pie.html 来使用它
=> 按照流程可正常绘制饼图


### 允许被引用的模块
在自定义构建中，允许被引用的模块，全声明在:
myProject/node_module/echarts/echarts.all.js
myProject/node_module/echarts/src/export.js

### 引用 echarts/lib/** 还是 echarts/src/**
- 项目中如果直接引用 echarts 里的一些模块并自行构建，应该使用 echarts/lib/** 路径，而不可使用 echarts/src/**。
- 当使用构建脚本 echarts/build/build.js 打包 bundle，那么两者可以选其一使用（不可混用），使用 echarts/src/** 可以获得稍微小一些的文件体积


### 直接使用 rollup 自定义构建
上面介绍了如何使用 echarts 提供的脚本 echarts/build/build.js 自定义构建；
与此并列的另一种选择是，我们直接使用构建工具（如 rollup、webpack、browserify）自定义构建，并且把 echarts 代码和项目代码在构建成一体


下面我们仅仅介绍如何使用 rollup 来构建：
1. 首先我们在 myProject 目录下使用 npm 安装 rollup：
```
npm install rollup --save-dev
npm install rollup-plugin-node-resolve --save-dev
npm install rollup-plugin-uglify --save-dev
```
2. 接下来创建项目 JS 文件 myProject/line.js 来绘制图表
3. 在line.html引用line.js
4. 对于不支持 ES Module 的浏览器而言，刚才创建的 myProject/line.js 还不能直接被网页引用并在浏览器中运行，需要进行构建 => 使用 rollup 构建前，需要创建它的配置文件 myProject/rollup.config.js
5. 创建配置文件myProject/rollup.config.js

rollup => 参考:https://blog.suisuijiang.com/use-rollup.js-compile-javascript-code
