"use strict";
// 如何定义类
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
    var Person = /** @class */ (function () {
        function Person() {
            this.name = 'zhangsan';
            this.age = 28;
            this.age = 10;
        }
        return Person;
    }());
    var p1 = new Person();
    console.log(p1.name);
    console.log(p1.age);
})(a || (a = {}));
var b;
(function (b) {
    var Person = /** @class */ (function () {
        function Person(name) {
            this.name = name;
        }
        Object.defineProperty(Person.prototype, "name", {
            get: function () {
                console.log(this.name1);
                return this.name1;
            },
            set: function (val) {
                this.name1 = val.toUpperCase();
            },
            enumerable: false,
            configurable: true
        });
        return Person;
    }());
    var p = new Person('zhangsan');
    console.log(p.name);
    p.name = 'lisi';
})(b || (b = {}));
var c;
(function (c) {
    var Person = /** @class */ (function () {
        function Person(name) {
            this.name = name;
            this.name = name;
        }
        return Person;
    }());
    var p = new Person('zhangsan');
    p.name = 'lisi';
})(c || (c = {}));
// 继承
// 子类继承父类后子类实例上就有了父类的方法和属性
var d;
(function (d) {
    var Person = /** @class */ (function () {
        function Person(name, age) {
            this.name = name;
            this.age = age;
            this.amount = 100;
        }
        Person.prototype.getName = function () {
            return this.name;
        };
        Person.prototype.setName = function (val) {
            this.name = val;
        };
        return Person;
    }());
    var Student = /** @class */ (function (_super) {
        __extends(Student, _super);
        function Student(name, age, stuNo) {
            var _this = _super.call(this, name, age) || this;
            _this.stuNo = stuNo;
            return _this;
        }
        Student.getType = function () {
            return Student.type;
        };
        Student.prototype.getStuNo = function () {
            // this.amount
            return this.name + this.age + this.stuNo;
        };
        Student.prototype.setStuNo = function (val) {
            this.stuNo = val;
        };
        Student.type = 'Student';
        return Student;
    }(Person));
    var p = new Student('zhangsan', 16, 100);
    p.name;
    // p.age
    // p.amount
    Student.type;
    Student.getType();
})(d || (d = {}));
var e;
(function (e) {
    var Person = /** @class */ (function () {
        function Person() {
            this.name1 = 'zhangsan';
        }
        Person.name1 = 'lisi';
        return Person;
    }());
    var p = new Person();
    p.name1;
    Person.name1;
})(e || (e = {}));
