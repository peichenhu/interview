# webpack-loader

> loader 用于对模块的源代码进行转换。即：文件编码转换器

loader 可以使你在 import 或"加载"模块时预处理文件。因此，loader 类似于其他构建工具中“任务(task)”，并提供了处理前端构建步骤的强大方法。loader 可以将文件从不同的语言（如 TypeScript）转换为 JavaScript，或将内联图像转换为 data URL。loader 甚至允许你直接在 JavaScript 模块中 import CSS文件！

## 使用 loader

在你的应用程序中，有三种使用 loader 的方式：

- 配置（推荐）：在 webpack.config.js 文件中指定 loader。
- 内联：在每个 import 语句中显式指定 loader。
- CLI：在 shell 命令中指定它们。

## loader 特性

- loader 支持链式传递。能够对资源使用流水线(pipeline)。一组链式的 loader 将按照相反的顺序执行。loader 链中的第一个 loader 返回值给下一个 loader。在最后一个 loader，返回 webpack 所预期的 JavaScript。
- loader 可以是同步的，也可以是异步的。
- loader 运行在 Node.js 中，并且能够执行任何可能的操作。
- loader 接收查询参数。用于对 loader 传递配置。
- loader 也能够使用 options 对象进行配置。
- 除了使用 package.json 常见的 main 属性，还可以将普通的 npm 模块导出为 loader，做法是在 package.json 里定义一个 loader 字段。
- 插件(plugin)可以为 loader 带来更多特性。
- loader 能够产生额外的任意文件。

loader 通过（loader）预处理函数，为 JavaScript 生态系统提供了更多能力。 用户现在可以更加灵活地引入细粒度逻辑，例如压缩、打包、语言翻译和其他更多。

## 自定义 loader

[webpack教程 编写一个 loader](https://www.webpackjs.com/contribute/writing-a-loader/)

loader 是导出为一个函数的 node 模块。该函数在 loader 转换资源的时候调用。给定的函数将调用 loader API，并通过 this 上下文访问。


### 用法准则(Guidelines)

编写 loader 时应该遵循以下准则。它们按重要程度排序，有些仅适用于某些场景，请阅读下面详细的章节以获得更多信息。

- 简单易用。
- 使用链式传递。
- 模块化的输出。
- 确保无状态。
- 使用 loader utilities。
- 记录 loader 的依赖。
- 解析模块依赖关系。
- 提取通用代码。
- 避免绝对路径。
- 使用 peer dependencies。

### loader 工具库(Loader Utilities)

### 模块依赖

根据模块类型，可能会有不同的模式指定依赖关系。例如在 CSS 中，使用 @import 和 url(...) 语句来声明依赖。这些依赖关系应该由模块系统解析。

可以通过以下两种方式中的一种来实现：

通过把它们转化成 require 语句。
使用 this.resolve 函数解析路径。
css-loader 是第一种方式的一个例子。它将 @import 语句替换为 require 其他样式文件，将 url(...) 替换为 require 引用文件，从而实现将依赖关系转化为 require 声明。

对于 less-loader，无法将每个 @import 转化为 require，因为所有 .less 的文件中的变量和混合跟踪必须一次编译。因此，less-loader 将 less 编译器进行了扩展，自定义路径解析逻辑。然后，利用第二种方式，通过 webpack 的 this.resolve 解析依赖。

`如果语言只支持相对 url（例如 url(file) 总是指向 ./file），通过使用 ~ 来指定已安装模块（例如，引用 node_modules 中的那些模块）。所以对于 url，相当于 url('~some-library/image.jpg')。`

### loader 依赖 (没看懂)

如果一个 loader 使用外部资源（例如，从文件系统读取），必须声明它。这些信息用于使缓存 loaders 无效，以及在观察模式(watch mode)下重编译。下面是一个简单示例，说明如何使用 addDependency 方法实现上述声明：

loader.js

```js
import path from 'path';

export default function(source) {
  var callback = this.async();
  var headerPath = path.resolve('header.js');

  this.addDependency(headerPath);

  fs.readFile(headerPath, 'utf-8', function(err, header) {
    if(err) return callback(err);
    callback(null, header + "\n" + source);
  });
};
```

### 绝对路径(Absolute Paths)

不要在模块代码中插入绝对路径，因为当项目根路径变化时，文件绝对路径也会变化。loader-utils 中的 stringifyRequest 方法，可以将绝对路径转化为相对路径。

### 同等依赖

如果你的 loader 简单包裹另外一个包，你应该把这个包作为一个 peerDependency 引入。
这种方式允许应用程序开发者在必要情况下，在 package.json 中指定所需的确定版本。

例如，sass-loader 指定 node-sass 作为同等依赖，引用如下：

```
"peerDependencies": {
  "node-sass": "^4.0.0"
}
```

### webpack loader 工具库

它提供了许多有用的工具，但最常用的一种工具是获取传递给 loader 的选项。
schema-utils 包配合 loader-utils，用于保证 loader 选项，进行与 JSON Schema 结构一致的校验。这里有一个简单使用两者的例子：

```js
// loader 工具库
import { getOptions } from 'loader-utils'; // 参数获取库
import validateOptions from 'schema-utils'; // 参数模版库

const schema = {
  type: 'object',
  properties: {
    test: {
      type: 'string'
    }
  }
};

export default function(source) {
  const options = getOptions(this);

  validateOptions(schema, options, 'Example Loader 报错 loader 名称用于定位 loader');

  // 对资源应用一些编码转换……

  return `export default ${ JSON.stringify(source) }`;
};
```


