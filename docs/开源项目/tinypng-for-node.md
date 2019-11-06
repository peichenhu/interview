# 自动化批处理压缩图片

## 这是个什么东东？

我一直比较喜欢使用 [tinypng](https://tinypng.com/) 压缩图片，但是免费版的存在很多限制，并且要用手拖来拖去，累🐵。

## 网页版 [tinypng](https://tinypng.com/) 缺点

- 一次最多压缩20个图
- 一个图最大不能超过 5MB
- 要用手拖来拖去

## 如何使用 node 实现自动化批处理压缩？

- 递归获取本地文件夹里的文件
- 过滤文件，后缀名格式必须是 `.jpg`、 `.png`、`大小小于5MB`.(文件体积大小限制绕不过去 - -、)
- 封装 tinypng API ，伪装请求为浏览器请求
- 每次异步处理一个文件（批处理，一个一个也很快，可以绕过20个的数量限制）
- 处理返回数据，拿到 tinypng 压缩好的图片地址
- 取回远程图片，在图片原目录生成新图片，命名格式为：`原名称.min.原格式`
- 纯node实现，短小精悍，不依赖任何其他代码片段
- 将脚本放入本地文件夹，直接执行

## 自动化脚本

```js
const fs = require('fs');
const path = require('path');
const https = require('https');
const crypto = require('crypto');
const { URL } = require('url');

// 图片存放文件夹
const root = './';
const exts = ['.jpg', '.png'];
const max = 5200000; // 5MB == 5242848.754299136

const options = {
  method: 'POST',
  hostname: 'tinypng.com',
  path: '/web/shrink',
  headers: {
    rejectUnauthorized: false,
    'Postman-Token': Date.now(),
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/x-www-form-urlencoded',
    'User-Agent':
      'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36'
  }
};

fileList(root);

// 获取文件列表
function fileList(folder) {
  fs.readdir(folder, (err, files) => {
    if (err) console.error(err);
    
    files.forEach(file => {
      fileFilter(folder + file);
    });
  });
}

// 过滤文件格式，返回所有jpg,png图片
function fileFilter(file) {
  fs.stat(file, (err, stats) => {
      
    // 未知错误
    if (err) return console.error(err);
    
    // 如果是文件
    if (
      // 必须是文件，小于5MB，后缀 jpg||png
      stats.size <= max &&
      stats.isFile() &&
      exts.includes(path.extname(file))
    ) {
      // 找到一个需要压缩的图片
      fileUpload(file); 
      // console.log('可以压缩：' + file);
    }
    
    // 如果是文件夹
    if (stats.isDirectory()) fileList(file + '/');
  });
}

// 异步API,压缩图片

/*

 // 失败返回值
 {"error":"Bad request","message":"Request is invalid"}
 
 // 成功返回值
 {
    "input":  { "size": 887, "type": "image/png" },
    "output": { 
          "size": 785,
          "type": "image/png", 
          "width": 81, 
          "height": 81,
          "ratio": 0.885, 
          "url": "https://tinypng.com/web/output/7aztz90nq5p9545zch8gjzqg5ubdatd6" 
     }
 }
*/

function fileUpload(img) {
  // 创建请求
  var req = https.request(options, function(res) {
    res.on('data', buf => {
      let obj = JSON.parse(buf.toString());
      
      if (obj.error)  console.log(`[${img}]：压缩失败！报错：${obj.message}`);
      else  fileUpdate(img, obj);
      
    });
  });
  
  // 执行请求（省略重命名，直接覆盖）
  req.write(fs.readFileSync(img), 'binary');
  
  // 发生错误
  req.on('error', e =>  console.error(e));
  
  // 断开请求
  req.end();
}

// 该方法被循环调用,请求图片数据
function fileUpdate(imgpath, obj) {
    
  let options = new URL(obj.output.url);
  
  let req = https.request(options, res => {
      
    let body = '';
    
    res.setEncoding('binary');
    
    res.on('data', function(data) {
      body += data;
    });

    res.on('end', function() {
        
      fs.writeFile(imgpath, body, 'binary', err => {
          
        if (err) return console.error(err);
        
        console.log(
          `[${imgpath}] \n 压缩成功，原始大小-${obj.input.size}，压缩大小-${
            obj.output.size
          }，优化比例-${obj.output.ratio}`
        );
      });
    });
  });
  
  req.on('error', e => console.error(e));
  
  req.end();
}

```