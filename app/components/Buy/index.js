import React,{Component} from 'react';
import "./index.less";

export default class Buy extends Component{
    render(){
        return (
            <div className="buy">
                {
                    this.props.isStore ? <button onClick={this.store.bind(this)}>已收藏</button>:<button onClick={this.store.bind(this)}>收藏</button>
                }
                <button onClick={this.buy.bind(this)}>购买</button>
            </div>
        )
    }
    buy(){
      this.props.buy();
    }
    store(){
        this.props.store();
    }
}