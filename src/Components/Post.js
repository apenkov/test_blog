import React, {Component} from 'react';

export default class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      visible: !this.state.visible
    }))
  }

  render() {
    const data = this.props.data;
    return (
      <div className="post">
        <p className="title">{data.title}</p>
        <p className="preview">{data.littleText}</p>
        <button href="#" className={`post_readMore`} onClick={this.handleClick}
                style={{visibility: this.state.visible ? 'hidden' : 'visible'}}>Читать
        </button>
        <p className={`body`} style={{
          visibility: this.state.visible ? 'visible' : 'hidden',
          height: this.state.visible ? 'auto' : 0,
          transition: 'height 2s ease'
        }}
        dangerouslySetInnerHTML={{__html:data.text}}></p>
        <button href="#" className={`post_readLess`} onClick={this.handleClick}
                style={{visibility: this.state.visible ? 'visible' : 'hidden'}}>Скрыть
        </button>
      </div>
    )
  }
}