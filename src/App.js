import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Components/Home";

export default function App() {
  return (
    <Switch>
      <Redirect exact from="/home" to="/home/about" />
      <Redirect exact from="/" to="/home/about" />
      <Route
        exact
        path="/home/:page?"
        render={(props) => <Home {...props} />}
      />
    </Switch>
  );
}
