import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import App from './App.js';
//import Content from './components/Content.js'
import createBrowserHistory from 'history/createBrowserHistory';

export default class CreateRoutes extends React.Component {
  //to protect against any user being able to edit partner details
  URLChange(){ 
    //console.log("hi");
  }
  
  render(){
    const newHistory = createBrowserHistory();
    return(
      <Router history={newHistory}>
        <Switch>
          <Route exact path="/" component={App}  onEnter={this.URLChange()}/>
          <Route exact path="/home" component={App}/>
          <Route exact path="/home/:componentName" component = {App} />
        </Switch>
      </Router>
    );
  }
}