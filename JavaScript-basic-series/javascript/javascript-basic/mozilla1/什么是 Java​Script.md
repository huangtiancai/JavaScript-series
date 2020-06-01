>预备知识:	   
计算机基础知识，初步理解 HTML 和 CSS 。
目标: 
初步了解 JavaScript，包括一些概念、用途、嵌入网站的方法。


#### 广义的定义
JavaScript 是一种脚本，一门编程语言，它可以在网页上实现复杂的功能，网页展现给你的不再是简单的静态信息，而是实时的内容更新，交互式的地图，2D/3D 动画，滚动播放的视频等等。JavaScript 怎能缺席。它是标准 Web 技术蛋糕的第三层。

![](https://raw.githubusercontent.com/huangtiancai/JavaScript-basic-series/master/imgs/Web%20%E6%8A%80%E6%9C%AF%E8%9B%8B%E7%B3%95%E4%B8%89%E5%B1%82%E5%9B%BE.png)

- HTML是一种标记语言，用来结构化我们的网页内容并赋予内容含义，例如定义段落、标题和数据表，或在页面中嵌入图片和视频。
- CSS 是一种样式规则语言，可将样式应用于 HTML 内容， 例如设置背景颜色和字体，在多个列中布局内容。
- JavaScript 是一种脚本语言，可以用来创建动态更新的内容，控制多媒体，制作图像动画，还有很多。（好吧，虽然它不是万能的，但可以通过简短的代码来实现神奇的功能。）

这三层依次建立，秩序井然。举一个文本标签的简单示例。首先用 HTML 将文本标记起来，从而赋予它结构和目的：
```
<p>玩家1：小明</p>
```
加一点css
```css
p {
        font-family: sans-serif, '黑体';
        letter-spacing: 1px;
        text-transform: uppercase;
        text-align: center;
        border: 2px solid rgba(0, 0, 200, 0.6);
        background: rgba(0, 0, 200, 0.3);
        color: rgba(0, 0, 200, 0.6);
        box-shadow: 1px 1px 2px rgba(0, 0, 200, 0.4);
        border-radius: 10px;
        padding: 3px 10px;
        display: inline-block;
        cursor: pointer;
      }
```
再加点JavaScript实现动态行为
```js
<p>玩家1：小明</p>
<script>
    const para = document.querySelector('p');
    para.addEventListener('click',updateName);
    function updateName(){
      let name = prompt("输入一个新的名字：");
      para.textContent = "玩家1："+name;
    }
</script>
```
--------------------
#### 它到底可以做什么？
JavaScript 语言的核心包含一些普遍的编程特性，以让你可以做到如下的事情：
- 在变量中储存有用的值。比如上文的示例中，我们请求客户输入一个新名字，然后将其储存到 name 变量中。
- 操作一段文本（在编程中称为“字符串”（string））。上文的示例中，我们取字符串 "玩家1："，然后把它和 name 变量连结起来，创造出完整的文本标签，比如：'玩家1：小明"。
- 运行代码以响应网页中发生的特定事件。上文的示例中，我们用一个 click事件来检测按钮什么时候被点击，然后运行代码更新文本标签。
- 以及更多！

JavaScript 语言核心之上所构建的功能更令人兴奋。**应用程序接口（Application Programming Interfaces**（**API**)）将为你的代码提供额外的超能力

***应用程序接口***
***Application Programming Interfaces***
***API***

API 是已经建立好的一套代码组件，可以让开发者实现原本很难甚至无法实现的程序。
API 通常分为两类:
- 浏览器 API 
- 第三方 API 

**浏览器 API** 内建于 web 浏览器中，它们可以使周边计算环境的数据暴露出来，还可以做实用的复杂工作。
- [文档对象模型 API（DOM（Document Object Model）API）](https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model) 能通过创建、移除和修改 HTML，为页面动态应用新样式等手段来操作 HTML 和 CSS。
比如当某个页面出现了一个弹窗，或者显示了一些新内容（像上文小 demo 中看到那样），这就是 DOM 在运行
- [地理位置 API（Geolocation API）](https://developer.mozilla.org/zh-CN/docs/Web/API/Geolocation) 获取地理信息。这就是为什么 谷歌地图 可以找到你的位置，而且标示在地图上。
- [画布（Canvas）](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API)和[WebGL](https://developer.mozilla.org/zh-CN/docs/Web/API/WebGL_API) API可以创建生动的 2D 和 3D 图像。人们正运用这些 web 技术制作令人惊叹的作品。参见 [Chrome Experiments](https://www.chromeexperiments.com/webgl) 以及 [webglsamples](http://webglsamples.org/)。
- 诸如 [HTMLMediaElement](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLMediaElement) 和 [WebRTC](https://developer.mozilla.org/zh-CN/docs/Web/API/WebRTC_API) 等 [影音类](https://developer.mozilla.org/en-US/docs/Web/Guide/Audio_and_video_delivery) API 让你可以利用多媒体做一些非常有趣的事，比如在网页中直接播放音乐和影片，或用自己的网络摄像头获取录像，然后在其他人的电脑上展示（试用简易版 截图 demo 以理解这个概念）。

>注: 上述很多演示都不能在旧浏览器中运行。推荐在测试代码时使用诸如 Firefox, Chrome, Edge 或者 Opera 等现代浏览器。当代码即将交付生产环境时（也就是真实的客户即将使用真实的代码时），你还需要深入考虑 跨平台测试。

**第三方 API** 并没有默认嵌入浏览器中，一般要从网上取得它们的代码和信息。比如
[Twitter API](https://dev.twitter.com/overview/documentation) 和 [新浪微博 API](https://open.weibo.com/) 可以在网站上展示最新推文之类。
[谷歌地图 API](https://developers.google.com/maps/) 和 [高德地图 API](https://lbs.amap.com/) 可以在网站嵌入定制的地图等等。
更多参见[客户端 Web API](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs)


***先稳住！你看到的只是冰山一角。你不可能学一天 JavaScript 就能构建下一个微博、高德地图或者微信。敬请「牢记初心，砥砺前行」***

---
#### JavaScript 在页面上做了什么？
浏览器在读取一个网页时，代码（HTML, CSS 和 JavaScript）将在一个运行环境（浏览器标签）中得到执行。就像一间工厂，将原材料（代码）加工为一件产品（网页）。

![HTML+CSS+JavaScript组装成网页](https://raw.githubusercontent.com/huangtiancai/JavaScript-basic-series/master/imgs/execution.png)

在 HTML 和 CSS 集合组装成一个网页后，浏览器的 JavaScript 引擎将执行 JavaScript 代码。这保证了当 JavaScript 开始运行之前，网页的结构和样式已经就位

这样很好，因为通过 DOM API（见上文）动态修改 HTML 和 CSS 来更新 UI 正是 JavaScript 最普遍的用处所在。如果 JavaScript 在 HTML 和 CSS 就位之前加载运行，就会引发错误。

##### 浏览器安全
每个浏览器标签页就是其自身用来运行代码的独立容器（这些容器用专业术语称为“运行环境”）。大多数情况下，每个标签页中的代码完全独立运行，而且一个标签页中的代码不能直接影响另一个标签页（或者另一个网站）中的代码。这是一个好的安全措施，如果不这样，黑客就可以从其他网站盗取信息，等等。
>注：可以用安全的方式在不同网站/标签页中传送代码和数据，但这些技术较为高级,后续再说

##### JavaScript 运行次序
当浏览器执行到一段 JavaScript 代码时，通常会按从上往下的顺序执行这段代码。这意味着你需要注意代码的顺序。比如，我们回到第一个例子中的 JavaScript 代码：

```javascript{.line-numbers}
const para = document.querySelector('p');
//用一个click事件来检测按钮什么时候被点击，然后运行代码更新文本标签
para.addEventListener('click',updateName);
function updateName(){
  let name = prompt("输入一个新的名字：");
  para.textContent = "玩家1："+name;
}
```
第1行：选定一个文本段落
第3行：给文本段落附上一个事件监听器
第4-7行：被点击时`updateName()`代码块会运行，`updateName()`（这类可重复使用的代码块称为“函数”）请求一个新的名字，然后把这个名字插入到段落中以更新显示。

如果互换前两行代码，会出现问题。浏览器开发者控制台将返回一个错误:`Uncaught ReferenceError: para is not defined`。这意味着 para 对象还不存在，所以我们不能为它增添一个事件监听器。
>`注意：`这是一个很常见的错误，在引用对象之前必须确保该对象已经存在。

##### 服务器端代码 vs 客户端代码
`客户端代码`是在用户的电脑上运行的代码，在浏览一个网页时，它的客户端代码就会被下载，然后由浏览器来运行并展示。这就是客户端 JavaScript
而`服务器端代码`在服务器上运行，浏览器将结果下载并展示出来。流行的服务器端 web 语言包括：PHP、Python、Ruby、ASP.NET 以及 JavaScript！

#####  动态代码 vs 静态代码
“**动态**”一词既能描述客户端 JavaScript，又能描述服务器端语言。是指通过按需生成新内容来更新 web 页面 / 应用，使得不同环境下显示不同内容。
`服务器端代码`会在服务器上动态生成新内容，例如从数据库中提取信息。
`客户端 JavaScript` 则在用户端浏览器中动态生成新内容，比如说创建一个新的 HTML 表格，用从服务器请求到的数据填充，然后在网页中向用户展示这个表格。
两种情况的意义略有不同，但又有所关联，且两者（服务器端和客户端）经常协同作战。

没有动态更新内容的网页叫做“**静态**”页面，所显示的内容不会改变。

#### 怎样向页面添加 JavaScript？
可以像添加 CSS 那样将 JavaScript 添加到 HTML 页面中。CSS 使用 <link> 元素链接外部样式表，使用 <style> 元素向 HTML 嵌入内部样式表，JavaScript 这里只需一个元素——<script>。我们来看看它是怎么工作的。

##### 内部 JavaScript
```javascript{.line-numbers}
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My test page</title>
  </head>

<body>
    <button>点我呀！</button>
    <script>
        document.addEventListener("DOMContentLoaded",function(){
          
          function createParagraph(){
            let para = document.createElement('p');
            alert(para);
            para.textContent = '你点击来了这个按钮！';
            document.body.appendChild(para);
          }

          const buttons =  document.querySelectorAll('button');
          alert(buttons);
          alert(buttons.length);

          for(let i = 0;  i < buttons.length;i++){
            alert(i);
            alert(buttons.length);
            buttons[i].addEventListener('click',createParagraph);
          }
        });
    </script>

</body>
</html>

```

#### 外部 JavaScript
- 1.首先，在刚才的 HTML 文件所在的目录下创建一个名为 script.js 的新文件。请确保扩展名为 .js，只有这样才能被识别为 JavaScript 代码
- 2.将<script>元素替换为：
```
<script src="script.js" async></script>
```
- 3.在 script.js 文件中，添加下面的脚本
```js
function createParagraph(){
      let para = document.createElement('p');
      para.textContent = '你点击来了这个按钮！';
      document.body.appendChild(para);
    }

    const buttons =  document.querySelectorAll('button');

    for(let i = 0;  i < buttons.length;i++){
      buttons[i].addEventListener('click',createParagraph);
    }
```
- 4.保存并刷新浏览器，你会发现二者完全一样。但是现在我们把 JavaScript 写进了一个外部文件。这样做一般会使代码更加有序，更易于复用，且没有了脚本的混合，HTML 也会更加易读，因此这是个好的习惯。




















































