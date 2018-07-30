import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data'; 
import SearchBar from './components/SearchBar/SearchBar.js'; 
import PostContainer from './components/PostContainer/PostContainer.js'; 
import CommentSection from './components/CommentSection/CommentSection.js'; 


class App extends Component {
  constructor(){
    super();
    this.state = {}
  }
  render() {
    dummyData.map((post, i) => console.log(post.comments.username))
    return (
      <div className="App">
        <header className="App-header">
        
        
        </header>
        {dummyData.map((post, i) => <div className = "post">
        <SearchBar  key={i}/> 
        <PostContainer key = {i} userName = {post.username} thumbNail={post.thumbnailUrl} image={post.imageUrl}
        likes = {post.likes}/> 
        <CommentSection comments = {post.comments} time = {post.timestamp}/> 
        </div>)}
        

        
      </div>
    );
  }
}

export default App;
