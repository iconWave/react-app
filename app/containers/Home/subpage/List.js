import React, {Component} from 'react';
import  {getList} from '../../../fetch/home/index';
import  ListComponent from '../../../components/ListComponent/index';
import  LoadMove from "../../../components/LoadMore/index";
import LoadDelay from "../../../components/LoadDelay/index";


export default class List extends Component {
    constructor() {
        super();
        this.state = {
            hasMore: true, //是否有更多
            data: [],
            page: 0,  //页码
            isLoading: true  //是否正在加载
        }
    }

    render() {

        return (
            <div>
                {
                    this.state.data.length ?
                        <ListComponent data={this.state.data}/> :
                        <LoadDelay height={490} top={436}/>
                }
                <LoadMove hasMore={this.state.hasMore}  loadMore={this.loadMore.bind(this)} isLoading={this.state.isLoading}/>
            </div>
        )
    }

    componentWillMount() {
        this.processData(getList(this.props.cityName, 0));
    }

    loadMore(){
        this.setState({
            page: this.state.page + 1,
            isLoading: true  // 每次加载更多时，状态为正在加载
        },()=>{               // 这个函数可以获取到最新的页码的状态
            this.processData(getList(this.props.cityName, this.state.page));
        })
    }
    processData(result) {
        result.then(res => {
            return res.json()
        }).then(({hasMore,data}) => {

            this.setState({
                hasMore,
                data: this.state.data.concat(data),
                isLoading:false                      // 数据请求结束时为加载完成
            })
        })

    }
}


















