// 为什么会有泛型 他的意义在哪里

namespace a{
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
    function createArray<T>(length:number,value:T):Array<T>{
        let result:Array<T>=[]
        for(let i=0;i<length;i++){
            result[i]=value
        }
        return result
    }
    let result=createArray<string>(3,'x')
    console.log(result);
    let result2=createArray<number>(3,3)
    console.log(result2);
    
    // 类数组 ArrayLike arguments

    function sum(...args2:any){
        let args:IArguments=arguments
        for(let i=0;i<args.length;i++){
            console.log(args[i]);
        }
    }
    sum(1,2,'3',4)


    // DOM类型
    // let root:HTMLElement | null=document.getElementById('root')
    // let children:HTMLCollection|undefined=root?.children
    // let childNodes:NodeListOf<ChildNode>=root!.childNodes

    class MyArray<T>{
        private list:T[]=[]
        add(val:T){
            this.list.push(val)
        }
        getMax():T{
            let result:T=this.list[0]
            for(let i=0;i<this.list.length;i++){
                if(this.list[i]>result){
                    result=this.list[i]
                }
            }
            return result
        }
    }

    let arr=new MyArray<number>()
    arr.add(1)
    arr.add(2)
    arr.add(3)
    let result3:number=arr.getMax()
    console.log(result3);

    // 接口泛型
    interface Calculate<T>{
        (a:T,b:T):T  // 约束函数的接口形式
        t:T //函数加一个属性
    }
    
    
    const calcFunc:Calculate<string>=(a:string,b:string)=>{  //不能使用let
        return ''
    }
    calcFunc.t=''

    interface Calculate1{
        <T>(a:T,b:T):T
    }
    let add1:Calculate1=function(a,b){
        return a
    }

    let result4=add1(3,9)


    // 多个类型参数如何在不增加中间变量的情况下 交换两个变量的值
    function swap<A,B>(tuple:[A,B]):[B,A]{
        return [tuple[1],tuple[0]]
    }

    let result5=swap<string,number>(['zhufeng',1])
    console.log(result5); //[10,'zhufeng']
    // let a=1,b=2
    // [b,a]=[a,b]

    // 默认泛型类型
    function createArray2<T=string>(length:number):T|null{
        let t:T|null=null
        return t
    }
    let result6=createArray2<boolean>(3)

    // 泛型的约束
    // 在使用泛型的时候由于事先不知道具体的类型所以不能访问相应类型的方法
    interface LenthWise{
        length:number
    }

    function logger<T extends LenthWise>(val:T){
        console.log(val.length);
    }
    logger('zhufeng')
    
    interface Cart<T>{
        list:T[]
    }
    let cart:Cart<string>={
        list:['1','2']
    }

    // 泛型类型别名
    type Cart2<T>={list:T[]}|T[]
    let c1:Cart2<string>={list:['1']}
    let c2:Cart2<string>=['12','36']
    // interface一般用于定义一个实实在在的接口 他是一个真正的类型
    // type一般用来定义别名 并不是一个真正的类型

}


