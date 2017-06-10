import React from 'react';
import {render} from 'react-dom';

import './assets/index.less';
import App from './containers/index';
import {Provider} from "react-redux";
import {configureStore} from './store/index';


let store = configureStore({
    userInfo:{cityName: "上海"}
});

render(
    <Provider  store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));


