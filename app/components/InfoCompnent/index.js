import React, {Component} from 'react';
import Star from '../Star/index';

import "./index.less";

export default class InfoComponent extends Component {
    render() {
        let {img, star, desc, subTitle, title, price} = this.props.data;

        return (
            <div className="info-component">
                <div className="info-list">
                    <img src={img} alt=""/>
                    <div className="info-list-right">
                        <h3>{title}</h3>
                        <div className="info-star">
                            <Star count={star}/> <span>¥{price}</span>
                        </div>
                        <p>{subTitle}</p>
                    </div>
                </div>
                <br />
                {/*将内容转换成 html 插入到页面*/}
                <div dangerouslySetInnerHTML={{__html: desc}}></div>
            </div>
        )
    }
}
