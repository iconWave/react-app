import React,{Component} from 'react';
import HeaderComponent  from '../../components/HeaderComponent/index.js';
import Info  from './subpage/Info';
import Comment from './subpage/Comment'
import Buy from "../../components/Buy/index";
import {connect} from 'react-redux';
import * as Actions from '../../actions/store';
import {bindActionCreators} from 'redux';

// 通过路由渲染的组件都会在 this.props 上增加一些属性 例如 history match(params)

class Detail extends Component{
    constructor(){
        super();
        this.state = {
            isStore: false
        }
    }
    render(){
        return (
            <div>
                {/*头部*/}
                  <HeaderComponent title="商户详情" history={this.props.history} />
                {/*商户信息*/}
                  <Info id={this.props.match.params.id}/>
                {/* 购买或收藏*/}
                <Buy buy={this.buy.bind(this)} store={this.store.bind(this)} isStore={this.state.isStore} />
                {/*评论*/}
                <Comment id={this.props.match.params.id}/>
            </div>
        )
    }
    componentDidMount(){
        if(this.props.userInfo.username){
            let id = this.props.match.params.id;
            let  flag = this.props.store.some(item => item === id);

            if(flag){
                this.setState({
                    isStore: flag
                })
            }
        }

    }
    checkLogin(){

        if(this.props.userInfo.username){
            return true;
        }
        return false;
    }
    buy(){
        let flag = this.checkLogin();

        if(flag){
            this.props.history.push('/user');
        }else{
            this.props.history.push('/login/' + encodeURIComponent('/detail/' + this.props.match.params.id));
        }
    }
    store(){
       let flag = this.checkLogin();
       let id = this.props.match.params.id;

       if(!flag){
           this.props.history.push('/login/' + encodeURIComponent('/detail/' + this.props.match.params.id));
           return;
       }

       if(this.state.isStore){
           // 在 store 中移除掉
           this.props.storeActions.remove(id);
       }else{
           // 添加到 store中
           this.props.storeActions.add(id);
       }

       this.setState({
           isStore: !this.state.isStore
       })
    }
}

export default connect(
    state =>{
        return {
            userInfo: state.userInfo,
            store: state.store
        }
    },
    dispatch=>{
        return {
            storeActions: bindActionCreators(Actions,dispatch)
        }
    }
)(Detail);








