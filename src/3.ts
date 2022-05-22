// 如何定义类

namespace a{
    class Person{
        name:string='zhangsan'
        age:number=28
        constructor(){
            this.age=10
        }
    
    }
    
    let p1=new Person()
    console.log(p1.name);
    console.log(p1.age)
}
namespace b{
    class Person{
        name1!: string;
        constructor(name:string){
            this.name=name
        }
        get name(){
            console.log(this.name1);
            return this.name1
        }
        set name(val:string){
            this.name1=val.toUpperCase()
        }
    }
    const p=new Person('zhangsan')
    console.log(p.name)
    p.name='lisi'
}

namespace c{
    class Person{
        constructor(public name:string){
            this.name=name
        }
    }
    let p=new Person('zhangsan')
    p.name='lisi'
}

// 继承

// 子类继承父类后子类实例上就有了父类的方法和属性


namespace d{
    class Person{
        name!:string
        protected age!:number
        private amount!:number
        constructor(name:string,age:number){
            this.name=name
            this.age=age
            this.amount=100
        }
        getName(){
            return this.name
        }
        setName(val:string){
            this.name=val
        }
    }

    class Student extends Person{
        static type='Student'
        static getType(){
            return Student.type
        }
        stuNo!:number
        constructor(name:string,age:number,stuNo:number){
            super(name,age)
            this.stuNo=stuNo
        }
        getStuNo(){
            // this.amount
            return this.name+this.age+this.stuNo
        }
        setStuNo(val:number){
            this.stuNo=val
        }
    }
    let p=new Student('zhangsan',16,100)
    p.name
    // p.age
    // p.amount
    Student.type
    Student.getType()
}


namespace e{
    class Person{
        name1:string='zhangsan'
        static name1:string='lisi'
    }

    const p=new Person()
    p.name1
    Person.name1
}




