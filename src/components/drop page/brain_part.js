import React, { Component } from 'react';
import left_brain from "./../../image folder/left_brain.png";
import right_brain from "./../../image folder/right_brain.png";
import "./brain_part.css";

class Brain_part
 extends Component {
    render() { 
        return (<div id="main_upper_block">
            <div id="intro_block">
                <div id="main_text_brain">None of is us smart as all of us<br/><p style={{fontSize:'50px',color:'white'}}>lets grow together</p></div>
                    <div>
                        <button id="community_btn">Join the community</button>
                    </div>
                 </div>
                <div id="brain_part">
                    <div><img id="right_brain_img" src={right_brain} /></div>
                    <div><img id="left_brain_img"src={left_brain} /></div>
                </div>
            </div>);
    }
}

export default Brain_part;
;