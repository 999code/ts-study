import { type } from "os"

namespace a{
    // 接口的兼容性  ts跟类型没有关系
    interface Animal{
        name:string
        age:number
    }
    interface Person{
        name:string
        age:number
        speak:(words:string)=>void
    }

    function getName(animal:Animal):string{
        return animal.name
    }

    const p:Person={
        name:'zhangsan',
        age:10,
        speak(){

        }
    }
    getName(p)

    // 基本类型的兼容性
    let num:string|number=1
    let str:string='hello'
    num=str
    interface num2 {
        // toString:()=>string
        toString():string
    }
    // let str2:num2=122
    let str2:num2='122'
}


namespace b{
    // 类的兼容性跟类型无关
    class Animal{
        name!:string
    }
    class Bird extends Animal{
        swing!:number
    }

    let a:Animal
    a=new Bird() // 父类的变量能指向子类的实例

    let b:Bird
    // b=new Animal() // 子类的变量不能指向父类的实例
    b={name:'zhangsan',swing:2} //不管这个变量的具体类型只要有属性就行
    // 实现只能多不能少
}


namespace c{
    // 函数兼容性
    // 比较参数
    // 实现只能少不能多
    // type sumFunction=(a:number,b:number)=>number  //使用type实现一个函数接口
    interface sumFunction{ //使用interface实现一个函数接口
        (a:number,b:number):number
    }
    let sum:sumFunction
    function f1(a:number,b:number):number{
        return a
    }
    function f2(a:number):number{
        return a
    }
    function f3():number{
        return 1
    }
    function f4(a:number,b:number,c:number){
        return a
    }
    sum=f1
    sum=f2
    sum=f3
    // sum=f4

    // type用于合成一个类型
    // interface用于定义一个类型
    // 比较返回值
    type GetPerson=()=>{name:string,age:number}
    // interface GetPerson
    let getPerson:GetPerson
    function g1(){
        return {
            name:'string',
            age:10
        }
    }
    function g2(){
        return {name:'123'}
    }
    function g3(){
        return {name:'123',age:10,gender:'gender'}
    }

    getPerson=g1
    // getPerson=g2
    getPerson=g3


    interface T{
        name:string
    }
    type T1=T
    let t:T1={
        name:'zhangsan',
        // age:10
    }
    // 函数参数的协变


    type logFunc=(a:number|string)=>boolean
    let log:logFunc
    function log1(a:number|string|boolean){
        console.log(a);
    }
    log1(true)
    // 判断兼容性的时候先判断具体的类型再进行兼容性判断
    interface Empty<T>{
        data:T
    }

    let x!:Empty<string>//={data:'string'}
    let y!:Empty<number>//={data:10}

    // x=y
    interface NotEmptyString<T>{
        data:string
    }
    interface NotEmptyNumber<T>{
        data:number
    }
    // 枚举的兼容性
    enum Colors{
        Red,
        Yellow
    }
    let c:Colors
    c=Colors.Red //=0
    c=1
    let d:Colors
    d=Colors.Yellow //=1
}






