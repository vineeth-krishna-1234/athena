import './loginPage.css';
import React, { Component } from 'react';
import logo from "../../image folder/symbol.png";
class LoginPage extends Component {
    state = {  } 
    render() { 
        return (<div id="loginPage">
            <div id="login_logoName">
            <img src={logo} id="login_logo" /><a style={{fontSize:"100px" ,width:"100px"}}>Athena</a>
            </div>
            <a id="sign_in_text">sign in</a>
            <div id="login_box">
             <form id="login_form">
                <div class="input-field">    

                <i class="fa-solid fa-user"></i>
                <input type="text" required />
                <label>Username</label>
                </div>
                <div class="input-field">      
                <i class="fa-solid fa-lock"></i>
                <input type="password" required />
                <label>password</label>
                <a href="#" id="forgot_pass">Forgot password?</a>
                </div>
                <input type="submit"  id="submit_button_signin"/>
                
            </form>
            <hr style={{width:"200px",position:"relative",left:"-10px"}}/>
            <div style={{position:"relative",left:"25px"}}>
                <i class="fa-brands fa-google"></i>
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-twitter"></i>
                </div>
            </div>
            </div>);
    }
}
 
export default LoginPage;