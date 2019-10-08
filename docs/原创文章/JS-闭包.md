## JS-闭包

> 不会被销毁的作用域就是闭包,例如全局作用域.

闭包创建于函数声明时，函数无论怎么调用,作用域内部都可以访问声明时自身作用域内部和外部的所有变量.

## 创建闭包 - 作为返回值

```js
var name = "global";

// 作为返回值产生闭包
function closure1() {
    var name = "closure1";

    // 这里是 closure 上下文区域
    function fn() {
        // 这里保存了对 closure 闭包作用域的访问权限
        console.log(name);
    }

    // 函数作为返回值
    return fn;
}
var test1 = closure1();
test1(); // closure1

console.log(name); // global

```

## 创建闭包 - 作为值

```js
var name = "global";
// 作为参数产生闭包
var test2;

function closure2() {
    var name = "closure2";

    // 这里是 closure 上下文区域
    function fn() {
        // 这里保存了对 closure 闭包作用域的访问权限
        console.log(name);
    }

    // 函数作为参数
    test2 = fn;
}

closure2();
test2(); // closure2

console.log(name); // global
```

## 作为参数

```js
var name = "global";

function foo(callback) {
    var name = "foo";
    callback(); // 函数在这里调用,但并不从 close 函数访问 name
}

// closure 函数在这里声明, 并创建闭包 或者 直接使用全局闭包
function closure() {
    console.log(name);
}

foo(next); //global
```

## 闭包的使用

保护私有变量,不可以直接访问

```js
function Closure() {
    var num = 1;
    this.add = function () {
        num++;
    };
    this.getNum = function () {
        return num;
    };
}

var fn = new Closure();

console.log(fn.getNum()); // 1
fn.add();
console.log(fn.getNum()); // 2
console.log("fn.num 是否可以访问", typeof fn.num); // undefined

```

## 回调函数与计时器

```js

var callback = function () {
    console.log(i);
};

for (var i = 0; i < 5; i++) {
    setTimeout(callback, 1000);
}
// for 循环函数会被 JS 引擎预解析成
var i = 0;
setTimeout(callback, 1000);
i++;
setTimeout(callback, 1000);
i++;
setTimeout(callback, 1000);
i++;
setTimeout(callback, 1000);
i++;
setTimeout(callback, 1000);
i++;
// 在执行就是等待 1000ms 后直接输出 5 5 5 5 5

// 修改 使用立即执行函数 IIFE,传参
// IIFE 会将基本类型参数拷贝一份存储
// 下面代码 1000ms 后输出 0 1 2 3 4 

for (var i = 0; i < 5; i++) {
    (function (i) {
        setTimeout(function () {
            console.log(i);
        }, 1000);
    } ) (i);
}

// 修改用i * 时间,完成计时器
// 下面代码每隔 1000ms 后依次输出 0 1 2 3 4 
for (var i = 0; i < 5; i++) {
    (function (i) {
        setTimeout(function () {
            console.log(i);
        }, 1000 * i);
    } ) (i);
}

```