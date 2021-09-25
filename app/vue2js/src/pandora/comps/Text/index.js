/**
 * 组件独立安装文件
 */

// 组件引入
import Comp from "./index.vue";

// 手动安装
Comp.install = function(Vue) {
    Vue.component(Comp.name, Comp);
};

// 组件导出
export default Comp;
