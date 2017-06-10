import React,{Component} from 'react';
import CommentItem from './CommentItem/index';


export default class CommentComponent extends Component{
    render(){
        let Data = this.props.data;
        return (
            <div>
                {
                    Data.map((item,index)=>(
                        <CommentItem key={index} data={item}/>
                    ))
                }
            </div>
        )
    }
}