> HTML 5是什么？

HTML5 现在已经不是 SGML 的子集，主要是关于HTML 在图像，位置，存储，多任务等功能的增加之后的集合。

> HTML 5 新增内容？

```
绘画canvas;

用于媒介回放的 video 和 audio 元素;

本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失;

sessionStorage 的数据在浏览器关闭后自动删除;

语意化更好的内容元素，比如 article、footer、header、nav、section;

表单控件calendar、date、time、email、url、search;

新的技术webworker, websocket, Geolocation;
```

移除的元素：

```
纯表现的元素：basefont，big，center，font, s，strike，tt，u;



对可用性产生负面影响的元素：frame，frameset，noframes；
```

\* 支持HTML5新标签：

```
   IE8/IE7/IE6支持通过document.createElement方法产生的标签，

     可以利用这一特性让这些浏览器支持HTML5新标签，

     浏览器支持新标签后，还需要添加标签默认的样式。



   当然也可以直接使用成熟的框架、比如html5shim;
```

&lt;

!--\[if lt IE 9\]

&gt;

&lt;

script

&gt;

src="[http://html5shim.googlecode.com/svn/trunk/html5.js](http://html5shim.googlecode.com/svn/trunk/html5.js)"

&lt;

/script

&gt;

&lt;

!\[endif\]--

&gt;

\* 如何区分HTML5： DOCTYPE声明\新增的结构元素\功能元素
