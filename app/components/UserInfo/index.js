import React,{Component} from 'react';
import './index.less';

export default class UserInfo extends Component{
    render(){
        return (
            <div className="user-info">
                <span>{this.props.userInfo.cityName}</span>
                <span>{this.props.userInfo.username ? this.props.userInfo.username : ''}</span>
            </div>
        )
    }
}