# HTML5 是什么？ {#html5}

HTML5 现在已经不是 SGML 的子集，主要是关于HTML 在图像，位置，存储，多任务等功能的增加之后的集合。

- HTML 5 新增内容？

    * 绘画canvas;
    * 用于媒介回放的 video 和 audio 元素;
    * 本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失;
    * sessionStorage 的数据在浏览器关闭后自动删除;
    * 语意化更好的内容元素，比如 article、footer、header、nav、section;
    * 表单控件calendar、date、time、email、url、search;
    * 新的技术webworker, websocket, Geolocation;

- HTML 5 移除的内容：

    * 纯表现的元素：basefont，big，center，font, s，strike，tt，u;
    * 对可用性产生负面影响的元素：frame，frameset，noframes；

- HTML5 新标签如何向后兼容：

IE8/IE7/IE6支持通过document.createElement方法产生的标签，可以利用这一特性让这些浏览器支持HTML5新标签，浏览器支持新标签后，还需要添加标签默认的样式。
当然也可以直接使用成熟的框架、比如html5shim;

        <!--[if lt IE 9]>
        <script> src="http://html5shim.googlecode.com/svn/trunk/html5.js"</script>
        <![endif]-->



# 什么是web语义化,有什么好处 {#html_Semantics}

web语义化是指通过HTML标记表示页面包含的信息，包含了HTML标签的语义化和css命名的语义化。 HTML标签的语义化是指：通过使用包含语义的标签（如h1-h6）恰当地表示文档结构 css命名的语义化是指：为html标签添加有意义的class，id补充未表达的语义，如Microformat通过添加符合规则的class描述信息 为什么需要语义化：

- 去掉样式后页面呈现清晰的结构
- 盲人使用读屏器更好地阅读
- 搜索引擎更好地理解页面，有利于收录
- 便团队项目的可持续运作及维护

# 语义化新增了哪些标签 {#Semantics_element}

* header：代表“网页”或“section”的页眉,没有个数限制。
* footer：代表“网页”或“section”的页脚,没有个数限制。通常含有该节的一些基本信息，譬如：作者，相关文档链接，版权资料。
* hgroup：代表“网页”或“section”的标题和元数据组，该元素可以将h1到h6元素放在其内，譬如文章的主标题和副标题的组合
* nav：页面的导航链接区域。用于定义页面的主要导航部分。推荐单个使用。
* aside：包含在article元素中作为主要内容的附属信息部分，其中的内容可以是与当前文章有关的相关资料、标签、名次解释等。（特殊的section），或者作为侧边栏广告，其他日志链接或者其他分类导航
* section：文档中的“节”或“段”，“段”可以是指一篇文章里按照主题的分段；“节”可以是指一个页面里的分组。article、nav、aside可以理解为特殊的section，所以如果可以用article、nav、aside就不要用section，没实际意义的就用div。
* article：代表一个在文档，页面或者网站中自成一体的内容，其目的是为了让开发者独立开发或重用。
* address：作为联系信息出现，邮编地址、邮件地址等等,一般出现在footer。
* time：标记一篇文章的发布时间`<time datetime="2012-02-15" pubdate>2012年02月15日</time>`

# cookie、localStorage、sessionStorage 区别 {#cookie_localStorage_sessionStorage}

- 传递性：

    * cookie 为了标示用户身份而储存在用户本地终端（Client Side）上的数据（通常经过加密）。
    * cookie数据始终在同源的http请求中携带（即使不需要），记会在浏览器和服务器间来回传递。
    * sessionStorage 和 localStorage 不会自动把数据发给服务器，仅在本地保存。

- 存储大小：

    * cookie数据大小不能超过4k。
    * sessionStorage和localStorage 虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大。

- 有期时间：

    * localStorage 存储持久数据，浏览器关闭后数据不丢失除非主动删除数据；
    * sessionStorage 数据在当前浏览器窗口关闭后自动删除。
    * cookie 设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭










