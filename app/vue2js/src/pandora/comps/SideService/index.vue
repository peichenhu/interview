<template>
    <div :id="'cid-' + cid" class="PSideService" :style="compStyle"> {{ cid }}{{ compConfig.content }} </div>
</template>

<script>
import { baseOption } from "../main";

const option = {
    ...baseOption,
    dragAxis: "x",
    config: {
        ...baseOption.config,
        content: "点我"
    },
    styles: {
        ...baseOption.style,
        position: "absolute",
        left: "20%",
        right: "auto",
        bottom: "20%",
        top: "auto"
    }
};
export default {
    option,
    title: "在线客服（悬浮）",
    name: "PSideService",
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
        console.log("在线客服（悬浮）", this.compConfig, this.compStyle);
    }
};
</script>

<style scoped>
.PSideService {
    box-sizing: content-box;
    position: fixed;
    right: 16px;
    bottom: 16px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: red;
    color: white;
    text-align: center;
    line-height: 50px;
    font-size: 12px;
    /* padding: 16px; */
    word-break: break-all;
}
</style>
