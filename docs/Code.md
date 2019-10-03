# 代码片段

## 浏览器地址栏参数解析获取

```js
function  decodeLink(link){
    var params={},
        realValue = function(i){
            return isNaN(i - 0) ? i : i - 0;
        };
    link.split('?').pop().split("&").forEach(function (kv) {
        params[kv.split("=")[0]] =realValue (decodeURI(kv.split("=")[1])) ;
    });
    return params
}
```

## REM 响应式处理方案

```js
;((win, doc) => {
  let [defalutFontSize, remW, size] = [100, 750]
  let remFontSize = () => {
    let { clientWidth, clientHeight } = doc.documentElement

    size = Math.round((clientWidth / remW) * 100)
    size = size > 100 ? defalutFontSize : size

    doc.documentElement.style.fontSize = size + 'px'
    doc.body.style.height = clientHeight + 'px'
  }
  win.addEventListener('resize', remFontSize, false)
  doc.addEventListener('DOMContentLoaded', remFontSize, false)
})(window, document)
```

## 随机整数

```js

export const random = (min = 0, max = 99) => {
  if (min === 0) return Math.round(Math.random() * max);
  return Math.round(Math.random() * (max - min)) + min;
};
```

## 多功能日期函数

```js
export const fmtDate = (fmt = 'Y-M-D hh:mm:ss', dateTime, offset = 0) => {
    let offsetDay = 1000 * 60 * 60 * 24 * offset;
    let time = dateTime ? +new Date(dateTime) : +new Date(),
        now = new Date(time + offsetDay),
        Y = now.getFullYear(),
        M = now.getMonth() + 1,
        D = now.getDate(),
        hh = now.getHours(),
        mm = now.getMinutes(),
        ss = now.getSeconds();

    M = M >= 10 ? M : '0' + M;
    D = D >= 10 ? D : '0' + D;
    hh = hh >= 10 ? hh : '0' + hh;
    mm = mm >= 10 ? mm : '0' + mm;
    ss = ss >= 10 ? ss : '0' + ss;

    fmt = fmt.replace(/Y/, Y);
    fmt = fmt.replace(/M/, M);
    fmt = fmt.replace(/D/, D);
    fmt = fmt.replace(/hh/, hh);
    fmt = fmt.replace(/mm/, mm);
    fmt = fmt.replace(/ss/, ss);
    return fmt;
};
```

## 浏览器全屏

```js
    export const fullScreen = () => {
        let doc = document;
        let el = document.documentElement;
        // 全屏状态 退出全屏
        if (
            doc.webkitIsFullScreen ||
            doc.mozFullScreen ||
            doc.msFullscreenElement ||
            doc.fullscreen
        ) {
            if (doc.webkitExitFullscreen) doc.webkitExitFullscreen();
            else if (doc.mozCancelFullScreen) doc.mozCancelFullScreen();
            else if (doc.msFullscreenElement) doc.msFullscreenElement();
            else if (doc.exitFullscreen) doc.exitFullscreen();
        } else {
            if (el.webkitRequestFullScreen) el.webkitRequestFullScreen();
            else if (el.mozRequestFullScreen) el.mozRequestFullScreen();
            else if (el.msRequestFullscreen) el.msRequestFullscreen();
            else if (el.requestFullScreen) el.requestFullScreen();
        }
    
        return;
    };
```

## 近24小时

```js
export const array24h = () => {
    let time1h = 60 * 60 * 1000;
    let now = new Date();
    let pre_hh = new Date(+now - time1h).getHours();
    let arr24 = [];
    for (let i = 0; i < 24; i++) {
        let hh = pre_hh - i;
        hh = hh < 0 ? 24 + hh : hh;
        hh = hh < 10 ? '0' + hh : hh;
        arr24.unshift(hh + ':00:00');
    }
    return arr24;
};

// 近12个月
export const arrayMonth = startDate => {
    let now = startDate ? new Date(startDate) : new Date(),
        day1 = 24 * 60 * 60 * 1000,
        arr30 = [];
    for (let i = 0; i < 30; i++) {
        let pre = new Date(+now - day1 * i),
            Y = pre.getFullYear(),
            M = pre.getMonth() + 1,
            D = pre.getDate();
        M = M >= 10 ? M : '0' + M;
        D = D >= 10 ? D : '0' + D;
        arr30.unshift(`${Y}-${M}-${D}`);
    }
    return arr30;
};
```

## 数字补零

```js
export const fmtNumber = (num, max = 100000000) => {
    if (isNaN(num - 0)) num = 0;
    if (num >= max) return '99999999+';

    let str0 = '0000000000000000000000';
    let pre = [];
    let len = max.toString().length;

    for (let i = 0; i < len; i++) pre.push(str0.slice(0, i));
    return pre[len - String(num).length] + num;
};
```