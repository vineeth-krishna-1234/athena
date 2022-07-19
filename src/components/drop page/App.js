import React, { Component } from 'react';
import './App.css';
import { BrowserRouter,Routes ,Route,Link} from 'react-router-dom';
import HomePage from './Home_page.js';
import LoginPage from '../login page/loginPage.js';
import SignupPage from '../sign up page/signupPage.js'
class App extends Component {
  state = {  } 

  render() { 
    return (<div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signUp" element={<SignupPage/>} />
      </Routes>
      </BrowserRouter>
    </div>

    );
  }
}
 
export default App;