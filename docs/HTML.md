# HTML

## 标签元素类型

- 定义

  - 所有标签元素类型都由元素的 Display 属性定义。

- 分类

  - 从标签的闭合属性区分:

    - 闭合标签：header、body、div、p、ul、li、span、i、small
    - 空标签（开始标签与结束标签之间没有内容的元素）：input、img、area、base、link

  - 从所在文档的位置属性区分:

    - 块级元素: div、p、h1......h6，ol、ul、dl、li、form、table
    - 行内元素: a、span、i、lable
    - 行内块元素（inline-block）: input、img

- 类型转化

        display:block; \(将元素变为块级元素\)
        display:inline; \(将元素变为行级元素\)
        display:inline-block;\(将元素变为行级块元素\)

## img 的 title 和 alt

- title 是 global attributes 之一，用于为元素提供附加的 advisory information。通常当鼠标滑动到元素上的时候显示。
- alt 是`<img>`的特有属性，是图片内容的等价描述，用于图片无法加载时显示、读屏器阅读图片。可提图片高可访问性，除了纯装饰图片外都必须设置有意义的值，搜索引擎会重点分析。

## DOCTYPE

- `<!doctype>`声明必须处于 HTML 文档的头部，在`<html>`标签之前，HTML5 中不区分大小写
- doctype 是一份声明指令，告诉浏览器的 html 布局引擎使用兼容模式还是标准模式对文档进行渲染
- 现代浏览器的 html 布局引擎通过检查 doctype 决定使用兼容模式还是标准模式对文档进行渲染，一些浏览器有一个接近标准模型。
- 在 HTML4.01 中`<!doctype>`声明指向一个 DTD，由于 HTML4.01 基于 SGML，所以 DTD 指定了标记规则以保证浏览器正确渲染内容
- HTML5 不基于 SGML，所以不用指定 DTD

## 兼容模式 & 标准模式

- 标准模式的排版和 JS 运作模式都是以该浏览器支持的最高标准运行;兼容模式中页面以宽松的向后兼容的方式显示来模拟老式浏览器的行为以防止站点无法工作.
- 在标准模式中：内容宽度 = width; 在兼容模式中 ：内容宽度 = width-2border-2padding
- 在标准模式中：行内元素设置宽高无效，在兼容模式中有效
- 在标准模式中：margin:0 auto 设置水平居中有效，在兼容模式中无效（需使用 text-align）
- 在兼容模式中图片的 padding 会失效，Table 中的字体属性不能继承上层的设置，white-space:pre 会失效

## iframe 缺点

- iframe 会阻塞主页面的 Onload 事件；
- 搜索引擎的检索程序无法解读这种页面，不利于 SEO;
- iframe 和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载。
- 如果需要使用 iframe，最好是通过 javascript 动态给 iframe 添加 src 属性值，这样可以绕开以上两个问题。

## HTML5

HTML5 现在已经不是 SGML 的子集，主要是关于 HTML 在图像，位置，存储，多任务等功能的增加之后的集合。

- HTML 5 新增内容？

  - 绘画 canvas;
  - 用于媒介回放的 video 和 audio 元素;
  - 本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失;
  - sessionStorage 的数据在浏览器关闭后自动删除;
  - 语意化更好的内容元素，比如 article、footer、header、nav、section;
  - 表单控件 calendar、date、time、email、url、search;
  - 新的技术 webworker, websocket, Geolocation;

- HTML 5 移除的内容：

  - 纯表现的元素：basefont，big，center，font, s，strike，tt，u;
  - 对可用性产生负面影响的元素：frame，frameset，noframes；

- HTML5 新标签如何向后兼容：

IE8/IE7/IE6 支持通过 document.createElement 方法产生的标签，可以利用这一特性让这些浏览器支持 HTML5 新标签，浏览器支持新标签后，还需要添加标签默认的样式。
当然也可以直接使用成熟的框架、比如 html5shim;

```html
<!--[if lt IE 9]>
	<script>
		src = 'http://html5shim.googlecode.com/svn/trunk/html5.js';
	</script>
<![endif]-->
```

## web 语义化

web 语义化是指通过 HTML 标记表示页面包含的信息，包含了 HTML 标签的语义化和 css 命名的语义化。 HTML 标签的语义化是指：通过使用包含语义的标签（如 h1-h6）恰当地表示文档结构 css 命名的语义化是指：为 html 标签添加有意义的 class，id 补充未表达的语义，如 Microformat 通过添加符合规则的 class 描述信息 为什么需要语义化：

- 去掉样式后页面呈现清晰的结构
- 盲人使用读屏器更好地阅读
- 搜索引擎更好地理解页面，有利于收录
- 便团队项目的可持续运作及维护

## 语义化新标签

|    标签 | 介绍                                                                                                                                                                                                              |
| ------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  header | 代表“网页”或“section”的页眉,没有个数限制。                                                                                                                                                                        |
|  footer | 代表“网页”或“section”的页脚,没有个数限制。通常含有该节的一些基本信息，譬如：作者，相关文档链接，版权资料。                                                                                                        |
|  hgroup | 代表“网页”或“section”的标题和元数据组，该元素可以将 h1 到 h6 元素放在其内，譬如文章的主标题和副标题的组合                                                                                                         |
|     nav | 页面的导航链接区域。用于定义页面的主要导航部分。推荐单个使用。                                                                                                                                                    |
|   aside | 包含在 article 元素中作为主要内容的附属信息部分，其中的内容可以是与当前文章有关的相关资料、标签、名次解释等。（特殊的 section），或者作为侧边栏广告，其他日志链接或者其他分类导航                                 |
| section | 文档中的“节”或“段”，“段”可以是指一篇文章里按照主题的分段；“节”可以是指一个页面里的分组。article、nav、aside 可以理解为特殊的 section，所以如果可以用 article、nav、aside 就不要用 section，没实际意义的就用 div。 |
| article | 代表一个在文档，页面或者网站中自成一体的内容，其目的是为了让开发者独立开发或重用。                                                                                                                                |
| address | 作为联系信息出现，邮编地址、邮件地址等等,一般出现在 footer。                                                                                                                                                      |
|    time | 标记一篇文章的发布时间 `<time datetime="2012-02-15" pubdate>2012 年 02 月 15 日</time>`                                                                                                                           |

## cookie & localStorage & sessionStorage

- 传递性：

  - cookie 为了标示用户身份而储存在用户本地终端（Client Side）上的数据（通常经过加密）。
  - cookie 数据始终在同源的 http 请求中携带（即使不需要），记会在浏览器和服务器间来回传递。
  - sessionStorage 和 localStorage 不会自动把数据发给服务器，仅在本地保存。

- 存储大小：

  - cookie 数据大小不能超过 4k。
  - sessionStorage 和 localStorage 虽然也有存储大小的限制，但比 cookie 大得多，可以达到 5M 或更大。

- 有期时间：

  - localStorage 存储持久数据，浏览器关闭后数据不丢失除非主动删除数据；
  - sessionStorage 数据在当前浏览器窗口关闭后自动删除。
  - cookie 设置的 cookie 过期时间之前一直有效，即使窗口或浏览器关闭

## HTML5 离线存储

> HTML5 的离线存储是基于一个新建的.appcache 文件的缓存机制\(不是存储技术\)，通过这个文件上的解析清单离线存储资源，这些资源就会像 cookie 一样被存储了下来。之后当网络在处于离线状态下时，浏览器会通过被离线存储的数据进行页面展示。

- 页面头部像下面一样加入一个 manifest 的属性

```html
<!DOCTYPE html>
<html manifest="cache.manifest">
	...
</html>
```

- 在 cache.manifest 文件的编写离线存储的资源

```sh
CACHE MANIFEST
#v0.11
CACHE:
  js/app.js
css/style.css
  NETWORK:
  resourse/logo.png
FALLBACK:
  / /offline.html
```

### 离线存储的 manifest 一般由三个部分组成：

1. CACHE：必选，表示需要离线存储的资源列表，由于包含 manifest 文件的页面将被自动离线存储，所以不需要把页面自身也列出来。
2. NETWORK：可选，可以使用通配符，表示在它下面列出来的资源只有在在线的情况下才能访问，他们不会被离线存储，所以在离线情况下无法使用这些资源。不过，如果在 CACHE 和 NETWORK 中有一个相同的资源，那么这个资源还是会被离线存储，也就是说 CACHE 的优先级更高。
3. FALLBACK：可选，表示如果访问第一个资源失败，那么就使用第二个资源来替换他，如/html/ /404.html 表示用 “404.html” 替代 /html/ 目录中的所有文件，/ /404.html 表示用 “404.html” 替代当前目录中的所有文件，\*.html /404.html 表示用 “404.html” 替代 所有 html 文件。

_注意 :manifest 文件最好不要设置缓存, manifest 文件和离线资源 要一起更新，如果某个资源由于某种原因下载失败，那么这次的所有更新就算是失败的，浏览器还是会使用原来的资源；在更新了资源之后，新的资源需要到下次再打开 app 才会生效，如果需要资源马上就能生效，那么可以使用 window.applicationCache.swapCache\(\)方法来使之生效，出现这种现象的原因是浏览器会先使用离线资源加载页面，然后再去检查 manifest 是否有更新，所以需要到下次打开页面才能生效。_

参考资料：https://developer.mozilla.org/zh-CN/docs/Web/Manifest
