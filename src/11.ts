function swap<T,U>(a:T,b:U):void{
    // let [a,b]=[b,a]
}

namespace a{
    

    type logFunc=(a:number|string)=>void
    let log:logFunc
    function log1(a:number|string|boolean):void{
        console.log(a);
    }
    log=log1
    log1(true)
    log(1)   
    




    interface SumFun{
        (a:string,b:string):string,
        getType:any
    }
    
    
    let sum:SumFun
    function FakeSum(a:string,b:string):string{
        return a
    }
    FakeSum.getType=''
    sum=FakeSum



}





