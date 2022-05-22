"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var a;
(function (a) {
    function getName(animal) {
        return animal.name;
    }
    var p = {
        name: 'zhangsan',
        age: 10,
        speak: function () {
        }
    };
    getName(p);
    // 基本类型的兼容性
    var num = 1;
    var str = 'hello';
    num = str;
    // let str2:num2=122
    var str2 = '122';
})(a || (a = {}));
var b;
(function (b_1) {
    // 类的兼容性跟类型无关
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        return Animal;
    }());
    var Bird = /** @class */ (function (_super) {
        __extends(Bird, _super);
        function Bird() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Bird;
    }(Animal));
    var a;
    a = new Bird(); // 父类的变量能指向子类的实例
    var b;
    // b=new Animal() // 子类的变量不能指向父类的实例
    b = { name: 'zhangsan', swing: 2 }; //不管这个变量的具体类型只要有属性就行
    // 实现只能多不能少
})(b || (b = {}));
var c;
(function (c_1) {
    var sum;
    function f1(a, b) {
        return a;
    }
    function f2(a) {
        return a;
    }
    function f3() {
        return 1;
    }
    function f4(a, b, c) {
        return a;
    }
    sum = f1;
    sum = f2;
    sum = f3;
    // interface GetPerson
    var getPerson;
    function g1() {
        return {
            name: 'string',
            age: 10
        };
    }
    function g2() {
        return { name: '123' };
    }
    function g3() {
        return { name: '123', age: 10, gender: 'gender' };
    }
    getPerson = g1;
    // getPerson=g2
    getPerson = g3;
    var t = {
        name: 'zhangsan',
        // age:10
    };
    var log;
    function log1(a) {
        console.log(a);
    }
    log1(true);
    var x; //={data:'string'}
    var y; //={data:10}
    // 枚举的兼容性
    var Colors;
    (function (Colors) {
        Colors[Colors["Red"] = 0] = "Red";
        Colors[Colors["Yellow"] = 1] = "Yellow";
    })(Colors || (Colors = {}));
    var c;
    c = Colors.Red; //=0
    c = 1;
    var d;
    d = Colors.Yellow; //=1
})(c || (c = {}));
