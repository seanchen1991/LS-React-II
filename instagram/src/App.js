import React, { Component } from 'react';
import './App.css';
import { dummyData } from './data/dummy-data'
import PostContainer from './components/PostContainer/PostContainer'
import SearchContainer from './components/SearchContainer/SearchContainer'

class App extends Component {
  constructor(){
    super();
    this.state = {
      searchText:'',
      data:[],
      newComment:''
    }
    this.saveData = this.saveData.bind(this)
  }
  componentDidMount(){
    let data = JSON.parse(localStorage.getItem('igData'))


    
     if(data){
       this.setState({'data':data})
     } 
     else 
     {
      this.setState({'data':dummyData})    
     }

 
  }
  saveData(){
    console.log('wtf is this', this)
    console.log('setting local storage',this.state.data)
    localStorage.setItem('igData',JSON.stringify(this.state.data))
  }

  handleSearchChange = event =>{
    this.setState({searchText:event.target.value})
  }
  handleSearchSubmit = event =>{
    event.preventDefault();
    this.setState({data:this.state.data.filter(element=>{
      if(element.username.includes(this.state.searchText))
      {
        return element
      }
    })},this.setState({searchText:''}))
  }

  addNewComment = (event) =>{
      event.preventDefault();
      let postId = event.target[0].id;
      let myDataObj = [...this.state.data];
      myDataObj[postId].comments.push(
        {username:'Frank-E-B',
         'text': event.target[0].value}
      )
      this.setState({data: myDataObj,newComment:''},this.saveData)
  }

  handleCommentChange = event =>{
    this.setState({newComment:event.target.value})
  }
  handleLikeClick = event =>{
      this.setState({likes: (this.state.likes+1)})
  }

  render() {
    return (
      <div className="app">
        <SearchContainer 
                        className='app-search-container' 
                        handleSearchSubmit={this.handleSearchSubmit}
                        handleSearchChange={this.handleSearchChange}
                        searchText={this.state.searchText}
        />
        <div className='app-post-container'>
        {
          this.state.data.map((element,index) => {
            console.log('element- ', element)
            return(
              <div>
                <PostContainer 
                              saveData={this.saveData} 
                              key={index} 
                              id={index} 
                              postId={index} 
                              data={element}
                              handleCommentChange = {this.handleCommentChange}
                              handleLikeClick = {this.handleLikeClick}
                              addNewComment = {this.addNewComment}
                              newComment = {this.state.newComment}

                />
                <div className='spacer'>&nbsp;</div>
              </div>
                )
          })
        }
      </div>
      </div>
    );
  }
}

export default App;
