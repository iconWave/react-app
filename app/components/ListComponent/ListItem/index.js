import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './index.less';
export default class ListItem extends Component{
    render(){
        let {img,title,subTitle,price,distance,number,id} = this.props.data;

        return (
        <Link to={"/detail/" + id}>
            <div className="list-item">
                <img src={img} style={{ width: 120,height: 90}}alt=""/>
                <div className="list-item-content">
                    <h3>{title}</h3>
                    <p>{subTitle}</p>
                    <div>
                        <strong>¥{price}</strong>
                        <span>{number}</span>
                    </div>
                    <span className="distance">{distance}</span>
                </div>
            </div>
        </Link>

        )
    }
}