import React,{Component} from 'react';
import "./index.less";
import {getAdd} from '../../../fetch/home';
import LoadDelay from "../../../components/LoadDelay/index";


export default class Ad extends Component{
    constructor(){
        super();
        this.state = {
            data: []
        }
    }
    render(){
        return (
            <div className="ad">
                <h3>超值特惠</h3>
                {this.state.data.length?
                    this.state.data.map((item,index) =>(
                        <a key={index} href={item.link}>
                            <img src={item.img} title={item.title} alt=""/>
                        </a>
                    ))
                    :<LoadDelay height={261} top={175}/>
                }  
            </div>
        )
    }
    componentDidMount(){
        getAdd().then(res => res.json()).then(data=>{
            this.setState({
                data
            })
        })
    }
}