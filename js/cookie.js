//获取cookie(根据键获取值)
//参数:
// 键
//返回值：值；
function getCookie(key){
     let str = unescape(document.cookie);
     let arr = str.split("; ");
     for(let i in arr){
          if(arr[i].indexOf(key+"=") == 0){
               return arr[i].substring((key+"=").length);
          }
     }
     return null;

}
//添加cookie
//参数：
//  键
//  值
//  有效期（单位：天）
//返回值：无
//addCookie("username","jzm",7);
function addCookie (key,value,dayCount,path){
     let d  = new Date();
     d.setDate(d.getDate()+dayCount);
   let str = key+"="+escape(value)+";expires="+d.toGMTString();  
     if(path!=undefined){
          str+=";path="+path;
     }
     document.cookie = str;
}
//删除cookie
//参数：
//键
//返回值：无
function removeCookie (key) {
   addCookie(key,"hi",-1);
}