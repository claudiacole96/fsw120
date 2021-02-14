import React from "react"

function Calculator (props) {
  return (
     <div>
          <h1>{
          props.operator === "add" ? props.num1 + props.num2 : 
          props.operator === "sub" ? props.num1 - props.num2 :
          props.operator === "mul" ? props.num1 * props.num2 :
          props.operator === "div" ? props.num1 / props.num2 :
          ""}</h1>
    </div>
  )  
}
export default Calculator