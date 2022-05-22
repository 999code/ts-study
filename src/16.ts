// import * as jQuery from 'jquery'
declare const $:(selector:string)=>{
    click():void
    width(length:number):void
}

$('#root').click()
console.log($('#root').width(100));

declare let name:string // 变量
declare let age:number // 变量
declare function getName():string // 方法
declare class Animal{
    name:string
}


console.log(name,age)
getName()

new Animal()

export default {}

