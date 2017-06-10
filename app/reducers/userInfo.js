import * as Types from '../action-types/userInfo';


let initState = {};
export function userInfo(state = initState, action) {
    console.log(action);
    switch (action.type) {
        case Types.UPDATE_CITY:
            return action.data;
        default:
            return state;
    }
}