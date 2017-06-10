import React,{Component} from 'react';
import {getCommit} from '../../../fetch/detail/index';
import CommentComponent from '../../../components/CommentComponent/index';
import LoadMore from '../../../components/LoadMore/index';

export default class Comment extends Component{
    constructor(){
        super();
        this.state = {
            page: 0,
            hasMore: true,
            data: [],
            isLoading: true
        }
    }
    render(){
        return (
            <div>
                {
                    this.state.data.length ? <CommentComponent data={this.state.data}/>: <div>正在加载</div>
                }
                <LoadMore isLoading={this.state.isLoading} hasMore={this.state.hasMore} loadMore={this.loadMove.bind(this)}/>
            </div>
        )
    }
    loadMove(){
        this.setState({
            isLoading: true,
            page: this.state.page + 1
        },()=>{
            this.processData(getCommit(this.props.id,this.state.page));
        })
    }
    //获取数据，默认加载第一页 下拉刷新获取更多
    componentWillMount(){
        this.processData(getCommit(this.props.id,0))
    }
    processData(result){
        result.then(  res => res.json()).then(({hasMore,data})=>{
            this.setState({
                hasMore,
                data: this.state.data.concat(data),
                isLoading: false
            })
        })
    }
}