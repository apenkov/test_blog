import React, {Component} from 'react';
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <>
          <div className={'header'}>
            <div className={'innerHeader'}>
              <div className={'logoContainer'}>
                <h1>MY<span>BLOG</span></h1>
              </div>
              <ul className={'navigation'}>
                <Link to={process.env.PUBLIC_URL + '/'}><li>Home</li></Link>
                <Link to={process.env.PUBLIC_URL +'/blog'}><li>Blog</li></Link>
                <Link to={process.env.PUBLIC_URL +'/contacts'}><li>Contacts</li></Link>
              </ul>
            </div>
          </div>

        </>
    )
  }
}
