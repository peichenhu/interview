(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{274:function(e,v,_){"use strict";_.r(v);var n=_(0),s=Object(n.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"前端工程化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前端工程化","aria-hidden":"true"}},[e._v("#")]),e._v(" 前端工程化")]),e._v(" "),_("p",[e._v("根据已有知识去构想前端工程化")]),e._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("0. 基于 node + esm + npm\n\n1. 构建\n要满足不同的 JS 框架\n要能够处理所有的资源类型\n要支持自定义扩展插件\n要能够输出多种规范的包\n符合要求的有 webpack、rollup\n\n")])]),e._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[e._v("1")]),_("br"),_("span",{staticClass:"line-number"},[e._v("2")]),_("br"),_("span",{staticClass:"line-number"},[e._v("3")]),_("br"),_("span",{staticClass:"line-number"},[e._v("4")]),_("br"),_("span",{staticClass:"line-number"},[e._v("5")]),_("br"),_("span",{staticClass:"line-number"},[e._v("6")]),_("br"),_("span",{staticClass:"line-number"},[e._v("7")]),_("br"),_("span",{staticClass:"line-number"},[e._v("8")]),_("br"),_("span",{staticClass:"line-number"},[e._v("9")]),_("br")])]),_("h2",{attrs:{id:"环境区分"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#环境区分","aria-hidden":"true"}},[e._v("#")]),e._v(" 环境区分")]),e._v(" "),_("ul",[_("li",[_("p",[e._v("仅支持 "),_("code",[e._v("node")]),e._v(" 环境的工具")]),e._v(" "),_("ol",[_("li",[e._v("不能使用 "),_("code",[e._v("BOM")]),e._v(" 的对象。")]),e._v(" "),_("li",[e._v("不能使用 "),_("code",[e._v("window")]),e._v(" 对象。")]),e._v(" "),_("li",[e._v("不能输出 "),_("code",[e._v("IIFE")]),e._v("、"),_("code",[e._v("UMD")]),e._v(" 规范包。")]),e._v(" "),_("li",[e._v("只能输出 "),_("code",[e._v("CJS")]),e._v("、"),_("code",[e._v("ESM")]),e._v(" 规范包。")])])]),e._v(" "),_("li",[_("p",[e._v("仅支持 "),_("code",[e._v("bro\bwser")]),e._v(" 环境的工具")]),e._v(" "),_("ol",[_("li",[e._v("不得使用 "),_("code",[e._v("node source")]),e._v(" 包依赖。")]),e._v(" "),_("li",[e._v("支持浏览器平台 或者 通过 "),_("code",[e._v("Polyfill")]),e._v(" 支持浏览器平台。")]),e._v(" "),_("li",[e._v("只能输出 "),_("code",[e._v("IIFE")]),e._v("、"),_("code",[e._v("UMD")]),e._v(" 规范包。")]),e._v(" "),_("li",[e._v("不能输出 "),_("code",[e._v("CJS")]),e._v("、"),_("code",[e._v("ESM")]),e._v(" 规范包。")])])]),e._v(" "),_("li",[_("p",[_("code",[e._v("node + bro\bwser")]),e._v(" 全环境工具型")]),e._v(" "),_("ol",[_("li",[e._v("适合 "),_("code",[e._v("纯工具型")]),e._v(" 或者 "),_("code",[e._v("双平台 Polyfill 支持完备型")]),e._v(" 的工具.")]),e._v(" "),_("li",[e._v("支持输出 "),_("code",[e._v("CJS")]),e._v("、"),_("code",[e._v("ESM")]),e._v("、"),_("code",[e._v("IIFE")]),e._v("、"),_("code",[e._v("UMD")]),e._v(" 规范包.")])])])]),e._v(" "),_("h2",{attrs:{id:"usr-bin-node-和-usr-bin-env-node-两者的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#usr-bin-node-和-usr-bin-env-node-两者的区别","aria-hidden":"true"}},[e._v("#")]),e._v(" "),_("code",[e._v("#!/usr/bin node")]),e._v(" 和 "),_("code",[e._v("#!/usr/bin/env node")]),e._v(" 两者的区别")]),e._v(" "),_("p",[_("code",[e._v("#!/usr/bin node")]),e._v(" 是告诉操作系统执行这个脚本的时候，调用/usr/bin 下的 node 解释器；")]),e._v(" "),_("p",[_("code",[e._v("#!/usr/bin/env node")]),e._v(" 这种用法是为了防止操作系统用户没有将 node 装在默认的/usr/bin 路径里。当系统看到这一行的时候，首先会到 env 设置里查找 node 的安装路径，再调用对应路径下的解释器程序完成操作。")]),e._v(" "),_("p",[_("code",[e._v("#!/usr/bin node")]),e._v(" 相当于写死了 node 路径;")]),e._v(" "),_("p",[_("code",[e._v("#!/usr/bin/env node")]),e._v(" 会去环境设置寻找 node 目录,推荐这种写法")]),e._v(" "),_("p",[e._v("常用于 "),_("code",[e._v("rollup.output.banner")])])])}),[],!1,null,null,null);v.default=s.exports}}]);