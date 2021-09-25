/**
 * 组件公共文件
 */

// 引入方法库
export * from "../function";

// 基础配置
export const baseOption = {
    // 唯一性纬度
    unique: "none", // none 不唯一；page 页面唯一；template：模版唯一；
    // 可拖拽轴方向
    dragAxis: "xy", // x y xy
    // 基础配置
    config: {
        layerName: "图层名字"
    },
    // 基础样式
    style: {
        // 默认布局方式
        position: "relative"
    }
};