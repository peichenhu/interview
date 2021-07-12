# rollup

## 插件

-   **@rollup/plugin-node-resolve**

使用 node 解析算法定位模块的 Rollup 插件
[github](github.com/rollup/plugins)
[npm](https://www.npmjs.com/package/@rollup/plugin-node-resolve)

-   **@rollup/plugin-commonjs**

将 CommonJS 模块转换为 ES6 的 Rollup 插件
[github](github.com/rollup/plugins)
[npm](https://www.npmjs.com/package/@rollup/plugin-commonjs)

-   **rollup-plugin-node-builtins**

允许 required/imported node 内置对象。
这样做可以提供适当的垫片来支持为 Browserify 设计的模块，
有些模块需要 "rollup-plugin-node-globals"。
[github](github.com/calvinmetcalf/rollup-plugin-node-builtins)
[npm](https://www.npmjs.com/package/rollup-plugin-node-builtins)

-   **rollup-plugin-node-globals**

插入 node globals 的插件,
包括使用 browserify 的代码,
即使它使用 process or buffers 也应该可以工作,
基于 rollup-plugin-inject 插件实现的。
[github](github.com/calvinmetcalf/rollup-plugin-node-globals)
[npm](https://www.npmjs.com/package/rollup-plugin-node-globals)

-   **rollup-plugin-terser**

用于压缩生成的 ES-Bundle 的 Rollup 插件
[github](https://github.com/TrySound/rollup-plugin-terser)
[npm](https://www.npmjs.com/package/rollup-plugin-terser)

-   **rollup-plugin-node-polyfills**

允许 node builtins 被 required/imported。
以下模块包括 ES6 特定版本，除了默认导入之外，
它允许您进行命名导入，如果您只使用此插件，应该可以正常工作。
[github](https://github.com/ionic-team/rollup-plugin-node-polyfills)
[npm](https://www.npmjs.com/package/rollup-plugin-node-polyfills)
