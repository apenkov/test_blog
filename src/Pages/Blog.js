import React, { Component } from 'react';
import Posts from "../Components/Posts";
import { posts } from  "../data/posts";

export default class Blog extends  Component {
  render() {
    return (
      <div className={'posts'}>
        <Posts data={posts}/>
      </div>
    )
  }
}
