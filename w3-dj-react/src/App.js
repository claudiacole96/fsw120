import Squares from "./components/Squares"
import React from "react"
import UIfx from 'uifx'
import belch from "./sounds/101182__plingativator__wetbelch4.wav"
import wetBurp from "./sounds/167139__dspena__burp.mp3"
import bit from "./sounds/213149__complex-waveform__8bit-style-bonus-effect.wav"
import slide from "./sounds/32090__jbum__jsyd-mario-slide.wav"
import tickles from "./sounds/457050__robobold__tickles.wav"
import xfx from "./sounds/222571__coby12388__minijump.wav"
import toot from "./sounds/523467__tv-ling__perfect-fart.mp3"
import crash from "./sounds/13827__adcbicycle__18.wav"
import "./App.css"

const burp = new UIfx(
  belch,{
    volume: 1.0,
    throttleMs: 100
  }
)
const burp2 = new UIfx(
  wetBurp,{
    volume: 1.0,
    throttleMs: 100
    }
)

const eightBit = new UIfx(
  bit,{
    volume: 1.0,
    throttleMs: 100
    }
)

const marioSlide = new UIfx(
  slide,{
    volume: 1.0,
    throttleMs: 100
    }
)

const tickle = new UIfx(
  tickles,{
    volume: 1.0,
    throttleMs: 100
    }
)

const jump = new UIfx(
  xfx,{
    volume: 1.0,
    throttleMs: 100
    }
)

const fart = new UIfx(
  toot,{
    volume: 1.0,
    throttleMs: 100
    }
)

const fx = new UIfx(
  crash,{
    volume: 1.0,
    throttleMs: 100
    }
)

class App extends React.Component {
    constructor() {
      super()
      this.state = {squares: ["white", "white", "white", "white"]}
      this.Step1 = this.Step1.bind(this)
      this.Step2 = this.Step2.bind(this)
      this.Step3 = this.Step3.bind(this)      
      this.Step4 = this.Step4.bind(this)
      this.Step5 = this.Step5.bind(this)
      this.Step6 = this.Step6.bind(this)
      this.Step7 = this.Step7.bind(this)
      this.Step8 = this.Step8.bind(this)
    }

    Step1(){
      this.state.squares.map(block => {
        if (block === "white"){
          burp.play()
          return (  
            this.setState(prevState => { console.log("testing")
              return ({squares: ["black","black","black","black"]})
            }
      )
      )} else {
        burp.play()
        return (  
          this.setState(prevState => { 
            return ({squares: ["white", "white", "white", "white"]})
          }
        ))
        }
      })
    }

    Step2(){ console.log("step 2")
      this.setState(prevState => {
        burp2.play()
        return ({squares: ["purple", "purple", prevState.squares[2], prevState.squares[3]]})
      })}
    
    Step3(){ console.log("step 3")
      eightBit.play()
      this.setState(prevState => {
        return ({squares: [prevState.squares[0], prevState.squares[1], "blue", prevState.squares[3]]})
      })}

    Step4(){ console.log("step 4")
      marioSlide.play()
      this.setState(prevState => {
        return ({squares: [prevState.squares[0], prevState.squares[1], prevState.squares[2], "blue"]})
      })}

    Step5(){ console.log("step 4")
      tickle.play()
      this.setState(prevState => {
        return ({squares: ["red", prevState.squares[1], prevState.squares[2], prevState.squares[3]]})
      })}

    Step6(){ console.log("step 4")
      jump.play()  
      this.setState(prevState => {
        return ({squares: [prevState.squares[0], "orange", prevState.squares[2], prevState.squares[3]]})
      })}

    Step7(){ console.log("step 4")
      fart.play()
      this.setState(prevState => {
        return ({squares: [prevState.squares[0], prevState.squares[1], "pink", prevState.squares[3]]})
      })}

    Step8(){ console.log("step 4")
      fx.play()
      this.setState(prevState => {
        return ({squares: [prevState.squares[0], prevState.squares[1], prevState.squares[2], "yellow"]})
      })}
    
    render (){
      return (
        <div className="App" style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr"}}>
          <h1 style={{gridColumn: "2/3", gridRow: "1/1", textAlign: "center"}}>SuperStar React DJ</h1>
          <Squares style={{gridRow: "2/2"}} squares={this.state.squares}/>
          <button onClick={this.Step1}id="but1" style={{gridColumn: "2/3", gridRow: "3/3"}}>STEP 1</button>
          <button onClick={this.Step2}id="but1" style={{gridColumn: "2/3", gridRow: "4/4"}}>STEP 2</button>
          <button onClick={this.Step3}id="but1" style={{gridColumn: "2/3", gridRow: "5/5"}}>STEP 3</button>
          <button onClick={this.Step4}id="but1" style={{gridColumn: "2/3", gridRow: "6/6"}}>STEP 4</button>
          <button onClick={this.Step5}id="but1" style={{gridColumn: "2/3", gridRow: "7/7"}}>STEP 5</button>
          <button onClick={this.Step6}id="but1" style={{gridColumn: "2/3", gridRow: "8/8"}}>STEP 6</button>
          <button onClick={this.Step7}id="but1" style={{gridColumn: "2/3", gridRow: "9/9"}}>STEP 7</button>
          <button onClick={this.Step8}id="but1" style={{gridColumn: "2/3", gridRow: "10/10"}}>STEP 8</button>
          <input style={{gridColumn: "2/3", gridrow: "11/11"}}type="select"></input>
        </div>
      )
  }
}

export default App;