// 2021-03-14 01:06:01 chenhu.pei
import { deepClone } from "@/utils";
import { notEmpty } from "./tools";
const baseFromItem = {
    // 取值函数
    getter: (self) => self.value,
    // 赋值函数
    setter: (self, oldValue) => (self.value = notEmpty(oldValue) ? oldValue : self.value),
    // 字段更新回调函数
    callback() {},
    // 校验函数
    validator(self) {
        // 可见表单项 + 必填 + 取值是个空数 === 警告
        if (!self.hide && self.required && !notEmpty(self.getter(self))) {
            self.validatorMsg = self.label + "不能为空";
            return self;
        } else {
            self.validatorMsg = "";
            return true;
        }
    },
    //  校验提示信息
    validatorMsg: "",
    //  字段名称
    label: "字段名称",
    //  字段说明
    tip: "字段说明",
    //  字段关键字
    key: "字段关键字",
    //  字段数值
    value: "",
    //  字段可选的数值
    valueList: [],
    //  字段类型
    type: "text",
    //  字段必填
    required: true,
    //  字段隐藏
    hide: true,
    //  字段长度
    maxlength: -1,
    //  是否可以更改初始值
    disabled: false
};

export const fromList_PButton = {
    timestamp: "2021-03-14 01:07:43",
    author: "chenhu.pei",
    // content: "确定",
    // btnColor: "#ffffff",
    // btnBackground: "#ff615b",
    // btnHoverBackground: "blue",
    // btnHoverColor: "white"
    content: {
        ...deepClone(baseFromItem),
        label: "按钮文案",
        tip: "按钮文案: 长度限制1~20个字符",
        key: "content",
        value: "确定",
        type: "text",
        maxlength: 20
    },
    btnColor: {
        ...deepClone(baseFromItem),
        label: " 按钮字体颜色",
        key: "btnColor",
        value: "#ffffff"
    },
    btnBackground: {
        getter() {},
        setter() {},
        validator() {},
        label: "讲义类型",
        key: "bookType",
        value: "2"
    },
    btnHoverBackground: {
        getter() {},
        setter() {},
        validator() {},
        label: "讲义类型",
        key: "bookType",
        value: "2"
    },
    btnHoverColor: {
        getter() {},
        setter() {},
        validator() {},
        label: "讲义类型",
        key: "bookType",
        value: "white"
    }
};
