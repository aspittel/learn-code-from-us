import React from "react"
import { Link } from "react-router-dom"
import "./Header.scss"

export default props => {
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
  )
}
