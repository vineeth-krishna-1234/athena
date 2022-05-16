import React, { Component } from 'react';
import './header.css';
import logo from './../../image folder/symbol.png';
import {Link} from 'react-router-dom'


class Header extends Component {
    render() { 
        return (<div id="header_nav">
            <div id="logo_div">
                <img src={logo} style={{width:"50px",height:"50px",top:'10px',position:"relative"}}/>
                <p>Athena</p>
            </div>

            <div id="main_nav">
            <button class="header_button">About </button>
            <button class="header_button" href="#learn_block">Learn</button>
            <button class="header_button">Teach</button>
            <button style={{width:'200px'}} class="header_button">Find partners</button>
            </div>

            <div id="sign_up_nav">
            <button class="header_button">Help</button>
            <button class="header_button"><Link to="/signin" style={{textDecoration:'none'}}>Sign up</Link> </button>
            <button class="header_button"><Link to="/login" style={{textDecoration:'none'}}>Login</Link></button>
            </div>
        </div>);
    }
}
 
export default Header;