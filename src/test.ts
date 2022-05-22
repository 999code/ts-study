
interface Calculate<T>{
    (a:T,b:T):T
    t:T
}


const calcFunc:Calculate<string>=function(a:string,b:string){
    return ''
}
calcFunc.t=''


// type flag=true
type Keys = "name" | "sex"
type DuKey = {
  [Key in Keys]: string //类似 for ... in
}
let stu: DuKey = {
  name: 'wang'，
  sex: 'man'
}

interface Point{
    x:number
    y:number
}
interface Named{
    name:string
    // x:string
}
type PN=Point & Named

const pn:PN={
    x:1,
    y:1,
    name:'',
    // a:''
}


interface X{
    c:string
    d:string
}


interface Y{
    c:number
    e:string
}
type XY=X  & Y
type YX=Y&X
let p:XY={d:'',e:''}



type Foo={
    age:number
    name:string
}

type Bar={
    age:number
    name:number
}

type Baz=Foo&Bar
// const baz:Baz={age:1,name:'true'}

type HttpMethod = 'GET' | 'POST' | 'DELETE' | 'PUT'

function sendRequest(method: HttpMethod) {
  // ...
}
sendRequest('GET')