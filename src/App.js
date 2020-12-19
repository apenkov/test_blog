import './App.css';
import React from "react";
import Header from "./Components/Header";
import {Route, Switch, withRouter} from "react-router-dom";
import Home from "./Pages/Home";
import Contacts from "./Pages/Contacts";
import Blog from "./Pages/Blog";

function App(props) {
  const { path } = props.match;
  return (
    <div>
      <Header/>
      <Switch location={props.location}>
        <Route  path={path +"/contacts"} component={Contacts}/>
        <Route  path={path +"/blog"} component={Blog}/>
        <Route exact path={path} component={Home}/>
      </Switch>
    </div>
  );
}

const AppRouter = ({ match }) => {
  return (
    <Switch>
      <Route  path={match.path + `${process.env.PUBLIC_URL.replace('/','')}`} component={App}/>
    </Switch>
  );
}

export default withRouter(AppRouter);
