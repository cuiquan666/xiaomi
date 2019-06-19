import React from 'react';
import './index.scss'
function HotList(){
    return(
        <div className='hotList'>
            <div className="hot-left">
                <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ba0e37fad11b47d51ba01445118b237d.jpg?thumb=1&w=358&h=508" alt=""/>
            </div>
            <div className="hot-right">
                <ul>
                    <li>
                        <img src="//i8.mifile.cn/v1/a1/04f1eef5-acc9-aac1-948e-38b64c99cf22!358x252.webp" alt=""/>
                    </li>
                    <li>
                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/374842971e068ae79f8d7997d7753eff.jpg?thumb=1&w=358&h=252" alt=""/>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}


export default HotList;