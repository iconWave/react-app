import React,{Component} from 'react';
import {connect} from 'react-redux';
import LoadDelay from '../components/LoadDelay';

// 绑定 actionCreator 组成的对象
import {bindActionCreators} from 'redux';
import RouterMap from "../routes/index";

// 获取所有 actionCreator 组成的对象
import * as Actions from '../actions/userInfo';
import {getStorage,setStorage} from '../local/index'

class App extends Component{
    constructor(){
        super();
        this.state = {
            done:false
        }
    }
    render(){
        return (
            <div id="3">
                {/*如果当路径为/ RouterMap 就会变为Home组件*/}
                {this.state.done?<RouterMap/>:<LoadDelay height={window.screen.height}/>}
            </div>
        )
    }
    componentDidMount(){

        // 现在本地查找 是否存储过 localstorage 名字叫 cityName
        let cityName = getStorage("cityName");
        this.setState({
            done:true
        });
        this.props.Actions.update({
            cityName: cityName ? cityName : "北京"
        })
    }
}


export default connect(
    state=>{  // mapStateToProps
        return { userInfo: state.userInfo}
    },
    dispatch=>{ //mapDisptachToProps
        return{
            //dispatch(action)
            Actions: bindActionCreators(Actions,dispatch)
        }
    }
)(App);// 将状态和动作以属性的形式传递给当前组件的this.props对象