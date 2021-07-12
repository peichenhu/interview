/**
 * 节流函数：对重复的大流量输入有节制的输出
 * @param {function} fn 执行函数
 * @param {number} delay 间隔时间
 * @returns 包装函数
 */
export function debounce(fn, delay = 500) {
    // 语法检查
    if (!fn || !(fn instanceof Function)) return fn;
    // 状态：非占用状态
    let isPending = false;
    // 拦截次数
    let allCount = 0;
    // 执行次数
    let doCount = 0;
    // 包装函数
    function res() {
        allCount++;
        // 占用状态，执行拦截
        if (isPending) return false;
        // 开启占用状态
        isPending = true;
        // 执行间隔时间控制
        setTimeout(() => {
            doCount++;
            // 执行函数并传递参数
            fn.apply(this, arguments);
            // 关闭占用状态
            isPending = false;
            console.log("节流函数拦截次数：%s；执行次数：%s", allCount, doCount);
        }, delay);
    }
    // 返回值
    return res;
}

/**
 * 防抖: 大流量拦截只输出一次
 * @param {function} fn 执行函数
 * @param {number} delay 延时时间
 * @returns 包装函数
 */
export function throttle(fn, delay = 500) {
    // 语法检查
    if (!fn || !(fn instanceof Function)) return fn;
    // 初始状态：非占用状态
    let isPending = false;
    // 初始化计时器
    let timer = null;
    // 包装函数
    function res() {
        // 防抖函数拦截流量次数：
        console.count("防抖函数拦截流量次数：");
        // 占用状态，重新计时
        isPending && clearTimeout(timer);
        // 开启占用状态
        isPending = true;
        // 执行间隔时间控制
        timer = setTimeout(() => {
            // 执行函数并传递参数
            fn.apply(this, arguments);
            // 关闭占用状态
            isPending = false;
            // 防抖函数输出流量次数：
            console.count("防抖函数输出流量次数： ");
        }, delay);
    }
    // 返回值
    return res;
}

/**
 * 计数定时器
 * @param {function} fn 执行函数
 * @param {number} count 执行次数
 * @param {number} delay 延时时间
 * @param {string} mode 语法模型
 */
export function countdown(fn, count = 10, delay = 500, mode = "es5") {
    // 语法检查
    if (!fn || !(fn instanceof Function)) return fn;
    // ES5 语法
    if (mode === "es5") {
        // 输出次数控制器
        for (var i = 0; i < count; i++) {
            // IIFE 变量持久化
            (function (i) {
                // 累积式延时输出
                setTimeout(() => {
                    // 执行函数
                    fn();
                }, i * delay);
            })(i);
        }
    }
    // ES6 语法
    if (mode === "es6") {
        // 输出次数控制器
        for (let i = 0; i < 10; i++) {
            // 累积式延时输出
            setTimeout(() => {
                // 执行函数
                fn();
            }, i * delay);
        }
    }
}

/**
 * 地址栏取参数
 * @param {string} key 属性名
 * @param {string} link 自定义链接
 * @returns 属性值 || 参数对象
 */
export function getQuery(key, link) {
    // 取出目标值
    link = (link || "").split("?")[1] || "";
    // 初始化返回值
    const query = {};
    // 取出有效值
    const search = link.split("#")[0] || "";
    // 解码处理
    decodeURIComponent(search)
        .split("&")
        .forEach((str) => {
            console.count("解码处理");
            if (!str) return;
            const [key, val] = str.split("=");
            query[key] = val;
        });
    // 分情况返回
    return key ? query[key] || "" : query;
}

/**
 * 地址栏参数拼接
 * @param {string} link 跳转链接
 * @param {object} query 新参数对象
 * @param {boolean} isQueryOverWriteLink 是否使用 query 重写 link.query
 * @returns 新链接
 */
export function setQuery(link, query, isQueryOverWriteLink = false) {
    // 兼容处理
    link = link || "";
    // 新旧参数合并
    if (isQueryOverWriteLink) {
        query = Object.assign({}, getQuery(null, link), query);
    } else {
        query = Object.assign({}, query, getQuery(null, link));
    }
    // 路径
    const pathname = link.split("?")[0];
    // 哈希
    const hash = link.indexOf("#") !== -1 ? "#" + encodeURIComponent(link.split("#")[1]) : "";
    // 参数
    let search = "";
    // 拼接参数
    for (const key in query) {
        search += `${!search ? "?" : "&"}${key}=${encodeURIComponent(query[key])}`;
    }
    // 返回值
    return pathname + search + hash;
}

/**
 * 数组扁平化
 * @param {array} arr 目标数组
 * @param {number} depth 处理深度
 * @returns 扁平化数组
 */
export function flat(arr, depth) {
    return arr.flat(depth);
}

/**
 * 非空值检查
 * @param {any} val 目标值
 * @returns 布尔值
 */
export function notEmpty(val) {
    const type = Object.prototype.toString.call(val);
    if (type === "[object Array]") return !!val.length;
    if (type === "[object Object]") return !!Object.keys(val).length;
    return val !== null && val !== "" && val !== undefined;
}

/**
 * 数组去重
 * @param {array} arr 目标数组
 * @param {string} key 对象数组去重属性
 * @returns 新数组
 */
export function uniqueArray(arr = [], key = "") {
    if (!key) return Array.from(new Set(arr));
    const res = new Map();
    return arr.filter((arr) => !res.has(arr[key]) && res.set(arr[key], 1));
}

/**
 * 数组排序
 * @param {*} arr
 * @returns
 */
export function arraySort(arr) {
    return arr.sort((a, b) => a - b);
}

/**
 * 对象继承
 * 扩展对象原型方法
 */
export function objectExtend() {
    Object.prototype.extend = function (obj) {
        console.log("extend", this);
        Object.assign(this, obj);
    };
}

/**
 * 深克隆
 */
export function deepClone(object) {
    if (typeof object !== "object") return object;
    const obj = {};
    for (const key in object) {
        const element = object[key];
        if (Object.hasOwnProperty.call(object, key)) {
            if (typeof element !== "object") obj[key] = object[key];
            else obj[key] = deepClone(element);
        }
    }
    return obj;
}

/**
 * DOM 添加内联样式表
 * @param {string} styleSheet 字符串
 * @param {string} codeAttr 样式表标识符
 */
export function addStyleSheet(styleSheet, codeAttr) {
    const style = document.createElement("style");
    style.setAttribute("type", "text/css");
    style.setAttribute("code", codeAttr);
    style.appendChild(document.createTextNode(styleSheet));
    document.getElementsByTagName("head")[0].appendChild(style);
}

/**
 * 删除对象里的某些属性
 * @param {object} obj 一个对象
 * @param {array} attrList 对象里可能存在的属性数组
 * @returns 变更后的对象
 */
export function delObjectAttr(obj, attrList = []) {
    for (const key in obj) {
        if (attrList.includes(key)) {
            delete obj[key];
        }
    }
    return obj;
}

// 设备平台检查
