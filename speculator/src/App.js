import React from "react";
import "./scss/main.scss";
import SplashContainer from "./components/base/SplashContainer";
import person from "./assets/person.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchBar from "./components/SearchBar.jsx";
import { Component } from "react";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <div className="main__container">
      <Router>
        <Switch>
          <Route path="/">
            <div className="App">
              <NavigationBar />
              <div className="region__intro">
                <div className="region__intro__text-container">
                  <div className="region__intro__heading h1">speculator</div>
                  <div className="region__intro__description h3">
                    demystify what moves the world.
                  </div>
                </div>
                <img src={person} className="region__intro__image" />
              </div>
              <div className="region__about">
                <img
                  src={require(`./assets/ABOUT_person-standing.svg`)}
                  className="region__about__image"
                />
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
    <div className="region__about">
      <div className="region__about__separator-left" />
      <div className="region__about__separator-right" />
      <div className="region__about__heading h1">about</div>
      <img src={require(`./assets/ABOUT_person-standing.svg`)} className="region__about__image" />
  </div>
    <div className="region__getting-started">

    </div>
  </div>);
}

export default App;
