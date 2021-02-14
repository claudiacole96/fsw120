import React from "react"
import './App.css';
import Calculator from "./components/Calculator"

class App extends React.Component {
  constructor () {
    super()
    this.state = ({
      num1: "",
      num2: "",
      operator : ""
    })
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleClick(){
    let x = document.getElementById("select");
    this.setState ({
      operator : x.options[x.selectedIndex].id
    })
  }
  

  handleChange(e){
    this.setState({
      [e.target.name]: Number(e.target.value)
    })
  }

  calc = () => {
    return (<Calculator id="calc" num1={this.state.num1} num2={this.state.num2} operator={this.state.operator}/>)    
  }
  
  render (){

    return (
      <div id="container">      
        <h1 id="head">Simple React Calculator</h1>
        <div id="calcContainer">
          <div id="num1Block">
            <input 
              required={true} 
              placeholder="First Number"
              onChange = {this.handleChange}
              name = "num1"
              value = {this.state.num1}
              type="number"
              >
            </input>
          </div>

          <div id="btnBlock">
            <select id="select">
              <option id="add">+</option>
              <option id="sub">-</option>
              <option id="mul">x</option>
              <option id="div">/</option>
            </select>
          </div>
          
          <div id="num2Block">
            <input 
              required={true} 
              placeholder="Second Number"
              onChange = {this.handleChange}
              name = "num2" 
              value = {this.state.num2}    
              type="number"      
              >
            </input>
          </div>

          <div id="equal">
            <button onClick={this.handleClick}>=</button>
          </div>
        </div>
        
        {this.state.operator === "add" || this.state.operator === "sub" || this.state.operator === "mul" || this.state.operator === "div" ? 
        (this.calc()) : ""}
      </div>
    )      
  }
}

export default App;