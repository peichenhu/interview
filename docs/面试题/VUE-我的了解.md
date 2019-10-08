# Vue-我的了解

> 必须知道的知识点
>
> Object.defineProperty 是 ES5 无法 shim 的特性,不支持 IE8 以及更低版本浏览器。
>
> 订阅发布模式:
>
> MVVM: 当视图发生改变的时候传递给VM,再让数据得到更新，当数据发生改变的时候传给VM,使得视图发生改变；
>> Model - 包含了业务和验证逻辑的数据模型
>
>> View - 定义屏幕中View的结构，布局和外观
>
>> ViewModel - 扮演“View”和“Model”之间的使者，帮忙处理 View 的全部业务逻辑

Vue 是一个 MVVM 前端框架,有三个特性:

## 一. 响应式

- 原理:

  - Vue 将传入 JS 对象作为 Data,遍历 Data 所有属性,使用 Object.defineProperty 将属性转化为 getter/setter,进行数据劫持.
  
  - 每个组件实例都对应一个 watcher 实例，它会在组件渲染的过程中把“接触”过的数据属性记录为依赖。之后当依赖项的 setter 触发时，会通知 watcher，从而使它关联的组件重新渲染。

- 三大模块:

  - Observer(监听器): 递归的监听对象上的所有属性，当属性改变时触发对应的 watcher
  
  - watcher(订阅者):当监听的数据值修改时，执行相应的回调函数，更新模板内容
  
  - dep(订阅者管理器)：链接 observer 和 watcher，每一个 observer 对应一个 dep,内部维护一个数组，保存与该 observer 相关的 watcher
  

## 二. 模板引擎

- 虚拟 Dom

  ```

  ```

## 三. 渲染

- 生命周期
  
  - beforeCreate
  - created
  - beforeMount
  - mounted
  - beforeUpdate
  - updated
  - activated(keep-live)
  - deactivated(keep-live)
  - beforeDestroy
  - destroyed
  - errorCaptured(2.5.0+)

- Diff 算法

- 异步更新队列

  - Vue 在更新 DOM 时是异步执行的。只要侦听到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更。

  - 如果同一个 watcher 被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作是非常重要的。

  - 然后，在下一个的事件循环“tick”中，Vue 刷新队列并执行实际 (已去重的) 工作。

  - Vue 在内部对异步队列尝试使用原生的 Promise.then、MutationObserver 和 setImmediate，如果执行环境不支持，则会采用 setTimeout(fn, 0) 代替。

  - 注意: 因为 \$nextTick() 返回一个 Promise 对象，`await this.$nextTick()` 语法.

## 注意项

- 注意项 - 数组

  Vue 不能检测以下数组的变动:

  ```js
  vm.items[indexOfItem] = newValue;

  vm.items.length = newLength;
  ```

- 注意项 - 对象

  Vue 不允许动态添加根级别的响应式属性, 使用 `Vue.set(object, propertyName, value)` 方法向嵌套对象(子实例)添加响应式属性。
  
  有时你可能需要为已有对象赋值多个新属性，比如使用 Object.assign() 或 \_.extend()。但是，这样添加到对象上的新属性不会触发更新。在这种情况下，你应该用原对象与要混合进去的对象的属性一起创建一个新的对象。

  ```js
  // 错误方式 `Object.assign(this.someObject, { a: 1, b: 2 })`
  this.someObject = Object.assign({}, this.someObject, { a: 1, b: 2 });
  ```