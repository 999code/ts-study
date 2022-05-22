namespace a{
    // 关于继承跟静态没有关系 子类不能够继承父类的静态方法

    class Animal{
        static getAge(){
            return '父类的age'
        }
        getName(){
            return '父类的名称'
        }

    }
    class Cat extends Animal{
        constructor(){
            super()
        }
        getName(): string {
            return super.getName()+'儿子的名称'
        }
    }

    const cat=new Cat()
    console.log(cat.getName());
    
}