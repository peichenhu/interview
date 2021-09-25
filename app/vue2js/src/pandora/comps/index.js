/**
 * 组件引入安装文件
 */

// 组件引入
import PText from "./Text/index.vue";
import PButton from "./Button/index.vue";
import PSideService from "./SideService/index.vue";
import PDialog from "./Dialog/index.vue";

// 组件汇总
const components = {
    PText,
    PButton,
    PDialog,
    PSideService
};

// 手动安装
export const install = function(Vue) {
    for (const key in components) {
        if (Object.hasOwnProperty.call(components, key)) {
            const comp = components[key];
            console.log("组件安装", comp.name);
            Vue.component(comp.name, comp);
        }
    }
};

// 自动安装
if (typeof window !== "undefined" && window.Vue) {
    console.log("install PUI");
    install(window.Vue);
}

// 组件导出
export default {
    version: "1.0.0",
    ...components
};
