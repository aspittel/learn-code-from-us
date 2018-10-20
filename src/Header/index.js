import React from "react";
import Link from "../Link";
import "./Header.scss";

const Header = props => {
  return (
    <header>
      <h1>
        <a href="/">Learn Code from Us</a>
      </h1>
      <h4>
        People from underrepresented groups in tech who create awesome
        programming resources
      </h4>
      <Link to="/about" className="about-link">
        About this Site
      </Link>
    </header>
  );
};

export default Header;
