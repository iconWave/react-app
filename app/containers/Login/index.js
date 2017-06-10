import React,{Component} from 'react';
import HomeComponent from "../../components/HeaderComponent/index";
import LoginComponent from "../../components/LoginComponent/index";
import {connect} from "react-redux";
import * as Actions from "../../actions/userInfo.js";
import {bindActionCreators} from "redux";


class Login extends Component{
    constructor(){
        super();
        this.state = {
            login :  false // 默认不显示，
        }
    }
    render(){
        return (
            <div>
              <HomeComponent title="登录" history={this.props.history}/>
                {/* 如果登录过 显示登录组件，否则不显示直接跳转用户页面 */}
                {
                    this.state.login? <LoginComponent login={this.login.bind(this)} />:<div></div>
                }
            </div>
        )
    }
    login(username){
        let info = this.props.userInfo;
        info.username = username;
        this.props.userActions.update(info);

        if(this.props.match.params.route){
            this.props.history.push(decodeURIComponent(this.props.match.params.route));
        }else{
            this.props.history.push('/user');
        }
    }
    componentDidMount(){
        this.checkLogin();
    }
    checkLogin(){
        if(this.props.userInfo.username){
            return this.props.history.push('/user');
        }
        this.setState({
            login: true
        })
    }
}

export default connect(
    state =>{
        return {userInfo:state.userInfo}
    },
    dispatch =>{
        return {userActions: bindActionCreators(Actions,dispatch)}
    }
)(Login);

