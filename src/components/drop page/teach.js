import React, { Component } from 'react';
import './teach.css'
class Teach extends Component {
    state = {  } 
    render() { 
        return (<div id="teach_block">
            <div style={{fontSize:"30px",fontWeight:"bold",position:"relative",left:"30vw",maxWidth:'30vw'}}>Good at something! why not teach others?</div>
            <img  id="teach_img"src="https://images.pexels.com/photos/2173508/pexels-photo-2173508.jpeg?cs=srgb" />
            <button id="teach_button">Teach people</button>
            </div>);
    }
}
 
export default Teach;