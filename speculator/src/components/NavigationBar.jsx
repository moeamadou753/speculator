import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import "../scss/NavigationBar.scss";
import { NavHashLink } from "react-router-hash-link";

function NavigationBar() {
  return (
    <aside className="navbar__container">
      <NavHashLink
        className="navbar__text-inactive h3"
        smooth
        to="/#about"
        activeClassName="navbar__text-active h3"
        isActive={isActive("#about")}
      >
        <div>about</div>
      </NavHashLink>
      <NavHashLink
        className="navbar__text-inactive h3"
        smooth
        to="/#getting-started"
        activeClassName="navbar__text-active h3"
        isActive={isActive("#gettingstarted")}
      >
        <div>getting started</div>
      </NavHashLink>
      <NavLink
        className="navbar__text-inactive h3"
        exact
        to="/securities"
        activeClassName="navbar__text-active h3"
      >
        <div>speculator securities</div>
      </NavLink>
    </aside>
  );
}

function isActive(hash) {
  return (match, location) => {
    // console.log(match, location);
    // console.log(window.location.hash);
    if (!match) {
      return false;
    }
    return hash == location.hash;
  };
}
export default NavigationBar;
