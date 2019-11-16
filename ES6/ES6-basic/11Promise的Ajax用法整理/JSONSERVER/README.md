搭建本地的和数据接口：

# 全局安装JSONSERVER
 npm install  -g json-server

# 进入目录
cd ../user-manage/JSONSERVER

# 初始化
npm init

# 其他如下：
```
package name: (jsonserver) jsonserver
version: (1.0.0)
description: test restful api
entry point: (index.js) => 入口文件
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to C:\GitHub\LocalGithub\vue-series\vue\vue\user-manage\JSONSERVER\package.json:

{
  "name": "jsonserver",
  "version": "1.0.0",
  "description": "test restful api",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this OK? (yes)
```

# 生成package.json

# 安装json-server模块（当前项目安装，注意与全局的区别）        
npm install json-server --save
    --save:将当前安装的东西存到package.json中

# 当前文件夹创建db.json
 
# Start JSON Server 启动JSON Server
json-server --watch db.json => 放到package.json中的test位置
启动json:server 会执行"json-server --watch db.json"

npm run json:server

```
$ npm run json:server

> jsonserver@1.0.0 json:server C:\GitHub\LocalGithub\vue-series\vue\vue\user-manage\JSONSERVER
> json-server --watch db.json


  \{^_^}/ hi!

  Loading db.json
  Done

  Resources
  http://localhost:3000/users
  http://localhost:3000/companies

  Home
  http://localhost:3000

  Type s + enter at any time to create a snapshot of the database
  Watching...
```

访问：
http://localhost:3000 主页

To access and modify resources, you can use any HTTP method:
*GET POST PUT PATCH DELETE OPTIONS*

# Get-请求
获取所有用户信息：
http://localhost:3000/users

获取id为1的用户信息：
http://localhost:3000/users/1

获取所有公司的信息：
http://localhost:3000/companies

获取id为1的公司的信息：
http://localhost:3000/companies/1

获取隶属于id为3公司的用户信息信息：
http://localhost:3000/companies/3/users

根据公司名字获取信息：
http://localhost:3000/companies?name=Microsoft

根据多个公司名字获取信息：
http://localhost:3000/companies?name=Microsoft&name=Google

获取一页中只有两条数据
http://localhost:3000/companies?_page=1&_limit=2

根据name进行排序，升序
http://localhost:3000/companies?_sort=name&_order=asc

根据name进行排序，升序
http://localhost:3000/companies?_sort=name&_order=desc

获取年龄30及以上的用户信息
http://localhost:3000/users?age_gte=30

获取年龄在30-40的用户信息
http://localhost:3000/users?age_gte=30&age_lte=40

搜索用户信息
http://localhost:3000/users?q=tom
http://localhost:3000/users?q=t
http://localhost:3000/users?q=j

更多参考：https://github.com/typicode/json-server


# POST
使用postman
POST:http://localhost:3000/users
Headers:
Content-Type:application/json
Body:raw


```
{
	"name":"spring",
	"email":"22@qq.com",
	"companyID":3
}
```

Send => 返回如下，自动添加id => db.json增加了一个对象（POST请求已经成功，本地存储持久化）
```
{
  "name": "spring",
  "email": "22@qq.com",
  "companyID": 3,
  "id": 5
}
```

# DELETE
DELETE:http://localhost:3000/users/5

# PATCH 更新
PATCH:http://localhost:3000/users/3
更新id为3的name
```
{
	"name":"sum"
}
```
Send => 返回
```
{
  "name": "sum",
  "phone": "333-444-555",
  "email": "john@gmail.com",
  "id": 3,
  "age": 35,
  "companyId": 3
}
```

# Remote schema
You can load remote schemas.
json-server http://example.com/file.json

将jsonplaceholder数据拿到本地 => 在package.json配置
json-server http://jsonplaceholder.typicode.com/db

重启：
npm run json:server:remote

```
$ npm run json:server:remote

> jsonserver@1.0.0 json:server:remote C:\GitHub\LocalGithub\vue-series\vue\vue\user-manage\JSONSERVER
> json-server http://jsonplaceholder.typicode.com/db


  \{^_^}/ hi!

  Loading http://jsonplaceholder.typicode.com/db
  Done

  Resources
  http://localhost:3000/posts
  http://localhost:3000/comments
  http://localhost:3000/albums
  http://localhost:3000/photos
  http://localhost:3000/users
  http://localhost:3000/todos

  Home
  http://localhost:3000
```


# 后续完成vuec项目