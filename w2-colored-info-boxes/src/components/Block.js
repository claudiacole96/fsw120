import React from "react"

function Block(props){
    return (
        <div>
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
            <p>{props.info}</p>
        </div>
    )
}