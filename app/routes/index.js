import React,{Component} from 'react';
//路由的两种类型 HashRouter BrowserRouter
import {
    HashRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Home from '../containers/Home'
import Detail from '../containers/Detail';
import Login from "../containers/Login";
import User from "../containers/User";
import City from "../containers/City"
import Search from "../containers/Search"

export default class RouterMap extends Component{
    render(){
        return (
            <div>
                <Router>
                    <Switch>
                        {/*exact 只有当路径是 "/" 的时候才匹配 "/" */}
                        <Route exact path='/' component={Home}/>
                        <Route path="/detail/:id" component={Detail}/>
                        {/* 点击先挑转到登录页面， 登录后，再回到登录之前的页面，在 login 路径后可能需要保持上次点击的路径，如果登陆过后挑转到主页 */}
                        <Route path="/login/:route?" component={Login}/>
                        <Route path="/user" component={User}/>
                        <Route path="/city" component={City}/>
                        <Route path="/search/:kind/:keyword?" component={Search}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}