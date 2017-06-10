import React,{Component} from 'react';
import "./index.less";

export default class LoadMore extends Component{

    componentDidMount(){
        this.hasMore.style.display = "block";
        this.fn = () =>{
            clearTimeout(this.$timer);

          this.$timer = setTimeout(()=>{

                // 判断是否正在加载，如果正在加载不再触发加载
                if(this.props.isLoading) return;

                let screen = window.screen.height;
                let top = this.refs.more.getBoundingClientRect().top; // 获取当前元素的位置，可以获取上下左右
                if(top < screen){
                    this.props.loadMore();
                }
            },50);
        };
        // 绑定滚动事件
        window.addEventListener('scroll',this.fn);
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.fn);
    }
    render(){
        return(
            <div className="has-more" ref={(more) => this.hasMore = more} style={{display: "none"}}>
                {
                    this.props.hasMore ? <div ref="more" onClick={this.loadMore.bind(this)}>加载更多</div> : <div>我是有底线的</div>
                }
            </div>
        )
    }
    loadMore() {
        if (this.props.isLoading) return;
        this.props.loadMore();
    }
}