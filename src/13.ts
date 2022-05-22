import { type } from "os";

namespace a{
    let x={name:'string'}
    let a=typeof x
    type b=typeof x
    console.log(a);
    console.log(b);
    
    class Person{
        public name:string='zhufeng'
    }
    type PartialPerson=Partial<Person>
    let p:PartialPerson={
        name:'zhangsan'
    }
    // 元组的长度和类型是固定的
    let xx:[string,number]=['1',1]
    // console.log(xx[2])
    // 什么时候用interface 什么时候用type 、class 三者一般在啥时候用
    // interface 是定义接口类型他是真实的类型 也可能会被导出和导入
    // type只是临时用的别名并不会产出真正的类型
    // class 就是定义new xxx

    interface Fish2{
        name:string
        age:number
    }
    interface Fish{
        name1:string
    }
    interface Water{
        name2:string
    }
    interface Bird{
        name3:string
    }
    interface Sky{
        name4:string
    }
    type Condition<T>=T extends Fish?Water:Sky
    // T extends U ? X : Y //如果T包含的类型 是 U包含的类型的 ‘子集’，那么取结果X，否则取结果Y。

    type Condition2<T>=T extends Fish?Water:Sky
    // type Condition2<Bird | Fish>=Water | Sky
    let c1:Condition2<Fish|Bird>={name2:'zhufeng'}
    let c2:Condition2<Fish|Bird>={name4:"zhangsan"}
    let c3:Water|Sky={name2:''}
    let c4:Water|Sky={name4:''}

    interface Person5{
        name:string
        age:number
        gender:'male'|'female'
    }
    // 批量把一个接口中的属性都变成可选的
    type PartPerson5={
        [key in keyof Person5]?:Person5[key]
    }
    type Person6=Person5

}


namespace c{
    type E=Exclude<string|number,string>//从前者中排除掉后者
    let e:E=10
    type E2=Extract<string|number|null,string> //从前者取出后者
    let e2:E2='lisi'
    type E3=NonNullable<string | number | null | undefined> //提取不为空的类型
    let e3:E3='lisi'
    let e4:E3=10
    // redux会用到的ReturnType  获取函数返回值的类型
    function getUserInfo(){
        return {
            name:'zhangsan',
            age:19
        }
    }
    type UserInfo=ReturnType<typeof getUserInfo>
    let user:UserInfo={
        name:'lisi',
        age:10
    }
    // instanceType获取构造函数的实例类型
    class Person5{
        name:string
        constructor(name:string){
            this.name=name
        }
    }
    type P=InstanceType<typeof Person5>
    let p:P=new Person5('zhangsan')

}






