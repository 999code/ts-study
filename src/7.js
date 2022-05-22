"use strict";
// 任意属性
var a;
(function (a) {
    var obj = {
        x: 1,
        y: 2,
        z: 6,
    };
    var Person = /** @class */ (function () {
        function Person() {
        }
        Person.prototype.speak = function () {
        };
        Person.prototype.speakChinese = function () {
        };
        return Person;
    }());
    var circle = {
        PI: 3.14,
        radius: 10
    };
    var discount = function (price) {
        return price * 0.8;
    };
    var arr = ['1', '2', '3'];
    var obj2 = {
        1: '2',
        2: '3'
    };
})(a || (a = {}));
// type interface
// 类接口 可以用接口来装饰类  学习TS要学会两个重要 接口+泛型
var b;
(function (b) {
    var Person = /** @class */ (function () {
        function Person() {
        }
        return Person;
    }());
    var Dog = /** @class */ (function () {
        function Dog() {
        }
        Dog.prototype.speak = function (words) {
        };
        return Dog;
    }());
    var Animal = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        return Animal;
    }());
    function createAnimal(clazz, name1) {
        return new clazz(name1);
    }
    createAnimal(Animal, '2');
})(b || (b = {}));
