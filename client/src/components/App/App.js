import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./../Home/Home";
import Login from "./../Login/Login";
import Register from "./../Register/Register";
import services from "../../services";

export default function App() {
  const [initialized, setInitialized] = useState("");

  useEffect(() => {
    services.isInitialized().then(val => {
      setInitialized(val);
    });
  });

  return initialized !== false ? (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  ) : (
    <h2>Loading...</h2>
  );
}
