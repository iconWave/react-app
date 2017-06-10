import * as Types from '../action-types/store';
let inState = [];

export function store(state=inState,action){
    switch(action.type){
        case Types.ADD_STORE:
            // 如果是添加则会传递新的 id，放到数组中即可
            return [...state,action.data];
        case Types.REMOVE_STORE:
            // 通过
            return state.filter(item=>action.data !== item);
        default:
            return state;
    }
}