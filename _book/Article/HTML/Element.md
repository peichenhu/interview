# 标签元素类型定义？

- 定义

    * 所有标签元素类型都由元素的Display属性定义。

- 分类

    * 从标签的闭合属性区分:

        + 闭合标签：header、body、div、p、ul、li、span、i、small    
        + 空标签（开始标签与结束标签之间没有内容的元素）：input、img、area、base、link

    * 从所在文档的位置属性区分:

        + 块级元素:  div、p、h1......h6，ol、ul、dl、li、form、table
        + 行内元素: a、span、i、lable
        + 行内块元素（inline-block）: input、img

- 类型转化

        display:block; \(将元素变为块级元素\)
        display:inline; \(将元素变为行级元素\)
        display:inline-block;\(将元素变为行级块元素\)


# img 的title和alt有什么区别 {#img_title_alt}
- title是global attributes之一，用于为元素提供附加的advisory information。通常当鼠标滑动到元素上的时候显示。
- alt是`<img>`的特有属性，是图片内容的等价描述，用于图片无法加载时显示、读屏器阅读图片。可提图片高可访问性，除了纯装饰图片外都必须设置有意义的值，搜索引擎会重点分析。

# doctype是什么,举例常见doctype及特点 {#doctype}
- <!doctype>声明必须处于HTML文档的头部，在<html>标签之前，HTML5中不区分大小写
- doctype 是一份声明指令，告诉浏览器的html布局引擎使用兼容模式还是标准模式对文档进行渲染
- 现代浏览器的html布局引擎通过检查doctype决定使用兼容模式还是标准模式对文档进行渲染，一些浏览器有一个接近标准模型。
- 在HTML4.01中<!doctype>声明指向一个DTD，由于HTML4.01基于SGML，所以DTD指定了标记规则以保证浏览器正确渲染内容
- HTML5不基于SGML，所以不用指定DTD


# 兼容模式还是标准模式的区别在哪里？ {#strict_compatible}
- 标准模式的排版和JS运作模式都是以该浏览器支持的最高标准运行;兼容模式中页面以宽松的向后兼容的方式显示来模拟老式浏览器的行为以防止站点无法工作.
- 在标准模式中：内容宽度 = width; 在兼容模式中 ：内容宽度 = width-2border-2padding
- 在标准模式中：行内元素设置宽高无效，在兼容模式中有效
- 在标准模式中：margin:0 auto设置水平居中有效，在兼容模式中无效（需使用text-align）
- 在兼容模式中图片的padding会失效，Table中的字体属性不能继承上层的设置，white-space:pre会失效

# iframe有那些缺点？ {#iframe}

- iframe会阻塞主页面的Onload事件；
- 搜索引擎的检索程序无法解读这种页面，不利于SEO;
- iframe和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载。
- 如果需要使用iframe，最好是通过javascript动态给iframe添加src属性值，这样可以绕开以上两个问题。











