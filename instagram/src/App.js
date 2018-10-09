import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/postcontainer'
import SearchBar from './components/SearchBar/seachbar';

class App extends Component {
  constructor(){
    super()
    this.state={
      userData: dummyData,
    };
  console.log(this.state);
  
  }

 
 
  render() {
    return (
      <div className="App">

      <SearchBar />
      <PostContainer userData={this.state.userData}/>
          
        
        
      </div>
    );
  }
}

export default App;
