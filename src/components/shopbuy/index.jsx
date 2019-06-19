import React, { Component } from 'react';
import {connect} from 'react-redux';
// import {addCart} from '../../actions/cart';
import './index.scss';
import {NavLink} from 'react-router-dom'
import Axios from 'axios';

// connect(
//     state=>({shop:state}),
//     {addCart}
// )
class ShopBuy extends Component{
    state={
        data:{}
    }
    componentDidMount(){
        let id = this.props.match.params.shopid
        Axios.get('http://47.100.98.54:9020/api/buygoods/'+id)
        .then(res=>{
            this.setState({
                data:res.data
            })
        })
    }
    render(){
        let {picurl,title,price,symbol,des,num} =this.state.data
        return(
            <div className="shopbuy">
                <div className="imgs">
                    <img src={picurl} alt=""/>
                    <span>{title}</span>
                    <p className='des'>{des}</p>
                    <p>{symbol}{price}</p>
                    <div className='back'> <NavLink to={'/'}><i className='iconfont icon-jiantou4'></i></NavLink></div>
                </div>
                <div className="buy-botoom">
                    <span>购买数量</span>
                    <div className='jie'>-</div>
                    <div className='num'>{num}</div>
                    <div className='jia'>+</div>
                    <div className='btn'>
                    <div className='cart'>加入购物车</div>
                    <div className='buy'>立即购买</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShopBuy;