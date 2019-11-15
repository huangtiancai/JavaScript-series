HTTP是一个基于TCP/IP通信协议来传递数据（HTML 文件, 图片文件, 查询结果等）
HTTP协议是Hyper Text Transfer Protocol（超文本传输协议）

## HTTP 工作原理
HTTP协议工作于客户端-服务端架构上。
浏览器作为HTTP客户端通过URL向HTTP服务端即WEB服务器发送所有请求。

## HTTP 消息结构
### 客户端请求消息
客户端发送一个HTTP请求到服务器的请求消息包括以下格式：
请求行（request line）
请求头部（header）
空行和请求数据
四个部分组成，下图给出了请求报文的一般格式。

### 服务器响应消息
HTTP响应也由四个部分组成，分别是：状态行、消息报头、空行和响应正文

## HTTP 请求方法
HTTP1.0 定义了三种请求方法： GET, POST 和 HEAD方法。
HTTP1.1 新增了六种请求方法：OPTIONS、PUT、PATCH、DELETE、TRACE 和 CONNECT 方法
序号    方法	     描述
1	    GET	        请求指定的页面信息，并返回实体主体。
2	    HEAD	    类似于 GET 请求，只不过返回的响应中没有具体的内容，用于获取报头
3	    POST	    向指定资源提交数据进行处理请求（例如提交表单或者上传文件）。数据被包含在请求体中。
4	    PUT	        从客户端向服务器传送的数据取代指定的文档的内容。
5	    DELETE	    请求服务器删除指定的页面。
6	    CONNECT	    HTTP/1.1 协议中预留给能够将连接改为管道方式的代理服务器。
7	    OPTIONS	    允许客户端查看服务器的性能。
8	    TRACE	    回显服务器收到的请求，主要用于测试或诊断。
9	    PATCH	    是对 PUT 方法的补充，用来对已知资源进行局部更新 。

主要：
GET
POST
DELETE
PATCH 更新

## HTTP 响应头信息
https://www.runoob.com/http/http-header-fields.html
https://cloud.tencent.com/developer/section/1189894

Access-Control-Allow-Credentials:true 响应头表示是否可以将对请求的响应暴露给页面
Content-Encoding    使用gzip压缩
Content-Length      表示内容长度
Content-Type
Date：当前的GMT时间
Server：服务器名字。Servlet一般不设置这个值，而是由Web服务器自己设置 => 如 Server: nginx/1.6.3

## HTTP content-type
Content-Type（内容类型），一般是指网页中存在的 Content-Type，用于定义网络文件的类型和网页的编码，决定浏览器将以什么形式、什么编码读取这个文件。

Content-Type 标头告诉客户端实际返回的内容的内容类型。
语法格式：
```
Content-Type: application/json; charset=utf-8
Content-Type: multipart/form-data; boundary=something
```



MediaType,即是Internet Media Type,互联网媒体类型；也叫做MIME类型， 在Http协议消息头中，使用Content-Type来表示具体请求中的媒体类型信息。
常见的Content-Type类型:
常见的媒体格式类型如下：
    - text/html  HTML格式
    - text/plain ：纯文本格式      
    - text/xml ：  XML格式
    - image/gif ：gif图片格式    
    - image/jpeg ：jpg图片格式 
    - image/png：png图片格式
以application开头的媒体格式类型：
    - application/xhtml+xml ：XHTML格式
    - application/xml     ： XML数据格式
    - application/atom+xml  ：Atom XML聚合格式    
    - application/json    ： JSON数据格式
    - application/pdf       ：pdf格式  
    - application/msword  ： Word文档格式
    - application/octet-stream ： 二进制流数据（如常见的文件下载）
    - application/x-www-form-urlencoded ： <form encType=””>中默认的encType，form表单数据被编码为key/value格式发送到服务器（表单默认的提交数据的格式）
另外一种常见的媒体格式是上传文件之时使用的：
    - multipart/form-data ： 需要在表单中进行文件上传时，就需要使用该格式

## HTTP状态码
当浏览者访问一个网页时，浏览者的浏览器会向网页所在服务器发出请求。
当浏览器接收并显示网页前，此网页所在的服务器会返回一个包含HTTP状态码的信息头（server header）用以响应浏览器的请求。

下面是常见的HTTP状态码：
200 - 请求成功
301 - 资源（网页等）被永久转移到其它URL
404 - 请求的资源（网页等）不存在
500 - 内部服务器错误

## HTTP状态码分类
1**	    信息，服务器收到请求，需要请求者继续执行操作
2**	    成功，操作被成功接收并处理
3**	    重定向，需要进一步的操作以完成请求
4**	    客户端错误，请求包含语法错误或无法完成请求
5**	    服务器错误，服务器在处理请求的过程中发生了错误

常见的HTTP状态码列表:
100
101	Switching Protocols	切换协议。服务器根据客户端的请求切换协议。只能切换到更高级的协议
200	OK	请求成功。一般用于GET与POST请求
201
202
203
204	No Content	无内容。服务器成功处理，但未返回内容。在未更新网页的情况下，可确保浏览器继续显示当前文档
205
206
300
301
302
303
304	Not Modified 未修改。所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源
305
306
307
400
401
402
403
404	Not Found	服务器无法根据客户端的请求找到资源（网页）。通过此代码，网站设计人员可设置"您所请求的资源无法找到"的个性页面
405
...
417
500 - 内部服务器错误
501
502
503
504
505