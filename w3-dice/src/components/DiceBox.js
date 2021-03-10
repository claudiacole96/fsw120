import React from "react"
import Die from "./Die"

class DiceBox extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            num1: 0,
            num2: 0,
            num3: 0,
            num4: 0,
            num5: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => {
            if (prevState.count < 3) {
                return {
                    count: prevState.count + 1,
                    num1: Math.floor(Math.random() * 6) + 1,
                    num2: Math.floor(Math.random() * 6) + 1,
                    num3: Math.floor(Math.random() * 6) + 1,
                    num4: Math.floor(Math.random() * 6) + 1,
                    num5: Math.floor(Math.random() * 6) + 1,
                }
            } else {
                return {
                    count: 0,
                    num1: 0,
                    num2: 0,
                    num3: 0,
                    num4: 0,
                    num5: 0,
                }
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Roll the dice!</h1>
                <div id="diceBox">
                    <Die int={this.state.num1}/>
                    <Die int={this.state.num2}/>
                    <Die int={this.state.num3}/>
                    <Die int={this.state.num4}/>
                    <Die int={this.state.num5}/>
                </div>
                <div id="buttonBox">
                    <button onClick={this.handleClick}>ROLL</button>
                </div>
                
            </div>
        )
    }
}

export default DiceBox