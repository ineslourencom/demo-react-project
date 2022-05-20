import React, { Component } from 'react';
import NavBar from './components/NavBar';

import './App.css';

class App extends Component {
  render() {
    const logo = 'ProjectManagementSystem'
    return (
        <div className="container">
          <NavBar logo={logo} />
          {this.props.children}
        </div>
    );
  }

}

export default App;
