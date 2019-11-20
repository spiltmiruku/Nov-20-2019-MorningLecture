import React, {Component} from 'react';
import './App.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
library.add(faBars);

class App extends Component {
  constructor(){
    super();
    this.state = {
      toggleMenu: false
    }
  }

  handleToggle = () => {
    this.setState({
      toggleMenu: !this.state.toggleMenu
    })
  }

  render() {
  return (
    <div className="App">
      {!this.state.toggleMenu
        ? (<header id='header-container'>
        <img src='https://gifimage.net/wp-content/uploads/2018/04/poro-gif-1.gif' alt='cute poro' id='logo'/>
        <nav id='nav-links'>
          <a>Home</a>
          <a>About</a>
          <a>Contact</a>
        </nav>
        <FontAwesomeIcon icon='bars' id='hamburger'/>
      </header>)
        : (
        <>
        <header id='header-container'>
        <img src='https://gifimage.net/wp-content/uploads/2018/04/poro-gif-1.gif' alt='cute poro' id='logo'/>
        <nav id='nav-links'>
          <a>Home</a>
          <a>About</a>
          <a>Contact</a>
        </nav>
        <FontAwesomeIcon icon='bars' id='hamburger'/>
        </header>
        <nav>
          <a>Home</a>
          <a>About</a>
          <a>Contact</a>
        </nav>
        </>
        )}


      <div id="rotate-box"></div>
      <div id="transition-box"></div>
    </div>
  );
}
}

export default App;