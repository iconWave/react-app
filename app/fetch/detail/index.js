import {get} from '../index';

export function getInfo(id){
    return get("/api/detail/info/" + id);
}

export function getCommit(id,page){
    return get("/api/detail/comment/" + id + "/" + page )
}