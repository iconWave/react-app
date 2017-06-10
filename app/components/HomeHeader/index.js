import React,{Component} from 'react';
import {Link} from "react-router-dom";
import "./index.less";
import SearchInput from "../SearchInput/index";

// 主页头部主页
export default class HomeHeader extends Component{
    render(){
        return (
            <div>
                <div className="home-header back">
                    <Link className="link-city" to="/city">
                        <div className="city">
                            {this.props.cityName}
                            <i className="iconfont icon-xiangxia2"></i>
                        </div>
                    </Link>
                    <div className="search">
                        <i className="iconfont icon-sousuo-xianxing"></i>
                        <SearchInput value="" fn={this.toSearch.bind(this)} />
                    </div>
                    <div className="profile">
                        <Link to="/login">
                            <i className="iconfont icon-yonghufill"></i>
                        </Link>
                    </div>
                </div>
            </div>

        )
    }
    toSearch(value){
        console.log(value);
        // 不是路由组件 需要在父组件传递
        this.props.history.push('/search/all/' + value);
    }
}