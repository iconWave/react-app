import React,{Component} from 'react';
import {getInfo} from "../../../fetch/detail/index";
import InfoComponent from "../../../components/InfoCompnent/index";

export default class Info extends Component{

    constructor(){
        super();
        this.state = {
            data: false
        }
    }
    render(){
        return (
            <div>
                {this.state.data? <InfoComponent data={this.state.data}/> : <div>正在加载</div>}
            </div>
        )
    }
    componentWillMount(){
         getInfo(this.props.id).then(res => res.json()).then((data)=>{

             this.setState({
                 data
             })
         })
    }
}