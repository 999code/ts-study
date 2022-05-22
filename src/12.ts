import { type } from "os"
import { age } from "./es6"

namespace a{
    interface Bird{
        name:string
        fly():void
    }
    interface Person{
        name:string
        eat():void
    }

    // 交叉类型其实就是两个接口类型的属性的并集
    type BirdMan=Bird | Person
    let p:BirdMan={
        name:'zhangsan',
        // fly(){}
        eat(){}
    }
    type aaa={
        ab:string
        nj:string
    }
    let a:aaa={
        ab:'',
        nj:''
    }
    let b:aaa=class{
        static ab=''
        static nj=''
    }

}

namespace b{
    // typeof可以获取一个变量的类型
    // type Person={
    //     name:string
    //     age:number
    // }
    let p={
        name:'zhangsan',
        age:10
    }
    // type interface是用来定义类型的 let var是用来定义值的
    type Person=typeof p //typeof来获取一个值的类型

    let p2:Person={
        name:'zhangsan1',
        age:20
    }
    // 我们可以通过 []来获取一个类型的子类型
    interface Person2{
        name:string
        age:number
        job:{
            name:string
        }
        intrests:Array<{name:string;level:number}>
    }
    let myname:Person2['job']['name']='fe'
    let mylevel:Person2['intrests'][0]['level']=10
    // keyof 索引类型查询操作符
    interface Person3{
        name:string
        age:number
        gender:'male'|'female'
        // [propName:string]:any
    }
    // type Person3Keys='name' | 'age' | 'gender'
    type Person3Keys=keyof Person3 //返回一个接口他的key的集合

    function getValueByKey(val:Person3,key:Person3Keys){
        return val[key]
    }
    let person3:Person3={
        name:'zhangsan',
        age:10,
        gender:'male'
    }
    let name=getValueByKey(person3,'name')


    // 映射类型 在定义的时候用in操作符去批量定义
    interface Person4{
        name:string
        age:number
        gender:'male'|'female'
    }

    // type PartialPerson={
    //     [key in keyof Person4]?:Person4[key]
    // }

    type Partial <T>={
        [key in keyof T]?:T[key] //?可有可无
    }

    type PartialPerson=Partial<Person4>
    let p4:PartialPerson={
        name:'zhangsan',
        age:10
    }
    
    type Required<T>={
        [key in keyof T]-?:T[key] //-去掉？
    }
    type RequiredPerson=Required<Person4>
    let p5:RequiredPerson={
        name:'zhufeng',
        age:12,
        gender:'female'
    }

    type Readonly<T>={
        readonly [key in keyof T]:T[key]
    }

    type ReadonlyPerson=Readonly<Person4>
    let p6:ReadonlyPerson={
        name:'zhangsan',
        age:16,
        gender:'male'
    }

    // p6.name='jiagou'
    // Pick
    // keyof T=name|age|gender
    // type PickPerson<T,K extends keyof T>={
    //     [key in K]:T[key]
    // }
    type PickPerson=Pick<Person4,'name'|'gender'>
    // interface PickPerson{
    //     name:string
    // }
    let x:PickPerson={
        name:'zhangsan',
        gender:'female'
    }
    // TS要区分类型和值 类型interface type  值 let const var function class enum
    // interface Person4=Person3 //接口不能当值来使用 也不能赋值
    // interface typeof
    type Person5=Person3
    type a=typeof x
    type b=typeof a
    let bbb:b='string'
    let aaa:a={name:'',gender:'female'}

    
}


