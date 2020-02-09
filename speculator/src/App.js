import React from "react";
import "./scss/main.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Splash from "./components/Splash";
import Landing from "./components/Landing";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="main__container">
            <NavigationBar />
            <Splash />
          </div>
        </Route>
        <Route exact path="/securities">
          <div className="landing__container">
            <NavigationBar />
            <Landing />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
