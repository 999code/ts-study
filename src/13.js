"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var a;
(function (a_1) {
    var x = { name: 'string' };
    var a = typeof x;
    console.log(a);
    console.log(b);
    var Person = /** @class */ (function () {
        function Person() {
            this.name = 'zhufeng';
        }
        return Person;
    }());
    var p = {
        name: 'zhangsan'
    };
    // 元组的长度和类型是固定的
    var xx = ['1', 1];
    // type Condition2<Bird | Fish>=Water | Sky
    var c1 = { name2: 'zhufeng' };
    var c2 = { name4: "zhangsan" };
    var c3 = { name2: '' };
    var c4 = { name4: '' };
})(a || (a = {}));
var c;
(function (c) {
    var e = 10;
    var e2 = 'lisi';
    var e3 = 'lisi';
    var e4 = 10;
    // redux会用到的ReturnType  获取函数返回值的类型
    function getUserInfo() {
        return {
            name: 'zhangsan',
            age: 19
        };
    }
    var user = {
        name: 'lisi',
        age: 10
    };
    // instanceType获取构造函数的实例类型
    var Person5 = /** @class */ (function () {
        function Person5(name) {
            this.name = name;
        }
        return Person5;
    }());
    var p = new Person5('zhangsan');
})(c || (c = {}));
