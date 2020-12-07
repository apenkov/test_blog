import React from 'react';
import renderer from 'react-test-renderer';
import Post from "../Post";

describe('post tests', () => {
  it('first tests', () => {
    const post = renderer
      .create(<Post data={{title:'title',littleText:'little text', text:'big text'}}/>)
      .toJSON();
    expect(post).toMatchSnapshot();
  })
})
