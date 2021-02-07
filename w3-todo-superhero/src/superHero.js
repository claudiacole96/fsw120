import React from "react"

function Hero(props) {
    return (
        <div>
            <img src={props.imageName}/>
            <h2>{props.name}</h2>
            <h5>{props.show}</h5>
        </div>
    )
}

export default Hero