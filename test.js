// - 现在有一批数据
var formData = {
    name: "0_O",
    age: "",
    phone: 15652168661,
    email: "pch1024@outlook.com"
};

// - 对每一项数据都配置对应的验证算法
var config = {
    name: [ "isNonEmpty", "isAlphaNum" ],
    age: [ "isNonEmpty", "intNumber" ],
    phone: [ "isPhone", "intNumber" ],
    email: [ "isEmail" ]
};
// - 实现具体的验证算法

var types = {
    isNonEmpty: {
        validate: function (val) {
            return val !== "";
        },
        msg: "值不能为空。"
    },
    intNumber: {
        validate: function (val) {
            return !isNaN(val) && Math.round(val) === val && val > 0;
        },
        msg: "值只能是整数。"
    },
    isPhone: {
        validate: function (val) {
            return !isNaN(val) && val >= 10000000000 && val < 20000000000 && Math.round(val) === val;
        },
        msg: "手机号应该是11位的数字。"
    },
    isAlphaNum: {
        validate: function (val) {
            return !/[^a-z0-9_]/i.test(val);
        },
        msg: "用户名仅支持数字、字母、下划线。"
    },
    isEmail: {
        validate: function (val) {
            return /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/i.test(val);
        },
        msg: "邮箱输入有误。"
    }
};

// - 核心策略模式代码

var validator = {
    // 所有可用的验证算法
    types: types,
    // 验证器配置类型约定
    config: config,
    // 验证结果存储
    messages: [],
    // 快速检测最终结果
    hasError: function () {
        return this.messages.length > 0;
    },
    // 验证方法实现
    validate: function (data) {
        // 重置验证结果存储
        this.messages = [];
        // 策略实现
        for (let key in data) {
            // 直属属性
            if (data.hasOwnProperty(key)) {
                // 获取数据的类型约定
                let types = this.config[ key ];
                // 没有约定，不校验
                if (!types || types.length === 0) continue;
                // 遍历约定
                for (let i = 0; i < types.length; i++) {
                    // 获取类型约定的校验规则
                    let type = types[ i ];
                    let tester = this.types[ type ];
                    // 校验规则不存在
                    if (!tester) {
                        throw {
                            name: "数据校验错误",
                            message: `没有找到数据校验规则：${ type }`
                        };
                    }
                    // 使用规则校验
                    let res = tester.validate(data[ key ]);
                    // 如果返回 false , 校验未通过
                    if (!res) {
                        // 记录错误信息在案
                        this.messages.push(`${ key }得到一个错误的值：${ data[ key ] },错误提示消息：${ tester.msg }`);
                    }
                }
            }
        }
        // 返回最终结果
        return this.hasError();
    }
};

// - 使用 `validator` 对象的 `validate` 方法验证并打印错误信息到控制台

validator.validate(formData);

if (validator.hasError()) {
    console.log(validator.messages.join("\n"));
} else {
    console.log("策略模式数据校验成功");
}