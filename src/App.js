import React, { Component } from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import LcdScreen from "./containers/LcdScreen/LcdScreen";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/lcd/:id" render={props => <LcdScreen {...props} />} />
        <Route
          path="/"
          render={props => <Redirect to="/lcd/409" {...props} />}
        />
      </Switch>
    );
  }
}

export default withRouter(App);
