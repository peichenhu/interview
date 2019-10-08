# CSS-水平垂直居中

<VueEditor/>
    
## Table cell (早期)
       
```html
<style>
    .pch-box{
        background: skyblue;
        text-align: center;
        width: 500px;
        height: 500px;
    }
</style>

<table>
    <tr>
         <td class="pch-box"> 
            水平垂直居中 <br>
            水平垂直居中 <br>
            水平垂直居中 <br>
         </td>
    </tr>
</table>
```

## absolute + transform

```html
<style>
    .pch-container{
        height: 500px;
        background: skyblue;
        position: relative;
    }
    .pch-item {
        background: bisque;
        width: 50%;
        text-align: center;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
</style>

<div class="pch-container">
    <div class="pch-item">
        <p>水平垂直居中</p>
        <p>水平垂直居中</p>
        <p>水平垂直居中</p>
    </div>
</div>
```

## Flex

```html

<style>
.pch-flex{
    background: skyblue;
    width: 500px;
    height: 500px;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-content: center;
}
.pch-flex-item{
    background: bisque;
    margin: 1em;
    width: 20%;
    height: 30%;
}
</style>

<div class="pch-flex">
    <div class="pch-flex-item"></div>
    <div class="pch-flex-item"></div>
    <div class="pch-flex-item"></div>
    <div class="pch-flex-item"></div>
    <div class="pch-flex-item"></div>
</div>

```

## grid

存在兼容问题，暂不考虑