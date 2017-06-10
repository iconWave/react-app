import 'whatwg-fetch';
import 'es6-promise';


export function get(url){
    return fetch(url,{
        Accept: 'application/json'
    });
}

// 将对象转换为 fromData 格式
function toUrlencoded(obj){
    let arr = [];
    for(let key in obj){
        arr.push(`${key}=${obj[key]}`);
    }
    return arr.join("&");
}

export function post(url,obj){
    return fetch(url,{
        method:'POST',
        // a=1&c=2
        headers:{
         "Content-Type" : "application/x-www-form-urlencoded"
        },
        body: toUrlencoded(obj)
    });
}


