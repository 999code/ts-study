"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var age = 12;
var name = 'hello';
var married = true;
// 数组
var hobbies = ['12', '3'];
var intrests = ['1', '3',];
// 1 长度固定 2类型可以不一样 
// 元组
var point = [1, 2];
var person = ['zhangsan', 10];
// 元组数组区别
// 元组 每一项可以是不同的类型 有预定的长度 用于表示一个固定结构
// 数组 美哟i想·每一项都是相同类型 没有长度限制 用于表示一个列表
// 枚举
var Gender;
(function (Gender) {
    Gender[Gender["BOY"] = 0] = "BOY";
    Gender[Gender["GIRL"] = 1] = "GIRL";
})(Gender || (Gender = {}));
var Week;
(function (Week) {
    Week[Week["MONDAY"] = 1] = "MONDAY";
    Week[Week["TUESDAY"] = 2] = "TUESDAY";
})(Week || (Week = {}));
var Colors;
(function (Colors) {
    Colors[Colors["RED"] = 0] = "RED";
    Colors[Colors["BLUE"] = 1] = "BLUE";
    Colors[Colors["YELLOW"] = 2] = "YELLOW";
})(Colors || (Colors = {}));
// 任意类型any
var anything = [1, 3, '9', 6];
var root = document.getElementById('root');
function greeting(name) {
    console.log(name);
}
greeting('zhangsan');
// never 永远不会出现值
// 场景一 抛出错误
function createError(message) {
    throw new Error(message);
    console.log(111);
}
function sum() {
    while (true) {
        console.log('hello');
    }
    console.log(111);
}
var name1;
name1 = 'hello';
name1.toLowerCase();
var name6 = 9;
// (name6 as string).toLocaleLowerCase()
name6.toFixed(2);
var Gender6;
Gender6 = 'BOY';
Gender6 = 'GIRL';
// Gender6='REN'
