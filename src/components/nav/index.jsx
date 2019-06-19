import React, { Component } from 'react';
import './index.scss'
import Axios from 'axios';
class Nav extends Component{
    state={
        data:[]
    }
    componentDidMount(){
      Axios.get('http://47.100.98.54:9020/api/category')
      .then(res=>{
        this.setState({
            data:res.data.data
        })
      })
    }
    render(){
        const data =this.state.data
        return(
            <div className='nav'>  
                <ul>
                    {
                        data.length>0 &&(
                            data.map((item,index)=>{
                                return(
                                    <li key={item.id}>
                                      <img src={item.picurl} alt={item.alt}/>
                                     </li>
                                )
                            })
                        )
                    }
                </ul>
            </div>
        )  
    }
   
}


export default Nav;