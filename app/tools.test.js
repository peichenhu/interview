const tools = require("./tools");

describe("深拷贝测试", () => {
    const obj1 = {
        a: new Date(),
        b: false,
        c: [1, 2],
        d: {
            a: new Date(),
            b: false,
            c: [1, 2]
        },
        e: function () {
            console.log("e");
        }
    };

    const obj2 = tools.deepClone(obj1);

    it("元对象和拷贝对象不是同一个对象 .not.toBe", () => {
        expect(obj1).not.toBe(obj2);
    });

    it("元对象和拷贝对象不是同一个对象 Object.is.not.toBeTruthy", () => {
        expect(Object.is(obj1, obj2)).not.toBeTruthy();
    });

    it("元对象和拷贝对象不是同一个对象 ===.not.toBeTruthy", () => {
        expect(obj1 === obj2).not.toBeTruthy();
    });

    it("元对象和拷贝对象拥有相同的属性 .toEqual", () => {
        expect(obj1).toEqual(obj2);
    });

    test("元对象拥有属性函数e", () => {
        expect(typeof obj1.e === "function").toBeTruthy();
    });

    test("拷贝对象拥有属性函数e", () => {
        expect(typeof obj2.e === "function").toBeTruthy();
    });
});
