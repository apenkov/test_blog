import React from 'react';
import renderer from 'react-test-renderer';
import Posts from "../Posts";

describe('posts tests', () => {
  it('render posts', () => {
    const posts = renderer
      .create(<Posts data={[
        {
        title:'first post',
        littleText:'little text',
        text:'big text'
      },{
          title:'second post',
          littleText:'little text',
          text:'big text'
        }
      ]}/>)
      .toJSON();
    expect(posts).toMatchSnapshot();
  })
})
