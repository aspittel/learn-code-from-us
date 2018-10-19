import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from "./Header"
import Profiles from "./Profiles"
import About from "./About"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGhost, faBirthdayCake } from '@fortawesome/free-solid-svg-icons'

library.add(faGhost, faBirthdayCake)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Profiles} />
          <Route exact path="/about" component={About} />
        </div>
      </Router>
    )
  }
}

export default App
