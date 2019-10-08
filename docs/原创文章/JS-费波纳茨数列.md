# JS-费波纳茨数列

> 费波纳茨数列又称黄金分割数列或者兔子数列，从第3项开始，每一项都等于前两项之和；而且当n趋向于无穷大时，前一项与后一项的比值越来越逼近黄金分割0.618，所以极限是黄金分割比；从第二项开始，每个偶数项的平方都比前后两项之积少1，每个奇数项的平方都比前后两项之积多1。下面主要介绍费波纳茨数列JS实现。

## 求费波纳茨数列第N位的数值
递归实现
```js
const fibonacci = (n, arr = [1, 2]) => {
  return (function loop(len) {
    if (len < n) {
      arr.push(arr[len - 1] + arr[len - 2]);
      return loop(arr.length);
    } else return arr[len - 1];
  })(arr.length);
};
console.log(fibonacci(1475)); 
// 输出 1.3069892237633987e+308
// 耗时 9.923828125ms
// 注意 第 1476 项数值为 Infinity
```

循环实现
```js

const fibonacci = (n, arr = [1, 2]) => {
  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n - 1];
};
console.log(fibonacci(1475));

// 输出 1.3069892237633987e+308
// 耗时 10.2490234375ms
// 注意 第 1476 项数值为 Infinity
```
----
## 拓展：求和 + 阶乘
```js
// 求和 
const loop = n => (n > 1 ? n + loop(--n) : n);
console.log(loop(1)); // 1
console.log(loop(3)); // 6
console.log(loop(5)); // 15



// 阶乘
const loop = n => (n > 1 ? n * loop(--n) : n);
console.log(loop(1)); // 1
console.log(loop(3)); // 6
console.log(loop(5)); // 120
```

## 拓展：尾调用优化

尾调用（Tail Call）是函数式编程的一个重要概念，本身非常简单，一句话就能说清楚，就是指某个函数的最后一步是调用另一个函数（仅函数调用,带函数的表达式运算不是尾调用）；

函数调用会在内存形成一个“调用记录”，又称“调用帧”（call frame），保存调用位置和内部变量等信息。如果在函数A的内部调用函数B，那么在A的调用帧上方，还会形成一个B的调用帧。等到B运行结束，将结果返回到A，B的调用帧才会消失。如果函数B内部还调用函数C，那就还有一个C的调用帧，以此类推。所有的调用帧，就形成一个“调用栈”（call stack）。

尾调用由于是函数的最后一步操作，所以不需要保留外层函数的调用帧，因为调用位置、内部变量等信息都不会再用到了，只要直接用内层函数的调用帧，取代外层函数的调用帧就可以了。

这就叫做“尾调用优化”（Tail call optimization），即只保留内层函数的调用帧。如果所有函数都是尾调用，那么完全可以做到每次执行时，调用帧只有一项，这将大大节省内存。这就是“尾调用优化”的意义。

注意，只有不再用到外层函数的内部变量，内层函数的调用帧才会取代外层函数的调用帧，否则就无法进行“尾调用优化”。


```js
// 不属于
function f(x){
  let y = g(x);
  return y;
}

// 不属于
function f(x){
  return g(x) + 1;
}

// 不属于
function f(x){
  g(x);
}

// 属于，尾调用不一定出现在函数尾部，只要是最后一步操作即可。
function f(x) {
  if (x > 0) {
    return m(x)
  }
  return n(x);
}


// 函数不会进行尾调用优化，因为内层函数inner用到了外层函数addOne的内部变量one。
function addOne(a){
  var one = 1;
  function inner(b){
    return b + one;
  }
  return inner(a);
}

// 函数调用自身，称为递归。如果尾调用自身，就称为尾递归。

// 不会尾调用优化，堆栈溢出
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
factorial(5) // 120

// 会尾调用优化，堆栈不溢出
function factorial(n, total) {
  if (n === 1) return total;
  return factorial(n - 1, n * total);
}
factorial(5, 1) // 120

// 不会尾调用优化，堆栈溢出
function Fibonacci (n) {
  if ( n <= 1 ) {return 1};

  return Fibonacci(n - 1) + Fibonacci(n - 2);
}

// 会尾调用优化，堆栈不溢出
function Fibonacci2 (n , ac1 = 1 , ac2 = 1) {
  if( n <= 1 ) {return ac2};
  return Fibonacci2 (n - 1, ac2, ac1 + ac2);
}
```

由此可见，“尾调用优化”对递归操作意义重大，所以一些函数式编程语言将其写入了语言规格。ES6 亦是如此，第一次明确规定，所有 ECMAScript 的实现，都必须部署“尾调用优化”。这就是说，ES6 中只要使用尾递归，就不会发生栈溢出，相对节省内存。

尾递归的实现，往往需要改写递归函数，确保最后一步只调用自身。做到这一点的方法，就是把所有用到的内部变量改写成函数的参数。