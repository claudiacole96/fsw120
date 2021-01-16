import React from "react"

function seasonStyle(x) {
    let y = {backgroundColor: "white"}
    if (x.timeToGo === "Winter") {
        y = {backgroundColor: "blue"}
    } else if (x.timeToGo === "Spring") {
        y = {backgroundColor: "green"}
    } else if (x.timeToGo === "Summer") {
        y = {backgroundColor: "yellow"}
    } else if (x.timeToGo === "Fall") {
        y = {backgroundColor: "orange"}
    }
    y.borderRadius = "15px"
    y.marginBottom = "10px"
    return (y)
}

function Spot(props) {
    return (
        <div style={seasonStyle(props)}>
            <h1 style={{fontWeight: "bold", display: "inline-block", paddingLeft: "15px"}}>{props.place}</h1>
            <h2 style={{display: "inline-block", float: "right", paddingRight: "15px"}}>Price: ${props.price}</h2>
            <span style={{padding: "15px", fontSize: "25px"}}>(When to go? {props.timeToGo})</span>
            <a href="https://www.google.com" style={{display: "block", padding: "15px", fontSize: "20px", color: "purple"}}>Book Now!</a>
        </div>
    )
}

export default Spot