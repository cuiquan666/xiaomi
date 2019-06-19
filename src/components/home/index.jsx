import React from 'react';
import Header from '../header/index';
import Banner from '../banner/index';
import Nav from '../nav/index';
import HotList from '../hotList/index';
import LikeList from '../likeList/index';
import Footer from '../footer/index';

function Home() {
  return (
    <div className="home">
      <Header/>  
      <Banner/>
      <Nav/>
      <HotList/>
      <LikeList/>
      <Footer/>
    </div>
  );
}

export default Home;
