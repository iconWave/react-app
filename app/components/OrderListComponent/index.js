import React, {Component} from 'react';
import OrderItem from './OrderItem';
import "./OrderItem/index.less";


export default class OrderListComponent extends Component {
    render() {
        return (
            <div className="order-list">

                <h3>订单列表</h3>
                {
                    this.props.data.map((item, index) => (
                        <OrderItem commitComment={this.props.commitComment} key={index} data={item}/>
                    ))
                }
            </div>
        )
    }
}