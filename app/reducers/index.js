// 合并所有 reducer 导出去 让 store 使用

import {combineReducers} from "redux";
import {userInfo} from './userInfo.js';
import {store} from './store.js';

// 合并 reducer 会将以前的 state 增加增加一个 userInfo 属性
export default combineReducers({
    userInfo,
    store
});

