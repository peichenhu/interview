<template>
    <div :id="id" class="PDialog" :style="compStyle">
        <div class="PDialog-mask MockFixed" v-show="visible">
            <!-- 半透明遮罩 -->
        </div>
        <div class="PDialog-box MockFixed" v-show="visible">
            <div class="PDialog-header">
                {{ compConfig.title }}
                <div @click="close" class="top close"></div>
                <div @click="close" class="header close"></div>
            </div>
            <div class="PDialog-body">
                {{ compConfig.content }}
            </div>
            <div class="PDialog-footer">
                {{ compConfig.tip }}
                <div @click="close" class="footer close"></div>
            </div>
        </div>
    </div>
</template>

<script>
import { baseOption } from "../main";
const option = {
    ...baseOption,
    config: {
        ...baseOption.config,
        title: "标题",
        visible: false,
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero magnam sed vitae at quam molestias nihil sequi nisi deserunt qui saepe sint in consequuntur culpa magni, doloremque sapiente quia. Optio.",
        tip: "提示信息"
    },
    styles: {
        ...baseOption.styles,
        position: "relative"
    }
};
export default {
    option,
    title: "弹窗组件",
    name: "PDialog",
    data() {
        return {
            visible: false
        };
    },
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
            console.log("计算弹窗配置", this.config.visible);
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
    // watch: {
    //     compConfig: function(val) {
    //         this.visible = val.visible;
    //         console.log("观察弹窗配置1", this.visible);
    //     }
    // },
    created() {
        // 按钮自定义样式
        this.visible = this.compConfig.visible;
        console.log("观察弹窗配置2", this.visible);
    },
    methods: {
        close() {
            this.visible = false;
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../../function.scss";

.PDialog {
    position: relative;
    width: 100%;
    &-mask {
        position: fixed;
        z-index: 2;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.3);
    }
    &-box {
        position: fixed;
        z-index: 2;
        left: 5%;
        top: calc(100 / 1334 * 100%);
        right: 0;
        bottom: 0;
        width: 90%;
        height: auto;
        .close {
            &.top {
                @include CloseBtn(30, #666, #fff, #fff);
                position: absolute;
                top: -30px;
                right: 0;
            }
            &.header {
                @include CloseBtn(40, #666, transparent, transparent);
                position: absolute;
                right: 0;
                top: 7px;
            }
            &.footer {
                @include CloseBtn(30, #666, #fff, #fff);
                position: absolute;
                top: 40px;
                left: calc(50% - 11px);
            }
            &:hover {
                cursor: pointer;
            }
        }
    }
    &-header {
        position: relative;
        background: white;
        border-bottom: 1px solid #efefef;
        height: 50px;
        line-height: 50px;
        font-size: 18px;
        border-radius: 10px 10px 0 0;
    }
    &-body {
        position: relative;
        background: white;
        font-size: 15px;
        padding: 16px;
    }
    &-footer {
        position: relative;
        background: white;
        border-top: 1px solid #efefef;
        height: 30px;
        line-height: 30px;
        font-size: 12px;
        border-radius: 0 0 10px 10px;
    }
}
</style>
