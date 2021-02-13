import React from "react"
import './App.css';
import List from "./components/List"

class App extends React.Component {
  constructor(){
    super ()
    this.state = {
      name: "",
      list: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(e){
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick(e){
    e.preventDefault();
    let form = document.getElementById("form");
    form.reset();
    this.setState(prevState => ({
        list: [...prevState.list, this.state.name]
      })
    )
  }
 
  render(){
    const people = this.state.list.map(x => <List name={x}/>)
    return (
      <div>
        <form id="form">
          <input id="inputField" type="text" name="name" placeholder="Enter Name" onChange={this.handleChange}/>
          <button onClick={this.handleClick}>Submit Name</button>
          <h1>{this.state.name}</h1>
          {people}
        </form>
      </div>
    )
  } 
}

export default App;