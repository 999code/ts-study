"use strict";
// 函数定义
function hello(name) {
    console.log('hello' + name);
}
// 函数表达式 
var getUserName = function (firstName, LastName) {
    return {
        name: firstName + LastName
    };
};
// 可选参数
function print(name, age, home) {
}
print('1');
print('1', 1);
print('1', 2, '1');
// 默认参数
function ajax(url, method) {
    if (method === void 0) { method = 'GET'; }
}
ajax('url');
ajax('url', 'post');
// 剩余参数
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (accu, item) { return accu + item; }, 0);
}
// 函数重载
var obj = {};
function attr(val) {
    if (typeof val === 'string') {
        obj.name = val;
    }
    else {
        obj.age = val;
    }
}
attr('123');
attr(123);
var delay = function (ms) {
    setTimeout(function () {
    }, ms);
    // return 1
};
