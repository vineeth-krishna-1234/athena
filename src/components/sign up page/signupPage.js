import './signupPage.css';
import React, { Component } from 'react';
import logo from "../../image folder/symbol.png";
class SignupPage extends Component {
    render() { 
        return (<div id="signupPage">
            <div id="signup_logoName">
            <img src={logo} id="signup_logo" /><a style={{fontSize:"100px" ,width:"100px"}}>Athena</a>
            </div>
            <a id="sign_up_text">sign up</a>
            <div id="signup_box">
             <form id="signup_form">
                <div class="input-field">
                <input type="text" required />
                <label className='form_text_label'>Username</label >
                </div>
                <div class="input-field">    
                <input type="text" required />
                <label className='form_text_label'>Email address</label >
                </div>
                <div class="input-field">      
                <input type="password" required />
                <label className='form_text_label'>password</label >
                </div>
                <div class="input-field">      
                <input type="password" required />
                <label className='form_text_label'>Confirm password</label >
                </div>
                <input type="submit"  id="submit_button_signin"/>
                
            </form>
            <hr style={{width:"200px",position:"relative",left:"-10px",top:"33px"}}/>
            <div style={{position:"relative",left:"30px"}}>
                <i class="fa-brands fa-google"></i>
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-twitter"></i>
                </div>
            </div>
            </div>);
    }
}
 
export default SignupPage;