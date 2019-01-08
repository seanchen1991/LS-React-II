import React, { Component } from 'react';
import dummyData from './dummy-data.js';
// import SearchBar from './Components/SearchBar/SearchBar';
import Post from './Components/PostContainer/Post';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      searchedPosts: [],
      searchField: ''
    }
  }

  componentDidMount() {
    this.setState({ posts: dummyData})
  }

  handleSearchInput = (e) => {
    this.setState({ searchField: e.target.value })
  } 

  searchUser = (e) => {
    e.preventDefault();
    const { searchField, posts } = this.state;
    //I had to look this part up
    const searchedPosts = posts.filter(p => {
      if(p.username === searchField) {
        return p;
      }
    })
    this.setState({ 
      searchedPosts: searchedPosts,
      searchField: '' 
    })
  }

  render() {
    const { searchedPosts, posts } = this.state;
    return (
      <div className="App">
        <h1>Welcome to my Instagram Clone App</h1>
        <div> 
          {/*pass to your searchbar component*/}
          <form onSubmit={this.searchUser}>
            <input 
              type="text"
              placeholder="search for a user"
              value={this.state.searchField}
              onChange={this.handleSearchInput}
            />
          </form>
        </div>
        <div>
          {/*I had to look this part up*/}
          <Post posts={
            searchedPosts.length !== 0 
            ? searchedPosts
            : posts
            }
          />
        </div>
      </div>
    );
  }
}

export default App;

// <div className="card">
//   {posts.map((post, i) => {
//     return (
//       <div className="postItem" key={i}>
//         <Post postProp={posts} />
//         <Comments commentProp={posts} />
//       </div>
//     )
//   })}
// </div>


//searchbar component:
// <SearchBar
//   onChange={this.handleSearchInput}
//   searchUser={this.searchUser}
// />