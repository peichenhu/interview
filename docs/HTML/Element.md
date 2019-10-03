# HTML - 基础篇

### 1. `<img>` 标签上 title 属性与 alt 属性的区别是什么？

- alt属性是为了给那些不能看到你文档中图像的浏览者提供文字说明的。且长度必须少于100个英文字符或者用户必须保证替换文字尽可能的短。

- 这包括那些使用本来就不支持图像显示或者图像显示被关闭的浏览器的用户，视觉障碍的用户和使用屏幕阅读器的用户等。

- title属性为设置该属性的元素提供建议性的信息。使用title属性提供非本质的额外信息。参考《alt和title属性的区别及应用》


### 2. 请说说你对标签语义化的理解？

- 去掉或者丢失样式的时候能够让页面呈现出清晰的结构

- 有利于SEO：和搜索引擎建立良好沟通，有助于爬虫抓取更多的有效信息：爬虫依赖于标签来确定上下文和各个关键字的权重；
 
- 方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以意义的方式来渲染网页；

- 便于团队开发和维护，语义化更具可读性，遵循W3C标准的团队都遵循这个标准，可以减少差异化。

### 3. Doctype作用? 严格模式与混杂模式如何区分？它们有何意义?

- 声明位于文档中的最前面，处于 标签之前。告知浏览器以何种模式来渲染文档。

- 严格模式的排版和 JS 运作模式是，以该浏览器支持的最高标准运行。

- 在混杂模式中，页面以宽松的向后兼容的方式显示。模拟老式浏览器的行为以防止站点无法工作。

- DOCTYPE不存在或格式不正确会导致文档以混杂模式呈现。

### 4. HTML与XHTML —— 二者有什么区别?

- XHTML 元素必须被正确地嵌套。

- XHTML 元素必须被关闭。

- 标签名必须用小写字母。

- XHTML 文档必须拥有根元素。

### 5. html5有哪些新特性、移除了那些元素？

**新特性：**

- HTML5 现在已经不是 SGML 的子集，主要是关于图像，位置，存储，多任务等功能的增加。

- 拖拽释放(Drag and drop) API

- 语义化更好的内容标签（header,nav,footer,aside,article,section）

- 音频、视频API(audio,video)

- 画布(Canvas) API

- 地理(Geolocation) API

- 本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失

- sessionStorage 的数据在页面会话结束时会被清除

- 表单控件，calendar、date、time、email、url、search

- 新的技术webworker, websocket等

**移除的元素：**

- 纯表现的元素：basefont，big，center, s，strike，tt，u；

- 对可用性产生负面影响的元素：frame，frameset，noframes；

### 6. 简述一下src与href的区别

- src用于替换当前元素；href用于在当前文档和引用资源之间确立联系。

- src是source的缩写，指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置

- href是Hypertext Reference的缩写，指向网络资源所在位置，建立和当前元素（锚点）或当前文档（链接）之间的链接

### 7. HTML5的文件离线储存怎么使用，工作原理是什么？


在线情况下，浏览器发现HTML头部有manifest属性，它会请求manifest文件，如果是第一次访问，那么浏览器就会根据manifest文件的内容下载相应的资源，并进行离线存储。如果已经访问过并且资源已经离线存储了，那么浏览器就会使用离线的资源加载页面。然后浏览器会对比新的manifest文件与旧的manifest文件，如果文件没有发生改变，就不会做任何操作，如果文件改变了，那么就会重新下载文件中的资源，并且进行离线存储。例如，

在页面头部加入manifest属性

```html
<html manifest='cache.manifest'>
```

在cache.manifest文件中编写离线存储的资源

```bash
CACHE MANIFEST
#v0.11
CACHE:
js/app.js
css/style.css

NETWORK:
Resourse/logo.png

FALLBACK:
 //offline.html
```