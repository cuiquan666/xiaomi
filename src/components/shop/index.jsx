import React, { Component } from 'react';
import Footer from '../footer/index';
import './index.scss'


class Shop extends Component {
  render(){
    return (
      <div className="shop">
        <div className='top'>
          编辑地址
        </div>
        <div className='cont'>
          <img src="" alt=""/>
        </div>
        <div className="comput">
          <span className='pirce'>¥998</span>
          <div className='jie'>-</div>
          <div className='num'>0</div>
          <div className="jia">+</div>
          <span className='del'>删除</span>
        </div>
        <div className='foot'>
          <span className='pice'>总计：9.9</span>
          <span className='zong'>去结算(10件)</span>
        </div>
      <Footer></Footer>
      </div>
    );
  }
 
}

export default Shop;
