import React ,{Component} from "react";
import './index.less';

export default class LoadDelay extends Component{


    render(){

        let style = {height:this.props.height,top: this.props.top ? this.props.top : 0 };

        return(
            <div style={style} className="loadDelay">
                <img src={require("../../public/img/loading.gif")} alt=""/>
            </div>
        )
    }
}