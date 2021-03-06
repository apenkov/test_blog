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
    const post = this.props.post;
    const anchor = this.props.anchor;
    return (
      <div className="post" id={anchor}>
        <p className="title">{post.title}
          <button href="#" className='linkToPost' onClick={() => {
            navigator.clipboard.writeText(`${window.location.href}#${anchor}`);
            }
          }>
            link
          </button>
        </p>
        <p className="preview" style={{visibility: this.state.visible ? 'hidden' : 'visible'}}>{post.littleText}</p>
        <button href="#" className={`post_readMore`} onClick={this.handleClick}
                style={{visibility: this.state.visible ? 'hidden' : 'visible'}}>Читать
        </button>
        <p className={`body`} style={{
          visibility: this.state.visible ? 'visible' : 'hidden',
          height: this.state.visible ? 'auto' : 0,
          transition: 'height 2s ease'
        }}
        dangerouslySetInnerHTML={{__html:post.text}}></p>
        <button className={`post_readLess`} onClick={this.handleClick}
                style={{visibility: this.state.visible ? 'visible' : 'hidden'}}>
          <a href={`#${anchor}`}>Скрыть</a>
        </button>
      </div>
    )
  }
}
