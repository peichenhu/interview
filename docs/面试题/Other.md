# 其他知识点

## 渐进增强

渐进增强是指在 web 设计时强调可访问性、语义化 HTML 标签、外部样式表和脚本。保证所有人都能访问页面的基本内容和功能同时为高级浏览器和高带宽用户提供更好的用户体验。核心原则如下:

- 所有浏览器都必须能访问基本内容
- 所有浏览器都必须能使用基本功能
- 所有内容都包含在语义化标签中
- 通过外部 CSS 提供增强的布局
- 通过非侵入式、外部 javascript 提供增强功能
- end-user web browser preferences are respected

## PNG & GIF & JPG

- GIF:
  - 8 位像素，256 色
  - 无损压缩
  - 支持简单动画
  - 支持 boolean 透明
  - 适合简单动画
- JPEG：
  - 颜色限于 256
  - 有损压缩
  - 可控制压缩质量
  - 不支持透明
  - 适合照片
- PNG：
  - 有 PNG8 和 truecolor PNG
  - PNG8 类似 GIF 颜色上限为 256，文件小，支持 alpha 透明度，无动画
  - 适合图标、背景、按钮

## IE6 兼容

- IE6 不支持 min-height，解决办法使用 css hack：

```css
.target {
	min-height: 100px;
	height: auto !important;
	height: 100px; /*IE6下内容高度超过会自动扩展高度 */
}
```

- `ol`内`li`的序号全为 1，不递增。解决方法：为 li 设置样式`display: list-item;`
- 未定位父元素`overflow: auto;`，包含`position: relative;`子元素，子元素高于父元素时会溢出。解决办法：

```txt
  子元素去掉 position: relative; ;
  不能为子元素去掉定位时，父元素 position: relative;
```

- IE6 只支持`a`标签的`:hover`伪类，解决方法：使用 js 为元素监听 mouseenter，mouseleave 事件，添加类实现效果：
- IE5-8 不支持`opacity`，解决办法：

```css
.opacity {
	opacity: 0.4;
	filter: alpha(opacity=60); /* for IE5-7 */
	-ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=60)'; /* for IE 8*/
}
```

- IE6 在设置`height`小于`font-size`时高度值为`font-size`，解决办法：`font-size: 0;`
- IE6 不支持 PNG 透明背景，解决办法: **IE6 下使用 gif 图片**
- IE6-7 不支持`display: inline-block`解决办法：设置 inline 并触发 hasLayout

```css
.class {
	display: inline-block;
	*display: inline;
	*zoom: 1;
}
```

- IE6 下浮动元素在浮动方向上与父元素边界接触元素的外边距会加倍。解决办法：

```txt
    使用 padding 控制间距。
    浮动元素 `display: inline;`(css 标准规定浮动元素 display:inline 会自动调整为 block)
```

- 通过为块级元素设置宽度和左右 margin 为 auto 时，IE6 不能实现水平居中，解决方法：

```txt
    为父元素设置`text-align: center;`
```

## 什么是 FOUC?如何避免

Flash Of Unstyled Content：用户定义样式表加载之前浏览器使用默认样式显示文档，用户样式加载渲染之后再从新显示文档，造成页面闪烁。解决方法：把样式表放到文档的 head
