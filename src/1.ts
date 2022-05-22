
export {}
let age:number=12
let name:string='hello'
let married:boolean=true
// 数组
let hobbies:string[]=['12','3']
let intrests:Array<string>=['1','3',]
// 1 长度固定 2类型可以不一样 
// 元组
let point:[number,number]=[1,2]

let person:[string,number]=['zhangsan',10]

// 元组数组区别
// 元组 每一项可以是不同的类型 有预定的长度 用于表示一个固定结构
// 数组 每一项都是相同类型 没有长度限制 用于表示一个列表


// 枚举

enum Gender{
    BOY,
    GIRL
}
enum Week{
    MONDAY=1,
    TUESDAY=2
}


enum Colors{
    RED,
    BLUE,
    YELLOW
}

// 任意类型any
let anything:any=[1,3,'9',6]

let root:HTMLElement|null=document.getElementById('root')
function greeting(name:string):void{
    console.log(name)
}
greeting('zhangsan')
// never 永远不会出现值
// 场景一 抛出错误
function  createError(message:string):never{
    throw new Error(message)
    console.log(111);
    
}

function sum(){
    while(true){
        console.log('hello');
    }
    console.log(111);
}


let name1: string | number
name1='hello'
name1.toLowerCase()

let name6:string | number=9;
// (name6 as string).toLocaleLowerCase()
(name6 as number).toFixed(2)

let Gender6:"BOY"|'GIRL'
Gender6='BOY'
Gender6='GIRL'
// Gender6='REN'



