import React from "react"
import {Link, Switch, Route} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Services from "./Services"

function Navbar () {
  return (
    <div>
      <div id = "links">
        <Link to = "/">Home</Link>
        <Link to = "/About">About</Link>
        <Link to = "/Services">Services</Link>
      </div>
        

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Services">
          <Services />
        </Route>
      </Switch>
    </div>
  )
}

export default Navbar