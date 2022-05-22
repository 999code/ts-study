// 任意属性

namespace a{
    interface PlainObject{
        [PropName:string]:number
    }

    let obj:PlainObject={
        x:1,
        y:2,
        z:6,
    }

    // 接口的继承
    interface Speakable{
        speak():void
    }
    interface SpeakChinese extends Speakable{
        speakChinese():void
    }
    class Person implements SpeakChinese{
        speak(): void {
        }
        speakChinese(): void {
        }
    }
    // 接口的readonly
    interface Circle{
        readonly PI:number,
        radius:10
    }
    let circle:Circle={
        PI:3.14,
        radius:10
    }
    // circle.PI=12
    // 接口还可以用来约束函数
    interface Discount{
        (price:number):number
        // 参数：number 返回值 number
    }
    let discount:Discount=function(price:number):number{
        return price*0.8
    }

    // 可索引接口
    // 用来对数组和对象进行约束
    interface UserInterface{
        [index:number]:string
    }
    let arr:UserInterface=['1','2','3']
    let obj2:UserInterface={
        1:'2',
        2:'3'
    }

}
// type interface
// 类接口 可以用接口来装饰类  学习TS要学会两个重要 接口+泛型
namespace b{
    class Person{

    }
    interface Speakable{
        name:string
        speak(words:string):void
    }
    class Dog implements Speakable{
        name!: string
        speak(words: string): void {
        }
    }
    class Animal{
      constructor(public name:string){
      }  
    }
    // 约束构造类型 使用new来约束：1 传入(返回)一个Animal类 2 new的时候要传一个 string类型的参数name
    interface WithNameClass{
        new(name:string):Animal
    }

    function createAnimal(clazz:WithNameClass,name1:string){
        return new clazz(name1)
    }

    createAnimal(Animal,'2')
}



