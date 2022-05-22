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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var a;
(function (a) {
    function enhancer(target) {
        target.prototype.xx = 'xx';
        target.prototype.yy = 'yy';
    }
    var Person = /** @class */ (function () {
        function Person() {
        }
        Person = __decorate([
            enhancer
        ], Person);
        return Person;
    }());
    var p = new Person();
    p.xx;
    p.yy;
})(a || (a = {}));
var b;
(function (b) {
    function enhancer() {
        return function enhancer(target) {
            return /** @class */ (function (_super) {
                __extends(class_1, _super);
                function class_1(name, age) {
                    var _this = _super.call(this, name, age) || this;
                    _this.age = 10;
                    _this.age = age;
                    return _this;
                }
                return class_1;
            }(Person));
        };
    }
    var Person = /** @class */ (function () {
        function Person(name, age) {
            this.name = 'person';
            this.age = 10;
            this.name = name;
            this.age = age;
        }
        Person = __decorate([
            enhancer()
        ], Person);
        return Person;
    }());
})(b || (b = {}));
// 属性装饰器
var c;
(function (c) {
    // target装饰的如果是普通属性的话 那么这个target指向类的原型
    // target装饰的是一个类的属性static 那么这个target指向类的定义
    function upperCase(target, propertyName) {
        var value = target[propertyName];
        var getter = function () { return value; };
        var setter = function (newVal) {
            value = newVal.toUpperCase();
        };
        delete target.propertyName;
        Object.defineProperty(target, propertyName, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    }
    function propertyEnumerable(flag) {
        return function (target, properName) {
            Object.defineProperty(target, properName, {
                enumerable: flag
            });
        };
    }
    // 装饰器修饰的是一个方法时候有三个参数 修饰的是一个属性的时候有两个参数
    function methodEnumerable(flag) {
        return function (target, methodName, descriptor) {
            descriptor.enumerable = flag;
        };
    }
    function setAge(age) {
        return function (target, methodName, descriptor) {
            target.age = age;
        };
    }
    function toNumber(target, methodName, descriptor) {
        var oldMethod = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            args = args.map(function (item) { return parseFloat(item); });
            oldMethod.apply(this, args);
        };
    }
    var Person = /** @class */ (function () {
        function Person() {
            this.name = 'zhangsan';
        }
        Person.prototype.getName = function () {
            console.log('getName');
        };
        Person.getAge = function () {
        };
        Person.prototype.sum = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return args.reduce(function (accu, item) { return accu + item; }, 0);
        };
        __decorate([
            upperCase,
            propertyEnumerable(false)
        ], Person.prototype, "name", void 0);
        __decorate([
            methodEnumerable(true)
        ], Person.prototype, "getName", null);
        __decorate([
            toNumber
        ], Person.prototype, "sum", null);
        __decorate([
            setAge(100)
        ], Person, "getAge", null);
        return Person;
    }());
    var p = new Person();
    p.name = 'lisi';
    console.log(p.name);
    for (var attr_1 in p) {
        console.log('attr=>' + attr_1);
    }
})(c || (c = {}));
var d;
(function (d) {
    function addAge(target, methodName, paramsIndex) {
        console.log(target, methodName, paramsIndex);
        target.age = 10;
    }
    var Person = /** @class */ (function () {
        function Person() {
        }
        Person.prototype.login = function (username, password) {
        };
        __decorate([
            __param(1, addAge)
        ], Person.prototype, "login", null);
        return Person;
    }());
    var p = new Person();
    p.login('zhangsan', '123');
})(d || (d = {}));
