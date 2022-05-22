
namespace a{

    interface Person{
        xx:string,
        yy:string
    }

    function enhancer(target:any){
        target.prototype.xx='xx'
        target.prototype.yy='yy'
    }

    @enhancer
    class Person{
        constructor(){

        }    
    }
    let p=new Person()

    p.xx
    p.yy

}


namespace b{
    interface Person{
        age:number
    }

    
    function enhancer(){

        return function enhancer(target:any){
            return class extends Person {
                age:number=10
                constructor(name:string,age:number) {
                    super(name,age)
                    this.age=age
                }
            }
        }
    }


    @enhancer()
    class Person{
        public name:string='person'
        public age:number=10
        constructor(name:string,age:number){
            this.name=name
            this.age=age
        }
    }
}


// 属性装饰器
namespace c{
    // target装饰的如果是普通属性的话 那么这个target指向类的原型
    // target装饰的是一个类的属性static 那么这个target指向类的定义
    function upperCase(target:any,propertyName:string){
        let value=target[propertyName]
        const getter=()=>value
        const setter=(newVal:string)=>{
            value=newVal.toUpperCase()
        }
        delete target.propertyName
        Object.defineProperty(target,propertyName,{
            get:getter,
            set:setter,
            enumerable:true,
            configurable:true
        })
    }

    function propertyEnumerable(flag:boolean){
        return function(target:any,properName:string){
            Object.defineProperty(target,properName,{
                enumerable:flag
            })
        }
    }
    // 装饰器修饰的是一个方法时候有三个参数 修饰的是一个属性的时候有两个参数
    function methodEnumerable(flag:boolean){
        return function(target:any,methodName:string,descriptor:PropertyDescriptor){
            descriptor.enumerable=flag
        }
    }

    function setAge(age:number){
        return function(target:any,methodName:string,descriptor:PropertyDescriptor){
            target.age=age
        }
    }
    function toNumber(target:any,methodName:string,descriptor:PropertyDescriptor){
        let oldMethod=descriptor.value
        descriptor.value=function(...args:any[]){
            args=args.map(item=>parseFloat(item))
            oldMethod.apply(this,args)
        }
    }

    class Person{
        @upperCase
        @propertyEnumerable(false)
        name:string='zhangsan'
        @methodEnumerable(true)
        getName(){
            console.log('getName');
        }
        @setAge(100)
        static getAge(){
        }
        @toNumber
        sum(...args:any[]){
            return args.reduce((accu,item)=>accu+item,0)
        }
            
    }
    let p=new Person()
    p.name='lisi'
    console.log(p.name);
    for(let attr in p){
        console.log('attr=>'+attr);
    }
}


namespace d{

    interface Person{
        age:number
    }
    function addAge(target:any,methodName:string,paramsIndex:number){
        console.log(target,methodName,paramsIndex);
        target.age=10       
    }
    class Person{
        login(username:string,@addAge password:string){

        }
    }
    let p=new Person()
    p.login('zhangsan','123')
}

