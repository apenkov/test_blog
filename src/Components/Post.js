import React, {Component} from 'react';

export default class Post extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      visible: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState(state => ({
      visible: true
    }))
  }
  render() {
    const data = this.props.data;
    return(
      <div className="post">
        <p className="title">{data.title}</p>
        <p className="preview">{data.littleText}</p>
        <button href="#" className={`post_readMore`} onClick={this.handleClick} style={{visibility: this.state.visible ? 'hidden' : 'visible' }}>Читать</button>
        <p className={`body`} style={{visibility: this.state.visible ? 'visible' : 'hidden' }}>{data.text}</p>
      </div>
    )
  }
}
