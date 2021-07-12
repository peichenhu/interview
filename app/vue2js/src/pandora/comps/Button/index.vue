<template>
    <div :id="id" class="PButton" :style="compStyle">
        <div class="p-btn">{{ compConfig.content }}</div>
    </div>
</template>

<script>
import { addStyleSheet, baseOption } from "../main";
const option = {
    ...baseOption,
    config: {
        ...baseOption.config,
        content: "确定",
        btnColor: "#ffffff",
        btnBackground: "#ff615b",
        btnHoverBackground: "blue",
        btnHoverColor: "white"
    },
    styles: {
        ...baseOption.styles,
        position: "relative",
        positionList: ["relative", "absolute", "fixed"],
        width: "auto",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        margin: 0
    }
};
export default {
    option,
    title: "按钮组件",
    name: "PButton",
    props: {
        cid: {
            type: Number,
            default: 1
        },
        styles: {
            type: Object,
            default: () => ({})
        },
        config: {
            type: Object,
            default: () => ({})
        }
    },
    computed: {
        id() {
            return "cid-" + this.cid;
        },
        compConfig() {
            return {
                ...option.config,
                ...this.config
            };
        },
        compStyle() {
            return {
                ...option.styles,
                ...this.styles
            };
        }
    },
    created() {
        // 按钮自定义样式
        const styleSheet = `
                #cid-${this.cid}.PButton .p-btn { 
                    background: ${this.compConfig.btnBackground};
                    color: ${this.compConfig.btnColor};
                }
                #cid-${this.cid}.PButton .p-btn:hover { 
                    background: ${this.compConfig.btnHoverBackground};
                    color: ${this.compConfig.btnHoverColor};
                }
            `;
        addStyleSheet(styleSheet, `#cid-${this.cid}.PButton`);
    }
};
</script>

<style lang="scss" scoped>
.PButton {
    position: relative;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: 0;
    padding: 16px 0;
    .p-btn {
        width: calc(100% - 16px);
        height: 40px;
        margin: 0 auto;
        line-height: 40px;
        border-radius: 20px;
        background: #ff615b;
        color: white;
        text-align: center;
        font-size: 18px;
        &:hover {
            color: white;
            background: #f30800;
        }
    }
}
</style>
