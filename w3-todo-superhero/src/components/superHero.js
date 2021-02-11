import React from "react"

function Hero(props) {
        return (
          <div style={{backgroundColor: "black", borderRadius: "14px", textAlign: "center", padding: "20px", margin: "7px", width: "29%", display: "inline-block", border: "5px solid yellow"}}>
            <img onClick={() => props.handleClick(props.catchPhrase)}src={props.imageName} style={{width: "200px", height: "200px", borderRadius: "50%"}}/>
            <h2 onClick={() => props.handleClick(props.catchPhrase)} style={{color: "white"}}>{props.name}</h2>
            <h5>From the show: {props.show}</h5>
          </div>
        )  
}

export default Hero;