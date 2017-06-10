import React,{Component} from 'react';
import HeaderComponent from "../../components/HeaderComponent/index";
import CurrentCity from '../../components/CurrentCity/index';
import ChooseCity from '../../components/ChooseCity/index';
import {connect} from 'react-redux';
import * as  Actions from "../../actions/userInfo.js";
import {bindActionCreators} from "redux";

class City extends Component{
    render(){
        return (
            <div>
                {/*头*/}
                <HeaderComponent title="选择城市" history={this.props.history}/>
                {/*当前城市*/}
                <CurrentCity cityName={this.props.userInfo.cityName} />
                {/*选择城市*/}
                <ChooseCity changeCity={this.changeCity.bind(this)} />
            </div>
        )
    }
    changeCity(city){
        let oldInfo = this.props.userInfo;
        oldInfo.cityName = city;
        this.props.userActions.update(oldInfo);
        this.props.history.push('/');
    }
}


export default connect(
    state =>{
        return {userInfo: state.userInfo }
    },
    dispatch=>{
        return {userActions: bindActionCreators(Actions,dispatch)}
    }
)(City);