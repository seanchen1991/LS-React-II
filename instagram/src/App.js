import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import SearchBar from './components/CommentSection/CommentSectionContainer';
import PostContainer from './components/PostContainer/PostContainer';
import Authenticate from './Authentication/Authenticate';


class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData
    };
  }



  render() {
    return (
      <div className="App">
        <Authenticate />
        <PostContainer dumData={this.state.dummyData} />
      </div>
    );
  }
}

export default App;
