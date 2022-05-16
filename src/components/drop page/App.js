import React, { Component } from 'react';
import './App.css';

import LearnPage from '../learn page/learn_main_page';
import SignupPage from '../sign up page/signupPage.js';
import LoginPage from '../login page/loginPage.js'
import {BrowserRouter ,Routes,Route,Link } from 'react-router-dom';
import Home_page from './Home_page';

class App extends Component {
  state = {  } 

  render() { 
    return (<BrowserRouter>
    <Routes>
      <Route path='/' element={<Home_page />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signin' element={<SignupPage />} />

      
    </Routes>
    </BrowserRouter>
    );
  }
}
 
export default App;