import React,{Component} from 'react';
import {connect} from "react-redux";
import HomeComponent from "../../components/HeaderComponent/index";
import UserInfo from "../../components/UserInfo/index";
import OrderList from "./subpage/OrderList";

class User extends Component{
    render(){
        return (
            <div>
                {/* 返回后会回到登录页，检查是否登录，会再次挑转回来，back 指定返回的路由 */}
                <HomeComponent title="用户信息" history={this.props.history} back="/"/>
                <UserInfo userInfo={this.props.userInfo} />

                <OrderList username={this.props.userInfo.username} />
            </div>
        )
    }
    componentDidMount(){
        if(!this.props.userInfo.username){
            console.log(this.props);
           //this.props.history.push('/login');
        }
    }
}

export default connect(
    state =>{
        return {userInfo: state.userInfo}
    }
)(User);