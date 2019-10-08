module.exports = {
    dest: "dist",
    title: "烈虎",
    description: "自信，坚持，求真",
    head: [
        [ "link", { rel: "icon", href: "/assets/img/favicon.ico" } ],
        [ "script", null, `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?11ee3eaf406620d405bb85e0f32425c7";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
    ` ] ],
    configureWebpack: {
        resolve: {
            alias: {
                "@": "/assets/img"
            }
        }
    },
    themeConfig: {
        sidebar: [
            "/Guide",
            {
                title: "Webpack",
                collapsable: true,
                children: [
                    "/webpack/webpack-优化",
                    "/webpack/webpack-loader",
                    "/webpack/webpack-plugins"
                ]
            },
            {
                title: "代码片段",
                collapsable: true,
                children: [
                    "/代码片段/代码片段",
                    "/代码片段/链式函数",
                    "/代码片段/函数节流",
                    "/代码片段/函数防抖"
                ]
            },
            {
                title: "原创文章",
                collapsable: true,
                children: [
                    "/原创文章/JS-this",
                    "/原创文章/JS-闭包",
                    "/原创文章/JS-数码照片旋转角度修复",
                    "/原创文章/JS-HTMLToPDF",
                    "/原创文章/JS-费波纳茨数列",
                    "/原创文章/JS-有趣的数组",
                    "/原创文章/Vue-路由History模式配置",
                    "/原创文章/学习笔记-ES6",
                    "/原创文章/学习笔记-阿里云ECS容器服务配置"
                ]
            },
            {
                title: "面试题",
                collapsable: true,
                children: [
                    "/面试题/前端高频面试题",

                    "/面试题/HTML-基础篇",
                    "/面试题/HTML5-高级篇",

                    "/面试题/CSS",
                    "/面试题/CSS-水平垂直居中",
                    "/面试题/CSS-盒模型",

                    "/面试题/VUE-我的了解",
                    "/面试题/VUE-组件通信",
                    "/面试题/VUE-其他",

                    "/面试题/HTTP",

                    "/面试题/SEO",

                    "/面试题/Other"

                ]
            }, {
                title: "设计模式",
                collapsable: true,
                children: [
                    "/设计模式/单例模式"
                ]
            }, {
                title: "算法研究",
                collapsable: true,
                children: [
                    "/算法研究/Algorithm"
                ]
            },

            "/个人简历",
            "/项目案例/项目案例",
            "/Optimization",
            "/WXAPP"
        ],
        nav: [
            { text: "我的思否", link: "https://segmentfault.com/u/peichenhu" },
            { text: "日积月累", link: "/Guide" },
            { text: "Github", link: "https://github.com/pch1024" }
        ]
    }
};
