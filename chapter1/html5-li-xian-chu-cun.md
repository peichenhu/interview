> HTML5的离线存储是基于一个新建的.appcache文件的缓存机制\(不是存储技术\)，通过这个文件上的解析清单离线存储资源，这些资源就会像cookie一样被存储了下来。之后当网络在处于离线状态下时，浏览器会通过被离线存储的数据进行页面展示。

- 页面头部像下面一样加入一个manifest的属性

```
<!DOCTYPE HTML>
<html manifest = "cache.manifest">
...
</html>
```

- 在cache.manifest文件的编写离线存储的资源

```
CACHE MANIFEST
#v0.11
CACHE:
  js/app.js
css/style.css
  NETWORK:
  resourse/logo.png
FALLBACK:
  / /offline.html
```

离线存储的manifest一般由三个部分组成：

1. CACHE：必选，表示需要离线存储的资源列表，由于包含manifest文件的页面将被自动离线存储，所以不需要把页面自身也列出来。
2. NETWORK：可选，可以使用通配符，表示在它下面列出来的资源只有在在线的情况下才能访问，他们不会被离线存储，所以在离线情况下无法使用这些资源。不过，如果在CACHE和NETWORK中有一个相同的资源，那么这个资源还是会被离线存储，也就是说CACHE的优先级更高。
3. FALLBACK：可选，表示如果访问第一个资源失败，那么就使用第二个资源来替换他，如/html/ /404.html表示用 “404.html” 替代 /html/ 目录中的所有文件，/ /404.html表示用 “404.html” 替代当前目录中的所有文件，\*.html /404.html表示用 “404.html” 替代 所有html文件。

*注意 :manifest文件最好不要设置缓存, manifest文件和离线资源 要一起更新，如果某个资源由于某种原因下载失败，那么这次的所有更新就算是失败的，浏览器还是会使用原来的资源；在更新了资源之后，新的资源需要到下次再打开app才会生效，如果需要资源马上就能生效，那么可以使用window.applicationCache.swapCache\(\)方法来使之生效，出现这种现象的原因是浏览器会先使用离线资源加载页面，然后再去检查manifest是否有更新，所以需要到下次打开页面才能生效。*

参考资料：

https://developer.mozilla.org/zh-CN/docs/Web/Manifest