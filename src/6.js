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
var a;
(function (a) {
    // 关于继承跟静态没有关系 子类不能够继承父类的静态方法
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        Animal.getAge = function () {
            return '父类的age';
        };
        Animal.prototype.getName = function () {
            return '父类的名称';
        };
        return Animal;
    }());
    var Cat = /** @class */ (function (_super) {
        __extends(Cat, _super);
        function Cat() {
            return _super.call(this) || this;
        }
        Cat.prototype.getName = function () {
            return _super.prototype.getName.call(this) + '儿子的名称';
        };
        return Cat;
    }(Animal));
    var cat = new Cat();
    console.log(cat.getName());
})(a || (a = {}));
