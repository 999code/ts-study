// 函数定义

function hello(name:string):void{
    console.log('hello'+name)
}

type GetUserNameType=(firstName:string,LastName:string)=> {
    name:string
}

// 函数表达式 

let getUserName:GetUserNameType=function(firstName:string,LastName:string){
    return {
        name:firstName+LastName
    }
}
// 可选参数

function print(name:string,age?:number,home?:string) :void{

}

print('1')
print('1',1)
print('1',2,'1',)
// 默认参数


function ajax(url:string,method:string='GET'){

}
ajax('url')
ajax('url','post')

// 剩余参数


function sum(...numbers:Array<number>){
    return numbers.reduce((accu,item)=>accu+item,0)
}

// 函数重载

let obj:any={}

function attr(val:string):void
function attr(val:number):void

function attr(val:any):void{
    if(typeof val ==='string'){
        obj.name=val
    }else{
        obj.age=val
    }
}

attr('123')
attr(123)
// attr(true)
// ts怎么写箭头函数
type DelayType=(ms:number)=>void
let delay:DelayType=(ms:number):void=>{
    setTimeout(()=>{

    },ms)
    // return 1
}


