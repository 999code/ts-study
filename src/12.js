"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var a;
(function (a_1) {
    var _a;
    var p = {
        name: 'zhangsan',
        // fly(){}
        eat: function () { }
    };
    var a = {
        ab: '',
        nj: ''
    };
    var b = (_a = /** @class */ (function () {
            function class_1() {
            }
            return class_1;
        }()),
        _a.ab = '',
        _a.nj = '',
        _a);
})(a || (a = {}));
var b;
(function (b) {
    // typeof可以获取一个变量的类型
    // type Person={
    //     name:string
    //     age:number
    // }
    var p = {
        name: 'zhangsan',
        age: 10
    };
    var p2 = {
        name: 'zhangsan1',
        age: 20
    };
    var myname = 'fe';
    var mylevel = 10;
    function getValueByKey(val, key) {
        return val[key];
    }
    var person3 = {
        name: 'zhangsan',
        age: 10,
        gender: 'male'
    };
    var name = getValueByKey(person3, 'name');
    var p4 = {
        name: 'zhangsan',
        age: 10
    };
    var p5 = {
        name: 'zhufeng',
        age: 12,
        gender: 'female'
    };
    var p6 = {
        name: 'zhangsan',
        age: 16,
        gender: 'male'
    };
    // interface PickPerson{
    //     name:string
    // }
    var x = {
        name: 'zhangsan',
        gender: 'female'
    };
    var bbb = 'string';
    var aaa = { name: '', gender: 'female' };
})(b || (b = {}));
