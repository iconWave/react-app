import React,{Component} from 'react';
import {getOrderList,postComment} from '../../../fetch/orderList';
import OrderListComponent from '../../../components/OrderListComponent';

export default class OrderList extends Component{
    constructor(){
        super();

        this.state = {
            data: []
        }
    }
    render(){
        return (
            <div>
                {
                    this.state.data.length ? <OrderListComponent data={this.state.data} commitComment={this.commitComment.bind(this)}/> : <div>正在加载</div>
                }
            </div>
        )
    }
    // 提交评价内容到后台
    commitComment(id,comment,callback){ // 内容 用户id callback 更改评价状态
        console.log(id,comment,callback);
        postComment({id,comment}).then(res => res.json()).then(data=>{
            callback();
        }); //提交时传入提交的数据对象即可

    }
    componentWillMount(){
        getOrderList(this.props.username).then(res => res.json()).then(data=>{
            console.log(data);
            this.setState({
                data
            });
        })
    }
}