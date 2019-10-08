<template>
    <div class="vue-editor">
        <p>实时 HTML 编辑器:</p>
        <textarea class="editor"
                  rows="7"
                  v-model="HtmlString"
        />
        <p>实时 HTML 查看器:</p>
        <div class="vue-slot"
             v-html="HtmlString">
        
        </div>
    </div>
</template>

<script>
    export default {
        props: {},
        data() {
            return {
                HtmlString:
                    `<p style="display: none">点击此处编辑 HTML</p> \n<h2>你好，亲爱的访客同学！</h2> \n<p>你可以复制下面的代码在此处查看演示</p>`
            };
        },
        async mounted() {
            (document.getElementsByClassName("editor")[0]).focus();
        }
    };
</script>

<style>
    .vue-editor {
        border: 1px solid #eaeaea;
    }
    
    .vue-editor > p {
        text-indent: 1em;
    }
    
    .editor {
        resize: vertical;
        width: 100%;
        overflow: auto;
        box-sizing: border-box;
        border: none;
        border-left: 2px solid #009A61;
        padding: 10px 20px;
        background: #efefef;
        font-size: 15px;
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8AgMAAABHkjHhAAAACVBMVEWAgIBaWlo+Pj7rTFvWAAAAA3RSTlMHCAw+VhR4AAAA+klEQVQoz4WSMW7EQAhFPxKWNh2FCx+HkaZI6RRb5DYbyVfIJXLKDCFoMbaTKSw/8ZnPAPjaH2xgZcUNUDADD7D9LtDBCLZ45fbkvo/30K8yeI64pPwl6znd/3n/Oe93P3ho9qeh72btTFzqkz0rsJle8Zr81OLEwZ1dv/713uWqvu2pl+k0fy7MWtj9r/tN5q/02z89qa/L4Dc2LvM93kezPfXlME/O86EbY/V9GB9ePX8G1/6W+/9h1dq/HGfTfzT3j/xNo7522Bfnqe5jO/fvhVthlfk434v3iO9zG/UOphyPeinPl1J8Gtaa7xPTa/Dk+RIs4deMvwGvcGsmsCvJ0AAAAABJRU5ErkJggg==");
    }
    
    .vue-slot {
        width: 100%;
        padding: 1em;
        box-sizing: border-box;
        background: #efefef;
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8AgMAAABHkjHhAAAACVBMVEWAgIBaWlo+Pj7rTFvWAAAAA3RSTlMHCAw+VhR4AAAA+klEQVQoz4WSMW7EQAhFPxKWNh2FCx+HkaZI6RRb5DYbyVfIJXLKDCFoMbaTKSw/8ZnPAPjaH2xgZcUNUDADD7D9LtDBCLZ45fbkvo/30K8yeI64pPwl6znd/3n/Oe93P3ho9qeh72btTFzqkz0rsJle8Zr81OLEwZ1dv/713uWqvu2pl+k0fy7MWtj9r/tN5q/02z89qa/L4Dc2LvM93kezPfXlME/O86EbY/V9GB9ePX8G1/6W+/9h1dq/HGfTfzT3j/xNo7522Bfnqe5jO/fvhVthlfk434v3iO9zG/UOphyPeinPl1J8Gtaa7xPTa/Dk+RIs4deMvwGvcGsmsCvJ0AAAAABJRU5ErkJggg==");
    }
</style>
