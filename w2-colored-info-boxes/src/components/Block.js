import React from "react"

function Block(props){
    return (
        <div style={{backgroundColor: props.backgroundColor, padding: "10px", marginBottom: "10px"}}>
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
            <p>{props.info}</p>
        </div>
    )
}

export default Block