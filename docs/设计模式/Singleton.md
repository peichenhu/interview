## Singleton 单例模式

> 一个类只能实例化一次来创建实例，为实例函数提供单一访问点

```js
/**
 * 单例模式
 * 概念：一个类仅能有一个实例，并提供访问此实例的全局访问点。
 */
var Singleton = (function() {
  // 实例保持了 Singleton 的一个引用
  var _instance = null;
  // 创建实例
  function createInstance(name) {
    // 私有属性
    var _pre = '本消息来自单例模式：';
    // 私有方法
    var _say = function(msg) {
      return _pre + msg;
    };
    return {
      // 公有属性
      name: name,
      // 公有方法
      say: function(msg) {
        return _say(name + msg); // 实例内部访问私有方法
      },
    };
  }
  return {
    getInstance: function(msg) {
      // 确保实例 _instance 唯一性
      if (!_instance) {
        _instance = createInstance(msg);
      }
      return _instance;
    },
  };
})();

// 创建实例，实例只能有一个
var instance1 = Singleton.getInstance('张三');
var instance2 = Singleton.getInstance('李四');
// 验证实例是否是同一个
console.log(instance1 === instance2); // true
// 使用实例的属性和方法
console.log(instance1.name, instance2.name); // 张三 张三
console.log(
  instance1.say('正在学习单例模式'), // 本消息来自单例模式：张三正在学习单例模式
  instance2.say('完成学习单例模式'), // 本消息来自单例模式：张三完成学习单例模式
); 

```