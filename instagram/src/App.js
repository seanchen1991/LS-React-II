import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer.js';

class App extends Component {
  state = { 
    people: [],
    comments: []
  }

  componentDidMount() {
    console.log("CDM Called: ", this.state.people);
    this.setState({ people: dummyData });
    
  }

  render() {
    console.log("Render app: ", this.state.people);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro"></p>
        <PostContainer people={this.state.people} username={this.state.people.username}  />
      </div>
    );
  }
}

export default App;