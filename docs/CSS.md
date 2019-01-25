# CSS

## 选择器

        * 通用选择器 ：选择所有元素，不参与计算优先级，兼容性IE6+
        #X id选择器：选择id值为X的元素，兼容性：IE6+
        .X 类选择器： 选择class包含X的元素，兼容性：IE6+
        X Y后代选择器： 选择满足X选择器的后代节点中满足Y选择器的元素，兼容性：IE6+
        X 元素选择器： 选择标所有签为X的元素，兼容性：IE6+
        :link，：visited，：focus，：hover，：active链接状态： 选择特定状态的链接元素，顺序LoVe HAte- : IE4+
        X + Y直接兄弟选择器：在X之后第一个兄弟节点中选择满足Y选择器的元素，兼容性： IE7+
        X > Y子选择器： 选择X的子元素中满足Y选择器的元素，兼容性： IE7+
        X ~ Y兄弟： 选择X之后所有兄弟节点中满足Y选择器的元素，兼容性： IE7+
        [attr]：选择所有设置了attr属性的元素，兼容性IE7+
        [attr=value]：选择属性值刚好为value的元素
        [attr~=value]：选择属性值为空白符分隔，其中一个的值刚好是value的元素
        [attr|=value]：选择属性值刚好为value或者value-开头的元素
        [attr^=value]：选择属性值以value开头的元素
        [attr$=value]：选择属性值以value结尾的元素
        [attr=value]*：选择属性值中包含value的元素
        [:checked]：选择单选框，复选框，下拉框中选中状态下的元素，兼容性：IE9+
        X:after, X::after：after伪元素，选择元素虚拟子元素（元素的最后一个子元素），CSS3中::表示伪元素,:after为IE8+，::after为IE9+
        :hover：鼠标移入状态的元素，兼容性a标签IE4+， 所有元素IE7+
        :not(selector)：选择不符合selector的元素。不参与计算优先级，兼容性：IE9+
        ::first-letter：伪元素，选择块元素第一行的第一个字母，兼容性IE5.5+
        ::first-line：伪元素，选择块元素的第一行，兼容性IE5.5+
        :nth-child(an + b)：伪类，选择前面有an + b - 1个兄弟节点的元素，其中n >= 0， 兼容性IE9+
        :nth-last-child(an + b)：伪类，选择后面有an + b - 1个兄弟节点的元素 其中n >= 0，兼容性IE9+
        X:nth-of-type(an+b)：伪类，X为选择器，解析得到元素标签，选择前面有an + b - 1个相同标签兄弟节点- 兼容性IE9+
        X:nth-last-of-type(an+b)：伪类，X为选择器，解析得到元素标签，选择后面有an+b-1个相同标签兄弟- 素。兼容性IE9+
        X:first-child：伪类，选择满足X选择器的元素，且这个元素是其父节点的第一个子元素。兼容性IE7+
        X:last-child：伪类，选择满足X选择器的元素，且这个元素是其父节点的最后一个子元素。兼容性IE9+
        X:only-child：伪类，选择满足X选择器的元素，且这个元素是其父元素的唯一子元素。兼容性IE9+
        X:only-of-type：伪类，选择X选择的元素，解析得到元素标签，如果该元素没有相同类型的兄弟节点时选中- 性IE9+
        X:first-of-type：伪类，选择X选择的元素，解析得到元素标签，如果该元素 是此此类型元素的第一个兄- 它。兼容性IE9+

## 精灵图 Sprite

> 将多个小图片拼接到一个图片中。通过 background-position 和元素尺寸调节需要显示的背景图案。

优点：

- 减少 HTTP 请求数，极大地提高页面加载速度
- 增加图片信息重复度，提高压缩比，减少图片大小
- 更换风格方便，只需在一张或几张图片上修改颜色或样式即可实现

缺点：

- 图片合并麻烦
- 维护麻烦，修改一个图片可能需要从新布局整个图片，样式

推荐使用阿里巴巴矢量图标库

## display & visibility

- 联系：它们都能让元素不可见
- 区别：
  - display:none;会让元素完全从渲染树中消失，渲染的时候不占据任何空间；visibility: hidden;不会让元素从渲染树消失，渲染师元素继续占据空间，只是内容不可见
  - display: none;是非继承属性，子孙节点消失由于元素从渲染树消失造成，通过修改子孙节点属性无法显示；visibility: hidden;是继承属性，子孙节点消失由于继承了 hidden，通过设置 visibility: visible;可以让子孙节点显式
  - 修改常规流中元素的 display 通常会造成文档重排。修改 visibility 属性只会造成本元素的重绘。
  - 读屏器不会读取 display: none;元素内容；会读取 visibility: hidden;元素内容

## block & inline

- block 元素特点：

  1. 处于常规流中时，如果 width 没有设置，会自动填充满父容器
  2. 可以应用 margin/padding
  3. 在没有设置高度的情况下会扩展高度以包含常规流中的子元素
  4. 处于常规流中时布局时在前后元素位置之间（独占一个水平空间） 5.忽略 vertical-align

- inline 元素特点
  1. 水平方向上根据 direction 依次布局
  2. 不会在元素前后进行换行
  3. 受 white-space 控制
  4. margin/padding 在竖直方向上无效，水平方向上有效
  5. width/height 属性对非替换行内元素无效，宽度由元素内容决定
  6. 非替换行内元素的行框高由 line-height 确定，替换行内元素的行框高由 height,margin,padding,border 决定 6.浮动或绝对定位时会转换为 block
  7. vertical-align 属性生效

## CSS hack

> 利用不同浏览器对 CSS 的支持和解析结果不一样编写针对特定浏览器样式。
>
> 常见的 hack 有 `属性 hack` `选择器 hack` `IE 条件注释`

IE 条件注释：适用于[IE5, IE9]常见格式如下

```html
<!--[if IE 6]> <style></style> <![endif]-->
```

选择器 hack：不同浏览器对选择器的支持不一样

```css
/***** Selector Hacks ******/

/* IE6 and below */
* html #uno {
	color: red;
}
/* IE7 */
*:first-child + html #dos {
	color: red;
}
/* IE7, FF, Saf, Opera  */
html > body #tres {
	color: red;
}
/* IE8, FF, Saf, Opera (Everything but IE 6,7) */
html>/**/body #cuatro {
	color: red;
}
/* Opera 9.27 and below, safari 2 */
html:first-child #cinco {
	color: red;
}
/* Safari 2-3 */
html[xmlns*=''] body:last-child #seis {
	color: red;
}
/* safari 3+, chrome 1+, opera9+, ff 3.5+ */
body:nth-of-type(1) #siete {
	color: red;
}
/* safari 3+, chrome 1+, opera9+, ff 3.5+ */
body:first-of-type #ocho {
	color: red;
}
/* saf3+, chrome1+ */
@media screen and (-webkit-min-device-pixel-ratio: 0) {
	#diez {
		color: red;
	}
}
/* iPhone / mobile webkit */
@media screen and (max-device-width: 480px) {
	#veintiseis {
		color: red;
	}
}
/* Safari 2 - 3.1 */
html[xmlns*='']:root #trece {
	color: red;
}
/* Safari 2 - 3.1, Opera 9.25 */
*|html[xmlns*=''] #catorce {
	color: red;
}
/* Everything but IE6-8 */
:root * > #quince {
	color: red;
}
/* IE7 */
* + html #dieciocho {
	color: red;
}
/* Firefox only. 1+ */
#veinticuatro,
x:-moz-any-link {
	color: red;
}
/* Firefox 3.0+ */
#veinticinco,
x:-moz-any-link,
x:default {
	color: red;
}
属性hack：不同浏览器解析bug或方法
/* IE6 */
#once {
	_color: blue;
}
/* IE6, IE7 */
#doce {
	*color: blue; /* or #color: blue */
}
/* Everything but IE6 */
#diecisiete {
	color/**/: blue;
}
/* IE6, IE7, IE8 */
#diecinueve {
	color: blue\9;
}
/* IE7, IE8 */
#veinte {
	color/*\**/: blue\9;
}
/* IE6, IE7 -- acts as an !important */
#veintesiete {
	color: blue !ie;
} /* string after ! can be anything */
```

## specified value & computed value & used value

- `specified value`: 计算方法如下：

        如果样式表设置了一个值，使用这个值
        如果没有设置值，这个属性是继承属性，从父元素继承
        如果没设置，并且不是继承属性，使用css规范指定的初始值

- `computed value`: 以 specified value 根据规范定义的行为进行计算，通常将相对值计算为绝对值，例如 em 根据 font-size 进行计算。一些使用百分数并且需要布局来决定最终值的属性，如 width，margin。百分数就直接作为 computed value。line-height 的无单位值也直接作为 computed value。这些值将在计算 used value 时得到绝对值。computed value 的主要作用是用于继承

- `used value`：属性计算后的最终值，对于大多数属性可以通过 window.getComputedStyle 获得，尺寸值单位为像素。以下属性依赖于布局，

        background-position
        bottom, left, right, top
        height, width
        margin-bottom, margin-left, margin-right, margin-top
        min-height, min-width
        padding-bottom, padding-left, padding-right, padding-top
        text-indent

## link & @import

- link 是 HTML 方式， @import 是 CSS 方式
- link 最大限度支持并行下载，@import 过多嵌套导致串行下载，出现 FOUC
- link 可以通过 rel="alternate stylesheet"指定候选样式
- 浏览器对 link 支持早于@import，可以使用@import 对老浏览器隐藏样式
- @import 必须在样式规则之前，可以在 css 文件中引用其他文件
- 总体来说：link 优于@import

### CSS 继承属性

- 关于文字排版的属性如：
  - [font](https://developer.mozilla.org/en-US/docs/Web/CSS/font)
  - [word-break](https://developer.mozilla.org/en-US/docs/Web/CSS/word-break)
  - [letter-spacing](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing)
  - [text-align](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)
  - [text-rendering](https://developer.mozilla.org/en-US/docs/Web/CSS/text-rendering)
  - [word-spacing](https://developer.mozilla.org/en-US/docs/Web/CSS/word-spacing)
  - [white-space](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space)
  - [text-indent](https://developer.mozilla.org/en-US/docs/Web/CSS/text-indent)
  - [text-transform](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform)
  - [text-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow)
- [line-height](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)
- [color](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
- [visibility](https://developer.mozilla.org/en-US/docs/Web/CSS/visibility)
- [cursor](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor)

## BFC

> 块级格式化上下文(block formatting context)

创建规则：

- 根元素
- 浮动元素（float 不是 none）
- 绝对定位元素（position 取值为 absolute 或 fixed）
- display 取值为 inline-block,table-cell, table-caption,flex, inline-flex 之一的元素
- overflow 不是 visible 的元素

作用：

- 可以包含浮动元素
- 不被浮动元素覆盖
- 阻止父子元素的 margin 折叠

## 外边距折叠

> collapsing margins，毗邻的两个或多个 margin 会合并成一个 margin，叫做外边距折叠。

规则如下：

- 两个或多个毗邻的普通流中的块元素垂直方向上的 margin 会折叠
- 浮动元素/inline-block 元素/绝对定位元素的 margin 不会和垂直方向上的其他元素的 margin 折叠
- 创建了块级格式化上下文的元素，不会和它的子元素发生 margin 折叠
- 元素自身的 margin-bottom 和 margin-top 相邻时也会折叠

## 清理浮动

- 容器元素闭合标签前添加额外元素并设置 clear: both
- 父元素触发块级格式化上下文(见块级可视化上下文部分)
- 设置容器元素伪元素进行清理推荐的清理浮动方法

```css
/**
* 在标准浏览器下使用
* 1 content内容为空格用于修复opera下文档中出现
*   contenteditable属性时在清理浮动元素上下的空白
* 2 使用display:table而不是block：可以防止容器和
*   子元素top-margin折叠,这样能使清理效果与BFC，IE6/7 zoom: 1;一致
**/
.clearfix:before,
.clearfix:after {
	content: ' '; /* 1 */
	display: table; /* 2 */
}

.clearfix:after {
	clear: both;
}
/* IE 6/7触发hasLayout实现包含浮动 */
.clearfix {
	*zoom: 1;
}
```
