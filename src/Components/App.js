import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";
import SignUp from "./SignUp";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/login">
          <Login />Login
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/SignUp">
          <SignUp />
        </Route>
      </Switch>
    </div>
  );
}

export default App;