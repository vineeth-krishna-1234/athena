import React from "react"
import Header from './header';
import Brain_part from './brain_part';
import Learn from './learn';
import Teach from './teach';
import Footer from './footer';

function Home_page(){
    return (<div><div id="home_page">
    <Header />
    <Brain_part />
  </div>
  <Learn list={["programming","photography","business","music","dance"]} />
  <Teach />
  </div>)
  }
  export default Home_page;