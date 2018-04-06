# 什么是渐进增强
渐进增强是指在web设计时强调可访问性、语义化HTML标签、外部样式表和脚本。保证所有人都能访问页面的基本内容和功能同时为高级浏览器和高带宽用户提供更好的用户体验。核心原则如下:

- 所有浏览器都必须能访问基本内容
- 所有浏览器都必须能使用基本功能
- 所有内容都包含在语义化标签中
- 通过外部CSS提供增强的布局
- 通过非侵入式、外部javascript提供增强功能
- end-user web browser preferences are respected

# PNG,GIF,JPG的区别及如何选
- GIF:
    * 8位像素，256色
    * 无损压缩
    * 支持简单动画
    * 支持boolean透明
    * 适合简单动画
- JPEG：
    * 颜色限于256
    * 有损压缩
    * 可控制压缩质量
    * 不支持透明
    * 适合照片
- PNG：
    * 有PNG8和truecolor PNG
    * PNG8类似GIF颜色上限为256，文件小，支持alpha透明度，无动画
    * 适合图标、背景、按钮


### IE6浏览器有哪些常见的bug,缺陷或者与标准不一致的地方,如何解决 {#ie6_bug}

- IE6不支持min-height，解决办法使用css hack：

        .target {
            min-height: 100px;
            height: auto !important;
            height: 100px;   // IE6下内容高度超过会自动扩展高度
        }

- ``ol``内``li``的序号全为1，不递增。解决方法：为li设置样式``display: list-item;``
- 未定位父元素``overflow: auto;``，包含``position: relative;``子元素，子元素高于父元素时会溢出。解决办法：
    1. 子元素去掉 position: relative; ; 
    2. 不能为子元素去掉定位时，父元素  position: relative; 

- IE6只支持``a``标签的``:hover``伪类，解决方法：使用js为元素监听mouseenter，mouseleave事件，添加类实现效果：
- IE5-8不支持``opacity``，解决办法：

        .opacity {
                opacity: 0.4
                filter: alpha(opacity=60); /* for IE5-7 */
                -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=60)"; /* for IE 8*/
        }

- IE6在设置``height``小于``font-size``时高度值为``font-size``，解决办法：``font-size: 0;``
- IE6不支持PNG透明背景，解决办法: **IE6下使用gif图片**
- IE6-7不支持``display: inline-block``解决办法：设置inline并触发hasLayout

        display: inline-block;
        *display: inline;
        *zoom: 1;

- IE6下浮动元素在浮动方向上与父元素边界接触元素的外边距会加倍。解决办法：

    1. 使用padding控制间距。
    2. 浮动元素``display: inline;``这样解决问题且无任何副作用：css标准规定浮动元素display:inline会自动调整为block

- 通过为块级元素设置宽度和左右margin为auto时，IE6不能实现水平居中，解决方法：为父元素设置``text-align: center;``

# 什么是FOUC?如何避免 {#fouc}

Flash Of Unstyled Content：用户定义样式表加载之前浏览器使用默认样式显示文档，用户样式加载渲染之后再从新显示文档，造成页面闪烁。解决方法：把样式表放到文档的head


