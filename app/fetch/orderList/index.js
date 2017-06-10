import {get,post} from '../index';

export function getOrderList(username) {
    return get('/api/orderlist/' + username);
}

export function postComment(obj){
    return post('/api/comment',obj);
}