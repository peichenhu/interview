(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{143:function(e,n,t){},229:function(e,n,t){"use strict";var i=t(143);t.n(i).a},239:function(e,n,t){"use strict";t.r(n);t(214);var i,r=t(215),s={props:{innerHtml:{type:String,default:'<p style="display: none">点此处编辑 HTML</p> \n<h2>你好，亲爱的访客同学！</h2> \n<p>你可以复制下面的代码在此处查看演示</p>'}},mounted:(i=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:document.getElementsByClassName("editor")[0].focus();case 1:case"end":return e.stop()}}),e)}))),function(){return i.apply(this,arguments)}),methods:{min:function(){console.log(this.innerHtml);this.innerHtml=window.beautifier.html(this.innerHtml,{indent_size:0,indent_char:"",indent_with_tabs:!1,editorconfig:!1,eol:"",end_with_newline:!1,indent_level:0,preserve_newlines:!0,max_preserve_newlines:0,space_in_paren:!1,space_in_empty_paren:!1,jslint_happy:!1,space_after_anon_function:!1,space_after_named_function:!1,brace_style:"none",unindent_chained_methods:!1,break_chained_methods:!1,keep_array_indentation:!1,unescape_strings:!1,wrap_line_length:0,e4x:!1,comma_first:!1,operator_position:"before-newline",indent_empty_lines:!1,templating:["auto"]}),console.log(this.innerHtml)},fmt:function(){this.innerHtml=window.beautifier.html(this.innerHtml,{}),console.log(this.innerHtml)}}},a=(t(229),t(0)),o=Object(a.a)(s,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"vue-editor"},[t("p",[e._v("实时 HTML 编辑器:\n        "),t("span",{on:{click:e.fmt}},[e._v("格式化")]),e._v(" "),t("span",{on:{click:e.min}},[e._v("压缩化")])]),e._v(" "),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.innerHtml,expression:"innerHtml"}],staticClass:"editor",attrs:{rows:"7"},domProps:{value:e.innerHtml},on:{input:function(n){n.target.composing||(e.innerHtml=n.target.value)}}}),e._v(" "),t("p",[e._v("实时 HTML 查看器:")]),e._v(" "),t("div",{staticClass:"vue-slot",domProps:{innerHTML:e._s(e.innerHtml)}})])}),[],!1,null,null,null);n.default=o.exports}}]);