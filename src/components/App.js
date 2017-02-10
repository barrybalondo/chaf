import React, { Component } from 'react';
import '../../style/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Welcome to CHAF</h2>
        {this.props.children}
      </div>
    );
  }
}

export default App;
