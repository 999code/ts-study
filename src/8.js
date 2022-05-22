"use strict";
// 为什么会有泛型 他的意义在哪里
var a;
(function (a_1) {
    // function createArray(lenth:number,value:string):Array<any>{
    //     let result:Array<any>=[]
    //     for(let i=0;i<length;i++){
    //         result[i]=1
    //     }
    //     return result
    // }
    // let result=createArray(3,'x')
    // console.log(result);
    // 定义函数 类
    // function createArray<T>(length:number,value:string):Array<T>{  //不能将其他类型的值赋值给T类型
    function createArray(length, value) {
        var result = [];
        for (var i = 0; i < length; i++) {
            result[i] = value;
        }
        return result;
    }
    var result = createArray(3, 'x');
    console.log(result);
    var result2 = createArray(3, 3);
    console.log(result2);
    // 类数组 ArrayLike arguments
    function sum() {
        var args2 = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args2[_i] = arguments[_i];
        }
        var args = arguments;
        for (var i = 0; i < args.length; i++) {
            console.log(args[i]);
        }
    }
    sum(1, 2, '3', 4);
    // DOM类型
    // let root:HTMLElement | null=document.getElementById('root')
    // let children:HTMLCollection|undefined=root?.children
    // let childNodes:NodeListOf<ChildNode>=root!.childNodes
    var MyArray = /** @class */ (function () {
        function MyArray() {
            this.list = [];
        }
        MyArray.prototype.add = function (val) {
            this.list.push(val);
        };
        MyArray.prototype.getMax = function () {
            var result = this.list[0];
            for (var i = 0; i < this.list.length; i++) {
                if (this.list[i] > result) {
                    result = this.list[i];
                }
            }
            return result;
        };
        return MyArray;
    }());
    var arr = new MyArray();
    arr.add(1);
    arr.add(2);
    arr.add(3);
    var result3 = arr.getMax();
    console.log(result3);
    var calcFunc = function (a, b) {
        return '';
    };
    calcFunc.t = '';
    var add1 = function (a, b) {
        return a;
    };
    var result4 = add1(3, 9);
    // 多个类型参数如何在不增加中间变量的情况下 交换两个变量的值
    function swap(tuple) {
        return [tuple[1], tuple[0]];
    }
    var result5 = swap(['zhufeng', 1]);
    console.log(result5); //[10,'zhufeng']
    // let a=1,b=2
    // [b,a]=[a,b]
    // 默认泛型类型
    function createArray2(length) {
        var t = null;
        return t;
    }
    var result6 = createArray2(3);
    function logger(val) {
        console.log(val.length);
    }
    logger('zhufeng');
    var cart = {
        list: ['1', '2']
    };
    var c1 = { list: ['1'] };
    var c2 = ['12', '36'];
    // interface一般用于定义一个实实在在的接口 他是一个真正的类型
    // type一般用来定义别名 并不是一个真正的类型
})(a || (a = {}));
