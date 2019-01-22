# CSS选择器有哪些 {#css_selector}

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

# css sprite是什么,有什么优缺点 {#css_sprite}
- 概念：将多个小图片拼接到一个图片中。通过background-position和元素尺寸调节需要显示的背景图案。
- 优点：
  * 减少HTTP请求数，极大地提高页面加载速度
  * 增加图片信息重复度，提高压缩比，减少图片大小
  * 更换风格方便，只需在一张或几张图片上修改颜色或样式即可实现
- 缺点：
  * 图片合并麻烦
  * 维护麻烦，修改一个图片可能需要从新布局整个图片，样式

# display: none;与visibility: hidden;的区别 {#display_visibility}
- 联系：它们都能让元素不可见
- 区别：
  * display:none;会让元素完全从渲染树中消失，渲染的时候不占据任何空间；visibility: hidden;不会让元素从渲染树消失，渲染师元素继续占据空间，只是内容不可见
  * display: none;是非继承属性，子孙节点消失由于元素从渲染树消失造成，通过修改子孙节点属性无法显示；visibility: hidden;是继承属性，子孙节点消失由于继承了hidden，通过设置visibility: visible;可以让子孙节点显式
  * 修改常规流中元素的display通常会造成文档重排。修改visibility属性只会造成本元素的重绘。
  * 读屏器不会读取display: none;元素内容；会读取visibility: hidden;元素内容

# display: block;和display: inline;的区别 {#block_inline}

- block元素特点：
  1. 处于常规流中时，如果width没有设置，会自动填充满父容器 
  2. 可以应用margin/padding 
  3. 在没有设置高度的情况下会扩展高度以包含常规流中的子元素 
  4. 处于常规流中时布局时在前后元素位置之间（独占一个水平空间） 5.忽略vertical-align

- inline元素特点
  1. 水平方向上根据direction依次布局 
  2. 不会在元素前后进行换行 
  3. 受white-space控制 
  4. margin/padding在竖直方向上无效，水平方向上有效 
  5. width/height属性对非替换行内元素无效，宽度由元素内容决定 
  6. 非替换行内元素的行框高由line-height确定，替换行内元素的行框高由height,margin,padding,border决定 6.浮动或绝对定位时会转换为block 
  7. vertical-align属性生效

# css hack原理及常用hack {#css_hack}

- 原理：利用不同浏览器对CSS的支持和解析结果不一样编写针对特定浏览器样式。常见的hack有1）属性hack。2）选择器hack。3）IE条件注释

- IE条件注释：适用于[IE5, IE9]常见格式如下

        <!--[if IE 6]>
            Special instructions for IE 6 here
        <![endif]-->

- 选择器hack：不同浏览器对选择器的支持不一样

        /***** Selector Hacks ******/

        /* IE6 and below */
        * html #uno  { color: red }

        /* IE7 */
        *:first-child+html #dos { color: red }

        /* IE7, FF, Saf, Opera  */
        html>body #tres { color: red }

        /* IE8, FF, Saf, Opera (Everything but IE 6,7) */
        html>/**/body #cuatro { color: red }

        /* Opera 9.27 and below, safari 2 */
        html:first-child #cinco { color: red }

        /* Safari 2-3 */
        html[xmlns*=""] body:last-child #seis { color: red }

        /* safari 3+, chrome 1+, opera9+, ff 3.5+ */
        body:nth-of-type(1) #siete { color: red }

        /* safari 3+, chrome 1+, opera9+, ff 3.5+ */
        body:first-of-type #ocho {  color: red }

        /* saf3+, chrome1+ */
        @media screen and (-webkit-min-device-pixel-ratio:0) {
        #diez  { color: red  }
        }

        /* iPhone / mobile webkit */
        @media screen and (max-device-width: 480px) {
        #veintiseis { color: red  }
        }

        /* Safari 2 - 3.1 */
        html[xmlns*=""]:root #trece  { color: red  }

        /* Safari 2 - 3.1, Opera 9.25 */
        *|html[xmlns*=""] #catorce { color: red  }

        /* Everything but IE6-8 */
        :root *> #quince { color: red  }

        /* IE7 */
        *+html #dieciocho {  color: red }

        /* Firefox only. 1+ */
        #veinticuatro,  x:-moz-any-link  { color: red }

        /* Firefox 3.0+ */
        #veinticinco,  x:-moz-any-link, x:default  { color: red  }
        属性hack：不同浏览器解析bug或方法
        /* IE6 */
        #once { _color: blue }

        /* IE6, IE7 */
        #doce { *color: blue; /* or #color: blue */ }

        /* Everything but IE6 */
        #diecisiete { color/**/: blue }

        /* IE6, IE7, IE8 */
        #diecinueve { color: blue\9; }

        /* IE7, IE8 */
        #veinte { color/*\**/: blue\9; }

        /* IE6, IE7 -- acts as an !important */
        #veintesiete { color: blue !ie; } /* string after ! can be anything */

# specified value,computed value,used value计算方法 {#specified_computed_used}
- `specified value`: 计算方法如下：

        如果样式表设置了一个值，使用这个值
        如果没有设置值，这个属性是继承属性，从父元素继承
        如果没设置，并且不是继承属性，使用css规范指定的初始值

- `computed value`: 以specified value根据规范定义的行为进行计算，通常将相对值计算为绝对值，例如em根据font-size进行计算。一些使用百分数并且需要布局来决定最终值的属性，如width，margin。百分数就直接作为computed value。line-height的无单位值也直接作为computed value。这些值将在计算used value时得到绝对值。computed value的主要作用是用于继承

- `used value`：属性计算后的最终值，对于大多数属性可以通过window.getComputedStyle获得，尺寸值单位为像素。以下属性依赖于布局，

        background-position
        bottom, left, right, top
        height, width
        margin-bottom, margin-left, margin-right, margin-top
        min-height, min-width
        padding-bottom, padding-left, padding-right, padding-top
        text-indent


# link与@import的区别 {#link_import}

- link是HTML方式， @import是CSS方式
- link最大限度支持并行下载，@import过多嵌套导致串行下载，出现FOUC
- link可以通过rel="alternate stylesheet"指定候选样式
- 浏览器对link支持早于@import，可以使用@import对老浏览器隐藏样式
- @import必须在样式规则之前，可以在css文件中引用其他文件
- 总体来说：link优于@import



### CSS有哪些继承属性 {#css_inherit}

- 关于文字排版的属性如：
  +  [font](https://developer.mozilla.org/en-US/docs/Web/CSS/font)
  +  [word-break](https://developer.mozilla.org/en-US/docs/Web/CSS/word-break)
  +  [letter-spacing](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing)
  +  [text-align](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)
  +  [text-rendering](https://developer.mozilla.org/en-US/docs/Web/CSS/text-rendering)
  +  [word-spacing](https://developer.mozilla.org/en-US/docs/Web/CSS/word-spacing)
  +  [white-space](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space)
  +  [text-indent](https://developer.mozilla.org/en-US/docs/Web/CSS/text-indent)
  +  [text-transform](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform)
  +  [text-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow)
- [line-height](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)
- [color](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
- [visibility](https://developer.mozilla.org/en-US/docs/Web/CSS/visibility)
- [cursor](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor)


# 如何创建块级格式化上下文(block formatting context),BFC有什么用 {#bfc}
- 创建规则：
  * 根元素
  * 浮动元素（float不是none）
  * 绝对定位元素（position取值为absolute或fixed）
  * display取值为inline-block,table-cell, table-caption,flex, inline-flex之一的元素
  * overflow不是visible的元素

- 作用：          
  * 可以包含浮动元素
  * 不被浮动元素覆盖
  * 阻止父子元素的margin折叠

# 外边距折叠(collapsing margins) {#collapsing_margins}
- 毗邻的两个或多个margin会合并成一个margin，叫做外边距折叠。规则如下：
  * 两个或多个毗邻的普通流中的块元素垂直方向上的margin会折叠
  * 浮动元素/inline-block元素/绝对定位元素的margin不会和垂直方向上的其他元素的margin折叠
  * 创建了块级格式化上下文的元素，不会和它的子元素发生margin折叠
  * 元素自身的margin-bottom和margin-top相邻时也会折叠




