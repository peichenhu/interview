# 学习笔记-ES6

ECMAScript 6.0（以下简称 ES6）是 JavaScript 语言的下一代标准，已经在 2015 年 6 月正式发布了。它的目标，是使得 JavaScript 语言可以用来编写复杂的大型应用程序，成为企业级开发语言。本文主要记录个人的知识掌握，仅包括：箭头函数、异步编程、高级对象、高级字符、高级解构、高级参数、高级声明、高级模块、数据结构。

> ES6 包含这些新特性: 掌握<input type="checkbox" checked disabled/> 未掌握<input type="checkbox" disabled/>
>> 箭头函数<input type="checkbox" checked disabled/>
>> 异步编程<input type="checkbox" checked disabled/>
>> 高级对象<input type="checkbox" checked disabled/>
>> 高级字符<input type="checkbox" checked disabled/>
>> 高级解构<input type="checkbox" checked disabled/>
>> 高级参数<input type="checkbox" checked disabled/>
>> 高级声明<input type="checkbox" checked disabled/>
>> 高级模块<input type="checkbox" checked disabled/>
>> 数据结构<input type="checkbox" disabled/>
>> 代理对象<input type="checkbox" disabled/>
>> 类与继承<input type="checkbox" disabled/>
>> Iterable <input type="checkbox" disabled/>
>> Generator<input type="checkbox" disabled/>
>> 可继承内建对象<input type="checkbox" disabled/>
>> Reflect API<input type="checkbox" disabled/>
----

## 箭头函数

箭头函数用 `=>` 来代表一个函数，同时支持表达式（Expression bodies）和语句（Statement bodies）的写法。注意: <b>箭头函数与包裹它的代码共享相同的`this`对象，如果箭头函数在其他函数的内部，它也将共享该函数的`arguments`变量。</b>
```js
// 表达式写法 Expression bodies
var odds = evens.map(v => v + 1);
var nums = evens.map((v, i) => v + i);

// 语句写法 Statement bodies
nums.forEach(v => {
  if (v % 5 === 0)
    fives.push(v);
});

//  this 对象
var bob = {
  _name: "Bob",
  _friends: [],
  printFriends() {
    this._friends.forEach(f =>
      console.log(this._name + " knows " + f));
  }
};

// arguments 对象
function square() {
  let example = () => {
    let numbers = [];
    for (let number of arguments) {
      numbers.push(number * number);
    }

    return numbers;
  };

  return example();
}

square(2, 4, 7.5, 8, 11.5, 21); // returns: [4, 16, 56.25, 64, 132.25, 441]

```

## 异步编程

Promises是一种异步编程的方式

```js
let pm3 = new Promise((resolve, reject) => {
  setTimeout(()=>{
    if( Math.random() > 0.5 ) resolve(1)
    else reject(0);
  },3000)
});

pm3.then(
    data_resolve => console.log('oh, resolve:' + data_reject;),
    data_reject => {
      throw 'oh, reject:' + data_reject;
    },
  )
  .catch(err => console.log('error: ' + err))
  .finally(() => console.log('总会执行'));
// log: oh, resolve:1 总会执行
// or log: error: oh, reject:0 总会执行

/** Promise.all
* 方法返回一个 promise，
* 一旦迭代器中的所以 promise 解决，返回的固定顺序的所有 promise resolve 数列
* 一旦迭代器中的某个 promise 拒绝，返回的被拒绝的promise
*/

Promise.all([Promise.resolve(1),Promise.reject(0)]).then().catch().finally(); // reject 0
Promise.all([Promise.resolve(1),Promise.resolve(2)]).then().catch().finally(); // resolve [1,2]

/**
* Promise.race
* 方法返回一个 promise，
* 一旦迭代器中的某个 promise 解决或拒绝，返回的第一个解决或拒绝的 promise。
*/
Promise.race([Promise.resolve(1),Promise.resolve(2)]).then().catch().finally(); // resolve 1
Promise.race([Promise.reject(0),Promise.resolve(1)]).then().catch().finally(); // reject 0
```
## 高级对象

经扩展后的对象字面量，允许在结构中设置原型，简化了foo: foo这样的赋值，定义方法和调用父级。这样使得对象字面量更接近类的声明，并且使得基于对象的设计更加方便。

```js
var obj = {
   
    __proto__: theProtoObj,  // 设置 prototype
    
    ['__proto__']: somethingElse, // 计算属性不会重复设置__proto__，或者将直接触发错误。
    
    handler, // ‘handler: handler’ 简写 

    // 方法
    toString() {
     return "d " + super.toString(); // 调用父级 super 方法
    },
    
    [ "prop_" + (() => 42)() ]: 42  // 设置动态的属性名
};
```
## 高级字符
模版字符串提供了构建字符串的语法糖，类似于Perl，Python等语言中的字符串插值。可以构建一个自定义标签，避免注入攻击或者从字符串内容中构建更加高级的数据结构。

```js
// 创建基本的模板字符串
`This is a pretty little template string.`

// 多行字符串
`In ES5 this is
 not legal.`

// 插入变量
var name = "Bob", time = "today";
`Hello ${name}, how are you ${time}?`
```
## 高级解构(Destructuring)

解构允许使用模式匹配的方式进行绑定，并支持匹配 数组和对象。解构具有一定的容错机制，就像查找普通对象foo['foo']这样，当没有找到时会返回undefined（而不会直接报错）。 

```js
/ 列表（数组）匹配
var [a, , b] = [1,2,3];

// 对象匹配
var { op: a, lhs: { op: b }, rhs: c }
       = getASTNode()

// 对象匹配的简写
// 绑定当前作用域的 `op`, `lhs` 和 `rhs`
var {op, lhs, rhs} = getASTNode()

// 可以用在函数的参数中
function g({name: x}) {
  console.log(x);
}
g({name: 5})

// 解构容错机制
var [a] = [];
a === undefined;

// 带默认值的解构容错
var [a = 1] = [];
a === 1;

// 解构 + 默认参数
function r({x, y, w = 10, h = 10}) {
  return x + y + w + h;
}
r({x:1, y:2}) === 23
```
## 高级参数

默认参数(default)的功能是在函数被调用时对参数做自动估值(若没被赋值，则自动赋值)

```js
function f(x, y=12) {
  // 如果没有传入y或传入了undefined，y的默认值为12
  return x + y;
}
f(3) == 15
```

扩展运算符(spread)则可以将数组转换为连续的函数参数

```js
function f(x, ...y) {
  // y是一个数组
  return x * y.length;
}
f(3, "hello", true) == 6
```

不定参数(rest)用在参数末尾，将最末尾的参数转换为数组。不定参数(rest)让我们不再需要arguments，更直接地解决了一些常见的问题。

```js
function f(x, y, z) {
  return x + y + z;
}
// 将数组中的每个元素展开为函数参数
f(...[1,2,3]) == 6
```
## 高级声明

Let(定义变量) + Const(定义常量),这两个关键字具有块级作用域,只能声明一次并且先声明再使用。let是var的升级版。const仅允许被赋值一次，通过静态限制（Static restrictions ）的方式阻止变量在赋值前被使用。

```js
function f() {
  {
    let x;
    {
      // 这是正确的，因为const具有块级作用域
      const x = "sneaky";

      // 错误，"x"已被定义为const常量，不允许再赋值
      x = "foo";
    }

    // 这是正确的，因为这里的"x"是被let定义的
    x = "bar";

    // 错误，"x"已经被定义，不允许再重复定义
    let x = "inner";
  }
}
```

## 高级模块

ES6从语言层面对模块进行了支持。编写方式借鉴了流行的JavaScript模块加载器（AMD, CommonJS）。由宿主环境的默认加载器定义模块运行时的行为，采取隐式异步模式——在模块可以被获取和加载前不会有代码执行。

```js
// lib/math.js
export function sum(x, y) {
  return x + y;
}
export var pi = 3.141593;

// app.js
import * as math from "lib/math";
console.log("2π = " + math.sum(math.pi, math.pi));

// otherApp.js
import {sum, pi} from "lib/math";
console.log("2π = " + sum(pi, pi));

```
还有的功能包括：`export default` and `export *`:

```js
// lib/mathplusplus.js
export * from "lib/math";
export var e = 2.71828182846;
export default function(x) {
    return Math.exp(x);
}

// app.js
import exp, {pi, e} from "lib/mathplusplus";
console.log("e^π = " + exp(pi));

```







