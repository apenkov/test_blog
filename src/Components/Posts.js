import React, {Component} from 'react';
import Post from "./Post";

export default class Posts extends Component {
  render() {
    const posts = this.props.posts;
    const postsTemplate = posts.map((post, index)=>{
      return (
        <div key={index}>
         <Post post ={post}/>
        </div>
      )
    })
    return(
      <div>
        {postsTemplate}
      </div>
    )
  }
}
