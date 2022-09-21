import React from "react";

import "./Header.scss";

import { NavigationDots } from "../../components";

const Header = () => {
  return (
    <header id="home">
      <div className="home">
        <NavigationDots active="home" />
        <div className="home__desc">
          <span>Hi, my name is</span>
          <h1>Cicero Teixeira.</h1>
          <h2>Software Engineer, Frontend Developer.</h2>
          <p className="p-text">
            I'm a software engineer specializing in building exceptional digital
            experiences. As a freelancer, I've done work for companies and
            private clients in Australia and overseas.{" "}
          </p>
          <a href="#contact">Say Hello</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
