import React from "react";
import { Link } from "react-router-dom";
import person from "../assets/person.svg";
import NavigationBar from "./NavigationBar";

function Splash() {
  return (
    <div className="splash__container">
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
        <div className="region__about__separator-left" />
        <div className="region__about__separator-right" />
        <div className="region__about__heading h1">about</div>
        <div className="region__getting-started__card-purple">
          <div className="region__getting-started__card-purple__text body">
            we believe that financial literacy is the key to <b>freedom</b> in
            the modern world...
          </div>
        </div>
        <div className="region__getting-started__card-orange">
          <div className="region__getting-started__card-orange__text body">
            ... so we're making it <b> easier than ever </b> for the world to
            understand what makes it turn — money.
          </div>
          <img
            src={require(`../assets/About_Purple_Hijab.svg`)}
            className="region__about__purple-hijab"
          />
          <img
            src={require(`../assets/About_Orange_Hijab.svg`)}
            className="region__about__orange-hijab"
          />
        </div>
        <img
          src={require(`../assets/ABOUT_person-standing.svg`)}
          className="region__about__image"
        />
      </div>
      <div className="region__getting-started">
        <div className="region__getting-started__separator-left" />
        <div className="region__getting-started__separator-right" />
        <div className="region__getting-started__heading h1">
          getting started
        </div>
        <div className="region__getting-started__card">
          <div className="region__getting-started__card-heading h2">
            speculator securities
          </div>
          <div className="region__getting-started__card-description body-small">
            understand the in's and out's of your favourite company.
          </div>
          <Link to="/securities">
            <div className="region__getting-started__card-button h3-bold">
              get started
            </div>
          </Link>
          <img
            src={require(`../assets/Getting_Started_Graph.svg`)}
            className="region__getting-started__card-image"
          />
        </div>
        <div className="body-small footer__text">
          Made with ♥️ for UOttaHack3
        </div>
      </div>
    </div>
  );
}

export default Splash;
