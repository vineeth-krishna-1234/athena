import React from "react"
import Header from './header.js';
import Brain_part from './brain_part.js';
import Learn from './learn.js';
import Teach from './teach.js';
import Footer from './footer';

function HomePage(){
    return (<div><div id="home_page">
    <Header />
    <Brain_part />
  </div>
  <Learn list={["programming","photography","business","music","dance"]} />
  <Teach />
  
  </div>)
  }
  export default HomePage;