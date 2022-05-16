import React, { Component } from 'react';
import "./learn.css";
import pythonimg from './../../image folder/python.png';
import musicImg from '../../image folder/music.png'

class Learn extends Component {
    constructor(props) {
      super(props);
      this.list=props.list;
    }
    container(a){
      
      return( <div class="learn_container">
      <div class="learn_card">
        <div class="learn_imgBx">
          <img src={musicImg}/>
        </div>
        <div class="learn_contentBx">
          <div class="learn_size">
            <h3>{a}</h3>
            <a href="#">Learn</a>
            </div></div></div></div>)
    }
    render() { 
        return(<div id="learn_block">
              <div class="learn_blink_text">
                <div class="learn_text_typing">
                   Learn something new!!
                </div>
              </div>
                  <div id="learn_slider">
                    {this.container(this.list[0])}
                    {this.container(this.list[1])}
                    {this.container(this.list[2])}
                    {this.container(this.list[3])}
                    {this.container(this.list[4])}
                  </div>
                    <button class="learn_more_button"><span>more topics<i class="fa-solid fa-play"></i></span></button>
                </div>
)
    }
}
 
export default Learn;