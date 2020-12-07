import React from 'react';
import renderer from 'react-test-renderer';
import Post from "../Post";

describe('post tests', () => {
  it('text tests', () => {
    const tree = renderer
      .create(<Post data={{title:'title',littleText:'little text', text:'big text'}}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
})
