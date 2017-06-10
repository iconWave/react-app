import React, {Component} from 'react';
import "./index.less";
export default class LoginComponent extends Component {
    constructor() {
        super();
        this.state = {
            val: ''
        }
    }

    render() {
        return (
            <div className="login-component">
                {/**/}
                <input type="text" value={this.state.val} onChange={this.changeValue.bind(this)}/>
                <button className="back" onClick={this.login.bind(this)}>登录</button>
            </div>
        )
    }

    changeValue(e) {

        this.setState({
            val: e.target.value
        })

    }

    login() {
        if(this.state.val){
            this.props.login(this.state.val);
        }
    }
}