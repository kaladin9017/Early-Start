import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const {children} = this.props;
    console.log(children)
    return (
      <div className="App">
        <div className="logo">
          <img role="presentation" src="images/logo-mock copy.png" />
        </div>
        {children}
      </div>
    );
  }
}

export default App;
