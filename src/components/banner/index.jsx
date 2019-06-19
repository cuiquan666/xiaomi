import React from 'react';
import "./index.scss";
import { Carousel } from 'antd';

function Banner() {
  return (
    <div className="banner">
       <Carousel autoplay>
    <div>
     <img src="//i8.mifile.cn/v1/a1/03d8bebc-9fc5-634a-e6cc-4b54b9bdfcc9!720x360.webp" alt=""/>
    </div>
    <div>
     <img src="//i8.mifile.cn/v1/a1/5afadb53-f247-6ace-4ac9-d5d2ffc12b22!720x360.webp" alt=""/>
    </div>
    <div>
        <img src="//i8.mifile.cn/v1/a1/7fda3cc7-2d49-0102-86b7-78670bf9385b!720x360.webp" alt=""/>
    </div>
  </Carousel>
    </div>
  );
}

export default Banner;
