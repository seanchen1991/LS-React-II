import React, { Component } from 'react';
import './App.css';

import CommentSection from './components/CommentSection/commentsection'
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/postcontainer'
import SearchBar from './components/SearchBar/searchbar'


class App extends Component {
  constructor(props) {
    super(props);
    this.state ={ dummyData:[] };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ dummyData: dummyData });
    }, 800);
  }

  searchFunction() {

  }

  addComment() {

  }

  handleInputChange = event => this.setState({ [event.target.name]: event.target.value });

  render() {
    console.log(this.state);
    if (!this.state.dummyData.length) {
      return <h4>Loading Posts...</h4>;
    }    return (
      <div className="App">
        <div className='top-header'>
          <SearchBar />
        </div> 
        {this.state.dummyData.map((items, i) => 
          <div className='posty' key = {i}>
            <PostContainer content= {items} />
            <CommentSection 
              handleCommentChange = {this.handleCommentChange} 
              addComment = {this.addComment}
              content= {items} 
              />
          </div>
          )}
      </div>
    );

  }
}

export default App;
