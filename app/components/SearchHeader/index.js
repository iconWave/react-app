import React,{Component} from 'react';
import SearchInput from "../SearchInput/index";
import "./index.less";

export default class SearchHeader extends Component{

    render(){
        return (
            <div className="search-header back">
                <i className="iconfont icon-fanhui" onClick={this.back.bind(this)}></i>
                <SearchInput value={this.props.value} fn={this.fn}/>
            </div>
        )
    }
    back(){
        this.props.history.go(-1);
    }
}