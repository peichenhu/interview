<template>
    <div class="pannel">
        <div class="pannel-head" @click.self="toggle">
            <slot name="title"></slot>
            <span class="opts">
                <slot name="opts"></slot>
                <i class="el-icon-arrow-right" :class="{ open }" @click="toggle"></i>
            </span>
        </div>
        <transition name="pannel-toggle">
            <div v-if="open" class="pannel-body">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    props: {
        idx: {
            type: Number,
            default: -99
        },
        openIndex: {
            type: Number,
            default: -99
        }
    },
    data() {
        return {
            open: this.idx === this.openIndex
        };
    },
    watch: {
        openIndex: function(val) {
            this.open = this.idx === val;
        }
    },
    methods: {
        toggle() {
            const { idx, openIndex, open } = this;
            if (idx === -99 || openIndex === -99) {
                this.open = !open;
            } else {
                this.$emit("update:open-index", idx === openIndex ? -1 : idx);
            }
        }
    }
};
</script>

<style lang="scss" scoped>
$blue: #4070e0;
.pannel {
    // Vue 过渡动画
    .pannel-toggle-enter,
    .pannel-toggle-leave-to {
        height: 0;
        padding: 0 16px;
    }
    &-head {
        height: 40px;
        background: #eff2f5;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #3f3f3f;
        line-height: 40px;
        padding: 0 16px;
        border-bottom: 1px solid white;
        text-align: left;
        .opts {
            float: right;
        }
        i {
            font-size: 14px;
            height: 30px;
            width: 30px;
            text-align: center;
            line-height: 30px;
            transition: all 200ms;
            &.open {
                transform: rotate(90deg);
            }
            &:hover {
                color: #4070e0;
                cursor: pointer;
                // background: white;
            }
        }
    }
    &-body {
        padding: 16px;
        transform-origin: 0 0;
        transition: all 200ms;
        position: relative;
        overflow: hidden;
        .label {
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #3f3f3f;
            line-height: 24px;
        }
    }
}
</style>
