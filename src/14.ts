
export {}

// 声明文件怎么写

// 在Ts项目引入一个js库的解决N办法
// 1、你把它用TS重写一遍
// 2、给他配上声明文件
// eg ： jquery
declare const $:(selector:string)=>{
    click():void
    width(length:number):void
}
// ------------
$('#root').click()
$('#root').width(100)

declare let name:string
declare let age:number
declare function getName():string
declare class Animal{name:string}

interface Person6{
    name:string
}

type Student=Person6 | string
declare const enum Season{
    Spring,
    Summer,
    Autumn,
    Winter
}
let season:Season[]=[
    Season.Spring,
    Season.Summer,
    Season.Autumn,
    Season.Winter
]

console.log(season);



