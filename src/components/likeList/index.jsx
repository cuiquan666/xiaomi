import React, { Component } from 'react';
import './index.scss';
import Axios from 'axios';
import {NavLink} from 'react-router-dom';


class LikeList extends Component{
    state={
        data:[]
    }
    componentDidMount(){
        Axios.get('http://47.100.98.54:9020/api/goods')
        .then(res=>{
           this.setState({
               data:res.data.data
           })
        })
    }
    render(){
        const data = this.state.data
        return(
            <div className="hotImg">
                <div className='hot-top'>
                    <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/760865edbadfbd8b01c80e3617a93338.jpg?thumb=1&w=720&h=280" alt=""/>
                </div>
                <div className='hot-bottom'>
                    <img src="//i8.mifile.cn/v1/a1/66ae1020-cca5-2c31-5c56-ed12d606e11e!720x440.webp" alt=""/>
                </div>
                <div className="hot-list">
                    <ul>
                        {
                            data.map((item,index)=>{
                                return(
                                    <li key={item.id}>
                                    <NavLink to={`/shopbuy/${item.shopid}`}>
                                    <img src={item.picurl} alt=""/>
                                    <p className='title'>{item.title}</p>
                                    <p className='decv'>{item.des}</p>
                                    <p className='pice'>¥{item.price}起<span>¥1699</span></p>
                                    </NavLink>
                                     </li>  
                                     
                                )
                               
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
   
}

export default  LikeList;