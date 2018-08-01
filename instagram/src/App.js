import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar.js'
import PostContainer from './components/PostContainer/PostContainer.js'
import Authenticate from './components/Authentication/Authenticate.js'

const App = Authenticate(


  class App extends Component {
    constructor() {
      super()
      this.state = {
        data: []
      }
    }

    componentDidMount() {
      this.setState({ data: dummyData });
    }
    render() {
      return (
        <div className="App">
          <header>
            <SearchBar />
          </header>
          <PostContainer data = { this.state.data}/>
        </div>

      );
    }
  }
)
//dummyData.map(post => <post )


export default App;
