# 网站优化

## 内容优化

- 减少 HTTP 请求：合并文件、CSS 精灵、inline Image
- 减少 DNS 查询：DNS 查询完成之前浏览器不能从这个主机下载任何任何文件。方法：- DNS 缓存、将资源分布到恰当数量的主机名，平衡并行下载和 DNS 查询
- 避免重定向：多余的中间访问
- 使 Ajax 可缓存
- 非必须组件延迟加载
- 未来所需组件预加载
- 减少 DOM 元素数量
- 将资源放到不同的域下：浏览器同时从一个域下载资源的数目有限，增加域可以提高- 并行下载量
- 减少 iframe 数量
- 不要 404

## Server 优化

- 使用 CDN
- 添加 Expires 或者 Cache-Control 响应头
- 对组件使用 Gzip 压缩
- 配置 ETag
- Flush Buffer Early
- Ajax 使用 GET 进行请求
- 避免空 src 的 img 标签

## Cookie 优化

- 减小 cookie 大小
- 引入资源的域名不要包含 cookie

## CSS 优化

- 将样式表放到页面顶部
- 不使用 CSS 表达式
- 不使用@import
- 不使用 IE 的 Filter

## JavaScript 优化

- 将脚本放到页面底部
- 将 javascript 和 css 从外部引入
- 压缩 javascript 和 css
- 删除不需要的脚本
- 减少 DOM 访问
- 合理设计事件监听器

## Image 优化

- 优化图片：根据实际颜色需要选择色深、压缩
- 优化 css 精灵
- 不要在 HTML 中拉伸图片
- 保证 favicon.ico 小并且可缓存
