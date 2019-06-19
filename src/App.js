import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Home from './components/home/index';
import FeiLei from './components/feilei/index';
import Shop from './components/shop/index';
import My from './components/my/index';
import ShopBuy from './components/shopbuy/index';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
       <Route exact path={'/'} component={Home}/>
       <Route path={'/fenlei'} component={FeiLei}/>
       <Route path={'/shop'} component={Shop}/>
       <Route path={'/my'} component={My}/> 
       <Route path={'/shopbuy/:shopid'} component={ShopBuy}/> 
       </Switch>
    </div>
    </Router>
  );
}

export default App;
