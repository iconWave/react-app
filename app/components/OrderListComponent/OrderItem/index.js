import React, {Component} from 'react';
import "./index.less";

export default class OrderItem extends Component {
    constructor() {
        super();
        this.state = {
            commentState: 0
        }
    }

    render() {

        let {id, commentState, img, title, count, price} = this.props.data;

        return (
            <div>
                <div className="order-list-item">
                    <img src={img} alt=""/>
                    <div className="list-content">
                        <h3>用户：{title}</h3>
                        <span>数量：{count}</span>
                        <span>价格: {price}</span>
                    </div>
                    <div className="list-commit">
                        {this.state.commentState === 0 ?
                            <button onClick={() => this.changeCommentState(1)}>评价</button> :
                            this.state.commentState === 1 ?
                                "" :
                                <button className="selected">已评价</button>
                        }
                    </div>
                </div>
                <div className="comment-area">
                    {
                        this.state.commentState === 1 ?
                            <div>
                                <textarea ref={ref => this.comment= ref}></textarea>
                                <div className="comment-btn">
                                    <button onClick={this.sureCommit.bind(this)}>确认评价</button>
                                    <button onClick={() => this.changeCommentState(0)}>取消</button>
                                </div>
                            </div> : ''
                    }

                </div>

            </div>

        )
    }
    changeState(){
        this.setState({
            commentState: 2
        })
    }
    sureCommit(){
        this.props.commitComment(this.props.data.id,this.comment.value,this.changeState.bind(this));
    }
    changeCommentState(num) {

        this.setState({
            commentState: num
        })

    }
}