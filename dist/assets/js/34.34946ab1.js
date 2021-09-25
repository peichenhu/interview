(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{266:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"跨域资源共享"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跨域资源共享","aria-hidden":"true"}},[s._v("#")]),s._v(" 跨域资源共享")]),s._v(" "),a("h2",{attrs:{id:"同源策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同源策略","aria-hidden":"true"}},[s._v("#")]),s._v(" 同源策略")]),s._v(" "),a("p",[s._v("如果两个 URL 的 "),a("code",[s._v("协议")]),s._v("/"),a("code",[s._v("主机")]),s._v("/"),a("code",[s._v("端口")]),s._v(" 都相同的话，则这两个 URL 是同源。")]),s._v(" "),a("p",[s._v("在同源策略下，会有以下限制：")]),s._v(" "),a("ul",[a("li",[s._v("无法获取非同源的 Cookie、LocalStorage、SessionStorage 等")]),s._v(" "),a("li",[s._v("无法获取非同源的 dom")]),s._v(" "),a("li",[s._v("无法向非同源的服务器发送 ajax 请求")])]),s._v(" "),a("h2",{attrs:{id:"jsonp-跨域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsonp-跨域","aria-hidden":"true"}},[s._v("#")]),s._v(" JSONP 跨域")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("jsonpCallback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"跨域请求发送成功并得到服务器响应"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" script "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"script"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nscript"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("src "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://www.runoob.com/try/ajax/jsonp.php?jsoncallback=jsonpCallback"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("insertBefore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("firstChild"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"图片探测跨域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图片探测跨域","aria-hidden":"true"}},[s._v("#")]),s._v(" 图片探测跨域")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" img "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nimg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("onload "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("onerror")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"跨域请求发送成功并得到服务器响应"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nimg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("src "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://www.runoob.com/try/ajax/jsonp.php?jsoncallback=jsonpCallback"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"跨域请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跨域请求","aria-hidden":"true"}},[s._v("#")]),s._v(" 跨域请求")]),s._v(" "),a("p",[s._v("跨域请求会自动带上 "),a("code",[s._v("Origin 请求来源域名")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Origin: http://foo.example\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("服务端响应：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 允许跨域的公开资源")]),s._v("\nAccess-Control-Allow-Origin: *\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 允许跨域的请求来源")]),s._v("\nAccess-Control-Allow-Origin: http://localhost:8000\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("跨域请求的限制：")]),s._v(" "),a("ol",[a("li",[s._v("没有自定义的请求头")]),s._v(" "),a("li",[s._v("不能发送和接受 cookie")]),s._v(" "),a("li",[s._v("getAllResponseHeaders() 方法始终返回空字符串")])]),s._v(" "),a("h2",{attrs:{id:"简单请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简单请求","aria-hidden":"true"}},[s._v("#")]),s._v(" 简单请求")]),s._v(" "),a("ol",[a("li",[s._v("请求方法为\n"),a("ul",[a("li",[s._v("GET")]),s._v(" "),a("li",[s._v("POST")]),s._v(" "),a("li",[s._v("HEAD")])])]),s._v(" "),a("li",[s._v("Content-Type 的值仅限于下列三者之一：\n"),a("ul",[a("li",[s._v("text/plain")]),s._v(" "),a("li",[s._v("multipart/form-data")]),s._v(" "),a("li",[s._v("application/x-www-form-urlencoded")])])]),s._v(" "),a("li",[s._v("请求头字段仅支持 "),a("code",[s._v("XHR")]),s._v(" 和 "),a("code",[s._v("Fetch")]),s._v(" 规范定义的头部字段")])]),s._v(" "),a("h2",{attrs:{id:"跨域预检请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跨域预检请求","aria-hidden":"true"}},[s._v("#")]),s._v(" 跨域预检请求")]),s._v(" "),a("p",[a("code",[s._v("非简单请求跨域资源访问")]),s._v(" 要求必须首先使用 OPTIONS 方法发起一个跨域预检请求到服务器，以获知服务器是否允许该实际请求。\n"),a("code",[s._v("跨域预检请求")]),s._v("的使用，可以避免跨域请求对服务器的用户数据产生未预期的影响。")]),s._v(" "),a("ul",[a("li",[s._v("预检请求要检查什么？")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查实际请求的请求方法 POST 是否可以使用")]),s._v("\nAccess-Control-Request-Method: POST\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查实际请求的请求头部 X-PINGOTHER Content-Type 是否可以使用")]),s._v("\nAccess-Control-Request-Headers: X-PINGOTHER, Content-Type\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[s._v("服务器如何允许如何响应：")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 允许的网站来源")]),s._v("\nAccess-Control-Allow-Origin: http://foo.example\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 允许的请求方法")]),s._v("\nAccess-Control-Allow-Methods: POST, GET, OPTIONS\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 允许的请求头部")]),s._v("\nAccess-Control-Allow-Headers: X-PINGOTHER, Content-Type\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 该响应的有效时间为 86400 秒，也就是 24 小时。在有效时间内，浏览器无须为同一请求再次发起预检请求。")]),s._v("\nAccess-Control-Max-Age: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("86400")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"跨域凭证请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跨域凭证请求","aria-hidden":"true"}},[s._v("#")]),s._v(" 跨域凭证请求")]),s._v(" "),a("p",[s._v("跨域请求默认不提供凭证（cookie、HTTP 认证、客户端 SSL 证书）,但可以开启")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("withCredentials "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("服务器允许带凭证会返回")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Access-Control-Allow-Credentials: true\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);