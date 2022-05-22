namespace a{
    // 类型保护 就是更精确的知道是那种类型
    function double(input:string|number|boolean){
        if(typeof input==='string'){
            input.toLowerCase()
        }else if(typeof input==='number'){
            input.toFixed(2)
        }else{
            input
        }
    }

    class Animal{
        public name:string='zhangsan'
    }
    class Bird extends Animal{
        public swing: number=2
    }
    function getName(a:Animal){
        if(a instanceof Bird){
            a.swing
        }else{
            a.name
        }
    }
    // null保护

    function getFirstLetter(s:string|null){
        // if(s===null){
        //     s=''
        // }
        // s=s||''
        // function ensure(){
        //     s=s||''
        // }
        // ensure()
        return s?.charAt(0)
    }

    let a={b:1}
    // 先判断a是否为null或者undefined 如果是的话就直接返回null undefined 不是则返回a.b
    console.log(a?.b) //a?a.b:a

    interface WarningButton{
        class:'waring',
        text1:'修改'
    }
    interface DangerButton{
        class:'danger',
        text2:'删除'
    }

    type Button=WarningButton|DangerButton
    function getButton(button:Button){
        if(button.class==='waring'){
            button.text1
        }else{
            button.text2
        }
    }

    interface Bird{
        swing:number
    }

    interface Dog{
        leg:number
    }

    function getNumber(x:Bird|Dog){
        if('swing' in x){
            x.swing
        }else{
            x.leg
        }
    }

    // 自定义的类型保护
    namespace b{
        interface Bird {
            legs: number
            name1:string
        }
    
        interface Dog {
            legs: number
            name2:string
        }
        function isBird(x:Bird|Dog){
            return x.legs===2
        }
        function getAnimal(x:Bird|Dog){
            if(isBird(x)){
                // x.name1
            }else{
                // x.name2
            }
        }
        let x:Bird={
            name1:'Bird',
            legs:2
        }
        getAnimal(x)
    }



}