<template>
    <div :id="'cid-' + cid" class="PText" :style="compStyle">{{ cid }}{{ compConfig.content }}</div>
</template>

<script>
import { baseOption } from "../main";
const option = {
    ...baseOption,
    config: {
        ...baseOption.config,
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero magnam sed vitae at quam molestias nihil sequi nisi deserunt qui saepe sint in consequuntur culpa magni, doloremque sapiente quia. Optio."
    },
    styles: {
        ...baseOption.styles,
        position: "relative"
    }
};
export default {
    option,
    title: "文本组件",
    name: "PText",
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
    }
};
</script>

<style scoped>
.PText {
    padding: 16px;
    word-break: break-all;
}
</style>
