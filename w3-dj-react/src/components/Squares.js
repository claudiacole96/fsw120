import React from "react"

function Squares (props) {
  return (
    <div id = "squares" style={{gridColumn: "2/3", display: "grid", gridTemplateColumns: "1fr 1fr"}}>
      <canvas id = "box1" style = {{gridColumn: "1/2", gridRow: "1/2", backgroundColor: props.squares[0], margin: "5px", width: "300px", height: "200px", border: "1px solid green"}}></canvas>

      <canvas id = "box2" style = {{gridColumn: "2/2", gridRow: "1/2", backgroundColor: props.squares[1], margin: "5px", width: "300px", height: "200px", border: "1px solid green"}}></canvas>

      <canvas id = "box3" style = {{gridColumn: "1/2", gridRow: "2/2", backgroundColor: props.squares[2], margin: "5px", width: "300px", height: "200px", border: "1px solid green"}}></canvas>

      <canvas id = "box4"style = {{gridColumn: "2/2", gridRow: "2/2", backgroundColor: props.squares[3], margin: "5px", width: "300px", height: "200px", border: "1px solid green"}}></canvas>
    </div>
  )
}

export default Squares