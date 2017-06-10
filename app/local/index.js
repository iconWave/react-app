// 实现本地存储
export function getStorage(key){
    return localStorage.getItem(key);
}

export function setStorage(key,value){
    return localStorage.setItem(key,value);
}