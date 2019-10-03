# HTML5 - 高级篇

## 1. 请说说你对标签语义化的理解？

- 去掉或者丢失样式的时候能够让页面呈现出清晰的结构

- 有利于SEO：和搜索引擎建立良好沟通，有助于爬虫抓取更多的有效信息：爬虫依赖于标签来确定上下文和各个关键字的权重；
 
- 方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以意义的方式来渲染网页；

- 便于团队开发和维护，语义化更具可读性，遵循W3C标准的团队都遵循这个标准，可以减少差异化。


## 2. html5有哪些新特性、移除了那些元素？

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

## 3. HTML5的文件离线储存怎么使用，工作原理是什么？


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

## 4. 页面资源预加载(Link prefetch)

> 页面资源预加载(Link prefetch)是浏览器提供的一个技巧，目的是让浏览器在空闲时间下载或预读取一些文档资源，用户在将来将会访问这些资源。一个Web页面可以对浏览器设置一系列的预加载指示，当浏览器加载完当前页面后，它会在后台静悄悄的加载指定的文档，并把它们存储在缓存里。当用户访问到这些预加载的文档后，浏览器能快速的从缓存里提取给用户。

- ### 为什么需要预加载？ 

用户可能是第一次访问网站或者清空了浏览器缓存，总之当前页面没缓存

用户可能要访问的下一个页面的资源，预先加载，秒打开体验更好

- ### DNS prefetch 预解析

我们知道，当我们访问一个网站如 www.amazon.com 时，需要将这个域名先转化为对应的 IP 地址，这是一个非常耗时的过程。

DNS prefetch 分析这个页面需要的资源所在的域名，浏览器空闲时提前将这些域名转化为 IP 地址，真正请求资源时就避免了上述这个过程的时间。

```angular2html
<meta http-equiv='x-dns-prefetch-control' content='on'>
<link rel='dns-prefetch' href='http://g-ecx.images-amazon.com'>
<link rel='dns-prefetch' href='http://z-ecx.images-amazon.com'>
```

- ### Resource prefetch 资源预加载

在 Chrome 下，我们可以用 link标签声明特定文件的预加载：

```angular2html
<link rel='subresource' href='critical.js'>
<link rel='subresource' href='main.css'>

<link rel='prefetch' href='secondary.js'>

<!--在 Firefox 中或用 meta 标签声明：-->
<meta http-equiv="Link" content="<critical.js>; rel=prefetch">
```
rel='subresource' 表示当前页面必须加载的资源，应该放到页面最顶端先加载，有最高的优先级。

rel='prefetch' 表示当 subresource 所有资源都加载完后，开始预加载这里指定的资源，有最低的优先级。

注意：只有可缓存的资源才进行预加载，否则浪费资源！


- ### Pre render 预渲染

预渲染提前加载好用户即将访问的下一个页面，慎用！

```angular2html
<link rel='prerender' href='http://www.pagetoprerender.com'>

<!--在 Firefox 中或用 rel='next' 来声明-->
<link rel="next" href="http://www.pagetoprerender.com">
```












