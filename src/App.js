import React, { Component } from "react";
import axios from 'axios';
import Post from './Post';
import PostForm from './postForm';

import "./App.css";
import PostContainer from "./PostContainer";

class App extends Component {
constructor (props){
  super(props)
  this.state = {
    posts: []
  }
}

componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/posts/')
  .then(res =>{
    console.log(res.data)
    this.setState({posts: res.data})
  })
  .catch(err =>{console.log(err)})
}

sendPost = (data) =>{
  // console.log(data)
  axios.post('https://jsonplaceholder.typicode.com/posts/', data)
  .then(res =>{
    this.setState({
      posts: [res.data, ...this.state.posts]

    })
  })
  .catch(err =>{
    console.log(err)
  })
}



  render() {
    return (
      <div className="App">
        <h1>Posts</h1>
        <PostForm sendDate = {this.sendPost}/>
       
         <PostContainer allPosts = {this.state.posts}/>
       
       </div>
     
    );
  }
  Ï;
}

export default App;
