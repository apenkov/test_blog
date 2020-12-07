import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "../Pages/Home";
import Contacts from "../Pages/Contacts";
import Blog from "../Pages/Blog";

export default class Header extends Component {
  render() {
    return (
      <>
        <Router>
          <div className={'header'}>
            <div className={'innerHeader'}>
              <div className={'logoContainer'}>
                <h1>MY<span>BLOG</span></h1>
              </div>
              <ul className={'navigation'}>
                <a href={'/'}><li>Home</li></a>
                <a href={'/blog'}><li>Blog</li></a>
                <a href={'/contacts'}><li>Contacts</li></a>
              </ul>
            </div>
          </div>
            <Switch>
              <Route exact path={"/"} component={Home}/>
              <Route exact path={"/contacts"} component={Contacts}/>
              <Route exact path={"/blog"} component={Blog}/>
            </Switch>
        </Router>
      </>
    )
  }
}
