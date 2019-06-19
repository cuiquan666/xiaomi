import React from 'react';
import './index.scss';
import {NavLink} from 'react-router-dom'
function Footer(){
    return(
        <div className='footer'>
            <ul>
                <li>
                <NavLink exact to={'/'}><i className='iconfont icon-shouye'></i></NavLink>
                </li>
                <li>
                <NavLink to={'/fenlei'}><i className='iconfont icon-fenlei'></i></NavLink>
                </li>
                <li>
                <NavLink to={'/shop'}><i className='iconfont icon-gouwuchekong'></i></NavLink>
                </li>
                <li>
                <NavLink to={'/my'}><i className='iconfont icon-wode'></i></NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Footer;