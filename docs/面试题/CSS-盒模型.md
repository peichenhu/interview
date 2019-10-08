# CSS-盒模型

## 标准盒模型 `box-sizing : content-box;`

- style.width = content.width = 200
- 真实占位区域宽度 = 2 *（ margin(30) + border(30) + pading(30)）+ width(200) = 380
- 真实占位区域高度 = 2 *（ margin(30) + border(30) + pading(30)）+ height(200) = 380

演示图：红橙之间为 Margin, 橙色是边框 Border，黄色是 Padding ,绿色是 Content

<VueSlot>

 <style>
    .pch-css-box-parent {
        box-sizing : content-box;
        margin: 0;
        border: 2px solid red;
        padding: 0;
    }
    
    .pch-css-box {
        box-sizing : content-box;
        width: 200px;
        height: 200px;
        
        background: yellow;
        padding: 30px;
        border: 30px solid orange;
        margin: 30px;
        
    }
    
    .pch-css-box-content {
        box-sizing : content-box;
        width: 100%;
        height: 100%;
        background: green;
    }

</style>

<div class="pch-css-box-parent">
    <div class="pch-css-box">
        <div class="pch-css-box-content"></div>
    </div>
</div>

</VueSlot>

```html

 <style>
    .pch-css-box-parent {
        box-sizing : content-box;
        margin: 0;
        border: 2px solid red;
        padding: 0;
    }
    
    .pch-css-box {
        box-sizing : content-box;
        width: 200px;
        height: 200px;
        
        background: yellow;
        padding: 30px;
        border: 30px solid orange;
        margin: 30px;
        
    }
    
    .pch-css-box-content {
        box-sizing : content-box;
        width: 100%;
        height: 100%;
        background: green;
    }

</style>

<div class="pch-css-box-parent">
    <div class="pch-css-box">
        <div class="pch-css-box-content"></div>
    </div>
</div>
```

## IE盒模型 `box-sizing : border-box;`

- style.width = content.width(80) + 2 * ( border(30) + pading(30) ) = 200
- 真实占位区域宽度 = 2 *（ margin(30) + border(30) + pading(30)）+ width(80) = 260
- 真实占位区域高度 = 2 *（ margin(30) + border(30) + pading(30)）+ height(80) = 260

演示图：红橙之间为 Margin, 橙色是边框 Border，黄色是 Padding ,绿色是 Content

<VueSlot>

 <style>
    .pch-css-box-parent-ie {
        box-sizing : border-box;
        margin: 0;
        border: 2px solid red;
        padding: 0;
    }
    
    .pch-css-box-ie {
        box-sizing : border-box;
        width: 200px;
        height: 200px;
        
        background: yellow;
        padding: 30px;
        border: 30px solid orange;
        margin: 30px;
        
    }
    
    .pch-css-box-content-ie {
        box-sizing : border-box;
        width: 100%;
        height: 100%;
        background: green;
    }

</style>

<div class="pch-css-box-parent-ie">
    <div class="pch-css-box-ie">
        <div class="pch-css-box-content-ie"></div>
    </div>
</div>

</VueSlot>

```html
 <style>
    .pch-css-box-parent-ie {
        box-sizing : border-box;
        margin: 0;
        border: 2px solid red;
        padding: 0;
    }
    
    .pch-css-box-ie {
        box-sizing : border-box;
        width: 200px;
        height: 200px;
        
        background: yellow;
        padding: 30px;
        border: 30px solid orange;
        margin: 30px;
        
    }
    
    .pch-css-box-content-ie {
        box-sizing : border-box;
        width: 100%;
        height: 100%;
        background: green;
    }

</style>

<div class="pch-css-box-parent-ie">
    <div class="pch-css-box-ie">
        <div class="pch-css-box-content-ie"></div>
    </div>
</div>
```