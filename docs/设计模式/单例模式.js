// 通用单例模式
const Singleton = function (fn) {
    // 立即执行，创建闭包，保护 instance 实例变量
    let instance = null;
    return function () {
        // 确保初始化一次单身狗实例
        if (!instance) {
            // 初始化单身狗实例
            instance = fn.apply(this, arguments);
        }
        // 返回实例（唯一）
        return instance;
    };
};

// 创建班草类
class ClassGrass {
    constructor(name) {
        this.name = name;
    }

    getName() {
        console.log(this.name);
        return this.name;
    }
}

// 创建单身狗类
class SingleDog {
    constructor(name) {
        this.name = name;
    }

    getName() {
        console.log(this.name);
        return this.name;
    }
}

// 创建单例
const classGrass = Singleton(name => new ClassGrass(name));
const classGrass2 = Singleton(name => new ClassGrass(name));
const singleDog = Singleton(name => new SingleDog(name));

classGrass("大明").getName(); // 输出：大明
classGrass("二明").getName(); // 输出：大明
classGrass("三明").getName(); // 输出：大明

classGrass2("大白").getName(); // 输出：大明
classGrass2("二白").getName(); // 输出：大明
classGrass2("三白").getName(); // 输出：大明

singleDog("大毛").getName(); // 输出：大毛
singleDog("二毛").getName(); // 输出：大毛
singleDog("三毛").getName(); // 输出：大毛