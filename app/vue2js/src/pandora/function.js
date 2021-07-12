export * from "../../../tools";
import { debounce } from "../../../tools";

// 拖拽组件位置 + 节流 + this 重定向
export const dragCompPosition = debounce(function(e) {
    const { dragX, dragY } = this;
    const { styles, option } = this.seleted_comp;
    const { dragAxis } = option;
    const moveX = e.clientX - dragX;
    const moveY = e.clientY - dragY;
    console.log("偏移量", moveX, moveY, dragAxis);
    // 取数值
    const num = (str) => {
        if (typeof str === "string" && str.indexOf("px") !== -1) {
            return +str.slice(0, -2);
        }
        return 0;
    };
    if (dragAxis === "x" || dragAxis === "xy") {
        if (styles.left !== "auto") {
            // X轴左原点
            this.dragX = e.clientX;
            styles.left = num(styles.left) + moveX + "px";
        } else {
            // X轴右原点
            this.dragX = e.clientX;
            styles.right = num(styles.right) - moveX + "px";
        }
    }
    if (dragAxis === "y" || dragAxis === "xy") {
        if (styles.top !== "auto") {
            // Y轴上原点
            this.dragY = e.clientY;
            styles.top = num(styles.top) + moveY + "px";
        } else {
            // Y轴下原点
            this.dragY = e.clientY;
            styles.bottom = num(styles.bottom) - moveY + "px";
        }
    }
}, 60);

// 组件位置像素化
export const compPositionToPixel = function() {
    // 像素化组件位置
    const ele = document.querySelector("#cid-" + this.seleted_comp.cid);
    const eleRect = ele.getBoundingClientRect();
    const styles = this.seleted_comp.styles;
    eleRect.offsetTop = ele.offsetTop;
    eleRect.offsetLeft = ele.offsetLeft;

    console.log("组件原始位置", eleRect);

    if (styles.left !== "auto") {
        // X轴左原点
        styles.left = eleRect.offsetLeft + "px";
        styles.right = "auto";
    } else {
        // X轴右原点
        styles.left = "auto";
        styles.right = this.phoneRect.width - (eleRect.offsetLeft + eleRect.width) + "px";
    }
    if (styles.top !== "auto") {
        // Y轴上原点
        styles.top = eleRect.offsetTop + "px";
        styles.bottom = "auto";
    } else {
        // Y轴下原点
        styles.top = "auto";
        styles.bottom = this.phoneRect.height - (eleRect.offsetTop + eleRect.height) + "px";
    }
    // this.seleted_comp.styles = Object.assign({}, styles);
    console.log("像素化组件位置", styles);
};

// 重新分发 FixedDOM
export const reslotFixedDOM = function(child, parent) {
    const cloneList = document.querySelectorAll(child);
    const FixedDomContainer = document.querySelector(parent);
    console.log("需要重新分发的孩子元素：", cloneList);
    console.log("需要接受分发的容器元素：", FixedDomContainer);
    cloneList.forEach((el) => {
        el.remove();
        FixedDomContainer.appendChild(el);
    });
};
