// 如果定义一个复杂对象
// jQuery
declare namespace jQuery{
    function ajax(url:string,config:any):void
    let name:string
    namespace fn{
        function extend(object:any):void
    }
}

jQuery.ajax('api/users',{})
jQuery.name;
jQuery.fn.extend({})
