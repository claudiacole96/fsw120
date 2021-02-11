import React from "react"
/* export let box = document.getElementById("box") */

function Die(props) {
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100px", width: "100px", border: "5px solid black"}}>
      <h1>{props.num}</h1>
    </div>
  )
}

export default Die;