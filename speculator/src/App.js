import React from 'react';
import './scss/main.scss';
import SplashContainer from "./components/base/SplashContainer";
import person from "./assets/person.svg";
import {Router, Route, Switch} from "react-router-dom";
import SearchBar from './components/SearchBar.jsx';

function App() {
  return (<div className="main__container">
    <div className="region__intro">
      <div className="region__intro__text-container">
        <div className="region__intro__heading h1">speculator</div>
        <div className="region__intro__description h3">demystify what moves the world.</div>
      </div>
      <img src={person} className="region__intro__image"/>
    </div>
    <div className="region__about">
      <img src={require(`./assets/ABOUT_person-standing.svg`)} className="region__about__image" />
  </div>
  </div>);
}

export default App;
