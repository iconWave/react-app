import React,{Component} from 'react';
import './index.less';


export default class HomeComponent extends Component{
    render(){
        return (
            <div className="back header-component">
               <span>
                   <i onClick={()=>this.back()} className="iconfont icon-fanhui"></i>
                   {this.props.title}
               </span>
            </div>
        )
    }
    back(){
        if(this.props.back){
            this.props.history.push(this.props.back);
        }else{
            this.props.history.go(-1);
        }
    }
}
