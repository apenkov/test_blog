import React, {Component} from 'react';
import {Route, BrowserRouter, Switch, Link} from "react-router-dom";
import Home from "../Pages/Home";
import Contacts from "../Pages/Contacts";
import Blog from "../Pages/Blog";

export default class Header extends Component {
  render() {
    return (
      <>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
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
          <Switch>
              <Route exact path={process.env.PUBLIC_URL +"/"} component={Home}/>
              <Route  path={process.env.PUBLIC_URL +"/contacts"} component={Contacts}/>
              <Route  path={process.env.PUBLIC_URL +"/blog"} component={Blog}/>
          </Switch>
        </BrowserRouter>
      </>
    )
  }
}
