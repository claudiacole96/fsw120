import React, {Component} from "react"

import './App.css';
import Hero from "./superHero"
import shdata from "./components/shdata.json"

class App extends React.Component {
    constructor () {
        super()
        this.state = {
            heroes: shdata
        }
    }
}
export default App;
