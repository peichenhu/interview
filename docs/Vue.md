# Vue

## 什么是 MVVM

MVVM 是 Model-View-ViewModel 的缩写。MVVM 是一种设计思想。Model 层代表数据模型，也可以在 Model 中定义数据修改和操作的业务逻辑；View 代表 UI 组件，它负责将数据模型转化成 UI 展现出来，ViewModel 是一个同步 View 和 Model 的对象。

在 MVVM 架构下，View 和 Model 之间并没有直接的联系，而是通过 ViewModel 进行交互，Model 和 ViewModel 之间的交互是双向的， 因此 View 数据的变化会同步到 Model 中，而 Model 数据的变化也会立即反应到 View 上。

ViewModel 通过双向数据绑定把 View 层和 Model 层连接了起来，而 View 和 Model 之间的同步工作完全是自动的，无需人为干涉，因此开发者只需关注业务逻辑，不需要手动操作 DOM, 不需要关注数据状态的同步问题，复杂的数据状态维护完全由 MVVM 来统一管理。

## Vue 的优点

- 渐进式程序开发，拥有一个最小核心的轻量级框架，后期需要路由，状态管理可以快速扩展。
- Vue 的虚拟 DOM 基于普通的 DOM,学习成本小，虚拟 DOM 减少了大量琐碎的 DOM 操作。
- 双向绑定支持数据驱动视图；组件式开发帮助高效复用，保证页面的统一性
- 缺点，仅支持 ES5 浏览器，没有对应的 NativeApp 解决方案，TS 支持也不成熟。

## 父子通信

- 父传子： v-model(:)标签传值, Props 接收
- 子传父： v-on(@) 标签传值，\$emit 回调

## 哈希路由跳转

- 声明式：标签跳转
- 编程式：JS 跳转

## vue-router HTML5 History 模式

```js
const router = new VueRouter({
  mode: 'history',
  routes: [...]
})
// 当你使用 history 模式时，URL 就像正常的 url，例如 http://yoursite.com/user/id，也好看！
// 不过这种模式要玩好，还需要后台配置支持。因为我们的应用是个单页客户端应用，如果后台没有正确的配置，当用户在浏览器直接访问 http://oursite.com/user/id 就会返回 404，这就不好看了。
// 所以呢，你要在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回同一个 index.html 页面，这个页面就是你 app 依赖的页面。
```

history 模式下配置 nginx

```js
location / {
  try_files $uri $uri/ /index.html;
}
// 前端vue 配置404页面
```

## Vuex 会带来什么好处？

- 多组件嵌套，降低数据耦合性
- 双向绑定，多组件实时更新
- 数据操作安全，使用 commit 修改
- 内部支持所有数据格式，支持 Ajax
- 缺点：内存存储，页面刷新全部数据初始化

## v-show 和 v-if 指令的共同点和不同点

- v-show 指令是通过修改元素的 display 的 CSS 属性让其显示或者隐藏
- v-if 指令是直接销毁和重建 DOM 达到让元素显示和隐藏的效果

## keep-alive 的作用是什么?

`<keep-alive></keep-alive>` 包裹动态组件时，会缓存不活动的组件实例，主要用于保留组件状态或避免重新渲染。

## Vue 中常用的生命周期钩子函数

- created: 在这一步，实例已完成以下的配置：数据观测 (data observer)，属性和方法的运算，watch/event 事件回调。
- mounted: 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子,注意 mounted 不会承诺所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，可以用 vm.$nextTick 替换掉 mounted
- updated: 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。然而在大多数情况下，你应该避免在此期间更改状态。如果要相应状态改变，通常最好使用计算属性或 watcher 取而代之。注意 updated 不会承诺所有的子组件也都一起被重绘。如果你希望等到整个视图都重绘完毕，可以用 vm.\$nextTick 替换掉 updated
- activated: keep-alive 组件激活时调用
- beforeDestroy: 实例销毁之前调用。在这一步，实例仍然完全可用

## 指令`directives`，过滤器`filters`，组件`components`

- 组件: 组件是可复用的 Vue 实例

```js
// 异步组件
Vue.component('async-example', function(resolve, reject) {
	setTimeout(function() {
		// 向 `resolve` 回调传递组件定义
		resolve({
			template: '<div>I am async!</div>',
		});
	}, 1000);
});
```

- 指令: 除了核心功能默认内置的指令 (v-model 和 v-show)，Vue 也允许注册自定义指令

```js
// 你可以在模板中任何元素上使用新的 v-focus 属性
<input v-focus />

//注册局部指令，组件中也接受一个 directives 的选项
directives: {
  focus: {
    // 指令的定义
    inserted: function (el) {
      el.focus()
    }
  }
}
```

- 过滤器：自定义过滤器，可被用于一些常见的文本格式化，过滤器可以用在两个地方：双花括号插值和 v-bind 表达式

```js
// 在双花括号中
`{{ message | capitalize }}`
// 在 `v-bind` 中
`<div v-bind:id="rawId | formatId"></div>`
// 在一个组件的选项中定义本地的过滤器
filters: {
  capitalize: function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
}
```

## Vue 中 computed,methods,watch 用法上的异同

1. computed 实际上是利用 getter 属性建立了计算属性与原属性之间的绑定关系，所以是没有任何副作用的。能通过 computed 解决的问题应该优先使用 computed。
2. computed 缓存计算结果,只有原属性发生改变，才重新计算
3. 方法可以传参,每次渲染都会执行,常用在在数据变化的时候进行异步或者开销比较大的操作的时候
4. watch 监听属性一次只能监听一个属性,
5. computed 可以监听多个

## 其他

- style scoped 让 CSS 只在当前组件中起作用
- Vue 中引入组件 `import ... from ...`、`require()`、`Vue.component('my-component', options)`,使用组件`<my-component></my-component>`.
- 指令 v-el 提供一个在页面上已存在的 DOM 元素作为 Vue 实例的挂载目标.可以是 CSS 选择器，也可以是一个 HTMLElement 实例
- 在 Vue 中使用插件`Vue.use( plugin )
