import React, {Component} from 'react';
import Post from "./Post";

export default class Posts extends Component {
  render() {
    const data = this.props.data;
    const postsTemplate = data.map((item, index)=>{
      return (
        <div key={index}>
         <Post data ={item}/>
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
