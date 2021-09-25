<template>
    <div class="p-layout" @mouseup.capture.prevent="(e) => onMouse(e, 'mouseup')">
        <!-- 左边栏 -->
        <div class="p-layoutLeft" :class="{ show: show_layoutLeft }">
            <div v-show="tab_layoutLeft === 'page'" class="p-pageList">
                <p>页面列表：</p>
                <el-divider />
            </div>
            <div v-show="tab_layoutLeft === 'comp'" class="p-compList">
                <p>组件列表：</p>
                <el-divider />
                <template v-for="(comp, key, idx) in PComps">
                    <!-- 可拖放添加组件库 -->
                    <div
                        v-if="comp.name"
                        :key="idx"
                        class="comp"
                        draggable="true"
                        @dragstart="dragstart($event, comp.name)"
                        @dragend="dragend"
                    >
                        {{ comp.title }} {{ key }}{{ idx }}
                    </div>
                </template>
            </div>

            <div class="p-bindRight">
                <span v-show="show_layoutLeft" @click="toggle('show_layoutLeft')">
                    <i class="el-icon-d-arrow-left"></i>
                </span>
                <span v-show="!show_layoutLeft" @click="toggle('show_layoutLeft')">
                    <i class="el-icon-d-arrow-right"> </i>
                </span>
                <span :class="{ active: tab_layoutLeft === 'page' }" @click="toggle('tab_layoutLeft', 'page')">
                    页面
                </span>
                <span :class="{ active: tab_layoutLeft === 'comp' }" @click="toggle('tab_layoutLeft', 'comp')">
                    组件
                </span>
            </div>
        </div>
        <!-- 右边栏 -->
        <div class="p-layoutRight" :class="{ show: show_layoutRight }">
            <div v-show="tab_layoutRight === 'conf'" class="p-pageList">
                <p>模版配置：</p>
                <el-divider />
            </div>
            <div v-show="tab_layoutRight === 'action'" class="p-compList">
                <p>行为动作：</p>
                <el-divider />
            </div>
            <div v-show="tab_layoutRight === 'layer'" class="p-compList">
                <p>页面图层：</p>
                <el-divider />
                <template v-for="(item, i) in list_comp">
                    <Pannel :key="i">
                        <template slot="title"> 图层{{ item.cid }}： {{ item.compName }} </template>
                        <template slot="opts">
                            <!-- 是否可见选项 -->
                            <i class="el-icon-view" @click="toggleVisible(item)"></i>
                            <!-- 是否删除选项 -->
                            <i class="el-icon-delete"></i>
                            <!-- 是否选中状态 -->
                            <el-switch :height="20" :width="30" @change="toggleComp(item)" v-model="item.selected">
                            </el-switch>
                            <!-- <i class="el-icon-open" :class="{ iconActive: item.selected }"></i> -->
                        </template>
                        <span>图层{{ item.cid }}： {{ item.compName }}</span>
                    </Pannel>
                </template>
            </div>

            <div class="p-bindLeft">
                <span @click="toggle('show_layoutRight')">
                    <i v-show="!show_layoutRight" class="el-icon-d-arrow-left"></i>
                    <i v-show="show_layoutRight" class="el-icon-d-arrow-right"> </i>
                </span>
                <span :class="{ active: tab_layoutRight === 'conf' }" @click="toggle('tab_layoutRight', 'conf')">
                    配置
                </span>
                <span :class="{ active: tab_layoutRight === 'action' }" @click="toggle('tab_layoutRight', 'action')">
                    动作
                </span>
                <span :class="{ active: tab_layoutRight === 'layer' }" @click="toggle('tab_layoutRight', 'layer')">
                    图层
                </span>
            </div>
        </div>
        <!-- 页面模拟器 -->
        <div class="Phone" @drop="drop" @dragover.prevent>
            <!-- <el-radio-group v-model="isPreview" class="PhoneMode" size="mini">
                <el-radio-button :label="false">编辑模式</el-radio-button>
                <el-radio-button :label="true">预览模式</el-radio-button>
            </el-radio-group>
            <div v-if="isPreview" class="PhoneScreen">
                <div v-for="(comp, i) in list_comp" :key="i">
                    <components v-bind="comp" />
                </div>
            </div> -->
            <div
                v-show="!isPreview"
                class="PhoneScreen"
                @mousedown="(e) => onMouse(e, 'mousedown')"
                @mousemove="(e) => onMouse(e, 'mousemove')"
            >
                <div class="NormalScreen">
                    <Draggable
                        v-model="list_comp"
                        group="cid"
                        animation="300"
                        draggable=".sort"
                        @start="DraggableStatus = true"
                        @end="DraggableStatus = false"
                    >
                        <template v-for="(comp, i) in list_comp">
                            <div
                                v-if="comp.styles.position === 'relative'"
                                :key="i"
                                class="compBox"
                                :class="{
                                    active: seleted_comp.cid === comp.cid,
                                    sort: comp.styles.position === 'relative'
                                }"
                                @click="selectComp(comp)"
                                @contextmenu.prevent="mouseMenu($event, comp)"
                            >
                                <components v-bind="fmtRuntimeComp(comp)" v-bind:config="fmtRuntimeComp(comp).config" />
                            </div>
                        </template>

                        <template v-for="(comp, i) in list_comp">
                            <div
                                v-if="comp.styles.position === 'absolute'"
                                :key="i"
                                class="compBox"
                                :class="{
                                    active: seleted_comp.cid === comp.cid,
                                    sort: comp.styles.position === 'relative'
                                }"
                                @click="selectComp(comp)"
                                @contextmenu.prevent="mouseMenu($event, comp)"
                            >
                                <components v-bind="fmtRuntimeComp(comp)" />
                            </div>
                        </template>
                    </Draggable>
                </div>
                <div class="FixedScreen">
                    <template v-for="(comp, i) in list_comp">
                        <div
                            v-if="comp.styles.position === 'fixed'"
                            :key="i"
                            class="compBox"
                            :class="{ active: seleted_comp.cid === comp.cid }"
                            @click="selectComp(comp)"
                            @contextmenu.prevent="mouseMenu($event, comp)"
                        >
                            <components v-bind="fmtRuntimeComp(comp)" v-bind:styles="fmtRuntimeComp(comp).styles" />
                        </div>
                    </template>
                </div>
            </div>
        </div>
        <!-- 右键菜单 -->
        <div
            class="mouse-menu"
            :style="mouseMenuStyle"
            @mouseleave="toggleMouseMenu('leave')"
            @mouseenter="toggleMouseMenu('enter')"
        >
            <div class="menu-item">当前组件: {{ seleted_comp.cid }}</div>
            <div class="menu-item" @click="toggleMouseMenu">关闭菜单</div>
            <div class="menu-item">上移组件</div>
            <div class="menu-item">下移组件</div>
            <div class="menu-item" @click="delComp">删除组件</div>
            <div class="menu-item">复制组件</div>
            <div class="menu-item">进入组件</div>
        </div>
    </div>
</template>

<script>
import { compPositionToPixel, deepClone, dragCompPosition, reslotFixedDOM } from "./function.js";
import Draggable from "vuedraggable";
import PComps from "./comps/index.js";
import Pannel from "./components/pannel.vue";

export default {
    components: {
        Draggable,
        Pannel
    },
    data() {
        return {
            isPreview: false,
            // 左边栏开关
            show_layoutLeft: true,
            // 右边栏开关
            show_layoutRight: true,
            // 左边栏显示模块： page comp
            tab_layoutLeft: "page",
            // 右边栏显示模块：conf action layer
            tab_layoutRight: "conf",
            // 组件库
            PComps,
            // 拖放开关：用于页面组件拖拽排序
            DraggableStatus: false,
            // 拖放开关：用于拖拽添加组件
            dragging: false,
            // 模版组件：模版全部页面的组件
            list_comp: [],
            // 选中的组件
            seleted_comp: {},
            // 鼠标右键菜单
            mouseMenuStyle: {
                display: "none",
                top: 0,
                left: 0
            },
            phoneRect: {
                width: 375,
                height: 603
            }
        };
    },
    watch: {
        seleted_comp: function() {
            this.toggleMouseMenu();
            this.scrollIntoView();
        }
    },
    mounted() {},
    methods: {
        onMouse(e, eCode) {
            if (eCode === "mouseup") {
                console.log("解除拖拽组件");
                this.isDragCompMove = false;
            }
            if (eCode === "mousedown" && this.seleted_comp && this.seleted_comp.styles.position !== "relative") {
                e.preventDefault();
                console.log("锁定拖拽组件状态");
                // 启动拖拽开关
                this.isDragCompMove = true;
                // 记录拖拽原点
                this.dragX = e.clientX;
                this.dragY = e.clientY;
                // 组件位置像素化
                compPositionToPixel.call(this, e);
            }
            if (
                eCode === "mousemove" &&
                this.isDragCompMove &&
                this.seleted_comp &&
                this.seleted_comp.styles.position !== "relative"
            ) {
                e.preventDefault();
                console.log("正在拖拽组件");
                // 拖拽组件位置
                dragCompPosition.call(this, e);
            }
        },
        // 加工运行时组件
        fmtRuntimeComp: function(comp) {
            console.log("加工运行时组件", comp);
            const item = deepClone(comp);
            if (item.styles.position === "fixed") {
                item.styles.position = "absolute";
            }
            // delete item.config;
            item.timestamp = Date.now();
            console.log("加工运行时组件2", item);
            return item;
        },
        // 模式切换
        toggle(code, ...args) {
            // 右边栏开关
            if (code === "show_layoutRight") {
                this.show_layoutRight = !this.show_layoutRight;
            }
            // 左边栏开关
            if (code === "show_layoutLeft") {
                this.show_layoutLeft = !this.show_layoutLeft;
            }
            // 左边栏显示模块切换
            if (code === "tab_layoutLeft") {
                this.show_layoutLeft = true;
                this.tab_layoutLeft = args[0];
            }
            // 右边栏显示模块切换
            if (code === "tab_layoutRight") {
                this.show_layoutRight = true;
                this.tab_layoutRight = args[0];
            }
        },
        // 添加组件
        addComp(compName) {
            console.log("添加组件", PComps, compName, PComps[compName]);
            const cids = this.list_comp.map((i) => i.cid);
            const cid = cids.length ? Math.max.apply(null, cids) + 1 : 1;
            const { option, title } = PComps[compName];
            this.list_comp.push({
                selected: false,
                is: compName,
                cid,
                compName: title,
                option: deepClone(option),
                config: deepClone(option).config,
                styles: deepClone(option).styles || {}
                // opts: {}
            });
            // 元素分发到对应容器
            this.$nextTick(() => reslotFixedDOM(`#cid-${cid} .MockFixed`, ".FixedScreen"));
            this.selectComp(this.list_comp[this.list_comp.length - 1]);
        },
        // 切换组件可见性
        toggleVisible(comp) {
            console.log("切换组件可见性", comp.config.visible);
            comp.config.visible = !comp.config.visible;
            this.$forceUpdate();
        },
        // 切换选择组件
        toggleComp(comp) {
            this.seleted_comp = comp.selected ? comp : {};
            this.list_comp.forEach((i) => {
                i.selected = i.cid === comp.cid && comp.selected;
            });
        },
        // 选择组件
        selectComp(comp) {
            this.list_comp.forEach((i) => {
                i.selected = i.cid === comp.cid;
            });
            this.seleted_comp = comp;
        },
        // 删除组件
        delComp() {
            const comp = this.seleted_comp;
            this.list_comp = this.list_comp.filter((i) => i.cid !== comp.cid);
        },
        // 拖拽事件监听
        dragstart(e, data) {
            this.dragging = true;
            e.dataTransfer.setData("data", data);
            console.log("dragstart", e);
        },
        // 拖拽事件监听
        drop(e) {
            const compName = e.dataTransfer.getData("data");
            if (compName) this.addComp(compName);
            console.log("drop", e, compName, this.list_comp.map((i) => i.cid).join());
        },
        // 拖拽事件监听
        dragend(e) {
            this.dragging = false;
            console.log("dragend", e);
        },
        // 右键菜单开关
        toggleMouseMenu(type) {
            console.log("右键菜单开关", type);
            if (type === "enter") {
                clearTimeout(this.timer_mouseMenu);
            } else if (type === "leave") {
                clearTimeout(this.timer_mouseMenu);
                this.timer_mouseMenu = setTimeout(() => {
                    this.mouseMenuStyle.display = "none";
                }, 1000);
            } else {
                this.mouseMenuStyle.display = "none";
            }
        },
        // 鼠标右键监听
        mouseMenu(e, comp) {
            console.log("mouseMenu", comp);
            if (this.seleted_comp.cid === comp.cid) {
                this.mouseMenuStyle.top = e.clientY + "px";
                this.mouseMenuStyle.left = e.clientX + "px";
                this.mouseMenuStyle.display = "block";
            }
        },
        // 页面滚动定位
        scrollIntoView() {
            this.$nextTick(() => {
                const el = document.querySelector(`#cid-${this.seleted_comp.cid}`);
                if (el) {
                    console.log("scrollIntoView", el);
                    el.scrollIntoView({ behavior: "smooth", inline: "nearest", block: "center" });
                }
            });
        }
    }
};
</script>

<style lang="scss">
// z-index 分级： 兄弟元素（1-100），常规弹窗（100-10000），警告信息（10000-9999999）

$red: #ff615b;
$gray: #dcdfe6;
body {
    background: black;
}
.p-layout {
    width: 100%;
    height: 100vh;
    overflow: auto;
    margin-top: -20px;
    border-top: 1px solid gainsboro;
    box-sizing: border-box;
    * {
        box-sizing: border-box;
    }
}
.p-layoutLeft {
    z-index: 2;
    position: absolute;
    left: -400px;
    top: 1px;
    width: 400px;
    height: 100vh;
    background: white;
    padding: 0 10px;
    transition: all 300ms;
    box-shadow: 3px 1px 3px 0 rgba(0, 0, 0, 0.1);
    &.show {
        left: 0;
    }
    .comp {
        width: 100%;
        background: gainsboro;
        margin: 5px 0;
        text-align: center;
        line-height: 32px;
        cursor: move;
    }
    .p-bindRight {
        position: absolute;
        right: -30px;
        top: 0;
        width: 30px;
        font-size: 14px;
        writing-mode: vertical-lr;
        span {
            background: white;
            display: inline-block;
            padding: 10px 2px;
            cursor: pointer;
            line-height: 1.5;
            letter-spacing: 2px;
            box-shadow: 3px 1px 3px 0 rgba(0, 0, 0, 0.1);
            &:hover {
                background: #efefef;
            }
            &.active {
                background: $red;
                color: white;
            }
        }
    }
}
.p-layoutRight {
    z-index: 2;
    position: absolute;
    right: -400px;
    top: 1px;
    width: 400px;
    height: 100vh;
    background: white;
    padding: 0 10px;
    transition: all 300ms;
    border-left: 1px solid gainsboro;
    box-shadow: -3px 1px 3px 0 rgba(0, 0, 0, 0.1);
    &.show {
        right: 0;
    }
    .comp {
        width: 100%;
        background: gainsboro;
        margin: 5px 0;
        text-align: center;
        line-height: 32px;
        cursor: move;
    }
    .p-bindLeft {
        position: absolute;
        left: -31px;
        top: 0;
        width: 30px;
        font-size: 14px;
        writing-mode: vertical-lr;
        span {
            text-align: center;
            width: 30px;
            background: white;
            display: inline-block;
            padding: 10px 2px;
            cursor: pointer;
            line-height: 1.5;
            letter-spacing: 2px;
            box-shadow: -3px 1px 3px 0 rgba(0, 0, 0, 0.1);
            &:hover {
                background: #efefef;
            }
            &.active {
                background: $red;
                color: white;
            }
        }
    }
}
$iphone: "https://static.17xueba.com/pro/mozi/image/2020/12/20201208111249145033.png";
.Phone {
    position: relative;
    width: 420px;
    height: 800px;
    margin: 50px auto 100px;
    padding: 50px 10px 30px;
    background: url($iphone) no-repeat center / 100% 100%;
    .PhoneMode {
        position: absolute;
        top: 50px;
        left: 50%;
        transform: translateX(-50%);
    }
    .PhoneScreen {
        background: white;
        width: 375px;
        height: 603px;
        margin: 50px auto;
        position: relative;
        .NormalScreen {
            position: relative;
            width: 100%;
            height: 100%;
            overflow-y: auto;
            overflow-x: hidden;
        }
        .FixedScreen {
            z-index: 2;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            * {
                pointer-events: auto;
            }
        }
        .compBox {
            cursor: ns-resize;
            // border: 1px solid transparent;
            div[id^="cid-"] {
                border: 2px solid transparent;
            }
            &.active div[id^="cid-"] {
                border: 2px solid blue;
            }
            &.sortable-chosen {
                opacity: 0.5;
            }
        }
        .MockFixed {
            position: absolute !important;
        }
    }
}
.mouse-menu {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100px;
    height: auto;
    background: white;
    // border: 2px solid rgba(255, 97, 91, 0.5);
    z-index: 10000;
    box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 0.5);
    .menu-item {
        width: 100%;
        height: 30px;
        line-height: 30px;
        text-align: center;
        &:hover {
            color: white;
            background: $red;
            cursor: pointer;
        }
    }
}
</style>
