import React, { Component } from 'react';
import logo from './images/logo.svg';
import './css/Styles.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="App-header Logo">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default Header;
