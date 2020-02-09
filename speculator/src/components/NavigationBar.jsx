import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import "../scss/NavigationBar.scss";

function NavigationBar() {
  return (
      <div className="navbar__container">
        <NavLink
          className="navbar__text-inactive h3"
          exact
          to="/#about"
          activeClassName="navbar__text-active h3"
          isActive={isActive("#about")}
        >
          <div>about</div>
        </NavLink>
        <NavLink
          className="navbar__text-inactive h3"
          exact
          strict
          to="/#gettingstarted"
          activeClassName="navbar__text-active h3"
          isActive={isActive("#gettingstarted")}
        >
          <div>getting started</div>
        </NavLink>
        <NavLink
          className="navbar__text-inactive h3"
          exact
          to="/securities"
          activeClassName="navbar__text-active h3"
        >
          <div>speculator securities</div>
        </NavLink>
      </div>
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
