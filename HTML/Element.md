# img 的title和alt有什么区别 {#img_title_alt}
- title是global attributes之一，用于为元素提供附加的advisory information。通常当鼠标滑动到元素上的时候显示。
- alt是`<img>`的特有属性，是图片内容的等价描述，用于图片无法加载时显示、读屏器阅读图片。可提图片高可访问性，除了纯装饰图片外都必须设置有意义的值，搜索引擎会重点分析。

# doctype是什么,举例常见doctype及特点 {#doctype}
- <!doctype>声明必须处于HTML文档的头部，在<html>标签之前，HTML5中不区分大小写
- <!doctype>声明不是一个HTML标签，是一个用于告诉浏览器当前HTMl版本的指令
- 现代浏览器的html布局引擎通过检查doctype决定使用兼容模式还是标准模式对文档进行渲染，一些浏览器有一个接近标准模型。
- 在HTML4.01中<!doctype>声明指向一个DTD，由于HTML4.01基于SGML，所以DTD指定了标记规则以保证浏览器正确渲染内容
- HTML5不基于SGML，所以不用指定DTD