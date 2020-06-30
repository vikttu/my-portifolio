import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Logo from './components/Logo';
//import MyFooter from './components/MyFooter';

ReactDOM.render(
  <React.StrictMode>
    <Logo />
  {//  <MyFooter />
  }
  </React.StrictMode>,
  document.getElementById('root')
);
