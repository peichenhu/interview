# 烈虎

这里是我的一波三折后最终选择的文章根据地，同步[思否社区](https://segmentfault.com/u/peichenhu)

- FE面试题
- 设计模式
- 前端算法
- 原创文章
- 代码片段
- 数码生活
- 网络资源
- 开源项目

## 运行项目

```bash
#  安装 vuepress

npm install -g vuepress@next

#  开发
npm run dev

#  打包
npm run build

# 部署(记得修改 deploy.sh)

sh deploy.sh

```

## 项目结构

```s
dist：项目打包目录
docs：项目文件目录
    .vuepress：项目配置和项目打包
        public：项目静态资源目录
        component: Vue 组件模板
        config.js：项目配置脚本
        enhanceApp.js：Vue配置脚本
    README.md：项目首页
    [文章资源分类]/[文章].md
    [文章].md
```

## 参与项目

请发送邮件到：pch1024@outlook.com
