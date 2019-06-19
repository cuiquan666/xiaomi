import React from 'react';
import Footer from '../footer/index';
import './index.scss'

function My() {
  return (
    <div className="my">
     <div className="head"> 登录/注册</div>
     <div className="dan">
       <div className='mydan'>
         我的订单
       </div>
       <ul>
         <li>
           <i className='iconfont icon-daifukuan'></i>
           <span>待付款</span>
         </li>
         <li>
           <i className='iconfont icon-daishouhuo'></i>
           <span>待收货</span>
         </li>
         <li>
           <i className='iconfont icon-iconset0204'></i>
           <span>退款</span>
         </li>
       </ul>
     </div>
     <div className='conter'>
       <ul>
         <li>
           <i className='iconfont icon-huiyuanzhongxin'></i>
           <span>会员之家</span>
         </li>
         <li>
           <i className='iconfont icon-shouye1'></i>
           <span>我的优惠</span>
         </li>
         <li>
           <i className='iconfont icon-aixin'></i>
           <span>服务中心</span>
         </li>
         <li>
           <i className='iconfont icon-home'></i>
           <span>小米之家</span>
         </li>
         <li>
           <i className='iconfont icon-shezhi'></i>
           <span>设置</span>
         </li>
       </ul>
     </div>
     <Footer></Footer>
    </div>
  );
}

export default My;
